<template>
  <v-card v-if="control.visible" :class="styles.arrayList.root" elevation="0">
    <v-card-title>
      <v-toolbar flat :class="styles.arrayList.toolbar">
        <v-toolbar-title :class="styles.arrayList.label">{{
          computedLabel
        }}</v-toolbar-title>
<!--        <validation-icon-->
<!--          v-if="control.childErrors.length > 0"-->
<!--          :errors="control.childErrors"-->
<!--        />-->
        <v-messages :value="[control.description]"></v-messages>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-card-title>
    <v-card-text>
     <v-container v-if="noData" :class="styles.arrayList.noData">
        No data
      </v-container>

      <v-container justify-space-around align-content-center>
        <v-row justify="center">
          <v-expansion-panels accordion focusable v-model="currentlyExpanded">
            <v-expansion-panel
              v-for="(element, index) in control.data"
              :key="`${control.path}-${index}`"
              :class="styles.arrayList.item"
            >
              <v-expansion-panel-header :class="styles.arrayList.itemHeader" class="pl-5 pt-0 pb-2">
                <v-container py-0 pa-0>
                  <v-row
                    :style="`display: grid; grid-template-columns: ${
                      !hideAvatar ? 'min-content' : ''
                    } auto min-content ${
                      appliedOptions.showSortButtons
                        ? 'min-content min-content'
                        : ''
                    }`"
                  >
                    <v-col align-self="center" class="pl-0">
                        <div class="remove_button">
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on: onTooltip }">
                              <v-btn
                                v-on="onTooltip"
                                fab
                                text
                                elevation="0"
                                small
                                color="#E2E2E2"
                                class="v-expansion-panel-header__icon"
                                aria-label="Delete"
                                :class="styles.arrayList.itemDelete"
                                :disabled="
                                  !control.enabled ||
                                  (appliedOptions.restrict &&
                                    arraySchema !== undefined &&
                                    arraySchema.minItems !== undefined &&
                                    control.data.length <= arraySchema.minItems)
                                "
                                @click.stop.native="suggestToDelete = index"
                              >
                                <v-icon class="notranslate">mdi-minus-circle</v-icon>
                              </v-btn>
                            </template>
                            Delete
                          </v-tooltip>
                      </div>
                    </v-col>
<!--
                    <v-col v-if="!hideAvatar" align-self="center" px-0>
                      <validation-badge
                        overlap
                        bordered
                        :errors="childErrors(index)"
                      >
                        <v-avatar size="40" aria-label="Index" color="primary"
                          ><span class="primary&#45;&#45;text text&#45;&#45;lighten-5">{{
                            index + 1
                          }}</span></v-avatar
                        >
                      </validation-badge>
                    </v-col>
-->

                    <v-col
                      align-self="center"
                      :class="`text-truncate ${styles.arrayList.itemLabel}`"
                      >{{ childLabelForIndex(index) }}</v-col
                    >
                    <v-col
                      align-self="center"
                      v-if="appliedOptions.showSortButtons"
                    >
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on: onTooltip }">
                          <v-btn
                            v-on="onTooltip"
                            fab
                            text
                            elevation="0"
                            small
                            class="v-expansion-panel-header__icon"
                            aria-label="Move up"
                            :disabled="index <= 0 || !control.enabled"
                            :class="styles.arrayList.itemMoveUp"
                            @click.native="moveUpClick($event, index)"
                          >
                            <v-icon class="notranslate">mdi-arrow-up</v-icon>
                          </v-btn>
                        </template>
                        Move Up
                      </v-tooltip>
                    </v-col>
                    <v-col
                      align-self="center"
                      v-if="appliedOptions.showSortButtons"
                    >
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on: onTooltip }">
                          <v-btn
                            v-on="onTooltip"
                            fab
                            text
                            elevation="0"
                            small
                            class="v-expansion-panel-header__icon"
                            aria-label="Move down"
                            :disabled="
                              index >= control.data.length - 1 ||
                              !control.enabled
                            "
                            :class="styles.arrayList.itemMoveDown"
                            @click.native="moveDownClick($event, index)"
                          >
                            <v-icon class="notranslate">mdi-arrow-down</v-icon>
                          </v-btn>
                        </template>
                        Move Down
                      </v-tooltip>
                    </v-col>
                  </v-row>
                </v-container>
              </v-expansion-panel-header>
              <v-expansion-panel-content :class="styles.arrayList.itemContent">
                <dispatch-renderer
                  :schema="control.schema"
                  :uischema="foundUISchema"
                  :path="composePaths(control.path, `${index}`)"
                  :enabled="control.enabled"
                  :renderers="control.renderers"
                  :cells="control.cells"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
<v-row>
        <div class="add_button">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: onTooltip }">
                <v-btn
                  fab
                  text
                  elevation="0"
                  small
                  color="#70A5C9"
                  :aria-label="`Add to ${control.label}`"
                  v-on="onTooltip"
                  :class="styles.arrayList.addButton"
                  :disabled="
                    !control.enabled ||
                    (appliedOptions.restrict &&
                      arraySchema !== undefined &&
                      arraySchema.maxItems !== undefined &&
                      control.data.length >= arraySchema.maxItems)
                  "
                  @click="addButtonClick"
                >
                  <v-icon>mdi-plus-circle</v-icon>
                </v-btn>
              </template>
              {{ `Add to ${control.label}` }}
            </v-tooltip>
        </div>
</v-row>
      </v-container>
     </v-card-text
    >
    <v-dialog
      :value="suggestToDelete !== null"
      max-width="600"
      @keydown.esc="suggestToDelete = null"
      @click:outside="suggestToDelete = null"
    >
      <v-card>
        <v-card-title class="text-h5">
          Delete {{ childLabelForIndex(suggestToDelete) || 'element' }}?
        </v-card-title>

        <v-card-text> The element will be deleted. </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="suggestToDelete = null"> Cancel </v-btn>
          <v-btn
            text
            ref="confirm"
            @click="
              removeItemsClick([suggestToDelete]);
              suggestToDelete = null;
            "
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script lang="ts">
import {
  JsonFormsRendererRegistryEntry,
  ControlElement,
  rankWith,
  isObjectArrayWithNesting,
  composePaths,
  createDefaultValue,
  UISchemaElement,
  findUISchema,
  Resolve,
  JsonSchema,
  getControlPath,
} from '@jsonforms/core';
import { defineComponent } from '@vue/composition-api';
import {
  DispatchRenderer,
  rendererProps,
  useJsonFormsArrayControl,
  RendererProps,
} from '@jsonforms/vue2';
import { useNested, useVuetifyArrayControl } from '@jsonforms/vue2-vuetify';
import {
  VCard,
  VCardActions,
  VCardTitle,
  VCardText,
  VDialog,
  VRow,
  VCol,
  VContainer,
  VToolbar,
  VToolbarTitle,
  VTooltip,
  VIcon,
  VBtn,
  VAvatar,
  VSpacer,
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelHeader,
  VExpansionPanelContent,
  VMessages,
} from 'vuetify/lib';
//import { ValidationIcon, ValidationBadge } from '../controls/components/index';
//import { ValidationIcon, ValidationBadge } from '@jsonforms/vue2-vuetify';
import { ErrorObject } from 'ajv';
import { ref } from '@vue/composition-api';

const controlRenderer = defineComponent({
  name: 'array-layout-renderer-ec',
  components: {
    DispatchRenderer,
    VCard,
    VCardActions,
    VCardTitle,
    VCardText,
    VAvatar,
    VDialog,
    VRow,
    VCol,
    VToolbar,
    VToolbarTitle,
    VTooltip,
    VIcon,
    VBtn,
    VSpacer,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VContainer,
//    ValidationIcon,
//    ValidationBadge,
    VMessages,
  },
  props: {
    ...rendererProps<ControlElement>(),
  },
  setup(props: RendererProps<ControlElement>) {
    const control = useVuetifyArrayControl(useJsonFormsArrayControl(props));
    const currentlyExpanded = ref<null | number>(null);
    const suggestToDelete = ref<null | number>(null);
    // indicate to our child renderers that we are increasing the "nested" level
    useNested('array');
    return { ...control, currentlyExpanded, suggestToDelete };
  },
  computed: {
    noData(): boolean {
      return !this.control.data || this.control.data.length === 0;
    },
    foundUISchema(): UISchemaElement {
      return findUISchema(
        this.control.uischemas,
        this.control.schema,
        this.control.uischema.scope,
        this.control.path,
        undefined,
        this.control.uischema,
        this.control.rootSchema
      );
    },
    arraySchema(): JsonSchema | undefined {
      return Resolve.schema(
        this.control.rootSchema,
        this.control.uischema.scope,
        this.control.rootSchema
      );
    },
    hideAvatar(): boolean {
      return !!this.appliedOptions.hideAvatar;
    },
  },
  methods: {
    composePaths,
    createDefaultValue,
    addButtonClick() {
      this.addItem(
        this.control.path,
        createDefaultValue(this.control.schema)
      )();
      if (!this.appliedOptions.collapseNewItems && this.control.data?.length) {
        this.currentlyExpanded = this.control.data.length - 1;
      }
    },
    moveUpClick(event: Event, toMove: number): void {
      event.stopPropagation();
      this.moveUp?.(this.control.path, toMove)();
    },
    moveDownClick(event: Event, toMove: number): void {
      event.stopPropagation();
      this.moveDown?.(this.control.path, toMove)();
    },
    removeItemsClick(toDelete: number[]): void {
      this.removeItems?.(this.control.path, toDelete)();
    },
    childErrors(index: number): ErrorObject[] {
      return this.control.childErrors.filter((e) => {
        const errorDataPath = getControlPath(e);
        return errorDataPath.startsWith(
          this.composePaths(this.control.path, `${index}`)
        );
      });
    },
  },
});

export default controlRenderer;

export const entry: JsonFormsRendererRegistryEntry = {
  renderer: controlRenderer,
  tester: rankWith(5, isObjectArrayWithNesting),
};
</script>

<style scoped>
.notranslate {
  transform: none !important;
}

.add_button {
    margin-top: 1rem;
    margin-left: .5rem;
}

.remove_button button .v-icon {
    /* made a bit darker to compensate for row background grey */
    color: #d2d2d2 !important;
}

</style>
