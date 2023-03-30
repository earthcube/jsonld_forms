const interchange = {
  type: 'Group',
  label: 'Interchange file format options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
       // const: 'Interchange file format'
        "const": [
                 {
                 "@type": "DefinedTerm",
                 "identifier":  "http://cor.esipfed.org/ont/earthcube/ECRRO_0000208",
                 "name":  "Interchange file format"
                 }
                 ]
      }
    }
  },
  elements: [
    {
      type: 'Label',
      text: 'Base Format'
    },
    {
      label: ' Base Format',
      type: 'Control',
      scope: '#/properties/encodingFormat',
      options: {
        showUnfocusedDescription: true
      }
    },
    {
      type: 'Label',
      text: 'Supporting Data'
    },
    {
      label: ' Supporting Data',
      type: 'Control',
      scope: '#/properties/supportingData',
      options: {
        showUnfocusedDescription: true,
        detail: {
          type: 'HorizontalLayout',
          elements: [
            { label: 'name', type: 'Control', scope: '#/properties/name' },
            {
              label: 'position',
              type: 'Control',
              scope: '#/properties/position'
            },
            {
              label: 'encodingFormat',
              type: 'Control',
              scope: '#/properties/encodingFormat'
            }
          ]
        }
      }
    },
    {
      type: 'Label',
      text: 'Conforms to'
    },
    {
      label: ' Conforms to',
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
