<template>
  <div>

  <json-forms
      :data="jsonldObj"
      :schema="schema"
      :uischema="uischema"
      :renderers="renderers"
      @change="onChange"
      :validationMode="currentValidationMode"
      :ajv="ajv"
  />
      <v-spacer></v-spacer>
      <v-divider></v-divider>
    <v-footer class="d-flex">
      <span> <JsonViewer :json="jsonldObj" name="form JSON">
      </JsonViewer>
      </span>
      <span>
         <JsonViewer :json="unflattenLocal(jsonldObj)" name="JSON-LD">
      </JsonViewer>

      </span>
      <v-btn color="blue"
             dark
             @click="saveJsonLD(jsonldObj)">Download JSONLD</v-btn>
      <v-btn color="blue"
             dark
             @click="saveItem(unflattenLocal(jsonldObj))">Save JSONLD to S3</v-btn>

    </v-footer>

  </div>
</template>

<script>
import { JsonForms } from '@jsonforms/vue2';
import { vuetifyRenderers } from '@jsonforms/vue2-vuetify';
import {defineComponent} from "@vue/composition-api";
//import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';



import { default as schema, schemaWithEnum , flattenList} from '../schema/tools/ecrr_jsonschema_1_0' ;

import uischema from '../schema/tools/ecrr_1_0_uischema';
const baseJsonLdObj = require('../assets/basefiles/tools/ecrrempty.json');

import {entry as AltGroupRenderer} from './AdditionalDetailsRenderer'
import {entry as HtmlLabelRender } from './htmlLabelRenderer'
//import {entry as ArrayDescRender} from './ArrayWDescription'
//import {arrayOverride} from '../arrayOverride'

import {default as JsonViewer} from './viewJson'
import {createAjv} from "@jsonforms/core";
import {flatten, unflatten} from "../js/jsonldutils"
import {
  getFroms3,
  saveToUser} from '../js/s3store'
import { saveAs } from 'file-saver';




const renderers = [
  ...vuetifyRenderers,

  // here you can add custom renderers
  AltGroupRenderer,
  HtmlLabelRender,
 // ArrayDescRender,
 // arrayOverride
];

const tool = defineComponent({
  name: 'tools',
  components: {
    JsonForms,
    JsonViewer
  },

  props:{
    jsonldfile: {type: String },
    s3file: {type:String}
  },
  data() {
    return {
      //renderers: Object.freeze(renderers),
      renderers,
      jsonldObj:baseJsonLdObj,
      schema,
      uischema,
      currentValidationMode: "ValidateAndHide", // ValidateAndShow, ValidateAndHide, NoValidation

      ajv: createAjv({useDefaults: true}), // use default values per:https://github.com/eclipsesource/jsonforms/issues/1193'
      s3Credentials: {
        username: process.env.VUE_APP_accessKey,
        password: process.env.VUE_APP_secretKey,
        endpoint: process.env.VUE_APP_endPoint,
        port: parseInt(process.env.VUE_APP_port),
        useSsl: Boolean(process.env.VUE_APP_useSSL)
      },
      BUCKET: process.env.VUE_APP_BUCKET,
      filename:"tool.jsonld"
    };
  },
  beforeCreate() {
    // schemaWithEnum().then(s =>{
    //       console.log(s)
    //       this.schema = s
    //      })
    this.schema = schemaWithEnum()
    this.jsonldObj = baseJsonLdObj

  },
     created() {
    if (this.jsonldfile){

      let exampleData = require('../assets/examples/' +  this.jsonldfile);
      exampleData = flatten(exampleData, flattenList)
      this.jsonldObj = Object.assign({}, this.jsonldObj, exampleData)
    }
     if (this.s3file){
       this.getUsers3()
     }
     console.log(process.env.VUE_APP_BUCKET)
    // this.$on('loadfile', async  function (filepath) {
    //   this.jsonldObj =  await getFroms3( filepath, this.BUCKET, this.s3Credentials)
    // })
  },
  computed:{
    async getUsers3(){
      let exampleData = await getFroms3(this.s3file, this.BUCKET, this.s3Credentials)
      exampleData = flatten(exampleData, flattenList)
      this.jsonldObj = Object.assign({}, this.jsonldObj, exampleData)
    }
  },
  methods: {

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
    saveJsonLD(json){
      //var blob = new Blob([...JSON.stringify(json)], {type: "text/plain;charset=utf-8"});
      let  jsonstring = JSON.stringify(json)
      var file = new File([jsonstring], this.filename, {type: "text/plain;charset=utf-8"});

      saveAs(file);
    },

  },
});
export default tool
</script>

<style>
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

