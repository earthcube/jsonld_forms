const resourceType = {
  "type": "Group",
  "label": "Repository options",
  "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/mainEntity/properties/name",
                    "schema": {
                      "const": "Repository Name"
                     // "const": "Dataset"
                    }
                }
  },
  "elements": [
        {
          "type": "Label",
          "text": "Type of the Cataloged Object"
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
