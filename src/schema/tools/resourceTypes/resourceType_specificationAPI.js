const resourceType = {
  type: 'Group',
  label: 'Specification of Application Programming Interface (API)',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
        //const: 'Specification'
         "const": [
                  {
                  "name":
                  "API",
                  "@type":
                  "CreativeWork",
                  "url":
                  "http://cor.esipfed.org/ont/earthcube/SPKT_0000012"
                  }
                  ]
      }
    }
  },


  elements: [
    {
      type: 'Label',
      text: 'Specification of an interface or communication protocol between a client and a server intended to simplify the building of client-side software in a local network environment.'
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
          label: 'Base specification if this spec extends or restricts some other specification',
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
        },
      {label: 'Communication protocol for API',
          type: 'Control',
          scope: '#/properties/ecrro:ECRRO_0000502',
          options: {
              showUnfocusedDescription: true,
              detail: {
                  type: 'HorizontalLayout',
                  elements: [
                      {label: 'communication protocol',
                          type: 'Control',
                          scope: '#/properties/value/',
                          options:{"childLabelProp": "name"}
                      }
                  ]
              }
          }
      },

      {label: 'Interface Functions',
          type: 'Control',
          scope: '#/properties/applicationCategory',
          options: {
              autocomplete: true,
              suggestion: []
          }
      },
      // TBD-- figure out how to add subfunction categories.

      { label: 'Specification(s) of interface operation and interaction protocols',
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

      {label: 'Potential Actions',
          type: 'Control',
          scope: '#/properties/potentialAction',
          options: {
              showUnfocusedDescription: true,
              detail: {
                  type: 'VerticalLayout',
                  elements: [

                      { label: 'name',
                          type: 'Control',
                          scope: '#/properties/name' },
                      {
                          label: 'description',
                          type: 'Control',
                          scope: '#/properties/target/properties/description'
                      },
                      {label: 'request template',
                          type: 'Control',
                          scope: '#/properties/target/properties/urlTemplate'
                      }

                  ]
              }
          }
      }
  ]
};


export default resourceType;
