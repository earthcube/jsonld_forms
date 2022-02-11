<template>
  <json-forms
      :data="data"
      :schema="schema"
      :uischema="uischema"
      :renderers="renderers"
      @change="onChange"
  />
</template>

<script>
import { JsonForms } from '@jsonforms/vue2';
import { vuetifyRenderers } from '@jsonforms/vue2-vuetify';
import {defineComponent} from "@vue/composition-api";
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

