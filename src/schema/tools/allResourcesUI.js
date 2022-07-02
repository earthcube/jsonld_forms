 let cat1 = {
      "type": "Category",
      "label": "General Resource Information",
       "elements": [

        {
          type:'Label',
          text:'Properties common to all resource'
        },

        {
              "label": "Short name to identify the resource",
              "type": "Control",
              "scope": "#/properties/name",
              "options": {
                "showUnfocusedDescription": true
              }
            },

         { "label": "Description of resource",
              "description": "Please provide as much detail as possible, so that we can automatically extract additional information, and search engine text indexing will provide useful results. Feel free to copy and paste from respective web sites, papers, reports, etc.",
              "type": "Control",
              "scope": "#/properties/description",
              options: {
                multi: true,
                showUnfocusedDescription: true
              }
        },


         {label: 'Preferred Resource Identifier, e.g. a DOI',
           type: 'Control',
           scope: '#/properties/identifier',
           options: {
             showUnfocusedDescription: true
           }
         },

         {
           type: 'Label',
           text: 'What is the type of resource? The ECRR resource type is used to select resource specific ' +
               'properties. Resource specific properties will appear on the Resource Details tab'
         },
         {
           type: 'Control',
           label:false,
           scope: '#/properties/mainEntity',
           options: {
           }
         },
         { type: 'Group',
           label: false,
           rule: {
             effect: 'HIDE',
             condition: {
               scope: '#/properties/mainEntity/',
               schema: {
                 "const":[
                   {
                     "name":
                         "Dataset",
                     "@type":
                         "CreativeWork",
                     "url":
                         "http://schema.org/Dataset"
                   }
                 ]
               }
             }
           },
           elements:[
               { "label": 'URL to User-Readable Page or landing page',
             "type": "Control",
             // populate with schema:CreativeWork to get label and name
             "scope": "#/properties/subjectOf",
             "options": {
               "showUnfocusedDescription": true,
               "detail" : {
                 "type": "VerticalLayout",
                 "elements": [
                   {
                     label: "Type",
                     type: "Control",
                     scope: "#/properties/@type",
                     const:"CreativeWork"
                   },

                   {
                     "label": "url",
                     "type": "Control",
                     "scope": "#/properties/url"
                   },
                   {
                     "label": "Label for this link, e.g. DOI landing page",
                     "type": "Control",
                     "scope": "#/properties/name",
                     "options": {
                     }
                   }
                 ]
               }
             }
           }
           ]
         }   ,


         {
           type:'Label',
           text:"Licenses or other restrictions"
         },
            {type: 'Control',
              scope: '#/properties/license',
              options: {
                detail: {
                  type: 'VerticalLayout',
                  elements: [
                    {
                      type: 'Control',
                      scope: '#/properties/name',
                      options: {}
                    }
                  ]
                }
              }
            },



            {"label": "Recommended Properties",
              "type": "ShowGroup",

              "elements": [
                {"text": "Publication Date of Most Recent Release. This will be formatted at YYYY-MM-DD in the output",
                  "type": "Control",

                  "scope": "#/properties/datePublished",
                  "options": {
                    "showUnfocusedDescription": true
                  }
                },
                {label: 'Other resource identifiers if applicable',
                  type: 'Control',
                  scope: '#/properties/sameAs',
                  options: {
                    showUnfocusedDescription: true
                  }
                },

                {label: 'keywords- use words or phrases you would expect searchers to enter into search engines.',
                  "type": "Control",

                  "scope": "#/properties/keywords",
                  "options": {
                    "showUnfocusedDescription": true
                  }
                },
           {label:"Please provide a recommended citation to reference this resource in publications, using a standard bibliographic format",
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
        {"label": "Add Responsible Parties",
          "type": "ShowGroup",
          "description":"Persons or organizations with roles in the creation of the resource content, e.g. Creator, Editor, Contributor... ",
          "elements": [
            {"label": "Creator",
              "type": "Control",
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
                      "scope": "#/properties/@type",
                      default:"Person"
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
            {"label": "Publisher",
              "type": "Control",
              "scope": "#/properties/publisher",
              "options": {"elementLabelProp": "name",
                "showUnfocusedDescription": true,
                "detail": {
                        "type": "VerticalLayout",
                        "elements": [

                          {
                            "label": "Type",
                            "type": "Control",
                            "scope": "#/properties/@type",
                            default:'Organization'
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
            {"label": "Contributor",
              "type": "Control",
              "scope": "#/properties/contributor",
              "options": { "elementLabelProp": "name",
                "showUnfocusedDescription": true,
                "detail": {
                  "type": "VerticalLayout",
                  "elements": [
                    {
                      "label": "Type",
                      "type": "Control",
                      "scope": "#/properties/@type",
                      default:'Person'
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
            { "label": "Editor",
              "type": "Control",
              "scope": "#/properties/editor",
              "options": { "elementLabelProp": "name",
                "showUnfocusedDescription": true,
                "detail": {
                  "type": "VerticalLayout",
                  "elements": [
                    {
                      "label": "Type",
                      "type": "Control",
                      "scope": "#/properties/@type",
                      default:'Person'
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
                      "description":"An Identifier (e.g. ORCID) or identifying property. "
                    },
                  ]}
              }
            },
            {"label": "Software Developer",
              "type": "Control",
              "scope": "#/properties/developer",
              "options": { "elementLabelProp": "name",
                "showUnfocusedDescription": true,
                "detail": {
                  "type": "VerticalLayout",
                  "elements": [
                    {
                      "label": "Type",
                      "type": "Control",
                      "scope": "#/properties/@type",
                      default:'Person'
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



       {
         "type": "ShowGroup",
          label:"Identifier for metadata record (Readonly)",

 "elements":[
   {
     "label": "this identifier will be automatically generated",
     "type": "Control",
     "scope": "#/properties/@id",
     "options": {
       "showUnfocusedDescription": true,
       "readonly": true
     }
   }
]
        }
  ]
 };

export default cat1;
