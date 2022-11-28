const resourceType = {
  type: 'Group',
  label: 'Web Service Convention',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
         "const": [
                  {
                  "name":
                  "Web Service Convention",
                  "@type":
                  "CreativeWork",
                  "url":
                  "http://cor.esipfed.org/ont/earthcube/SPKT_0000003"
                  }
                  ]
      }
    }
  },

  elements: [
    {
      type: 'Label',
      text: 'Specification of the conventions to be used when implementing a given web service (WebAPI); includes communication protocols, operations, and interchange formats for messages and data input/output'
    },

        {label: 'Profile of',
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
                      {label: 'urlTemplate',
                          type: 'Control',
                          scope: '#/properties/target/properties/urlTemplate'
                      },

                      {
                          label: 'httpMethod',
                          type: 'Control',
                          scope: '#/properties/target/properties/httpMethod',
                          options: {
                              // detail: {
                              //   type: 'HorizontalLayout',
                              //   elements: [
                              //     { label: 'Method', type: 'Control', scope: '#' }
                              //   ]
                              // }
                          }
                      }
                  ]
              }
          }
      }
  ]
};

export default resourceType;
