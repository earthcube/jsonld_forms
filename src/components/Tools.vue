<template>
  <div>
    <v-sheet
        color="white"
        elevation="1"
        height="600"
        outlined
        rounded
        shaped
        width="80%"
    >
  <json-forms
      :data="data"
      :schema="schema"
      :uischema="uischema"
      :renderers="renderers"
      @change="onChange"
  />
    </v-sheet>
<v-footer max-height="20em">
  <v-col>
    <vue-json-pretty :path="'res'" :data="data" @click="handleClick"> </vue-json-pretty>
  </v-col>
</v-footer>
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

