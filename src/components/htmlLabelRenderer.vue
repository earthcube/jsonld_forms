<template>
  <v-label
      v-if="layout.visible"
      :class="styles.label.root"
      v-bind="vuetifyProps('v-label')"

  >
   <span v-html="this.layout.uischema.text"></span>
  </v-label>
</template>

<script lang="ts">
import {
  JsonFormsRendererRegistryEntry,
  Layout,
  rankWith,
  uiTypeIs,
 // LabelElement,
} from '@jsonforms/core';
import { defineComponent } from '@vue/composition-api';
import {
  DispatchRenderer,
  rendererProps,
  useJsonFormsLayout,
  RendererProps,
} from '@jsonforms/vue2';
import { useVuetifyLayout, useTranslator } from '@jsonforms/vue2-vuetify';
import { VLabel } from 'vuetify/lib';

const htmlLabelRenderer = defineComponent({
  name: 'html-label-renderer',
  components: {
    DispatchRenderer,
    VLabel,
  },
  props: {
    ...rendererProps<Layout>(),
  },
  setup(props: RendererProps<Layout>) {
    const t = useTranslator();
    const layout = useVuetifyLayout(useJsonFormsLayout(props));
    return { ...layout, t };
  },
  computed: {
    // translatedLabel(): string | undefined {
    //   if (this.layout.uischema.options?.i18n) {
    //     return this.t(
    //         this.layout.uischema.options.i18n,
    //         (<LabelElement>this.layout.uischema).text
    //     );
    //   }
    //   return this.t(
    //       (<LabelElement>this.layout.uischema).text,
    //       (<LabelElement>this.layout.uischema).text
    //   );
    // },
  },
});

export default htmlLabelRenderer;

export let entry: JsonFormsRendererRegistryEntry;
entry = {
  "tester": rankWith(4, uiTypeIs('Label')),
  renderer: htmlLabelRenderer,
};

</script>

<style scoped>
.highlight {
  color:peru;
}
</style>
