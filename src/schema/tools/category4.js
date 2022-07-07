const cat4 = {
  type: 'Category',
  label: 'Tell Us About Yourself',
  elements: [
    {
      type: 'Label',
      text: 'Registration Contributor'
    },

    {
      type: 'Control',
      label: 'Resource description contributor details',
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
                  label: 'Identifier for the contributor, ORCID is preferred',
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
