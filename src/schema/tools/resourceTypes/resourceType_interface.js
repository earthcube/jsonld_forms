//import {functionsuggestion as functionsuggestion} from '../controlledFromGooglesheet'

const resourceType = {
  type: 'Group',
  label: 'Interface/API options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/properties/name',
      schema: {
        const: 'Interface/API'
        // "const": "Dataset"
      }
    }
  },
  elements: [
    {
      type: 'Label',
      text: 'Community specification'
    },
    {
      label: 'Protocol',
      type: 'Control',
      scope: '#/properties/ecrro:ECRRO_0000503',
      options: {
        showUnfocusedDescription: true,
        detail: {
          type: 'HorizontalLayout',
          elements: [
            { label: 'name', type: 'Control', scope: '#/properties/name' },
            { label: 'Value', type: 'Control', scope: '#/properties/value/' }
          ]
        }
      }
    },
    {
      type: 'Label',
      text: 'General Functions'
    },
    {
      label: 'General Functions',
      type: 'Control',
      scope: '#/properties/applicationCategory',
      options: {
        autocomplete: true,
        showUnfocusedDescription: true
        //                   "suggestion": functionsuggestion()
      }
    },
    //     {
    //           "type": "ShowGroup",
    //           "label": "add additional function details",
    //           "elements": [
    //                   {
    //                     "type": "Label",
    //                     "text": "Function subcategory"
    //                   },
    //                   {
    //                     "label": "Function subcategory",
    //                     "type": "Control",
    //                     "scope": "#/properties/applicationCategory",
    //                     "options": {
    //                       "showUnfocusedDescription": true
    //                     }
    //                   },
    //                   ]},
    {
      type: 'ShowGroup',
      label: 'Describe the interface',
      elements: [
        {
          type: 'Label',
          text: 'Conforms to'
        },
        {
          label: ' Conforms to',
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
        {
          type: 'Label',
          text: 'Potential Actions'
        },
        {
          label: 'Potential Actions',
          type: 'Control',
          scope: '#/properties/potentialAction',
          options: {
            showUnfocusedDescription: true,
            detail: {
              type: 'VerticalLayout',
              elements: [
                {
                  label: '@type',
                  type: 'Control',
                  scope: '#/properties/target/properties/@type'
                },
                { label: 'name', type: 'Control', scope: '#/properties/name' },
                {
                  label: 'description',
                  type: 'Control',
                  scope: '#/properties/target/properties/description'
                },
                {
                  label: 'urlTemplate',
                  type: 'Control',
                  scope: '#/properties/target/properties/urlTemplate'
                },

                {
                  label: 'httpMethod',
                  type: 'Control',
                  scope: '#/properties/target/properties/httpMethod',
                  options: {
                    detail: {
                      type: 'HorizontalLayout',
                      elements: [
                        { label: 'Method', type: 'Control', scope: '#' }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    }
  ]
};

export default resourceType;
