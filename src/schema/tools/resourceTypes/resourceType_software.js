const resourceType = {
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
          "scope": "#/properties/ecrro:ECRRO_0000503",
          "options": {
            "showUnfocusedDescription": true
          }
        },
        {
                  "type": "Label",
                  "text": "General Functions"
                },
                {
                  "label": "Protocol",
                  "type": "Control",
                  "scope": "#/properties/applicationCategory",
                  "options": {
                    "showUnfocusedDescription": true
                  }
     },
    {
          "type": "ShowGroup",
          "label": "add additional function details",
          "elements": [
                  {
                    "type": "Label",
                    "text": "Function subcategory"
                  },
                  {
                    "label": "Protocol",
                    "type": "Control",
                    "scope": "#/properties/applicationCategory",
                    "options": {
                      "showUnfocusedDescription": true
                    }
                  },
                  ]
     },
        {
                 "type": "Label",
                 "text": "Runtime Environment"
               },
               {
                 "label": "Runtime Environment",
                 "type": "Control",
                 "scope": "#/properties/runtimePlatform",
                 "options": {
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
                        "showUnfocusedDescription": true
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
                            "showUnfocusedDescription": true
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
                                "showUnfocusedDescription": true
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
                                  "showUnfocusedDescription": true
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
                                "showUnfocusedDescription": true
                              }
                            },
                      ]
         }
    ]
}

export default resourceType
