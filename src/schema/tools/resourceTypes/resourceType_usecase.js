const resourceType = {
  "type": "Group",
  "label": "Use Case options",
  "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/mainEntity/properties/name",
                    "schema": {
                      "const": "Use Case"
                     // "const": "Dataset"
                    }
                }
  },
  "elements": [
        {
          "type": "Label",
          "text": "File Format of Use Case description"
        },
        {
          "label": "encodingFormat",
          "type": "Control",
          "scope": "#/properties/encodingFormat",
          "options": {
            "showUnfocusedDescription": true
          }
        }
    ]
}

export default resourceType
