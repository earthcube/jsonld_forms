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
      <v-col v-for="(o, index) in control.options" :key="o.value.name">
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

/*
ideally there will be two menus, fucntions, and subfucntions.
They will store items in the applicationCategory string array.


"applicationCategory":
[
"function: Data Exploration uri: http://cor.esipfed.org/ont/earthcube/SFO_0000006",
"subfunction: Data Discovery & Access: Data Query, Data Discovery & Access: Data Harvesting, Visualization: Display uri: http://cor.esipfed.org/ont/earthcube/SFO_0000027",
"subfunction: Data Discovery & Access: Data Query, Data Discovery & Access: Data Harvesting, Visualization: Display uri: http://cor.esipfed.org/ont/earthcube/SFO_0000030",
"subfunction: Data Discovery & Access: Data Query, Data Discovery & Access: Data Harvesting, Visualization: Display uri: http://cor.esipfed.org/ont/earthcube/SFO_0000062"
]
*/
<script lang="ts">
import {
  and,
  ControlElement,
  hasType,
  JsonFormsRendererRegistryEntry,
  JsonSchema,
 // mapDispatchToMultiEnumProps,
  mapStateToMultiEnumControlProps,
  rankWith,
  schemaMatches,
  schemaSubPathMatches,
  uiTypeIs,
  composePaths,
  Dispatch,
  CoreActions,
  DispatchPropsOfMultiEnumControl,
    update
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
import _ from 'lodash'

//TODO: move into JsonForm Vue project under src/components/jsonFormsCompositions.ts
const useJsonFormsMultiEnumControl = (props: ControlProps) => {
  return useControl(
    props,
    mapStateToMultiEnumControlProps,
  //  mapDispatchToMultiEnumProps
      mapDispatchToObjEnumProps
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
      //return !!this.control.data?.includes(value);
      //return _.includes(this.control.data, value)
      const exists = _.find(this.control.data, (o:any)=> o.name ==value.name)
      if (exists) return true
      return false

    },
    composePaths,
    toggle(value: any, add: boolean) {
      if (add) {
       this.addItem(this.control.path, value);
        // mapDispatchToMultiEnumProps.addItem does an exact match === so we need to send the the actual object
       // const objValue = _.find( this.control.options, (o:any)=> o.value.name == value.name )
       // this.addItem(this.control.path, objValue); // fai
       } else {
        // mistyped in core
        this.removeItem?.(this.control.path, value);
        // mapDispatchToMultiEnumProps.removeItem does an exact match === so we need to send the the actual object
       // const objValue = _.remove( this.control.data, (o:any)=> o.name == value.name )
       // this.removeItem?.(this.control.path,objValue);
      // _.remove( this.control.data, (o:any)=> o.name == value.name )
      }
    },
    chipRemove(e: any){
      console.log(e)
      this.toggle(e.target, false)
    }
  },
});

export default controlRenderer;
const mapDispatchToObjEnumProps = (
    dispatch: Dispatch<CoreActions>
): DispatchPropsOfMultiEnumControl => ({
  addItem: (path: string, value: any) => {
    dispatch(
        update(path, data => {
           if (data === undefined || data === null) {
            return [value];
          }
          const exists =  _.find(data, (o:any)=> o?.name == value?.name)
          if (!exists) data.push(value);
          return data;
        })
    );
  },
  removeItem: (path: string, toDelete: any) => {
    dispatch(
        update(path, data => {
         // const indexInData = data.indexOf(toDelete);
        //  data.splice(indexInData, 1);
          _.remove(data, (o:any)=> o?.name == toDelete?.name) // returns removed object, so return original array
          return data;
        })
    );
  }
});

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
     uiTypeIs('EcFunction'),
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
