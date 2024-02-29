<template>
  <div>
    <v-label
      v-if="label.visible"
      :class="styles.label.root"
      v-bind="vuetifyProps('v-label')"
    >
      <!--      <span v-html="translatedLabel"></span>-->
      <span v-html="label.text" />
    </v-label>
    <v-label v-if="label.visible && uischema.description">
      <div v-html="uischema.description" />
    </v-label>
  </div>
</template>

<script lang="ts">
import {
  JsonFormsRendererRegistryEntry,
  rankWith,
  uiTypeIs,
  LabelElement,
} from '@jsonforms/core';
import { defineComponent } from 'vue';
import {
  DispatchRenderer,
  rendererProps,
  RendererProps,
  useJsonFormsLabel,
} from '@jsonforms/vue';
import { VLabel } from 'vuetify/components';
import { useVuetifyLabel } from '@jsonforms/vue-vuetify';
const htmlLabelRenderer = defineComponent({
  name: 'HtmlLabelRenderer',
  components: {
    DispatchRenderer,
    VLabel,
  },
  props: {
    ...rendererProps<LabelElement>(),
  },
  setup(props: RendererProps<LabelElement>) {
    return useVuetifyLabel(useJsonFormsLabel(props));
  },
});

// const htmlLabelRenderer = defineComponent({
//   extends: LabelRenderer,
//   name: 'html-label-renderer',
//   // components: {
//   //   DispatchRenderer,
//   //   VLabel,
//   // },
//   // props: {
//   //   ...rendererProps<Layout>(),
//   // },
//   // setup(props: RendererProps<Layout>) {
//   //   const t = useTranslator();
//   //   const layout = useVuetifyLayout(useJsonFormsLayout(props));
//   //   return { ...layout, t };
//   // },
//   computed: {
//     // translatedLabel(): string | undefined {
//     //   if (this.layout.uischema.options?.i18n) {
//     //     return this.t(
//     //         this.layout.uischema.options.i18n,
//     //         (<LabelElement>this.layout.uischema).text
//     //     );
//     //   }
//     //   return this.t(
//     //       (<LabelElement>this.layout.uischema).text,
//     //       (<LabelElement>this.layout.uischema).text
//     //   );
//     // },
//   },
// }
// );

export default htmlLabelRenderer;


export const entry: JsonFormsRendererRegistryEntry = {
  "tester": rankWith(4, uiTypeIs('Label')),
  renderer: htmlLabelRenderer,
};

</script>

<style>
.highlight {
  color: #E09500;
}
.readonly {
    font-size: .75rem;
    text-transform: uppercase;
    color: #aaa;
}

/* main label is bold, secondary is normal */
.v-label {
/*    font-weight: bold; */
}
.v-label div:not(:empty) {
    margin-top: .5rem;
/*    font-weight: normal; */
    font-size: .85rem;
  white-space: normal;
}

/* field label when active or has value */
.v-label.v-label--active {
    display: none;

}

.v-input__control label {
    margin-left: .5rem;
}
</style>
