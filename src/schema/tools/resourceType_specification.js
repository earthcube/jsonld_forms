const resourceType = {
  "type": "Group",
   "label": "Semantic Resource",
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
                        "showUnfocusedDescription": true
                      }
                   },
                ]}
    ]
}

export default resourceType
