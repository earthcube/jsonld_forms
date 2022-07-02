const resourceType = {
  type: 'Group',
  label: 'Dataset specific properties',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
        //const: 'Use Case'
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
  elements: [
 //handle dates
    {
      "type": "ShowGroup",
      label: "Dates related to the dataset",
      elements: [
        {
          "label": "Date the dataset was originally generated",
          "type": "Control",
          "scope": "#/properties/dateCreated",
          "options": {
            "showUnfocusedDescription": true
          }
        },
        {
          "type": "Control",
          "scope": "#/properties/dateModified",
          "options": {
            "showUnfocusedDescription": true
          }
        },
        {
          "label": "Date the dataset is no longer useful or available",
          "type": "Control",
          "scope": "#/properties/expires",
          "options": {
            "showUnfocusedDescription": true
          }
        }
      ]
    },
//handle optional link to formal metadata record
    {
      type:"ShowGroup",
      "label": "link to formal metadata record(s) for the dataset",
    elements:[{
      "type": "Control",
      "scope": "#/properties/subjectOf",
      "options": {
        "showUnfocusedDescription": true,
        "childLabelProp": "name",
        "detail": {
          "type": "VerticalLayout",
          "elements": [
            {
              label: "Type",
              type: "Control",
              scope: "#/properties/@type",
              enum: ["DataDownload"],
              readonly: true
            },
            {
              "label": "Label for this link",
              "type": "Control",
              "scope": "#/properties/name",
              "options": {}
            },
            {
              "label": "URL to access metadata",
              "type": "Control",
              "scope": "#/properties/contentUrl"
            },
            {
              type: "Control",
              label: "target metadata format",
              "description": "identifier for metadata schema",
              scope: "#/properties/encodingFormat"
            }
          ]
        }
      }
      }]
    },
 // distribution
    {
      type:"ShowGroup",
      label:"Information about obtaining the data",
      elements:[{
        "type": "Control",
        "scope": "#/properties/distribution",
        "options": {
          "showUnfocusedDescription": true,
          "childLabelProp": "name",
          "detail": {
            "type": "VerticalLayout",
            "elements": [
              {
                label: "Type",
                type: "Control",
                scope: "#/properties/@type",
                enum: ["DataDownload"],
                readonly: true
              },
              {
                "label": "Label for this distribution option",
                "type": "Control",
                "scope": "#/properties/name",
                "options": {}
              },
              {
                "label": "URL to access the data",
                "type": "Control",
                "scope": "#/properties/contentUrl"
              },
              {
                type: "Control",
                label: "Format for this data download",
                description: "Use identifiers from GeoCODES format registry",
                scope: "#/properties/encodingFormat"
              },
              {
                type:"ShowGroup",
                label:"agent that provides the data access service",
                elements:[
                {
                type: "Control",
                  label:false,
                scope:'#/properties/provider',
                  "detail": {
                    "type": "VerticalLayout",
                    "elements": [
                      {
                        label: "Type",
                        type: "Control",
                        scope: "#/properties/@type",
                        enum: ["Person","Organization"],
                      },
                      {
                        "label": "Provider Name",
                        "type": "Control",
                        "scope": "#/properties/name",
                        "options": {}
                      },
                      {
                        "label": "Identifier for provider",
                        "type": "Control",
                        "scope": "#/properties/identifier"
                      }
                        ]
              }}
              ]
          }
            ]
          }
        }
      }]
    },
// random properties
    {
      type: "ShowGroup",
      label: "identifiers for datatypes from other vocabularies",
      elements:[
        { type:"Control",
      scope: "#/properties/additionalType"}
]
    },
    {
      type: "Control",
      label: "Status",
      scope: "#/properties/creativeWorkStatus"
    },
    {
      type: "Control",
      label: "citations for other related resources",
      scope: "#/properties/citation"
    },

// get the schema type correct (Dataset), will default to creativeWork.
    {
      type: "Control",
      label: "Resource type (Should be Dataset, remove default values if present)",
      scope: "#/properties/@type"
    }
  ]
};

export default resourceType;
