 let cat1 = {
      "type": "Category",
      "label": "General Resource  Information",
      "elements": [


        {
          "type": "VerticalLayout",
          "elements": [
            {
              "type": "Label",
              "text": "1.1.1 Short Name for the <span style='color:peru;'>Resource</span>",
              "description": "A test Description"
            },
            {
              "label": " Name",
              "type": "Control",
              "scope": "#/properties/name",
              "options": {
                "showUnfocusedDescription": true
              }
            },
            {
              "type": "ShowGroup",
              "label": "Add Additional Names",
              "elements": [

                {
                    // "type": "Control",
                   "type": "Control",
                  "label": "1.1.1.1 Alternate Resource Name(s)",
                  "description": "Some Description",
                  "scope": "#/properties/alternateName",
                  "options": {
                    "showUnfocusedDescription": true
                  }
                }
              ]
            },

            {
              "type": "ShowGroup",
              "label": "Add Additional Identifiers",
              "elements": [
                {
                  "type": "Label",
                  "text": "1.1.2 <span style='color:peru;'> Identifier </span> Readonly"
                },
                {
                  "label": "Identifier",
                  "type": "Control",
                  "scope": "#/properties/@id",
                  "options": {
                    "showUnfocusedDescription": true,
                    "readonly": true,
                      "elementLabelProp": "value",
                      "detail" : {
                                              "type": "HorizontalLayout",
                        "elements": [
                          {
                            "label": "Indentifier",
                            "type": "Control",
                            "scope": "#/properties/value"
                          },
                          {
                            "label": "Type",
                            "type": "Control",
                            "scope": "#/properties/propertyID"
                          },
                          {
                            "label": "PropertyName",
                            "type": "Control",
                            "scope": "#/properties/name"
                          }
                         ]
                       }

                    }

              },
//                 { "type": "Control",
//                 "label":"PropertyTest Additional Identifiers" ,
//                 "scope": "#/properties/identifier",
//                 },
//                                 { "type": "JsonLdProperty",
//                                 "label":"PropertyTest Additional Identifiers" ,
//                                 "scope": "#/properties/identifiersTest",
//                                 }

                {
                  "type": "Control",
                  "label":  "1.1.1.1 Additional Identifiers",

                  "scope": "#/properties/identifier",
                  "options": {
                    "showUnfocusedDescription": true,

                      "elementLabelProp": "value",
                      "detail" : {
                        "type": "HorizontalLayout",
                        "elements": [
//                          {
//                             "label": "Type",
//                             "type": "Control",
//                             "scope": "#/properties/@type",
//                             "rule": {
//                                 "effect": "HIDE",
//                                 "condition": {
//                                   "schema": {
//                                     "const": true
//                                   }
//                                 }
//                               }
//
//                           },
                          {
                            "label": "Indentifier",
                            "type": "Control",
                            "scope": "#/properties/value"
                          },
                          {
                            "label": "Type",
                            "type": "Control",
                            "scope": "#/properties/propertyID"

                          },
                          {
                            "label": "PropertyName",
                            "type": "Control",
                            "scope": "#/properties/name"

                          }
                        ]


                    }
                  }
                }
              ]
            }

          ]
        },


        {
          "type": "VerticalLayout",
          "elements": [
            {
              "type": "Label",
              "text": "1.2.1 Description"
            },
            {
              "type": "Control",
              "scope": "#/properties/description",

              "options": {
                "multi": true,
                "showUnfocusedDescription": true
              }
            },

            {
              "type": "ShowGroup",
              "label": "Add Reccomended Details",
              "elements": [
                {
                  "type": "Label",
                  "text": "1.2.0.1 Date"
                },
                {
                  "type": "Control",
                  "label": "Publication Date of Most Recent Release. This will be formated at YYYY-MM-DD in the output",
                  "scope": "#/properties/datePublished",
                  "options": {
                    "showUnfocusedDescription": true
                  }
                },
                {
                  "type": "Label",
                  "text": "1.2.0.1 URL to User Readable Page"
                },
                {
                  "type": "Control",
                  "label": "URL to User-Readable Page",
                  "scope": "#/properties/subjectOf",
                  "options": {
                    "elementLabelProp": "url",
                    "showUnfocusedDescription": true,
                    "detail" : {
                      "type": "HorizontalLayout",
                      "elements": [

                        {
                          "label": "URL",
                          "type": "Control",
                          "scope": "#/properties/url"

                        },
                        {
                          "label": "Description",
                          "description": "Some suggestions",
                          "type": "Control",
                          "scope": "#/properties/name",
                          "options": {
                            "suggestion": [
                              "DOI Landing Page",
                              "HTML Landing Page",
                              "Project Landing Page",
                              "Other"
                            ]
                          }
                        }
                      ]


                    }
                  }
                },

                {
                  "type": "Label",
                  "text": "1.2.3 Keywords"
                },
                {
                  "type": "Control",
                  "scope": "#/properties/keywords",
                  "options": {
                    "showUnfocusedDescription": true
                  }
                }
              ]
            }

          ]
        },
        {
          "type": "VerticalLayout",
          "elements": [
            {
              "type": "Label",
              "text": "1.3.1 Citation"
            },
              /* citation is an additional propery
              {
 "@type": "PropertyValue",
  "propertyID": "dc:BibliographicCitation",
"name": "Bibligraphic citation",
"value":"IRIS, no date, SAC Data File Format, http://ds.iris.edu/files/sac-manual/manual/file_format.html"
  },

               */
            {
              "type": "Control",
              "scope": "#/properties/dc:BibliographicCitation",
              //  "scope": "#/properties/additionalProperty",
              "options": {

                "showUnfocusedDescription": true,
                "elementLabelProp": "value",
                "detail" : {
                  "type": "HorizontalLayout",
                  "elements": [
                    {
                    // future DOI Lookup
                      "label": "Citation",
                      "type": "Control",
                      "scope": "#/properties/value",
                      "options":{
                      "multi": true,
                                                 "showUnfocusedDescription": true
                      }
                    }
                  ]


                }
              }
            },
                        {
                          "type": "ShowGroup",
                          "label": "Add Responsible Parties",
                          "elements": [

                            {
                              "type": "Control",
                              "label": "1.3.1.1 Creator",
                              "scope": "#/properties/creator",
                              "options": { "elementLabelProp": "name",
                                "showUnfocusedDescription": true

                              }
                            },
                            {
                                                          "type": "Control",
                                                          "label": "1.3.1.1 publisher",
                                                          "scope": "#/properties/publisher",
                                                          "options": {"elementLabelProp": "name",
                                                            "showUnfocusedDescription": true
                                                          }
                                                        },
                            {
                              "type": "Control",
                              "label": "1.3.1.1 contributor",
                              "scope": "#/properties/contributor",
                              "options": {"elementLabelProp": "name",
                                "showUnfocusedDescription": true
                              }
                            },
                            {
                              "type": "Control",
                              "label": "1.3.1.1 editor",
                              "scope": "#/properties/editor",
                              "options": {"elementLabelProp": "name",
                                "showUnfocusedDescription": true
                              }
                            },

                            {
                              "type": "Control",
                              "label": "1.3.1.1 developer",
                              "scope": "#/properties/developer",
                              "options": {"elementLabelProp": "name",
                                "showUnfocusedDescription": true
                              }
                            },
                            {
                              "type": "Control",
                              "label": "1.3.1.1 Stewardship",
                              "scope": "#/properties/stewardship",
                              "options": {"elementLabelProp": "name",
                                "showUnfocusedDescription": true
                              }
                            }, ]
                        },
            ]
        },
        //ecrro:ECRRO_0000600 Primary publication
            {
              "type": "ShowGroup",
              "label": "Add Primary Publication",
              "elements": [

                {
                  "type": "Control",
                  "label": "1.1.1.1 Primary Publication",
                  "scope": "#/properties/ecrro:ECRRO_0000600",
                  "options": {
                    "showUnfocusedDescription": true,

                      "detail" : {
                         "type": "HorizontalLayout",
                        "elements": [
                          {
                            "label": "Value",
                            "type": "Control",
                            "scope": "#/properties/value"
                          },
                         ]
                         }

                  }
                }
              ]
            },
       ]
    }

export default cat1
