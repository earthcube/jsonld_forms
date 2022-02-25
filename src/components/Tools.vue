<template>
  <div>

  <json-forms
      :data="data"
      :schema="schema"
      :uischema="uischema"
      :renderers="renderers"
      @change="onChange"
      :validationMode="currentValidationMode"
  />
      <v-spacer></v-spacer>
      <v-divider></v-divider>
      <JsonViewer :json="data">
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
const data = require('../assets/tools/ecrrempty.json');

import {entry as AltGroupRenderer} from './AdditionalDetailsRenderer'
import {entry as HtmlLabelRender } from './htmlLabelRenderer'
import {default as JsonViewer} from './viewJson'

const renderers = [
  ...vuetifyRenderers,

  // here you can add custom renderers
  AltGroupRenderer,
  HtmlLabelRender
];

const tool = defineComponent({
  name: 'tools',
  components: {
    JsonForms,
    JsonViewer
  },
  beforeCreate() {
    // schemaWithEnum().then(s =>
    //      {
    //     //   console.log(s)
    //        this.schema = s
    //      }
    //  )
    this.schema = schemaWithEnum()
  },
  data() {
    return {
      //renderers: Object.freeze(renderers),
      renderers,
      data,
      schema,
      uischema,
      currentValidationMode: "ValidateAndHide", // ValidateAndShow, ValidateAndHide, NoValidation
    };
  },
  methods: {
    onChange(event) {
      this.data = event.data;
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

