import {
  functionallsuggestion,
  runtimeSuggestionList
} from '../controlledFromGooglesheet';
import _ from 'lodash';

let resourceTypeBase = {
  type: 'Group',
  label: 'Software options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
       // const: 'Software'
         "const":
[
{
"name":
"Software",
"@type":
"CreativeWork",
"url":
"http://cor.esipfed.org/ont/earthcube/ECRRO_0000206"
}
]
      }
    }
  },
  elements: [
     {
      type: 'Label',
      text: 'Software Functions'
    },
    {
      label: 'Function',
      type: 'Control',
      scope: '#/properties/applicationCategory',
      options: {
        suggestion: [],

        autocomplete: true
      }
    },

    {
      label: 'Runtime Environment',
      type: 'Control',
      scope: '#/properties/runtimePlatform',
      options: {
        suggestion: [],
        showUnfocusedDescription: true
      }
    },
    {"label": "Software Developer",
      type:'ShowGroup',
      elements: [
        {
          "type": "Control",
          "scope": "#/properties/developer",
          "options": {
            "elementLabelProp": "name",
            "showUnfocusedDescription": true,
            "detail": {
              "type": "VerticalLayout",
              "elements": [
                {
                  "label": "Type",
                  "type": "Control",
                  "scope": "#/properties/@type",
                  default: 'Person'
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
                  "description": "An Identifier (e.g. ORCID) or identifying property. ",

                },
              ]
            }
          }
        }
      ]
    },

    {
      type: 'ShowGroup',
      label: 'Describe the Implementation',
      elements: [
        {label: 'Programming language(s) used',
          type: 'Control',
          scope: '#/properties/programmingLanguage',
          options: {
            showUnfocusedDescription: true,
            childLabelProp: "name",
            detail: {
              type: 'HorizontalLayout',
              elements: [
                { label: 'name', type: 'Control', scope: '#/properties/name' },
                {
                  label: 'identifier',
                  type: 'Control',
                  scope: '#/properties/identifier'
                }
              ]
            }
          }
        },

        {
          label: 'Interfaces implemented by the software',
          type: 'Control',
          scope: '#/properties/ecrro:ECRRO_0000503',
          options: {
            showUnfocusedDescription: true,
            detail: {
              type: 'HorizontalLayout',
              elements: [
                {
                  label: 'Interfaces list',
                  type: 'Control',
                  scope: '#/properties/value/'
                }
              ]
            }
          }
        },

        {
          label: 'Input/Output Formats',
          type: 'ShowGroup',
          elements:
              [
                {
                  type: 'Control',
                  scope: '#/properties/supportingData',
                  options: {
                    showUnfocusedDescription: true,
                    detail: {
                      type: 'VerticalLayout',
                      elements: [
                        {
                          label: 'name',
                          type: 'Control',
                          scope: '#/properties/name'
                        },
                        {
                          label: 'position',
                          type: 'Control',
                          scope: '#/properties/position'
                        },
                        {
                          label: 'encodingFormat',
                          type: 'Control',
                          scope: '#/properties/encodingFormat'
                        }
                      ]
                    }
                  }
                }
              ]
        }
      ]
    },
    {
      type: 'ShowGroup',
      label: 'Additional Details (code repository, specifications, installer, run in browser',
      elements: [
        {
          label: 'Code Repository (e.g. Github or other repository URL)',
          type: 'ShowGroup',
          elements: [

            {
              label: false,
              type: 'Control',
              scope: '#/properties/codeRepository',
              options: {
                showUnfocusedDescription: true,
                detail: {
                  type: 'HorizontalLayout',
                  elements: [
                    {label: 'Repository name', type: 'Control', scope: '#/properties/name'},
                    {label: 'url', type: 'Control', scope: '#/properties/url'}
                  ]
                }
              }
            }
          ]
        },
        {
          type: 'Label',
          text: 'Applicable specifications'
        },
        {
          label: ' Conforms to',
          type: 'Control',
          scope: '#/properties/isRelatedTo',
          options: {
            showUnfocusedDescription: true
          }
        },
        {label: 'Dependencies and their URL',
          type: 'Control',
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
          text: 'Installer '
        },
        {
          label: 'URL to install code',
          type: 'Control',
          scope: '#/properties/installURL',
          options: {
            showUnfocusedDescription: true,
            detail: {
              type: 'HorizontalLayout',
              elements: [
                { label: 'name', type: 'Control', scope: '#/properties/name' },
                {
                  label: 'identifier',
                  type: 'Control',
                  scope: '#/properties/url'
                }
              ]
            }
          }
        },
        {label: 'URL to run application in a web browser',
          type: 'ShowGroup',
          elements: [
            {
              label: 'Web Application URL',
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
                    {label: 'name', type: 'Control', scope: '#/properties/name'},
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
                            {label: 'Method', type: 'Control', scope: '#'}
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
    }
  ]
};

// function to add suggested values in the uiSchema.
const resourceType = function() {
  let functionsuggestionList = functionallsuggestion();
  let applicationCategory = _.find(resourceTypeBase.elements, o => {
    return o.scope === '#/properties/applicationCategory';
  });
  applicationCategory.options.suggestion = functionsuggestionList;

  let runtime = runtimeSuggestionList();
  let runtimeElement = _.find(resourceTypeBase.elements, o => {
    return o.scope === '#/properties/runtimePlatform';
  });
  runtimeElement.options.suggestion = runtime;

  return resourceTypeBase;
};

resourceTypeBase = resourceType();

export default resourceTypeBase;
