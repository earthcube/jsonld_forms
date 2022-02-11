<template>
  <div>
  <json-forms
      :data="data"
      :schema="schema"
      :uischema="uischema"
      :renderers="renderers"
      @change="onChange"
  />
<v-expansion-panels>
  <v-expansion-panel>
    <v-expansion-panel-header>JSON</v-expansion-panel-header>
    <v-expansion-panel-content>
    <vue-json-pretty :path="'res'" :data="data" @click="handleClick"> </vue-json-pretty>
    </v-expansion-panel-content>
  </v-expansion-panel>
</v-expansion-panels>
  </div>
</template>

<script>
import { JsonForms } from '@jsonforms/vue2';
import { vuetifyRenderers } from '@jsonforms/vue2-vuetify';
import {defineComponent} from "@vue/composition-api";
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

const schema= require('../assets/tools/ecrr_jsonschema_1_0.json');
const uischema = require('../assets/tools/ecrr_1_0_uischema.json');
const data = require('../assets/tools/ecrr_initialdata.json');

import {entry as AltGroupRenderer} from './AdditionalDetailsRenderer'

const renderers = [
  ...vuetifyRenderers,

  // here you can add custom renderers
  AltGroupRenderer
];

const tool = defineComponent({
  name: 'tools',
  components: {
    JsonForms,
    VueJsonPretty
  },
  data() {
    return {
      //renderers: Object.freeze(renderers),
      renderers,
      data,
      schema,
      uischema,
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

