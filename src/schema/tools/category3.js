const cat3 = {
  type: 'Category',
  label: 'Availability and Stewardship',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/audience',
      options: {
        childLabelProp: "audienceType",
        showUnfocusedDescription: true,
        detail: {
          // type: 'HorizontalLayout',
          // elements: [
          //   {
          //     label: 'Intended Users',
          //     type: 'Control',
          //     scope: '#/properties/audienceType',
          //     options: {
          //       // enum:['Data Producers',
          //       //     'Data Users',
          //       //     'Data Facilities and Repositories' +
          //       //     'Technologists' ,
          //       //     'Data Managers' ,
          //       //     'Developers' ,
          //       //     'Scientists' ,
          //       //     'Infomaticists' ,
          //       //     'Members of the Public' ,
          //       //     'All']
          //     }
          //   }
          //
          // ]
        }
      }
    },


    {label: "Primary Publication",
      type: "ShowGroup",
      elements: [
        {
          "type": "Label",
          "text": "Cite important publication(s) about the resource. EXAMPLE: Barnes, Stanley L., 1980, Report on a Meeting to Establish a Common Doppler Radar Data Exchange Format: Bulletin of the American Meteorological Society, vol. 61, no. 11, pp. 1401–1404. (accessed at http://www.jstor.org/stable/26221476)"
        },
        { "type": "Control",
          "scope": "#/properties/ecrro:ECRRO_0000600",
          "options": {
            "showUnfocusedDescription": true,
            detail: {
              type: 'VerticalLayout',
              elements: [
                {
                  label: 'Citation',
                  type: 'Control',
                  scope: '#/properties/value',
                  options:
                      {"multi": true}
                }
              ]
            }
          }
        }
      ]
    },
    {label: 'Related Resources',
          type: 'Control',
          scope: '#/properties/isRelatedTo',
          options: {
            "childLabelProp": "name",
            showUnfocusedDescription: true,
            "detail": {
              "type": "VerticalLayout",
              "elements": [
                {
                  "label": "Type",
                  "type": "Control",
                  "scope": "#/properties/@type",
                  "options": {
                    "suggestion": [
                      "Dataset",  "Article", "Thesis", "Guide",  "Review",
                      "type name of other schema.org entity"
                    ] }

                },
                {
                  "label": "Name",
                  "type": "Control",
                  "scope": "#/properties/name"

                },
                {
                  "label": "URL",
                  "type": "Control",
                  "scope": "#/properties/url",
                  "description":"An Identifier (e.g. ORCID) or identifying property. ",

                },
              ]}
          }
        },
    {label: 'Stewardship: who is responsible for resource maintenance or operation',
      type: 'ShowGroup',
      elements: [
        {label: 'Stewardship',
          type: 'Control',
          scope: '#/properties/ecrro:ECRRO_0000218',
          options: {
            showUnfocusedDescription: true,
            detail: {
              type: 'HorizontalLayout',
              elements: [
                {
                  label: 'Steward',
                  type: 'Control',
                  scope: '#/properties/value',
                  "options": { "elementLabelProp": "name",
                    "showUnfocusedDescription": true,
                    "detail": {
                      "type": "VerticalLayout",
                      "elements": [

                        {
                          "label": "Type",
                          "type": "Control",
                          "scope": "#/properties/@type"

                        },
                        {
                          "label": "Name",
                          "type": "Control",
                          "scope": "#/properties/name"

                        },
                        {
                          "label": "Identifier",
                          "type": "Control",
                          "scope": "#/properties/identifier",
                          "description":"An Identifier (e.g. ORCID) or identifying property. ",

                        },
                      ]}
                  }

                }
              ]
            }
          }
        }
      ]
    },

    {
      type: 'Group',
      label: false,
      rule: {
        effect: 'HIDE',
        condition: {
          scope: '#/properties/mainEntity/',
          schema: {
            "const": [
              {
                "name":
                    "Dataset",
                "@type":
                    "CreativeWork",
                "url":
                    "http://schema.org/Dataset"
              }
            ]
          }
        }
      },
      elements: [

        {
          label: 'Development maturity and Lifecyle status',
          type: 'ShowGroup',
          elements: [
            //ecrro:ECRRO_0000600 Primary publication
            {
              label: "Maturity of resource",
              type: 'Control',
              scope: '#/properties/ecrro:ECRRO_0000138',
              options: {
                showUnfocusedDescription: true,
                detail: {
                  type: 'HorizontalLayout',
                  elements: [
                    {
                      label: 'Status',
                      type: 'Control',
                      scope: '#/properties/value',
                      options: {
                        detail: {
                          type: 'HorizontalLayout',
                          elements: [
                            {
                              label: 'Name',
                              type: 'Control',
                              scope: '#/properties/name'
                            },
                            {
                              label: 'identifier',
                              type: 'Control',
                              scope: '#/properties/identifier'
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            },

            {
              "label": "Lifecycle/Development status",
              type: 'Control',
              scope: '#/properties/ecrro:ECRRO_0000219',
              options: {
                showUnfocusedDescription: true,
                detail: {
                  type: 'HorizontalLayout',
                  elements: [
                    {
                      label: 'Lifecycle',
                      type: 'Control',
                      scope: '#/properties/value',
                      options: {
                        detail: {
                          type: 'HorizontalLayout',
                          elements: [
                            {
                              label: 'Name',
                              type: 'Control',
                              scope: '#/properties/name'
                            },
                            {
                              label: 'identifier',
                              type: 'Control',
                              scope: '#/properties/identifier'
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          label: 'Intended Users, target science communities, and usage level',
          type: 'ShowGroup',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/ecrro:ECRRO_0000017',
              options: {
                showUnfocusedDescription: true,
                elementLabelProp:'name',
                detail: {
                  type: 'HorizontalLayout',
                  elements: [
                    {
                      label: 'Current Usage Level',
                      type: 'Control',
                      scope: '#/properties/value'
                    }
                  ]
                }
              }
            },
            {
              label: 'Target science community',
              type: 'Control',
              scope: '#/properties/about',
              options: {
                showUnfocusedDescription: true,
                detail: {
                  type: 'HorizontalLayout',
                  elements: [
                    {
                      type: 'Control',
                     scope: '#/properties/name',
                      options: {}
                    }
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  ]
};

export default cat3;
