<template>
  <div>

  <json-forms
      :data="jsonldObj"
      :schema="schema"
      :uischema="uischema"
      :renderers="renderers"
      @change="onChange"
      :validationMode="currentValidationMode"
  />
      <v-spacer></v-spacer>
      <v-divider></v-divider>
      <JsonViewer :json="jsonldObj">
      </JsonViewer>


  </div>
</template>

<script>
import { JsonForms } from '@jsonforms/vue2';
import { vuetifyRenderers } from '@jsonforms/vue2-vuetify';
import {defineComponent} from "@vue/composition-api";
//import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

import { default as schema, schemaWithEnum } from '../schema/tools/ecrr_jsonschema_1_0' ;

import uischema from '../schema/tools/ecrr_1_0_uischema';
const baseJsonLdObj = require('../assets/basefiles/tools/ecrrempty.json');

import {entry as AltGroupRenderer} from './AdditionalDetailsRenderer'
import {entry as HtmlLabelRender } from './htmlLabelRenderer'
//import {entry as ArrayDescRender} from './ArrayWDescription'
//import {arrayOverride} from '../arrayOverride'

import {default as JsonViewer} from './viewJson'

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
    jsonldfile: {type: String }
  },
  data() {
    return {
      //renderers: Object.freeze(renderers),
      renderers,
      jsonldObj:baseJsonLdObj,
      schema,
      uischema,
      currentValidationMode: "ValidateAndHide", // ValidateAndShow, ValidateAndHide, NoValidation
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

      let exampleDate = require('../assets/examples/' + this.jsonldfile);
      this.jsonldObj = Object.assign({}, this.jsonldObj, exampleDate)
    }
  },
  methods: {
    onChange(event) {
      this.jsonldObj = event.data;
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

