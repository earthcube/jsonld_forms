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
      :validationMode="currentValidationMode"
  />
      <v-spacer></v-spacer>
      <v-divider></v-divider>
      <v-col cols="10">
        <v-expansion-panels max-height="20em" >
          <v-expansion-panel>
            <v-expansion-panel-header>
              <template v-slot:actions>
                <v-icon color="primary">
                  $expand
                </v-icon>
              </template>
              <span>JSON</span>

            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <vue-json-pretty :path="'res'" :data="data" @click="handleClick"> </vue-json-pretty>
            </v-expansion-panel-content>

          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

    </v-sheet>
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
const data = require('../assets/tools/ecrrempty.json');

import {entry as AltGroupRenderer} from './AdditionalDetailsRenderer'
import {entry as HtmlLabelRender } from './htmlLabelRenderer'

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
    VueJsonPretty
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
</style>

