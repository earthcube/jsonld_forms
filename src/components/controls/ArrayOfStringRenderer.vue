<template>
  <v-card
    v-if="control.visible"
    :class="styles.arrayList.root"
    elevation="0"
  >
    <v-card-title>
      <v-toolbar
        flat
        :class="styles.arrayList.toolbar"
      >
        <v-toolbar-title :class="styles.arrayList.label">
          {{
            computedLabel
          }}
        </v-toolbar-title>
        <!--        <validation-icon-->
        <!--          v-if="control.childErrors.length > 0"-->
        <!--          :errors="control.childErrors"-->
        <!--        />-->
        <v-messages :value="[control.description]" />
        <v-spacer />
      </v-toolbar>
    </v-card-title>
    <v-card-text>
      <v-container
        v-if="noData"
        :class="styles.arrayList.noData"
      >
        No data
      </v-container>
      <v-container
        justify-space-around
        align-content-center
      >
        <v-row justify="center">
          <v-expansion-panels
            v-model="currentlyExpanded"
            variant="accordion"
            focusable
          >
            <v-expansion-panel
              v-for="(element, index) in control.data"
              :key="`${control.path}-${index}`"
              :class="styles.arrayList.item"
            >
              <v-expansion-panel-title :class="styles.arrayList.itemHeader">
                <v-container py-0>
                  <v-row
                    :style="`display: grid; grid-template-columns: ${
                      !hideAvatar ? 'min-content' : ''
                    } auto min-content ${
                      appliedOptions.showSortButtons
                        ? 'min-content min-content'
                        : ''
                    }`"
                  >
                    <!--                    <v-col v-if="!hideAvatar" align-self="center" px-0>-->
                    <!--                      <validation-badge-->
                    <!--                        overlap-->
                    <!--                        bordered-->
                    <!--                        :errors="childErrors(index)"-->
                    <!--                      >-->
                    <!--                        <v-avatar size="40" aria-label="Index" color="primary"-->
                    <!--                          ><span class="primary&#45;&#45;text text&#45;&#45;lighten-5">{{-->
                    <!--                            index + 1-->
                    <!--                          }}</span></v-avatar-->
                    <!--                        >-->
                    <!--                      </validation-badge>-->
                    <!--                    </v-col>-->

                    <v-col
                      align-self="center"
                      :class="`text-truncate ${styles.arrayList.itemLabel}`"
                    >
                      {{ childLabelForIndex(index) }}
                    </v-col>
                    <v-col
                      v-if="appliedOptions.showSortButtons"
                      align-self="center"
                    >
                      <v-tooltip location="bottom">
                        <template #activator="{ props }">
                          <v-btn
                            fab
                            variant="text"
                            elevation="0"
                            size="small"
                            class="v-expansion-panel-header__icon"
                            aria-label="Move up"
                            :disabled="index <= 0 || !control.enabled"
                            :class="styles.arrayList.itemMoveUp"
                            v-on="props"
                            @click="moveUpClick($event, index)"
                          >
                            <v-icon class="notranslate">
                              mdi-arrow-up
                            </v-icon>
                          </v-btn>
                        </template>
                        Move Up
                      </v-tooltip>
                    </v-col>
                    <v-col
                      v-if="appliedOptions.showSortButtons"
                      align-self="center"
                    >
                      <v-tooltip location="bottom">
                        <template #activator="{ props }">
                          <v-btn
                            fab
                            variant="text"
                            elevation="0"
                            size="small"
                            class="v-expansion-panel-header__icon"
                            aria-label="Move down"
                            :disabled="
                              index >= control.data.length - 1 ||
                                !control.enabled
                            "
                            :class="styles.arrayList.itemMoveDown"
                            v-on="props"
                            @click="moveDownClick($event, index)"
                          >
                            <v-icon class="notranslate">
                              mdi-arrow-down
                            </v-icon>
                          </v-btn>
                        </template>
                        Move Down
                      </v-tooltip>
                    </v-col>
                    <v-col align-self="center">
                      <v-tooltip location="bottom">
                        <template #activator="{ props }">
                          <v-btn
                            fab
                            variant="text"
                            elevation="0"
                            size="small"
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
                            v-on="props"
                            @click.stop="suggestToDelete = index"
                          >
                            <v-icon class="notranslate">
                              mdi-delete
                            </v-icon>
                          </v-btn>
                        </template>
                        Delete
                      </v-tooltip>
                    </v-col>
                  </v-row>

                  <div class="add_button">
                    <v-tooltip location="bottom">
                      <template #activator="{ props }">
                        <v-btn
                          fab
                          variant="text"
                          elevation="0"
                          size="small"
                          :aria-label="`Add to ${control.label}`"
                          :class="styles.arrayList.addButton"
                          :disabled="
                            !control.enabled ||
                              (appliedOptions.restrict &&
                                arraySchema !== undefined &&
                                arraySchema.maxItems !== undefined &&
                                control.data.length >= arraySchema.maxItems)
                          "
                          v-on="props"
                          @click="addButtonClick"
                        >
                          <v-icon>mdi-plus</v-icon>
                        </v-btn>
                      </template>
                      {{ `Add to ${control.label}` }}
                    </v-tooltip>
                  </div>
                </v-container>
              </v-expansion-panel-title>
              <v-expansion-panel-text :class="styles.arrayList.itemContent">
                <dispatch-renderer
                  :schema="control.schema"
                  :uischema="foundUISchema"
                  :path="composePaths(control.path, `${index}`)"
                  :enabled="control.enabled"
                  :renderers="control.renderers"
                  :cells="control.cells"
                />
                <!--                <string-control-renderer v-for="(dataRenderInfo, dataIndex) in control.data"-->
                <!--                                 :key="`${control.path}-${dataIndex}`"-->
                <!--                          :schema="dataRenderInfo.schema"-->
                <!--                          :uischema="dataRenderInfo.uischema"-->
                <!--                          :path="composePaths(control.path, `${index}`)"-->
                <!--                          :enabled="control.enabled"-->
                <!--                          :renderers="control.renderers"-->
                <!--                          :value="data"-->
                <!--                >-->
                <!--                </string-control-renderer>-->
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>
    </v-card-text>
    <v-dialog
      :model-value="suggestToDelete !== null"
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
          <v-spacer />

          <v-btn
            variant="text"
            @click="suggestToDelete = null"
          >
            Cancel
          </v-btn>
          <v-btn
            ref="confirm"
            variant="text"
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
 // isObjectArrayWithNesting,
  composePaths,
  createDefaultValue,
  UISchemaElement,
  findUISchema,
  Resolve,
  JsonSchema,
  getControlPath,
  //and, isLayout,
  uiTypeIs,
} from '@jsonforms/core';
import { defineComponent } from 'vue';
import {
  DispatchRenderer,
  rendererProps,
  useJsonFormsArrayControl,
  RendererProps,
} from '@jsonforms/vue';
import { useNested, useVuetifyArrayControl, StringControlRenderer } from '@jsonforms/vue-vuetify';
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
  VExpansionPanelText,
  VExpansionPanelTitle,
  VMessages,
} from 'vuetify/components';
//import { ValidationIcon, ValidationBadge } from '@jsonforms/vue2-vuetify/controls/components';
import { ErrorObject } from 'ajv';
import { ref } from 'vue';

const controlRenderer = defineComponent({
  name: 'ArrayOfStringRenderer',
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
    VExpansionPanelText,
    VExpansionPanelTitle,
    VContainer,
 //   ValidationIcon,
  //  ValidationBadge,
    VMessages,
    StringControlRenderer,
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

     // return findUISchema(
      const uiSchema = findUISchema(
        this.control.uischemas,
        this.control.schema,
        this.control.uischema.scope,
        this.control.path,
        undefined,
        this.control.uischema,
        this.control.rootSchema
      );
      console.log(uiSchema)
      return uiSchema
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
  //tester: rankWith(4, isObjectArrayWithNesting),
  tester: rankWith(5,  uiTypeIs('ArrayString')),

};
</script>

<style scoped>
.notranslate {
  transform: none !important;
}
</style>
