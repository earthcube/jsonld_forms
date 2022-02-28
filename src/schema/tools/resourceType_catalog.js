const resourceType = {
  "type": "Group",
  "label": "Catalog/Registry options",
  "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/mainEntity/properties/name",
                    "schema": {
                      "const": "Catalog/Registry"
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
