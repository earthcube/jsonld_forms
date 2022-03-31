import { functionsuggestion } from '../controlledFromGooglesheet';
import _ from 'lodash';

const resourceTypeBase = {
  type: 'Group',
  label: 'Service Instance options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
       // const: 'Service Instance'
         "const":
[
{
"name":
"Service Instance",
"@type":
"CreativeWork",
"url":
"http://cor.esipfed.org/ont/earthcube/ECRRO_0000202"
}
]
      }
    }
  },
  elements: [
    {
      type: 'Label',
      text: 'Interface'
    },
    {
      label: 'Interface',
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
        showUnfocusedDescription: true,
        suggestion: [],

        autocomplete: true
      }
    },
    {
      type: 'ShowGroup',
      label: 'add additional function details',
      elements: [
        {
          type: 'Label',
          text: 'Function subcategory'
        },
        {
          label: 'Function subcategory',
          type: 'Control',
          scope: '#/properties/applicationCategory',
          options: {
            showUnfocusedDescription: true
          }
        }
      ]
    },
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
    },
    {
      type: 'ShowGroup',
      label: 'Service Endpoint(s)',
      elements: [
        {
          type: 'Label',
          text: 'Service Endpoint URL'
        },
        {
          label: ' Endpoint',
          type: 'Control',
          scope: '#/properties/url',
          options: {
            showUnfocusedDescription: true
          }
        },
        {
          type: 'Label',
          text: 'MACHINE READBALE ENDPOINT (NOT SURE WHAT PROPERTY)'
        },
        {
          label: ' MACHINE READBALE ',
          type: 'Control',
          scope: '#/properties/url',
          options: {
            showUnfocusedDescription: true
          }
        }
      ]
    }
  ]
};
const resourceType = function() {
  let functionsuggestionList = functionsuggestion();
  let applicationCategory = _.find(resourceTypeBase.elements, o => {
    return o.scope === '#/properties/applicationCategory';
  });
  console.log(applicationCategory, functionsuggestionList);
  applicationCategory.options.suggestion = functionsuggestionList;
  return resourceTypeBase;
};
export default resourceType;
