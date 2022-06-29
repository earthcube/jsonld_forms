 let cat1 = {
      "type": "Category",
      "label": "General Resource  Information",
      "elements": [


        {
          "type": "VerticalLayout",
          "elements": [
            {
              "type": "Label",
              "text": "Short Name for the <span class='highlight'>Resource</span>",

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
              "label": "Additional name(s) for the resource",
              "description": "Alternate names by which the resource might be known ",
              "elements": [

                {
                  "type": "Control",
                   "label": "Alternate Name(s) for the Resource",
                  // "description": "Other names by which the resource might be known or discovered.",
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
                {
                  "type": "Label",
                  "text": "<span class='highlight'>Identifier for metadata record</span> <span class='readonly'>(Readonly)</span>"
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
                            "label": "Identifier",
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
            {
              type: 'Control',
              label: 'Additional Identifiers',

              scope: '#/properties/identifier',
              options: {
                showUnfocusedDescription: true

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
              "text": "Description of resource",
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
              "label": "Recommended Detail Properties",
              "elements": [
                {
                  "type": "Label",
                  "text": "Publication date"
                },
                {
                  "type": "Control",
                  "text": "Publication Date of Most Recent Release. This will be formatted at YYYY-MM-DD in the output",
                  "scope": "#/properties/datePublished",
                  "options": {
                    "showUnfocusedDescription": true
                  }
                },
                // {
                //   "type": "Label",
                //   "text": "URL to User Readable Page",
                //   "description": "URL to access information about the resource on the Web.",
                // },
                {
                  "type": "Control",
                  "label": "URL to User-Readable Page",
                  // populate with schema:CreativeWork to get label and name
                  "scope": "#/properties/subjectOf",
                  "options": {
                  //  "elementLabelProp": "url",
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
                          "label": "Label for this link",
                       //   "description": "Some suggestions",
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
              "text": "Recommended Citation",
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
                              "label": "Creator",
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
                              "text": "Publisher"
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
                                            "scope": "#/properties/identifier",
                                               "description":"An Identifier (e.g. DOI) or standard academic citation for publication that specifies or describes the resource. ",

                                          },
                                          ]}
                              }
                            },
                            {
                              "type": "Control",
                              "label": "contributor",
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
                              "label": "Editor",
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
                              "label": "Software Developer",
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
                  "label": "Primary Publication",
                  "scope": "#/properties/ecrro:ECRRO_0000600",
                  "options": {
                    "showUnfocusedDescription": true,

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
