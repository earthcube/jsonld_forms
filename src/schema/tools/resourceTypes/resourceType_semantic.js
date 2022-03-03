const resourceType = {
  "type": "Group",
   "label": "Semantic Resource options",
  "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/mainEntity/properties/name",
                    "schema": {
                      "const": "Semantic Resource"
                     // "const": "Dataset"
                    }
                }
  },
  "elements": [
          {
              "type": "Label",
              "text": "Semantic Resource Type"
            },
            {
              "label": "Semantic  Resource Type",
              "type": "Control",
              "scope": "#/properties/dct:conformsTo",
              "options": {
                "showUnfocusedDescription": true
              }
           },
           {
                 "type": "ShowGroup",
                 "label": "add Resourse Details",
                 "elements": [
                       {
                             "type": "Label",
                             "text": "Model Language"
                        },
                       {
                         "label": "Model Language",
                         "type": "Control",
                         "scope": "#/properties/programmingLanguage",
                         "options": {
                           "showUnfocusedDescription": true
                         }
                      },
                      {
                      "type": "Label",
                      "text": "Specification Type"
                      },
                        {
                          "label": "encodingFormat",
                          "type": "Control",
                          "scope": "#/properties/encodingFormat",
                          "options": {
                            "showUnfocusedDescription": true
                          }
                        },
                   ]
           }

    ]
}

export default resourceType
