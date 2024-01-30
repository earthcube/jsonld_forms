<template>
  <div>

  <json-forms
      :data="jsonldObj"
      :schema="schema"
      :uischema="uischemaNoProxy"
      :renderers="renderers"
      @change="onChange"
      :validationMode="currentValidationMode"
      :ajv="ajv"
  />
      <v-spacer></v-spacer>
      <v-divider></v-divider>

    <v-footer class="json_footer">
      <div>
        <JsonViewer :json="jsonldObj" name="form JSON"></JsonViewer>
      </div>
      <div>
         <JsonViewer :json="unflattenLocal(jsonldObj)" name="JSON-LD"></JsonViewer>
      </div>

      <save-files :json="jsonldObj" :originalName="filename"></save-files>
    </v-footer>

  </div>
</template>

<script>
import { JsonForms } from '@jsonforms/vue';
import { vuetifyRenderers } from '@jsonforms/vue-vuetify';
import {defineComponent, toRaw} from "vue";
//import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import {merge } from 'lodash'

import {default as saveFiles} from '@/components/controls/saveJson.vue'
import { default as schema, schemaWithEnum , flattenList} from '@/schema/tools/ecrr_jsonschema_1_1' ;
//import { default as schema, schemaWithEnum , flattenList} from '@/schema/tools/ecrr_jsonschema_1_2' ;
import uischema from '@/schema/tools/ecrr_1_1_uischema';
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
import baseJsonLdObj  from '@/assets/basefiles/tools/ecrrempty.json?raw'

import {entry as AltGroupRenderer} from '@/components/controls/AdditionalDetailsRenderer.vue'
import {entry as HtmlLabelRender } from '@/components/controls/htmlLabelRenderer.vue'
import {entry as ArrayOfStringRenderer} from '@/components/controls/ArrayOfStringRenderer.vue'
import {entry as ArrayControlStringRenderer} from '@/components/controls/ArrayControlStringRenderer.vue'
import {entry as ArrayLayoutRenderer} from '@/components/controls/ArrayLayoutRenderer.vue'
import {entry as EnumArrayObjectRenderer } from '@/components/controls/EnumArrayObjectRenderer.vue'
import {entry as EcFunctionsRenderer} from '@/components/controls/EcFunctionSubfunctionRenderer.vue'
import {default as JsonViewer} from '@/components/viewJson.vue'

import {createAjv} from "@jsonforms/core";
import {flatten, unflatten} from "@/js/jsonldutils"
import {
  getFroms3,
  saveToUser} from '@/js/s3store'
import { saveAs } from 'file-saver';




const renderers = [
  ...vuetifyRenderers,

  // here you can add custom renderers
  AltGroupRenderer,
  HtmlLabelRender,
  ArrayOfStringRenderer,
  ArrayControlStringRenderer,
  ArrayLayoutRenderer,
  EnumArrayObjectRenderer,
  EcFunctionsRenderer

];

export default defineComponent({
  name: 'ecrrTool',
  components: {
    JsonForms,
    JsonViewer,
    saveFiles
  },

  props:{
    jsonldfile: {type: String },
    s3file: {type:String}
  },
  data() {
// Make AJV NON REACTIVE: https://github.com/eclipsesource/jsonforms/issues/1832
    this.ajv = createAjv({useDefaults: true}) // use default values per:https://github.com/eclipsesource/jsonforms/issues/1193'

    return {
      //renderers: Object.freeze(renderers),
      renderers: Object.freeze(renderers),
      jsonldObj: {},
      schema,
      uischema,
      currentValidationMode: "ValidateAndHide", // ValidateAndShow, ValidateAndHide, NoValidation

     // ajv: createAjv({useDefaults: true}), // use default values per:https://github.com/eclipsesource/jsonforms/issues/1193'
      s3Credentials: {
        username: import.meta.env.VITE_accessKey,
        password: import.meta.env.VITE_secretKey,
        endpoint: import.meta.env.VITE_endPoint,
        port: parseInt(import.meta.env.VITE_port),
        useSsl: Boolean(import.meta.env.VITE_useSSL)
      },
      BUCKET: import.meta.env.VITE_BUCKET,
      filename:"tool.jsonld"
    };
  },
  beforeCreate() {
    // schemaWithEnum().then(s =>{
    //       console.log(s)
    //       this.schema = s
    //      })
    this.schema = schemaWithEnum()
    this.jsonldObj = JSON.parse(baseJsonLdObj)

  },
  created() {
    if (this.jsonldfile){

      //let exampleData = require('@/assets/examples/' +  this.jsonldfile);
      const exampleDataUrl = `/examples/${this.jsonldfile}`
     // const exampleDataUrl = new URL(`./${this.jsonldfile}`, import.meta.url).href
      fetch(exampleDataUrl ).then(  async response => {
        this.filename = this.jsonldfile.substring(this.jsonldfile.lastIndexOf('/') + 1)
        let exampleData = await response.json()
        exampleData = flatten(exampleData, flattenList)
        this.jsonldObj = merge({}, this.jsonldObj, exampleData)
        console.info(`assigned value to jsonldboj ${JSON.stringify(this.jsonldObj)}`)
      }).catch((err) => {console.error(`issue accessing ${exampleDataUrl} ${err}`)})
      // fails
      //import exampleData  from `@/assets/tools/argovis-Notebook.jsonld.json?raw`

    }
     if (this.s3file){
       this.filename = this.s3file.substring(this.s3file.lastIndexOf('/')+1)
       this.getUsers3()
     }
// @ts-ignore
     console.log(import.meta.env.VITE_BUCKET)
    // this.$on('loadfile', async  function (filepath) {
    //   this.jsonldObj =  await getFroms3( filepath, this.BUCKET, this.s3Credentials)
    // })
  },
  computed:{
    uischemaNoProxy(){
      if (this.uischema){
        return toRaw((this.uischema))
      }

    }

  },
  methods: {
    async getUsers3(){
      let exampleData = await getFroms3(this.s3file, this.BUCKET, this.s3Credentials)
      exampleData = flatten(exampleData, flattenList)
      this.jsonldObj = merge({}, this.jsonldObj, exampleData)
    },
    async getJsonLDFromPublic3(){
      let exampleData = await getFroms3(this.s3file, this.BUCKET, this.s3Credentials)
      exampleData = flatten(exampleData, flattenList)
      this.jsonldObj = merge({}, this.jsonldObj, exampleData)
    },
    onChange(event) {
      this.jsonldObj = event.data;
    },
    unflattenLocal(json) {
      return unflatten(json,flattenList)
    },
    saveItem (json){
      let jsonstring = JSON.stringify(json)
      let itemMetadata = {
        status: 'draft',
         playground: true
      }
      saveToUser(jsonstring,this.filename,itemMetadata, 'resourceregistry',
          // process.env.VUE_APP_BUCKET,
          // process.env.VUE_APP_accessKey,
          // process.env.VUE_APP_secretKey,
          // process.env.VUE_APP_endPoint,
          // process.env.VUE_APP_port,
          // process.env.VUE_APP_useSSL
          this.BUCKET,this.s3Credentials
          //'forms', 'user1', 'thisisuser1', 'oss.geocodes.earthcube.org', 443, true
      )
    },
    async saveJsonLD(json){
      //var blob = new Blob([...JSON.stringify(json)], {type: "text/plain;charset=utf-8"});
      let  jsonstring = JSON.stringify(json)
        let res = await this.$dialog.prompt({
          text: "FileName",
          title: "Title",
          persistent: this.persistent
        });
        if (res) {
          this.filename = res
           var file = new File([jsonstring], this.filename, {type: "text/plain;charset=utf-8"});
          saveAs(file);
      }

    },
    // async filename() {
    //   let res = await this.$dialog.prompt({
    //     text: "FileName",
    //     title: "Title",
    //     persistent: this.persistent
    //   });
    //   if (res) {
    //     this.filename = res
    //   }
    // },
  },
});

</script>

<style >
@import '@jsonforms/vue-vuetify/lib/jsonforms-vue-vuetify.esm.css';
</style>
<style scoped>

.json_footer {
    display: flex;
    align-items: center;

    margin-top: 3rem;
    padding: 1rem;

    background: none !important;
}

.icon {
  order: 0;
}

.header {
  order: 1;
}
.v-label {
  color:black;
}
</style>

