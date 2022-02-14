<template>
  <v-expansion-panels>
  <v-expansion-panel
      v-if="layout.visible"
      :class="`pa-0 ${styles.group.root}`"
      elevation="2"
  >
    <v-expansion-panel-header v-if="layout.uischema.label" :class="styles.group.label">
      <template v-slot:actions>
        <v-icon class="icon">$expand</v-icon>
      </template>
      <span class="header"> {{
          layout.uischema.label
        }}</span>
     </v-expansion-panel-header>

    <v-expansion-panel-content
        v-for="(element, index) in layout.uischema.elements"
        :key="`${layout.path}-${index}`"
        :class="styles.group.item"
    >
      <dispatch-renderer
          :schema="layout.schema"
          :uischema="element"
          :path="layout.path"
          :enabled="layout.enabled"
          :renderers="layout.renderers"
          :cells="layout.cells"
      />
    </v-expansion-panel-content>
  </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import {
  JsonFormsRendererRegistryEntry,
  Layout,
  rankWith,
  and,
  isLayout,
  uiTypeIs,
} from '@jsonforms/core';
import { defineComponent } from '@vue/composition-api';
import {
  DispatchRenderer,
  rendererProps,
  useJsonFormsLayout,
  RendererProps,
} from '@jsonforms/vue2';
import { useVuetifyLayout } from '@jsonforms/vue2-vuetify';
import { VCard, VCardTitle, VCardText } from 'vuetify/lib';
import { VExpansionPanels, VExpansionPanel, VExpansionPanelContent,VExpansionPanelHeader } from 'vuetify/lib';
const layoutRenderer = defineComponent({
  name: 'group-renderer',
  components: {
    DispatchRenderer,
    VCard,
    VCardTitle,
    VCardText,VExpansionPanels, VExpansionPanel, VExpansionPanelContent,VExpansionPanelHeader
  },
  props: {
    ...rendererProps<Layout>(),
  },
  setup(props: RendererProps<Layout>) {
    return useVuetifyLayout(useJsonFormsLayout(props));
  },
});

export default layoutRenderer;

export const entry: JsonFormsRendererRegistryEntry = {
  renderer: layoutRenderer,
  tester: rankWith(3, and(isLayout, uiTypeIs('ShowGroup'))),
};
</script>

<style>
.icon {
  order: 0;
}

.header {
  order: 1;
}
</style>

