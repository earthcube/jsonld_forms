const bundledObject = {
  type: 'Group',
  label: 'Bundled Object options',
  rule: {
    effect: 'SHOW',
    condition: {
        scope: '#/properties/mainEntity/',
        schema: {
           "const":
                   [ {
                    "name":
                    "Bundled Object",
                    "@type":
                    "CreativeWork",
                    "url":
                    "http://cor.esipfed.org/ont/earthcube/SFO_0000075"
                    }]
        }
      }
    },
  elements: [

    {
      label: 'Format for bundle container',
      type: 'Control',
      scope: '#/properties/encodingFormat',
      options: {
        showUnfocusedDescription: true
      }
    },



    {
      label: 'Components of the bundle/collection',
      type: 'Control',
      scope: '#/properties/hasPart',
      options: {
        showUnfocusedDescription: true
      }
    },

    {
      label: 'Specification for the file format and structure for the bundled object',
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

export default bundledObject;
