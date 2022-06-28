 let cat1 = {
      "type": "Category",
      "label": "General Resource  Information",
      "elements": [


        {
          "type": "VerticalLayout",
          "elements": [
            {
              "type": "Label",
              "text": "1.1.1 Short Name for the <span class='highlight'>Resource</span>",

            },
            {
              "label": " Name",
              "type": "Control",
              "scope": "#/properties/name",
            "description": "Alternate names by which the resource might be known or discovered.",
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
                  "description": "URL to access information about the resource on the Web.",
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
                  "text": "1.1.2 <span class='highlight'> Identifier </span> <span class='readonly'>(Readonly)</span>"
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
              type: 'Control',
              label: '1.1.1.1 Additional Identifiers',

              scope: '#/properties/identifier',
              options: {
                showUnfocusedDescription: true

                //                      // "elementLabelProp": "value",
                //                       //"elementLabelProp": [ "value", "#", "Not Set"],
                //                      // "detail": "Generated"
                //                       "detail" : {
                //                         "type": "HorizontalLayout",
                //                         "elements": [
                // //                          {
                // //                             "label": "Type",
                // //                             "type": "Control",
                // //                             "scope": "#/properties/@type",
                // //                             "rule": {
                // //                                 "effect": "HIDE",
                // //                                 "condition": {
                // //                                   "schema": {
                // //                                     "const": true
                // //                                   }
                // //                                 }
                // //                               }
                // //
                // //                           },
                // //                             {
                // //                                                       "label": "Indentifier",
                // //                                                       "type": "Control",
                // //                                                       "scope": "#"
                // //                                                     },
                //                                                     {
                //                             "label": "Indentifier",
                //                             "type": "Control",
                //                             "scope": "#/properties/value"
                //                           },
                //                           {
                //                             "label": "Type",
                //                             "type": "Control",
                //                             "scope": "#/properties/propertyID",
                //                             "options": {
                //                                 "suggestion":["DOI", "PURL"]
                //                             }
                //
                //                           },
                //                           {
                //                             "label": "PropertyName",
                //                             "type": "Control",
                //                             "scope": "#/properties/name",
                //                             "options": {
                //                                                             "suggestion":["DOI", "PURL"]
                //                                                         }
                //
                //                           }
                //                         ]
                //
                //
                //                     }
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
              "text": "1.2.1 Description",
              "decription": "Please provide as much detail as possible, so that we can automatically extract additional information, and search engine text indexing will provide useful results. Feel free to copy and paste from respective web sites, papers, reports, etc.",
            },
            {
              "type": "Control",
              "scope": "#/properties/description",

          options: {
            multi: true,
            showUnfocusedDescription: true
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
                  "text": "1.2.0.1 URL to User Readable Page",
                  "description": "URL to access information about the resource on the Web.",
                },
                {
                  "type": "Control",
                  "label": "URL to User-Readable Page",
                  "scope": "#/properties/subjectOf",
                  "options": {
                    "elementLabelProp": "url",
                    "showUnfocusedDescription": true,
                    "detail" : {
                      "type": "VerticalLayout",
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
                  "text": "1.2.3 Keywords",
                  "description": "use words or phrases you would expect searchers to enter into search engines.",
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
              "text": "1.3.1 Citation",
              "decription":"Please provide a recommended citation to reference this resource in publications, using a standard bibliographic format"
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
          type: 'Control',
          scope: '#/properties/dc:BibliographicCitation',

              //    "scope": "#/properties/additionalProperty/items/anyOf/0/",
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
                          "description":"Persons or organizations with roles in the creation of the resource content, e.g. Creator, Editor, Contributor... ",
                          "elements": [

                            {
                              "type": "Control",
                              "label": "1.3.1.1 Creator",
                              "scope": "#/properties/creator",
                              "options": {
                                "elementLabelProp": "name",
                                "showUnfocusedDescription": true,
                                "detail": {
                                  "type": "VerticalLayout",
                                  "elements": [

                                    {
                                      "label": "Type",
                                      "type": "Control",
                                      "scope": "#/properties/@type"

                                    },
                                    {
                                      "label": "Name",
                                      "type": "Control",
                                      "scope": "#/properties/name"

                                    },
                                    {
                                      "label": "Identifier",
                                      "type": "Control",
                                      "scope": "#/properties/identifier",
                                      "description":"An Identifier (e.g. ORCID) or identifying property. ",

                                    },
                                  ]}
                              }

                            },
                             {
                              "type": "Label",
                              "text": "1.3.1.1 publisher"
                            },
                            {
                              "type": "Control",
                              "label": "1.3.1.1 publisher",
                              "scope": "#/properties/publisher",
                              "options": {"elementLabelProp": "name",
                                "showUnfocusedDescription": true,
                                "detail": {
                                        "type": "VerticalLayout",
                                        "elements": [

                                          {
                                            "label": "Type",
                                            "type": "Control",
                                            "scope": "#/properties/@type"

                                          },
                                           {
                                              "label": "Name",
                                              "type": "Control",
                                              "scope": "#/properties/name"

                                            },
                                             {
                                            "label": "Identifier",
                                            "type": "Control",
                                            "scope": "#/properties/identifier",
                                               "description":"An Identifier (e.g. DOI) or standard academic citation for publication that specifies or describes the resource. ",

                                          },
                                          ]}
                              }
                            },
                            {
                              "type": "Control",
                              "label": "1.3.1.1 contributor",
                              "scope": "#/properties/contributor",
                              "options": { "elementLabelProp": "name",
                                "showUnfocusedDescription": true,
                                "detail": {
                                  "type": "VerticalLayout",
                                  "elements": [

                                    {
                                      "label": "Type",
                                      "type": "Control",
                                      "scope": "#/properties/@type"

                                    },
                                    {
                                      "label": "Name",
                                      "type": "Control",
                                      "scope": "#/properties/name"

                                    },
                                    {
                                      "label": "Identifier",
                                      "type": "Control",
                                      "scope": "#/properties/identifier",
                                      "description":"An Identifier (e.g. ORCID) or identifying property. ",

                                    },
                                  ]}
                              }
                            },
                            {
                              "type": "Control",
                              "label": "1.3.1.1 editor",
                              "scope": "#/properties/editor",
                              "options": { "elementLabelProp": "name",
                                "showUnfocusedDescription": true,
                                "detail": {
                                  "type": "VerticalLayout",
                                  "elements": [

                                    {
                                      "label": "Type",
                                      "type": "Control",
                                      "scope": "#/properties/@type"

                                    },
                                    {
                                      "label": "Name",
                                      "type": "Control",
                                      "scope": "#/properties/name"

                                    },
                                    {
                                      "label": "Identifier",
                                      "type": "Control",
                                      "scope": "#/properties/identifier",
                                      "description":"An Identifier (e.g. ORCID) or identifying property. ",

                                    },
                                  ]}
                              }
                            },

                            {
                              "type": "Control",
                              "label": "1.3.1.1 developer",
                              "scope": "#/properties/developer",
                              "options": { "elementLabelProp": "name",
                                "showUnfocusedDescription": true,
                                "detail": {
                                  "type": "VerticalLayout",
                                  "elements": [

                                    {
                                      "label": "Type",
                                      "type": "Control",
                                      "scope": "#/properties/@type"

                                    },
                                    {
                                      "label": "Name",
                                      "type": "Control",
                                      "scope": "#/properties/name"

                                    },
                                    {
                                      "label": "Identifier",
                                      "type": "Control",
                                      "scope": "#/properties/identifier",
                                      "description":"An Identifier (e.g. ORCID) or identifying property. ",

                                    },
                                  ]}
                              }
                            },
                             ]
                        },
            ]
        },
        //ecrro:ECRRO_0000600 Primary publication
            {
              "type": "ShowGroup",
              "label": "Add Primary Publication",
              "elements": [
                {
                  "type": "Label",
                  "text": "EXAMPLE: Barnes, Stanley L., 1980, Report on a Meeting to Establish a Common Doppler Radar Data Exchange Format: Bulletin of the American Meteorological Society, vol. 61, no. 11, pp. 1401–1404. (accessed at http://www.jstor.org/stable/26221476)",

                },
                {
                  "type": "Control",
                  "label": "1.1.1.1 Primary Publication",
                  //#/definitions/additionalProperty_type/anyOf/3/type
                  //#/definitions/additionalProperty_type/anyOf/3/properties/propertyID/const
                  //#/definitions/additionalProperty_type/anyOf/5/$anchor
                //  "scope": "#/properties/additionalProperty/items/#ECRRO_0000600",
                //#/properties/additionalProperty/items/$ref
                //  "scope": "#/properties/additionalProperty/items/anyOf/5/", // works
                //  "scope": "https://example.com/schemas/properties/additionalProperty/items/anyOf/#ECRRO0000600", //fails
                    "scope": "#/properties/primaryPublication",
                  "options": {
                    "showUnfocusedDescription": true,

            detail: {
              type: 'HorizontalLayout',
              elements: [
                {
                  label: 'Citation',
                  type: 'Control',
                  scope: '#/properties/value'
                },
                {
                  label: 'Name',
                  type: 'Control',
                  scope: '#/properties/name'
                }
              ]
            }
          }
        }
      ]
    }
  ]
};

export default cat1;
