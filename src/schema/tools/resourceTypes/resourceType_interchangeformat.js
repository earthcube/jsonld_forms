const interchange = {
  type: 'Group',
  label: 'Interchange file format',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
       // const: 'Interchange file format'
        "const": [
                 {
                 "@type":
                 "CreativeWork",
                 "url":
                 "http://cor.esipfed.org/ont/earthcube/ECRRO_0000208",
                 "name":
                 "Interchange file format"
                 }
                 ]
      }
    }
  },
  elements: [
    {
      type: 'Label',
      text: 'Base Format- generic mime type or value from https://github.com/earthcube/GeoCODES-Metadata/blob/main/resources/encodingFormat.csv'
    },
    {
      label: 'String(s) that will be used to match software with file formats that work with that software.',
      type: 'Control',
      scope: '#/properties/encodingFormat',
      options: {
        showUnfocusedDescription: true
      }
    },

    {
      type: 'Label',
      text: 'Specification(s) that define the format'
    },
    {
      label: 'Conforms to',
      type: 'Control',
      scope: '#/properties/dct:conformsTo',
      options: {
        showUnfocusedDescription: true,
        detail: {
          type: 'HorizontalLayout',
          elements: [
            { label: 'name', type: 'Control', scope: '#/properties/name' },
            { label: 'url', type: 'Control', scope: '#/properties/url' }
          ]
        }
      }
    }
  ]
};

export default interchange;
