const resourceType = {
  "type": "Group",
   "label": "Specification",
  "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/mainEntity/properties/name",
                    "schema": {
                      "const": "Specification"
                     // "const": "Dataset"
                    }
                }
  },
  "elements": [
        {
          "type": "Label",
          "text": "Specification"
        },
        {
          "label": "encodingFormat",
          "type": "Control",
          "scope": "#/properties/encodingFormat",
          "options": {
            "showUnfocusedDescription": true
          }
        },
       {
             "type": "ShowGroup",
             "label": "add additional details",
             "elements": [
                    {
                      "type": "Label",
                      "text": "Profile of"
                    },
                    {
                      "label": "Profile of",
                      "type": "Control",
                      "scope": "#/properties/eccro:ECRRO_0000501",
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
                                  "scope": "#/properties/url"},

                              ]
                         }
                      }
                   },
                ]}
    ]
}

export default resourceType
