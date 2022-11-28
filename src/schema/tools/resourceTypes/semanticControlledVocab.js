const resourceType = {
  type: 'Group',
  label: 'Semantic Resource options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
          "const": [{
              "name":
              "Controlled Vocabulary",
              "@type":
              "CreativeWork",
              "url":
              "http://cor.esipfed.org/ont/earthcube/srt_0000004"
          }]
      }
     }
  },
  elements: [
    {
      label: 'Specification for the controlled vocabulary',
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
    },
        {label: 'Knowledge representation language',
          type: 'Control',
          scope: '#/properties/programmingLanguage',
          options: {
            showUnfocusedDescription: true,
            detail: {
              type: 'HorizontalLayout',
              elements: [
                { label: 'Language name', type: 'Control', scope: '#/properties/name' },
                { label: 'Identifier', type: 'Control', scope: '#/properties/identifier' }
              ]
            }
          }
        },
        {label: 'Encoding Format for representations of the resource',
          type: 'Control',
          scope: '#/properties/encodingFormat',
          options: {
            showUnfocusedDescription: true
          }
        }
      ]
    };

export default resourceType;
