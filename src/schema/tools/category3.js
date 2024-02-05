const cat3 = {
  type: 'Category',
  label: 'Availability and Stewardship',
  elements: [
    {
      type: 'Label',
      text: '1. License'
    },
    {
      type: 'Control',
      scope: '#/properties/license',
      options: {
        detail: {
          type: 'VerticalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/name',
              options: {}
            }
          ]
        }
      }
    },
    {
      type: 'ShowGroup',
      label: 'Lifecyle',
      elements: [
        {
          type: 'Label',
          text: 'Maturity'
        },
        {
          type: 'Control',
          //   "label": "Maturity",
          scope: '#/properties/ecrro:ECRRO_0000138',
          options: {
            "hideAvatar": true,
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
          type: 'Label',
          text: 'Lifecycle'
        },
        {
          type: 'Control',
          //       "label": "2.2 Lifecycle",
          scope: '#/properties/ecrro:ECRRO_0000219',
          options: {
            "hideAvatar": true,
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
      type: 'ShowGroup',
      label: 'Funding',
      elements: [
        {
          type: 'Control',
          label: 'Grants',
          scope: '#/properties/funding',
          options: {
            "hideAvatar": true,
            showUnfocusedDescription: true,
            childLabelProp: 'name',
            "detail" : {
               "type": "HorizontalLayout",
              "elements": [
                  {
                        "label": "Name",
                        "type": "Control",
                        "scope": "#/properties/name"
                   },
                     {
                      "type": "Control",
                      "label": "Identifier",
                      "scope": "#/properties/identifier"
                    },
                {
                  "type": "Control",
                  "label": "Funder",
                  "scope": "#/properties/funder"
                }
               ]
               }
          }
        }
      ]
    },
    {
      type: 'ShowGroup',
      elements: [
        {
          type: 'Control',
          label: 'Stewardship',
          scope: '#/properties/ecrro:ECRRO_0000218',
          options: {
            "hideAvatar": true,
            showUnfocusedDescription: true,
            detail: {
              type: 'HorizontalLayout',
              elements: [
                {
                  label: 'Steward',
                  type: 'Control',
                  scope: '#/properties/value',
                  "options": {
                    "elementLabelProp": "name",
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
      type: 'ShowGroup',
      label: 'Resource Audience',
      elements: [
        {
          type: 'Control',
          label: 'Audience',
          scope: '#/properties/audience',
          options: {
            childLabelProp: 'audienceType'
          }
        },

        {
          type: 'Control',
          label: 'Science Domain',
          scope: '#/properties/about',
          options: {
            showUnfocusedDescription: true,
            childLabelProp: 'name'
          }
        },
        {
          type: 'Control',
          label: 'Current Usage Level',
          scope: '#/properties/ecrro:ECRRO_0000017',
          options: {
            showUnfocusedDescription: true,
            detail: {
              type: 'HorizontalLayout',
              elements: [
                {
                  label: 'Value',
                  type: 'Control',
                  scope: '#/properties/value'
                }
              ]
            }
          }
        }
      ]
    },
    {
      type: 'ShowGroup',
      label: 'Related Resources',
      elements: [
        {
          type: 'Label',
          text: '6.1 Dependencies and thier URL'
        },
        {
          type: 'Control',
          label: '6.1 Dependencies and thier URL',
          scope: '#/properties/dependencies',
          options: {
            detail: {
              showUnfocusedDescription: true,
              type: 'HorizontalLayout',
              elements: [

                {
                  label: 'Dependencies',
                  type: 'Control',
                  scope: '#/properties/value',
                  options: {"elementLabelProp": "name",
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
                          "label": "Url",
                          "type": "Control",
                          "scope": "#/properties/url",
                          "description":"An Identifier (e.g. ORCID) or identifying property. ",

                        },
                      ]}
                  }
                },

              ]
            }
          }
        },
        {
          type: 'Label',
          text: '6.2 Related Resources'
        },
        {
          type: 'Control',
          label: '6.2 Related Resources',
          scope: '#/properties/isRelatedTo',
          options: {
            "elementLabelProp": "name",

            showUnfocusedDescription: true,
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
                  "label": "URL",
                  "type": "Control",
                  "scope": "#/properties/url",
                  "description":"An Identifier (e.g. ORCID) or identifying property. ",

                },
              ]}
          }
        }
      ]
    }
  ]
};

export default cat3;
