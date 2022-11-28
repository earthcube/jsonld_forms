const resourceType = {
  type: 'Group',
  label: 'Semantic Resource options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {

          "const": [{
              "name": "Conceptual Model",
              "@type": "CreativeWork",
              "url": "http://cor.esipfed.org/ont/earthcube/srt_0000006"
          }]
      }
    }
  },
  elements: [
      {
          type:'Label',
          text: 'An information model represented with artifacts such as diagrams (e.g. UML, concept maps) and associated text, not formalized as an ontology'
      },
    {
      label: 'Specification for the conceptual model',
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

        {label: 'Knowledge representation language or graphic notation',
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
