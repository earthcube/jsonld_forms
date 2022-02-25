const cat3 =
{
      "type": "Category",
      "label": "Section 3. Availability and Stewardship",
      "elements": [
        {
          "type": "Label",
          "text": "1. License"
        },
        {
          "type": "Control",
          "scope": "#/properties/license",
          "options": {
            "detail": {
              "type": "VertialLayout",
              "elements": [
                {
                  "type": "Control",
                  "scope": "#/properties/name",
                  "options": {
                    "format": "radio"
                  }
                }
              ]
            }
          }
        }

      ]
    }

export default cat3
