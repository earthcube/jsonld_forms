import {functionsuggestion, runtimeSuggestionList} from '../controlledFromGooglesheet'
import _ from 'lodash'

const resourceTypeBase = {
  "type": "Group",
  "label": "Software options",
  "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/mainEntity/properties/name",
                    "schema": {
                      "const": "Software"
                     // "const": "Dataset"
                    }
                }
  },
  "elements": [
        {
          "type": "Label",
          "text": "Interface"
        },
        {
          "label": "Protocol",
          "type": "Control",
          "scope": "#/properties/ecrro:ECRRO_0000502",
                "options": {
                    "showUnfocusedDescription": true,
                    "detail": {
                         "type": "HorizontalLayout",
                         "elements": [
                         { "label": "name",
                         "type": "Control",
                         "scope": "#/properties/name"},
                      { "label": "identifier",
                      "type": "Control",
                      "scope": "#/properties/identifier"}
                         ]
                    }
                  }
        },
        {
                  "type": "Label",
                  "text": "General Functions"
                },
                {
                  "label": "Function",
                  "type": "EcFunction",
                  "scope": "#/properties/applicationCategory",
                  "options": {
                         "suggestion": [],

                                   "autocomplete": true,


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
//                   //  "label": "Protocol",
//                     "type": "Control",
//                     "scope": "#/properties/applicationCategory",
//                     "options": {
//                       "showUnfocusedDescription": true
//                     }
//                   },
//                   ]
//      },
        {
                 "type": "Label",
                 "text": "Runtime Environment"
               },
               {
                 "label": "Runtime Environment",
                 "type": "Control",
                 "scope": "#/properties/runtimePlatform",
                 "options": {
                 "suggestion": [],
                   "showUnfocusedDescription": true
                 }
               },
       {
             "type": "ShowGroup",
             "label": "Describe the Implementation",
             "elements": [
                  {
                      "type": "Label",
                      "text": "Implementation Language"
                    },
                    {
                      "label": " Conforms to",
                      "type": "Control",
                      "scope": "#/properties/programmingLanguage",
"options": {
                    "showUnfocusedDescription": true,
                    "detail": {
                         "type": "HorizontalLayout",
                         "elements": [
                         { "label": "name",
                         "type": "Control",
                         "scope": "#/properties/name"},
                      { "label": "identifier",
                      "type": "Control",
                      "scope": "#/properties/identifier"}
                         ]
                    }
                  }
                    }, {
                                            "type": "Label",
                                            "text": "Interface specification"
                                          },
                                          {
                                            "label": " Interface specification",
                                            "type": "Control",
                                            "scope": "#/properties/ecrro:ECRRO_0000503",
                      "options": {
                                          "showUnfocusedDescription": true,
                                          "detail": {
                                               "type": "HorizontalLayout",
                                               "elements": [
                                               { "label": "Interfaces",
                                               "type": "Control",
                                               "scope": "#/properties/value/"}

                                               ]
                                          }
                                        }
                                          },
                    {
                          "type": "Label",
                          "text": "Input and Output Formats"
                        },
                        {
                          "label": " Input Formats",
                          "type": "Control",
                          "scope": "#/properties/supportingData",
                          "options": {
                            "showUnfocusedDescription": true,
                                        "detail": {
                                            "type": "HorizontalLayout",
                                            "elements": [

                                                 { "label": "name",
                                                 "type": "Control",
                                                 "scope": "#/properties/name"},
                                                  { "label": "position",
                                                    "type": "Control",
                                                  "scope": "#/properties/position"},
                                          { "label": "encodingFormat",
                                                    "type": "Control",
                                                  "scope": "#/properties/encodingFormat"},
                                              ]
                                         }

                          }
                        },
]
        },
         {
                     "type": "ShowGroup",
                     "label": "additional Details",
                     "elements": [
                          {
                              "type": "Label",
                              "text": "codeRepository Github or other repository URL"
                            },
                            {
                              "label": "codeRepository",
                              "type": "Control",
                              "scope": "#/properties/codeRepository",
"options": {
                    "showUnfocusedDescription": true,
                    "detail": {
                         "type": "HorizontalLayout",
                         "elements": [
                         { "label": "name",
                         "type": "Control",
                         "scope": "#/properties/name"},
                      { "label": "url",
                      "type": "Control",
                      "scope": "#/properties/url"}
                         ]
                    }
                  }
                            },
                         {
                            "type": "Label",
                            "text": "Interface"
                          },
                          // might eed to be it's own
                          {
                            "label": " Conforms to",
                            "type": "Control",
                            "scope": "#/properties/isRelatedTo",
                            "options": {
                              "showUnfocusedDescription": true
                            }
                          },
                          {
                                "type": "Label",
                                "text": "Installer "
                              },
                              {
                                "label": "installURL",
                                "type": "Control",
                                "scope": "#/properties/installURL",
                                "options": {
                                        "showUnfocusedDescription": true,
                                        "detail": {
                                             "type": "HorizontalLayout",
                                             "elements": [
                                             { "label": "name",
                                             "type": "Control",
                                             "scope": "#/properties/name"},
                                          { "label": "identifier",
                                          "type": "Control",
                                          "scope": "#/properties/url"}
                                             ]
                                        }
                                      }
                  },

                        {
                              "type": "Label",
                              "text": "Web Application URL "
                            },
                            {
                              "label": "Web Application URL",
                              "type": "Control",
                              "scope": "#/properties/potentialAction",
                              "options": {
                                "showUnfocusedDescription": true,
                                "detail": {
                                     "type": "VerticalLayout",
                                     "elements": [
                                       { "label": "@type",
                                       "type": "Control",
                                       "scope": "#/properties/target/properties/@type"},
                                                 { "label": "name",
                                                  "type": "Control",
                                                  "scope": "#/properties/name"},
                                                   { "label": "description",
                                                 "type": "Control",
                                                 "scope": "#/properties/target/properties/description"},
                                              { "label": "urlTemplate",
                                              "type": "Control",
                                              "scope": "#/properties/target/properties/urlTemplate"},

                                               { "label": "httpMethod",
                                                "type": "Control",
                                                "scope": "#/properties/target/properties/httpMethod",
                                                "options": {
                                                   "detail": {
                                                     "type": "HorizontalLayout",
                                                     "elements": [
                                                        { "label": "Method",
                                                          "type": "Control",
                                                          "scope": "#"
                                                          },
                                                       ]
                                                      }
                                                      }
                                                      }
                                               ]
                                        }
                              }
                            },
                      ]
         }
    ]
}
const resourceType = function() {
let functionsuggestionList = functionsuggestion()
let applicationCategory = _.find(resourceTypeBase.elements, (o)=> {return o.scope === "#/properties/applicationCategory"} )
applicationCategory.options.suggestion = functionsuggestionList

let runtime = runtimeSuggestionList()
let runtimeElement = _.find(resourceTypeBase.elements, (o)=> {return o.scope === "#/properties/runtimePlatform"} )
runtimeElement.options.suggestion = runtime

return resourceTypeBase

}
export default resourceType
