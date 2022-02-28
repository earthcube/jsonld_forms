const resourceType = {
  "type": "Group",
  "label": "Interface/API options",
  "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/mainEntity/properties/name",
                    "schema": {
                      "const": "Interface/API"
                     // "const": "Dataset"
                    }
                }
  },
  "elements": [
        {
          "type": "Label",
          "text": "Community specification"
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
                  ]},
       {
             "type": "ShowGroup",
             "label": "Describe the interface",
             "elements": [
                  {
                      "type": "Label",
                      "text": "Conforms to"
                    },
                    {
                      "label": " Conforms to",
                      "type": "Control",
                      "scope": "#/properties/dct:conformsTo",
                      "options": {
                        "showUnfocusedDescription": true
                      }
                    },
                    {
                                          "type": "Label",
                                          "text": "Potential Actions"
                                        },
                                        {
                                          "label": " Potential Actions",
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
