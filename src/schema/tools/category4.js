const cat4 = {
  type: 'Category',
  label: 'Tell Us About Yourself',
  elements: [
    {
      type: 'Label',
      text: '4.1. Registry Contributor'
    },

    {
      type: 'Control',
      label: '1.3.1.1 Registry Contributor Details',
      scope: '#/properties/ecrro:ECRRO_0001301', // flattended
      //  "scope": "#/properties/additionalProperty/items/anyOf/8/",
      options: {
        showUnfocusedDescription: true,
        detail: {
          type: 'VerticalLayout',
          elements: [
            {
              type: 'HorizontalLayout',
              elements: [
                {
                  label: 'Name',
                  type: 'Control',
                  scope:
                    '#/properties/value/properties/contributor/properties/name'
                },
                {
                  label: 'Identifier',
                  type: 'Control',
                  scope:
                    '#/properties/value/properties/contributor/properties/identifier'
                }
              ]
            },
            {
              label: 'Date Published',
              type: 'Control',
              scope: '#/properties/value/properties/datePublished'
            }
          ]
        }
      }
    }
  ]
};

export default cat4;
