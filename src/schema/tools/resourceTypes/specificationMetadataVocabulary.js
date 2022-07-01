const resourceType = {
  type: 'Group',
  label: 'Specification of Metadata Vocabulary',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
        //const: 'Specification'
         "const": [
                  {
                  "name":
                  "Metadata Vocabulary",
                  "@type":
                  "CreativeWork",
                  "url":
                  "http://cor.esipfed.org/ont/earthcube/SPKT_0000009"
                  }
                  ]
      }
    }
  },

  elements: [
      {
          type: 'Label',
          text: 'A specification of a vocabulary (entities and attributes) for describing other resources.'
      },

    {
      label: 'File Format: how is the specification represented digitally',
      type: 'Control',
      scope: '#/properties/encodingFormat',
      options: {
        showUnfocusedDescription: true
      }
    },
         {
          type: 'Label',
          text: 'If this vocabulary is based on (a profile of) another metadata scheme, resource type should be -metadata convention-; profile of property is not applicable.'
        }
      ]
    };

export default resourceType;
