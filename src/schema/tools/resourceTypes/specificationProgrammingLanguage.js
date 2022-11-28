const resourceType = {
  type: 'Group',
  label: 'Specification of Programming Language',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
        //const: 'Specification'
         "const": [
                  {
                  "name":
                  "Programming Language",
                  "@type":
                  "CreativeWork",
                  "url":
                  "http://cor.esipfed.org/ont/earthcube/SPKT_0000007"
                  }
                  ]
      }
    }
  },

  elements: [
    {
      type: 'Label',
      text: 'A specification containing a vocabulary and set of grammatical rules for instructing a computer or computing device to perform specific tasks.'
    },
    {
      label: 'File Format: how is the specification represented digitally',
      type: 'Control',
      scope: '#/properties/encodingFormat',
      options: {
        showUnfocusedDescription: true
      }
    },

      {label: 'Programming language name',
          type: 'Control',
          scope: '#/properties/programmingLanguage',
          options: {
              showUnfocusedDescription: true,
              childLabelProp: "name",
              detail: {
                  type: 'HorizontalLayout',
                  elements: [
                      { label: 'name', type: 'Control', scope: '#/properties/name' },
                      {
                          label: 'identifier',
                          type: 'Control',
                          scope: '#/properties/identifier'
                      }
                  ]
              }
          }
      },
        {
          label: 'Link to base language definition if this is a profile/restriction/extension of that language specification',
          type: 'Control',
          scope: '#/properties/eccro:ECRRO_0000501',
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

export default resourceType;
