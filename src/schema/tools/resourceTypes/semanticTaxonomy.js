const resourceType = {
  type: 'Group',
  label: 'Semantic Resource options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {

          "const": [{
              "name": "Taxonomy",
              "@type": "CreativeWork",
              "url": "http://cor.esipfed.org/ont/earthcube/srt_0000005"
          }]
      }
    }
  },
  elements: [
      {
          type:'Label',
          text:'hierarchy of labeled concepts organized as a tree structure; generally the content should cover the concept space without overlap ata any given hierarchy level.'
      },
   {
      label: 'Specification for the Taxonomy',
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
