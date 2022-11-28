const resourceType = {
  type: 'Group',
  label: 'Dataset specific properties',
  rule: {
    effect: 'SHOW',
    condition: {
        scope: '#/properties/mainEntity/',
        schema:
            {
              "const":
               [ {
                  "name":
                  "Dataset",
                  "@type":
                  "CreativeWork",
                  "url":
                  "http://schema.org/Dataset"
                } ]
            }
      }
    },
  elements: [
// (mandatory)get the schema type correct (Dataset), will default to creativeWork.
    {
      type: "Control",
      label: "Resource @type (Should be Dataset, remove default values if present)",
      scope: "#/properties/@type"
    },
// accessible for free?
    {label: "is dataset accessible without cost?",
      type: "Control",
      scope: "#/properties/isAccessibleForFree",
      default:false
    },

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
                enum: ["DataDownload","WebAPI","WebSite"],
              },
              {
                "label": "Label for this distribution option",
                "type": "Control",
                "scope": "#/properties/name",
                "options": {}
              },
              {
                type:"HorizontalLayout",
                elements:[
                  {type:"Label",
                    text: "URL to access the data"},
                  {type: "Control",
                    scope: '#/properties/contentUrl'}]
              },
              {
                type:"HorizontalLayout",
                elements:[
                  {type:"Label",
                    text:  "URL for distribution landing page"},
                  {  "type": "Control",
                "scope": "#/properties/url" } ]
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
// funding show group
    { label:"Funder (Agent) (deprecated)",
      type:"ShowGroup",
      elements:[
//funder (deprecated-- use funding/Grant/funder
        {
          type:"Label",
          text:'Acknowledgment of financial support for this dataset should be done through ' +
              'funding property (see all Tab 1); if this is a legacy record, please move this ' +
              'information to funding/Grant/funder, even if you do not have a specific grant identifier or name.',
        },
        {
          "type": "Control",
          "scope": "#/properties/funder",
          "options": {
            "showUnfocusedDescription": true,
            "childLabelProp": "name",
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
//spatial coverage
    {
      type: 'ShowGroup',
      label: 'Spatial extent of content target',
      elements: [
        {
          type:'Label',
          text:'Where were the data acquired or what is the spatial extent of the feature of interest ' +
              'that was the target of observations. Value is one or more point locations or bounding boxes. ' +
              'Bounding boxes can be obtained at <a href="https://boundingbox.klokantech.com/" target="_blank" >Bounding box tool</a> ' +
              '(use the csv raw format). Note that this tool returns coordinates in longitude-latitude order, ' +
              ' but schema.org GeoShape/box uses latitude-longitude coordinate order, so you will have to ' +
              'manually reverse the coordinates. Recommendation is to round coordinates to 4 decimal places or less.'
        },
        {
          label: false,
          type: "Control",
          scope: "#/properties/spatialCoverage"
        }
      ]
    },
//temporal coverage
    {
      type: 'ShowGroup',
      label: 'Temporal extent of content target',
      elements: [
        {
          type:'Label',
          text:'Temporal extent has a begin and end. These boundaries can be specified with either a numeric ' +
              'coordinate or a named time ordinal era (e.g. from geologic time scale). ' +
              'The temporal reference system (TRS) value specifies the time scale or coordinate system used. ' +
              'Select the default values, sorry, we have not figured out how to autopopulate defaults  :('
        },
        {
          label: false,
          type: "Control",
          scope: "#/properties/temporalCoverage",
          "options": {
            "showUnfocusedDescription": true,
            // "detail": {
            //   "type": "VerticalLayout",
            //   "elements": [
            //     {
            //       oneOf: [
            //         {
            //           label: 'calendar date, time, or dateTime',
            //           type: 'Control',
            //           scope:'#'
            //         },
            //         {
            //           label: 'Geologic (W3C proper) time interval',
            //           type: 'Control',
            //           scope: '#/properties/temporalCoverage/',
            //           options:
            //               {
            //                 "showUnfocusedDescription": true,
            //                 detail: {
            //                   type: 'VerticalLayout',
            //                   elements: [
            //                     {
            //                       type:'Control',
            //                       scope:'#/properties/@type',
            //                       const:'time:ProperInterval',
            //                       default:'time:ProperInterval'
            //                     },
            //                     {
            //                       type:'Control',
            //                       scope:'#/properties/time:hasBeginning'
            //                     },
            //                     {
            //                       type:'Control',
            //                       scope:'#/properties/time:hasEnd'
            //                     }
            //                   ]
            //                 }
            //               }
            //         }
            //       ]
            //     }
            //   ]
            // }
          }
        }
              ]
            },
//Variable Measured
    {
      type: 'ShowGroup',
      label: 'Variables reported in this dataset',
      elements: [
        { text:'Describe the variables that are represented by fields in this Dataset.',
          type:'Label'
        },
        { scope: "#/properties/variableMeasured",
          label: false,
          type: "Control",

          options: {
            "showUnfocusedDescription": true,
            "childLabelProp": "alternateName",
            "detail": {
              "type": "VerticalLayout",
              "elements": [
                {
                  label: "Type",
                  type: "Control",
                  scope: "#/properties/@type",
                  enum: ["PropertyValue"],
                  default:'PropertyValue',
                  readonly: true
                },
                {
                  label:'Property identifier',
                  type: 'Control',
                  scope: "#/properties/propertyID",
                  "description": "identifier for the property concept quantified by the values in this variable slot"
                },
                {
                  label: 'Name of variable as it appears in data',
                  type: 'Control',
                  scope: "#/properties/name"
                },
                {label: 'Name of variable, human intelligible (this will appear as label here in forms)',
                  type: 'Control',
                  scope: "#/properties/alternateName"
                },
                {label: 'Description of variable',
                  type: 'Control',
                  scope: "#/properties/description"
                },
                {
                  type: 'ShowGroup',
                  label: 'measured variable details',
                  elements: [
                    {label: 'How was the value determined?',
                      type: 'Control',
                      scope: "#/properties/measurementTechnique"
                    },
                   {label: 'Unit of measure, label',
                      type: 'Control',
                      scope: "#/properties/unitText"
                    },
                    {label: 'Unit of Measure identifier',
                      type: 'Control',
                      scope: "#/properties/unitCode"
                    },
                    { label: 'web page about the variable',
                      type: 'Control',
                      scope: "#/properties/url"
                    },
                    {label: 'Minimum reported value in data',
                      type: 'Control',
                      scope: "#/properties/minValue"
                    },
                    {label: 'Maximum reported value in data',
                      type: 'Control',
                      scope: "#/properties/maxValue"
                    }
                    ]
                }
              ]
            }
          }
        }
      ]
    },
// random properties
    {
      type:'ShowGroup',
      label:'Other properties of interest: datatype identifiers, dataset status, ' +
             'citations to related resources, host data catalog, content language.',
      elements:[
    {
      label: "identifiers for data types from other vocabularies",
      type: "ShowGroup",

      elements: [
        {
          type: "Control",
          scope: "#/properties/additionalType"
        }
      ]
    },
    {
      label: "Status",
      type: "Control",

      scope: "#/properties/creativeWorkStatus"
    },
    {
      label: "citations for other related resources",
      type: "Control",
      scope: "#/properties/citation"
    },
    {
      label: "Host data catalog",
      type: "Control",
      scope: "#/properties/includedInDataCatalog"
    },
    {
      label: "Language of dataset content",
      type: "Control",
      scope: "#/properties/inLanguage"
    }
    ]
    },
  ]
};

export default resourceType;
