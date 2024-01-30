 const cat1 = {
      "type": "Category",
      "label": "General Resource  Information",
      "elements": [


        {
          "type": "VerticalLayout",
          "elements": [
            { "type": "Label",
              "text": "Short Name for the <span class='highlight'>Resource</span>",
            },
            {
              "label": "Name",
              "type": "Control",
              "scope": "#/properties/name",
              "description": "Name by which the resource might be known or discovered.",
              "options": {
                "showUnfocusedDescription": true
              }
            },
            {
              "type": "ShowGroup",
              "label": "Add Additional Names",
              "elements": [
                { "type": "Control",
                  "label": "Alternate Resource Name(s)",
                  "description": "Other names by which the resource might be known or discovered.",
                  "scope": "#/properties/alternateName",
                  "options": {
                  "showUnfocusedDescription": true
                  }
                }
              ]
            },

            {
              "type": "ShowGroup",
              "label": "Identifiers",
              "elements": [
                {"type": "Label",
                  "text": "<span class='highlight'> Metadata record identifier </span> <span class='readonly'>(Readonly)</span>"
                },
                {"type": "Control",
                  "label": "Identifier",
                  "scope": "#/properties/@id",
                  //display the ARK identifier for the metadata record
                  "options": {
                    "showUnfocusedDescription": true,
                    "readonly": true,
                    "elementLabelProp": "value"
                    /*     ,             "detail" : {"type": "HorizontalLayout",
,                                          *                        "elements": [
                                           *  {
                                           *    "label": "Indentifier",
                                           *    "type": "Control",
                                           *    "scope": "#/properties/value"
                                           *  },
                                           *  {
                                           *    "label": "Type",
                                           *    "type": "Control",
                                           *    "scope": "#/properties/propertyID"
                                           *  },
                                           *  {
                                           *    "label": "PropertyName",
                                           *    "type": "Control",
                                           *    "scope": "#/properties/name"
                                           *  }
                                           * ]

                                         }*/

                    }

              },

            {type: 'Control',
              label: 'Identifiers',
              description:"any identifiers associated with the resource, e.g. DOI",
              scope: '#/properties/identifier',
              options: {
              showUnfocusedDescription: true     }
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
              "text": "Description",
              "description": "Please provide as much detail as possible, so that we can automatically extract additional information, and search engine text indexing will provide useful results. Feel free to copy and paste from respective web sites, papers, reports, etc.",
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
              "label": "Recommended Details",
              "elements": [
                {
                  "type": "Label",
                  "text": "Date"
                },
                {
                  "type": "Control",
                  "label": "Publication Date of Most Recent Release. This will be formatted as YYYY-MM-DD in the output",
                  "scope": "#/properties/datePublished",
                  "options": {
                    "showUnfocusedDescription": true
                  }
                },
                {
                  "type": "Label",
                  "text": "URL to User Readable Page"
                },
                {
                  "type": "Control",
                  "description": "URL to access information about the resource on the Web.",
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
                        { "type": "Control",
                          "label": "Description",
                          "description": "Some suggested link labels",
                          "scope": "#/properties/linkRelationship",
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
                  "text": "Keywords",
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
              "text": "Citation",
              "description":"Please provide a recommended citation to reference this resource in publications, using a standard bibliographic format"
            },
        {
          type: 'Control',
          scope: '#/properties/dct:bibliographicCitation',
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
                              "label": "Creator or Author",
                              "description":"one or more person or organization entities responsible for the intellectual content of the resource",
                              "scope": "#/properties/creator",
                              "options": {
                                "elementLabelProp": "name",
                                "showUnfocusedDescription": true,
                                "detail": {
                                  "type": "VerticalLayout",
                                  "elements": [
                                    {"label": "Type",
                                      "type": "Control",
                                      "scope": "#/properties/@type"
                                    },
                                    {"label": "Name",
                                      "type": "Control",
                                      "scope": "#/properties/name"
                                    },
                                    {"label": "Identifier",
                                      "type": "Control",
                                      "scope": "#/properties/identifier",
                                      "description":"An Identifier (e.g. ORCID) or identifying property. "
                                    },
                                  ]}
                              }

                            },
                             {
                              "type": "Label",
                              "text": "Publisher",
                               "description":"person or organization that makes the resource available"
                            },
                            {
                              "type": "Control",
                              "label": "Publisher",

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
                                            "scope": "#/properties/identifier"

                                          },
                                          ]}
                              }
                            },
                            {
                              "type": "Control",
                              "label": "Contributor(s)",
                              "description":"one or more person or organization entities who contributed to creation of the resource",
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
                              "label": "developer",
                              "description":"one or more person or organization entities who created, debugged, and maintain a software resource",
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
              "label": "Primary Publication(s) about the resource",
              "elements": [
                {
                  "type": "Label",
                  "text": "EXAMPLE: Barnes, Stanley L., 1980, Report on a Meeting to Establish a Common Doppler Radar Data Exchange Format: Bulletin of the American Meteorological Society, vol. 61, no. 11, pp. 1401–1404. (accessed at http://www.jstor.org/stable/26221476)",
                },
                {
                  "type": "Control",
                 // "scope": "#/properties/additionalProperty/items/ecrro:ECRRO_0000600",
                  "scope": "#/properties/primaryPublication",
                 //   "scope": "#/properties/ecrro:ECRRO_0000600",
                  "options": {
                    "showUnfocusedDescription": true,
                    childLabelProp: 'value',
            detail: {
              type: 'HorizontalLayout',
              elements: [
                {
                  label: 'Citation',
                  type: 'Control',
                  scope: '#/properties/value'
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
