<template>
  <v-expansion-panels class="additionalgroup">
    <v-expansion-panel
      v-if="layout.visible"
      :class="`pa-0 ${styles.group.root}`"
      elevation="2"
    >
      <v-expansion-panel-title
        v-if="layout.label"
        :class="styles.group.label"
      >
        <template #actions>
          <v-icon
            class="icon"
            color="#18598B"
            small
          >
            mdi-plus
          </v-icon>
        <!--<v-icon class="icon" small>$expand</v-icon>-->
        </template>
        <span class="header"> {{
          layout.uischema.label
        }}</span>
      </v-expansion-panel-title>

      <v-expansion-panel-text
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
      </v-expansion-panel-text>
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
import { defineComponent } from 'vue';
import {
  DispatchRenderer,
  rendererProps,
  useJsonFormsLayout,
  RendererProps,
} from '@jsonforms/vue';
import { useVuetifyLayout } from '@jsonforms/vue-vuetify';
import { VCard, VCardTitle, VCardText } from 'vuetify/components';
import { VExpansionPanels, VExpansionPanel, VExpansionPanelTitle, VExpansionPanelText } from 'vuetify/components';
const layoutRenderer = defineComponent({
  name: 'GroupRenderer',
  components: {
    DispatchRenderer,
    VCard,
    VCardTitle,
    VCardText,VExpansionPanels, VExpansionPanel, VExpansionPanelText,VExpansionPanelTitle
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
  color: #18598B;
}

.header {
  order: 1;
  font-size: 0.8rem;
  font-weight: bold;
  color: #18598B;
}

.additionalgroup {
    margin-top: 0rem;
}

/* addition group blocks */
.additionalgroup .v-expansion-panel-header {
    min-height: auto;
    padding: .5rem;
}

.additionalgroup .group-item {
  border-left-color: #D4E4EF;
  border-left-width: 10px;
  border-left-style: solid;
  margin-left: .7rem;
}

.v-expansion-panel-content__wrap {
    padding-left: .75rem;
}

.array-list-add .v-button__content {
  order: 0;
  left: 0;
  padding: 0px;
}

.array-list-label {
    font-size: .8rem !important;
    font-weight: bold !important;
}

.array-list-toolbar .array-list-label,
.array-list-toolbar .spacer{
  order: 8;
  padding-left: -16px;

}
.array-list-toolbar .v-card__title {
  font-size: 0.8rem;
  font-weight: lighter;
}
.array-list-toolbar .v-toolbar__content {
  margin-left: 0px;
  padding-left: 0px;
}
.array-list-toolbar .v-expansion-panel-content__wrap{
  padding-left: 0px;
  padding-bottom: 3em;
}
.array-list-toolbar .v-btn--fab.v-size--small {
  width: 16px;
  size: 16px;
}
</style>

