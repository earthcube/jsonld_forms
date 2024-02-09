<template>
  <v-card
    v-if="control.visible"
    :class="styles.arrayList.root"
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
        <validation-icon
          v-if="
            control.childErrors.length > 0 &&
              !appliedOptions.hideArraySummaryValidation
          "
          :errors="control.childErrors"
          :class="styles.arrayList.validationIcon"
        />
        <v-spacer />
        <slot
          name="toolbar-elements"
          :labels="translatedLabels"
          :add-class="styles.arrayList.addButton"
          :add-disabled="addDisabled"
          :add-click="addButtonClick"
          :control="control"
          :applied-options="appliedOptions"
          :styles="styles"
        >
          <v-tooltip location="bottom">
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                variant="text"
                elevation="0"
                size="small"
                :aria-label="translatedLabels.add"
                :class="styles.arrayList.addButton"
                :disabled="addDisabled"
                @click="addButtonClick"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            {{ translatedLabels.add }}
          </v-tooltip>
        </slot>
      </v-toolbar>
    </v-card-title>
    <v-card-text>
      <v-container
        justify-space-around
        align-content-center
        :class="styles.arrayList.container"
      >
        <v-row justify="center">
          <v-expansion-panels
            v-bind="expansionPanelsProps"
            v-model="currentlyExpanded"
            variant="accordion"
          >
            <v-expansion-panel
              v-for="(_element, index) in control.data"
              :key="`${control.path}-${index}`"
              :class="styles.arrayList.item"
            >
              <v-expansion-panel-title :class="styles.arrayList.itemHeader">
                <v-container
                  py-0
                  :class="styles.arrayList.itemContainer"
                >
                  <v-row
                    :style="`display: grid; grid-template-columns: ${
                      !hideAvatar ? 'min-content' : ''
                    } auto min-content ${
                      appliedOptions.showSortButtons
                        ? 'min-content min-content'
                        : ''
                    }`"
                  >
                    <v-col
                      v-if="!hideAvatar"
                      align-self="center"
                      class="pl-0"
                    >
                      <validation-badge
                        overlap
                        bordered
                        :errors="childErrors(index)"
                      >
                        <v-avatar
                          size="40"
                          aria-label="Index"
                          color="primary"
                        >
                          <span class="text-primary-lighten-5">{{
                            index + 1
                          }}</span>
                        </v-avatar>
                      </validation-badge>
                    </v-col>

                    <v-col
                      align-self="center"
                      :class="`pl-0 text-truncate ${styles.arrayList.itemLabel}`"
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
                            v-bind="props"
                            variant="text"
                            elevation="0"
                            size="small"
                            class="v-expansion-panel-title__icon"
                            :aria-label="translatedLabels.moveUp"
                            :disabled="index <= 0 || !control.enabled"
                            :class="styles.arrayList.itemMoveUp"
                            @click="moveUpClick($event, index)"
                          >
                            <v-icon class="notranslate">
                              mdi-arrow-up
                            </v-icon>
                          </v-btn>
                        </template>
                        {{ translatedLabels.moveUp }}
                      </v-tooltip>
                    </v-col>
                    <v-col
                      v-if="appliedOptions.showSortButtons"
                      align-self="center"
                    >
                      <v-tooltip location="bottom">
                        <template #activator="{ props }">
                          <v-btn
                            v-bind="props"
                            variant="text"
                            elevation="0"
                            size="small"
                            class="v-expansion-panel-title__icon"
                            :aria-label="translatedLabels.moveDown"
                            :disabled="
                              index >= dataLength - 1 || !control.enabled
                            "
                            :class="styles.arrayList.itemMoveDown"
                            @click="moveDownClick($event, index)"
                          >
                            <v-icon class="notranslate">
                              mdi-arrow-down
                            </v-icon>
                          </v-btn>
                        </template>
                        {{ translatedLabels.moveDown }}
                      </v-tooltip>
                    </v-col>
                    <v-col align-self="center">
                      <v-tooltip location="bottom">
                        <template #activator="{ props }">
                          <v-btn
                            v-bind="props"
                            variant="text"
                            elevation="0"
                            size="small"
                            class="v-expansion-panel-title__icon"
                            :aria-label="translatedLabels.delete"
                            :class="styles.arrayList.itemDelete"
                            :disabled="
                              !control.enabled ||
                                (appliedOptions.restrict &&
                                  arraySchema !== undefined &&
                                  arraySchema.minItems !== undefined &&
                                  dataLength <= arraySchema.minItems)
                            "
                            @click.stop="suggestToDelete = index"
                          >
                            <v-icon class="notranslate">
                              mdi-delete
                            </v-icon>
                          </v-btn>
                        </template>
                        {{ translatedLabels.delete }}
                      </v-tooltip>
                    </v-col>
                  </v-row>
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
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>
      <v-container
        v-if="dataLength === 0"
        :class="styles.arrayList.noData"
      >
        No data
      </v-container>
    </v-card-text>
    <v-card-actions
      v-if="$slots.actions"
      class="pb-8"
    >
      <slot
        name="actions"
        :labels="translatedLabels"
        :add-class="styles.arrayList.addButton"
        :add-disabled="addDisabled"
        :add-click="addButtonClick"
        :control="control"
        :applied-options="appliedOptions"
        :styles="styles"
      />
    </v-card-actions>
    <v-dialog
      :model-value="suggestToDelete !== null"
      max-width="600"
      @keydown.esc="suggestToDelete = null"
      @click:outside="suggestToDelete = null"
    >
      <v-card>
        <v-card-title class="text-h5">
          {{ translatedLabels.dialogTitle }}
        </v-card-title>

        <v-card-text> {{ translatedLabels.dialogText }} </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            variant="text"
            @click="suggestToDelete = null"
          >
            {{ translatedLabels.dialogCancel }}
          </v-btn>
          <v-btn
            ref="confirm"
            variant="text"
            @click="
              removeItemsClick(
                suggestToDelete === null ? null : [suggestToDelete]
              );
              suggestToDelete = null;
            "
          >
            {{ translatedLabels.dialogConfirm }}
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
  getI18nKey,
} from '@jsonforms/core';
import { defineComponent,computed, ref } from 'vue';
import {
  DispatchRenderer,
  rendererProps,
  useJsonFormsArrayControl,
  RendererProps,
} from '@jsonforms/vue';
import { useNested, useVuetifyArrayControl , useTranslator, i18nDefaultMessages} from '@jsonforms/vue-vuetify';
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
//import { ValidationIcon, ValidationBadge } from '../controls/components/index';
import { ValidationIcon, ValidationBadge } from '@jsonforms/vue-vuetify';
import { ErrorObject } from 'ajv';

import _ from 'lodash';

const controlRenderer = defineComponent({
  name: 'ArrayLayoutRendererEc',
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
    ValidationIcon,
    ValidationBadge,
    VMessages,
  },
  props: {
    ...rendererProps<ControlElement>(),
  },
  setup(props: RendererProps<ControlElement>) {
    const control = useVuetifyArrayControl(useJsonFormsArrayControl(props));
    const currentlyExpanded = ref<null | number>(
        control.appliedOptions.value.initCollapsed ? null : 0
    );
    const expansionPanelsProps = computed(() =>
        _.merge(
            { flat: false, focusable: true },
            control.vuetifyProps('v-expansion-panels')
        )
    );
    const suggestToDelete = ref<null | number>(null);
    // indicate to our child renderers that we are increasing the "nested" level
    useNested('array');
    const t = useTranslator();
    return {
      ...control,
      currentlyExpanded,
      expansionPanelsProps,
      suggestToDelete,
      t,
    };
  },
  computed: {
    addDisabled(): boolean {
      return (
          !this.control.enabled ||
          (this.appliedOptions.restrict &&
              this.arraySchema !== undefined &&
              this.arraySchema.maxItems !== undefined &&
              this.dataLength >= this.arraySchema.maxItems)
      );
    },
    dataLength(): number {
      return this.control.data ? this.control.data.length : 0;
    },
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
        this.control.schema,
        this.control.uischema.scope,
        this.control.rootSchema
      );
    },
    hideAvatar(): boolean {
      return !!this.appliedOptions.hideAvatar;
    },
    translatedLabels(): { [key in I18nArrayLayoutKey]: string } {
      const elementToDeleteText = this.childLabelForIndex(this.suggestToDelete);
      return {
        add: this.translateLabel('add'),
        delete: this.translateLabel('delete'),
        moveUp: this.translateLabel('moveUp'),
        moveDown: this.translateLabel('moveDown'),
        dialogTitle: this.translateLabel(
            'dialogTitle',
            {
              element: elementToDeleteText,
            },
            (message) =>
                message.replace(
                    /\{\{\s?element\s?\}\}/,
                    elementToDeleteText || 'element'
                )
        ),
        dialogText: this.translateLabel('dialogText'),
        dialogCancel: this.translateLabel('dialogCancel'),
        dialogConfirm: this.translateLabel('dialogConfirm'),
      };
    },
  },
  methods: {
    composePaths,
    createDefaultValue,
    addButtonClick() {
      this.addItem(
        this.control.path,
        createDefaultValue(this.control.schema, this.control.rootSchema)
      )();
      if (!this.appliedOptions.collapseNewItems && this.control.data?.length) {
        this.currentlyExpanded = this.dataLength  - 1;
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
    removeItemsClick(toDelete: number[] | null): void {
      if (toDelete !== null) {
        this.removeItems?.(this.control.path, toDelete)();
      }
    },
    childErrors(index: number): ErrorObject[] {
      return this.control.childErrors.filter((e) => {
        const errorDataPath = getControlPath(e);
        return errorDataPath.startsWith(
          this.composePaths(this.control.path, `${index}`)
        );
      });
    },
    translateLabel(
        labelType: I18nArrayLayoutKey,
        additionalContext: Record<string, unknown> | undefined = undefined,
        transformMessage: (message: string) => string = (text) => text
    ): string {
      const i18nKey = getI18nKey(
          this.arraySchema,
          this.control.uischema,
          this.control.path,
          labelType
      );
      const context = {
        schema: this.control.schema,
        uischema: this.control.uischema,
        path: this.control.path,
        data: this.control.data,
        ...additionalContext,
      };
      const translation = this.t(i18nKey, undefined, context);
      if (translation !== undefined) {
        return translation;
      }
      return this.t(
          `arraylayout.${labelType}`,
          transformMessage(i18nDefaultMessages.arraylayout[labelType]),
          context
      );
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
:deep(.v-toolbar__content ){
  padding-left: 0;
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
