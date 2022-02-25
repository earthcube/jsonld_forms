const cat2 =
{
      "type": "Category",
      "label": "Section 2. Resource Type",
      "elements": [
        {
          "type": "Label",
          "text": "2.1 Content Type"
        },
        {
          "type": "Control",
          "scope": "#/properties/contentType",
          "elementLabelProp": "value",
          "options": {
            "detail": {
              "type": "HorizontalLayout",
              "elements": [
                {
                  "label": "Name",
                  "type": "Control",
                  "scope": "#/properties/name",
                  "options": {
                    "suggestion": [
                      "DO",
                      "We",
                      "Have",
                      "Suggestions"
                    ]
                  }},
                {
                  "label": "Identifier",
                  "type": "Control",
                  "scope": "#/properties/identifier"

                }
              ]
            }
          }
        }
      ]
    }

export default cat2
