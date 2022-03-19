<template>
  <v-container fluid v-if="control.visible">
    <v-row>

      <div class="text-center">
        <v-chip v-for="l in this.control.data " :key="l.name"
                class="ma-2"
                close
                @click:close="toggle(l)"
        >
          {{ l.name }}
        </v-chip>
      </div>
    </v-row>
    <v-row>
      <v-col v-for="(o, index) in control.options" :key="o.value">
        <v-checkbox
          :label="o.label"
          :input-value="dataHasEnum(o.value)"
          :id="control.id + `-input-${index}`"
          :path="composePaths(control.path, `${index}`)"
          :error-messages="control.errors"
          :disabled="!control.enabled"
          :indeterminate="control.data === undefined"
          v-bind="vuetifyProps(`v-checkbox[${o.value}]`)"
          @change="(value) => toggle(o.value, value)"
        ></v-checkbox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  and,
  ControlElement,
  hasType,
  JsonFormsRendererRegistryEntry,
  JsonSchema,
  mapDispatchToMultiEnumProps,
  mapStateToMultiEnumControlProps,
  rankWith,
  schemaMatches,
  schemaSubPathMatches,
  uiTypeIs,
  composePaths,
} from '@jsonforms/core';
import { VCheckbox, VContainer, VRow, VCol, VCombobox } from 'vuetify/lib';
import {
  DispatchRenderer,
  rendererProps,
  RendererProps,
  useControl,
  ControlProps,
} from '@jsonforms/vue2';
import { defineComponent } from '@vue/composition-api';
import { useVuetifyBasicControl } from '@jsonforms/vue2-vuetify';

//TODO: move into JsonForm Vue project under src/components/jsonFormsCompositions.ts
const useJsonFormsMultiEnumControl = (props: ControlProps) => {
  return useControl(
    props,
    mapStateToMultiEnumControlProps,
    mapDispatchToMultiEnumProps
  );
};

const controlRenderer = defineComponent({
  name: 'enum-array-renderer',
  components: {
    DispatchRenderer,
    VCheckbox,
    VContainer,
    VRow,
    VCol,
    VCombobox,
  },
  props: {
    ...rendererProps<ControlElement>(),
  },
  data: ()=> {
    return {
      model: [],
      search: null,
    }

  },
  setup(props: RendererProps<ControlElement>) {
    return useVuetifyBasicControl(useJsonFormsMultiEnumControl(props));
  },
  computed: {
    getLabel(): string| undefined{
      if (this.control.label){
        return this.control.label
      }
    },
    getDescription(): string| undefined{
      if (this.control.description){
        return this.control.description
      }
    }
  },
  methods: {
    dataHasEnum(value: any) {
      return !!this.control.data?.includes(value);
    },
    composePaths,
    toggle(value: any, add: boolean) {
      if (add) {
        this.addItem(this.control.path, value);
      } else {
        // mistyped in core
        this.removeItem?.(this.control.path, value);
      }
    },
    chipRemove(e: any){
      console.log(e)
      this.toggle(e.data, false)
    }
  },
});

export default controlRenderer;

const hasOneOfItems = (schema: JsonSchema): boolean =>
  schema.oneOf !== undefined &&
  schema.oneOf.length > 0 &&
  (schema.oneOf as JsonSchema[]).every((entry: JsonSchema) => {
    return entry.const !== undefined;
  });

const hasEnumItems = (schema: JsonSchema): boolean =>
  schema.type === 'string' && schema.enum !== undefined;

export const entry: JsonFormsRendererRegistryEntry = {
  renderer: controlRenderer,
  tester: rankWith(
    6,
    and(
      uiTypeIs('Control'),
      and(
        schemaMatches(
          (schema) =>
            hasType(schema, 'array') &&
            !Array.isArray(schema.items) &&
            schema.uniqueItems === true
        ),
        schemaSubPathMatches('items', (schema) => {
          return hasOneOfItems(schema) || hasEnumItems(schema);
        })
      )
    )
  ),
};
</script>
