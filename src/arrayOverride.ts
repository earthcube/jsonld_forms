import {
    JsonFormsRendererRegistryEntry,
        rankWith,
        schemaTypeIs,
} from '@jsonforms/core';
import { default as ArrayLayoutRenderer } from './components/ArrayWDescription';

export const arrayListRendererEntry: JsonFormsRendererRegistryEntry = {
    renderer: ArrayLayoutRenderer,
    tester: rankWith(2, schemaTypeIs('array')),
};

export const arrayRenderers = [arrayListRendererEntry];
