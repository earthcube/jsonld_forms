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
        },
        {
                      "type": "ShowGroup",
                      "label": "Lifecyle",
                      "elements": [

                        {
                          "type": "Control",
                          "label": "2.1 Maturity",
                          "scope": "#/properties/ecrro:ECRRO_0000138",
                          "options": {
                            "showUnfocusedDescription": true
                          }
                        },
                        {
                          "type": "Control",
                          "label": "2.2 Lifecycle",
                          "scope": "#/properties/ecrro:ECRRO_0000219",
                          "options": {
                            "showUnfocusedDescription": true
                          }
                        }
                      ]
       },
       {
                     "type": "ShowGroup",
                     "label": "Funding",
                     "elements": [

                       {
                         "type": "Control",
                         "label": "1.1.1.1 Funder",
                         "scope": "#/properties/funder",
                         "options": {
                           "showUnfocusedDescription": true
                         }
                       }
                     ]
       },
       {
                     "type": "ShowGroup",
                     "label": "Stewardship",
                     "elements": [

                       {
                         "type": "Control",
                         "label": "4.1 Stewardship",
                         "scope": "#/properties/ecrro:ECRRO_0000218",
                         "options": {
                           "showUnfocusedDescription": true
                         }
                       }
                     ]
       },
       {
                     "type": "ShowGroup",
                     "label": "Resource Audience",
                     "elements": [

                       {
                         "type": "Control",
                         "label": "Audience",
                         "scope": "#/properties/audience",
                         "options": {
                           "showUnfocusedDescription": true
                         }
                       },
                      {
                        "type": "Control",
                        "label": "5.2 Science Domain",
                        "scope": "#/properties/about",
                        "options": {
                          "showUnfocusedDescription": true
                        }
                      },
                    {
                      "type": "Control",
                      "label": "5.3 Current Usage Level",
                      "scope": "#/properties/ecrro:ECRRO_0000017",
                      "options": {
                        "showUnfocusedDescription": true
                      }
                    }
                     ]
       },
       {
                     "type": "ShowGroup",
                     "label": "Related Resources",
                     "elements": [

                       {
                         "type": "Control",
                         "label": "6.1 Dependencies and thier URL",
                         "scope": "#/properties/dependencies",
                         "options": {
                           "showUnfocusedDescription": true
                         }
                       },
                      {
                        "type": "Control",
                        "label": "6.2 Related Resources",
                        "scope": "#/properties/isRelatedTo",
                        "options": {
                          "showUnfocusedDescription": true
                        }
                      }
                     ]
       },

      ]
    }

export default cat3
