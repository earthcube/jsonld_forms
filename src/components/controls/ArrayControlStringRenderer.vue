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
        <v-spacer></v-spacer>

        <div class="add_button">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: onTooltip }">
                <v-btn
                  fab
                  text
                  elevation="0"
                  small
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
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </template>
              {{ `Add to ${control.label}` }}
            </v-tooltip>
        </div>
      </v-toolbar>
    </v-card-title>
    <v-card-text>
      <v-container v-if="noData" :class="styles.arrayList.noData">
        No data
      </v-container>
      <v-container justify-space-around align-content-center>
        <v-row justify="center">
          <v-simple-table class="array-container flex">
            <thead v-if="control.schema.type === 'object'">
              <tr>
                <th
                  v-for="(prop, index) in getValidColumnProps(control.schema)"
                  :key="`${control.path}-header-${index}`"
                  scope="col"
                >
                  {{ title(prop) }}
                </th>
                <th
                  v-if="control.enabled"
                  :class="
                    appliedOptions.showSortButtons
                      ? 'fixed-cell'
                      : 'fixed-cell-small'
                  "
                  scope="col"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(element, index) in control.data"
                :key="`${control.path}-${index}`"
                :class="styles.arrayList.item"
              >
                <td
                  v-for="propName in getValidColumnProps(control.schema)"
                  :key="
                    composePaths(
                      composePaths(control.path, `${index}`),
                      propName
                    )
                  "
                >
                  <dispatch-renderer
                    :schema="control.schema"
                    :uischema="resolveUiSchema(propName)"
                    :path="composePaths(control.path, `${index}`)"
                    :enabled="control.enabled"
                    :renderers="control.renderers"
                    :cells="control.cells"
                  />
                </td>
                <td
                  v-if="control.enabled"
                  :class="
                    appliedOptions.showSortButtons
                      ? 'fixed-cell'
                      : 'fixed-cell-small'
                  "
                >
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on: onTooltip }">
                      <v-btn
                        v-on="onTooltip"
                        v-if="appliedOptions.showSortButtons"
                        fab
                        text
                        elevation="0"
                        small
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
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on: onTooltip }">
                      <v-btn
                        v-on="onTooltip"
                        v-if="appliedOptions.showSortButtons"
                        fab
                        text
                        elevation="0"
                        small
                        aria-label="Move down"
                        :disabled="
                          index >= control.data.length - 1 || !control.enabled
                        "
                        :class="styles.arrayList.itemMoveDown"
                        @click.native="moveDownClick($event, index)"
                      >
                        <v-icon class="notranslate">mdi-arrow-down</v-icon>
                      </v-btn>
                    </template>
                    Move Down
                  </v-tooltip>

                    <div class="remove_button">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on: onTooltip }">
                          <v-btn
                            v-on="onTooltip"
                            fab
                            text
                            elevation="0"
                            small
                            aria-label="Delete"
                            :class="styles.arrayList.itemDelete"
                            :disabled="
                              !control.enabled ||
                              (appliedOptions.restrict &&
                                arraySchema !== undefined &&
                                arraySchema.minItems !== undefined &&
                                control.data.length <= arraySchema.minItems)
                            "
                            @click.native="removeItemsClick($event, [index])"
                          >
                            <v-icon class="notranslate">mdi-delete</v-icon>
                          </v-btn>
                        </template>
                        Delete 222
                      </v-tooltip>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import {
  isObjectArrayControl,
  isPrimitiveArrayControl,
  JsonFormsRendererRegistryEntry,
  or,
  rankWith,
  composePaths,
  createDefaultValue,
  ControlElement,
  JsonSchema,
  Resolve,
  //uiTypeIs,
} from '@jsonforms/core';
import startCase from 'lodash/startCase';
import { defineComponent } from '@vue/composition-api';
import {
  DispatchCell,
  DispatchRenderer,
  rendererProps,
  useJsonFormsArrayControl,
  RendererProps,
} from '@jsonforms/vue2';
import { useVuetifyArrayControl } from '@jsonforms/vue2-vuetify';
import {
  VCard,
  VCardTitle,
  VCardText,
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
  VSimpleTable,
} from 'vuetify/lib';
//import { ValidationIcon, ValidationBadge } from '../controls/components/index';

const controlRenderer = defineComponent({
  name: 'array-control-renderer',
  components: {
    DispatchCell,
    DispatchRenderer,
    VCard,
    VCardTitle,
    VCardText,
    VAvatar,
    VRow,
    VCol,
    VToolbar,
    VToolbarTitle,
    VTooltip,
    VIcon,
    VBtn,
    VSpacer,
    VContainer,
    //ValidationIcon,
  //  ValidationBadge,
    VSimpleTable,
  },
  props: {
    ...rendererProps<ControlElement>(),
  },
  setup(props: RendererProps<ControlElement>) {
    return useVuetifyArrayControl(useJsonFormsArrayControl(props));
  },
  computed: {
    arraySchema(): JsonSchema | undefined {
      return Resolve.schema(
        this.control.rootSchema,
        this.control.uischema.scope,
        this.control.rootSchema
      );
    },
    noData(): boolean {
      return !this.control.data || this.control.data.length === 0;
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
    },
    moveUpClick(event: Event, toMove: number): void {
      event.stopPropagation();
      this.moveUp?.(this.control.path, toMove)();
    },
    moveDownClick(event: Event, toMove: number): void {
      event.stopPropagation();
      this.moveDown?.(this.control.path, toMove)();
    },
    removeItemsClick(event: Event, toDelete: number[]): void {
      event.stopPropagation();
      this.removeItems?.(this.control.path, toDelete)();
    },
    getValidColumnProps(scopedSchema: JsonSchema) {
      if (
        scopedSchema.type === 'object' &&
        typeof scopedSchema.properties === 'object'
      ) {
        return Object.keys(scopedSchema.properties).filter(
          (prop) => scopedSchema.properties?.[prop]?.type !== 'array'
        );
      }
      // primitives
      return [''];
    },
    title(prop: string) {
      return this.control.schema.properties?.[prop]?.title ?? startCase(prop);
    },
    resolveUiSchema(propName: string) {
      return this.control.schema.properties
        ? this.controlWithoutLabel(`#/properties/${propName}`)
        : this.controlWithoutLabel('#');
    },
    // controlWithoutLabel(scope: string): ControlElement {
    //   return { type: 'Control', scope: scope, label: false };
    // },
    controlWithoutLabel(scope: string): ControlElement {

      if (this.control.uischema?.options?.suggestion !== undefined){
        return { type: 'Control', scope: scope, label: false, options: {suggestion:this.control.uischema.options.suggestion } };
      }

      return { type: 'Control', scope: scope, label: false };




    },
  },
});

export default controlRenderer;

export const entry: JsonFormsRendererRegistryEntry = {
  renderer: controlRenderer,
  tester: rankWith(4, or(isObjectArrayControl, isPrimitiveArrayControl)),
  //tester: rankWith(5,  uiTypeIs('ArrayString')),
};
</script>

<style scoped>
.fixed-cell {
  width: 150px;
  height: 50px;
  padding-left: 0 !important;
  padding-right: 0 !important;
  text-align: center;
}

.fixed-cell-small {
  width: 50px;
  height: 50px;
  padding-left: 0 !important;
  padding-right: 0 !important;
  text-align: center;
}

.array-container tbody tr td {
  border-bottom: none !important;
}

.array-container tbody tr td .container {
  padding: 0;
  margin: 0;
}

.remove_button {
    border: 2px solid #f00 !important;
}
</style>
