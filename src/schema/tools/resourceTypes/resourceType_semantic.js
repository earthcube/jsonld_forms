const resourceType = {
  type: 'Group',
  label: 'Semantic Resource options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
// any of the semanticResource subclasses...
//  https://github.com/eclipsesource/jsonforms/issues/1141 helped a little
         oneof:[
           [{
             "name": "Semantic Resource",
             "@type": "CreativeWork",
             "url": "http://cor.esipfed.org/ont/earthcube/ECRRO_0000210"
            }],
           [{
             "name":
             "Glossary",
             "@type": "CreativeWork",
             "url": "http://cor.esipfed.org/ont/earthcube/srt_0000001"
           }],
           [{
             "name":
             "Thesaurus",
             "@type": "CreativeWork",
             "url": "http://cor.esipfed.org/ont/earthcube/srt_0000002"
           }],
           [{
             "name": "Ontology",
             "@type": "CreativeWork",
             "url": "http://cor.esipfed.org/ont/earthcube/srt_0000003"
           }],
          [ {
             "name": "Controlled Vocabulary",
             "@type": "CreativeWork",
             "url": "http://cor.esipfed.org/ont/earthcube/srt_0000004"
           }],
           [{
             "name":"Taxonomy",
             "@type": "CreativeWork",
             "url": "http://cor.esipfed.org/ont/earthcube/srt_0000005"
           }],
           [{
             "name": "Conceptual Model",
             "@type": "CreativeWork",
             "url": "http://cor.esipfed.org/ont/earthcube/srt_0000006"
           }],
           [{
             "name": "RDF Vocabulary",
             "@type": "CreativeWork",
             "url": "http://cor.esipfed.org/ont/earthcube/srt_0000007"
           }],
           [{
             "name": "SKOS Vocabulary",
             "@type": "CreativeWork",
             "url": "http://cor.esipfed.org/ont/earthcube/srt_0000008"
           }]
         ]
      }
    }
  },
  elements: [
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
