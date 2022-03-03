const resourceType = {
  "type": "Group",
  "label": "Platform options",
  "rule": {
              "effect": "SHOW",
              "condition": {
                "scope": "#/properties/mainEntity/properties/name",
                    "schema": {
                      "const": "Platform"
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
                  ]},

    ]
}

export default resourceType
