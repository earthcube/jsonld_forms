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
          type: 'VertialLayout',
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
          text: '2.1 Maturity'
        },
        {
          type: 'Control',
          //   "label": "2.1 Maturity",
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
          type: 'Label',
          text: '2.2 Lifecycle'
        },
        {
          type: 'Control',
          //       "label": "2.2 Lifecycle",
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
      type: 'ShowGroup',
      label: 'Funding',
      elements: [
        {
          type: 'Control',
          label: '1.1.1.1 Funder',
          scope: '#/properties/funder',
          options: {
            showUnfocusedDescription: true,
            childLabelProp: 'name'
            //                                                         "detail" : {
            //                                                            "type": "HorizontalLayout",
            //                                                           "elements": [
            //                                                               {
            //                                                                     "label": "Audience Type",
            //                                                                     "type": "Control",
            //                                                                     "scope": "#/properties/audienceType"
            //                                                                },
            //                                                                  {
            //                                                                   "type": "Control",
            //                                                                   "label": "Identifier",
            //                                                                   "scope": "#/properties/identifier"
            //                                                                 },
            //                                                            ]
            //                                                            }
          }
        }
      ]
    },
    {
      type: 'ShowGroup',
      label: 'Stewardship',
      elements: [
        {
          type: 'Control',
          label: '4.1 Stewardship',
          scope: '#/properties/ecrro:ECRRO_0000218',
          options: {
            showUnfocusedDescription: true,
            detail: {
              type: 'HorizontalLayout',
              elements: [
                {
                  label: 'Steward',
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
      label: 'Resource Audience',
      elements: [
        {
          type: 'Control',
          label: 'Audience',
          scope: '#/properties/audience',
          options: {
            childLabelProp: 'audienceType'
            //                              "detail" : {
            //                                 "type": "HorizontalLayout",
            //                                "elements": [
            //                                    {
            //                                          "label": "Audience Type",
            //                                          "type": "Control",
            //                                          "scope": "#/items/audienceType"
            //                                     },
            //                                       {
            //                                        "type": "Control",
            //                                        "label": "Identifier",
            //                                        "scope": "#/items/identifier"
            //                                      },
            //                                 ]
            //                                 }
          }
        },
        {
          type: 'Label',
          text: '5.2 Science Domain'
        },
        {
          type: 'Control',
          label: '5.2 Science Domain',
          scope: '#/properties/about',
          options: {
            showUnfocusedDescription: true,
            detail: {
              type: 'HorizontalLayout',
              elements: [
                {
                  label: 'Name',
                  type: 'Control',
                  scope: '#/properties/name'
                },
                {
                  type: 'Control',
                  label: 'Identifier',
                  scope: '#/properties/identifier'
                }
              ]
            }
          }
        },
        {
          type: 'Control',
          label: '5.3 Current Usage Level',
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
              type: 'HorizontalLayout',
              elements: [
                {
                  label: 'Name',
                  type: 'Control',
                  scope: '#/properties/name'
                },
                {
                  label: 'Value',
                  type: 'Control',
                  scope: '#/properties/value'
                }
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
            showUnfocusedDescription: true
          }
        }
      ]
    }
  ]
};

export default cat3;
