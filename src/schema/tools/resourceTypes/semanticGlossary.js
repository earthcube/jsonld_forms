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
                      "Glossary",
                  "@type": "CreativeWork",
                  "url": "http://cor.esipfed.org/ont/earthcube/srt_0000001"
              }]
      }
    }
  },
  elements: [
      {
          type: 'Label',
          rule: {
              effect: 'SHOW',
              condition: {
                  scope: '#/properties/mainEntity/',
                  schema: {
                      oneof: [
                          [{
                              "name": "Semantic Resource",
                              "@type": "CreativeWork",
                              "url": "http://cor.esipfed.org/ont/earthcube/ECRRO_0000210"
                          }]
                      ]
                  }
              }
          },
       text: 'Note that more specific sub types for semantic resource can be selected;' +
           ' these include: Glossary; ' +
           'Thesaurus; ' +
           'Ontology; ' +
           'Controlled Vocabulary; ' +
           'Taxonomy; ' +
           'Conceptual Model; ' +
           'RDF Vocabulary; ' +
           'SKOS Vocabulary. ' +
           'Selecting one of these provides a more informative metadata record.'
      },


    {
      label: 'Specification for the semantic resource',
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

        {label: 'Programming or knowledge representation language',
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
