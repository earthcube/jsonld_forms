//import {default as licenseOneOf} from './licenseOneOf'
import {licenseList, resourceTypeList} from "./controlledFromGooglesheet"

const jsonschema = {
 // "$id": "https://example.com/schemas/",
  "type": "object",
  "title": "EarthCube Resource Registry (ECRR) Resource Description",
  "description": "JSON schema for EarthCube Resource Registry (ECRR) resource descriptions. The base object is common to allresource types, and definition section adds resource-specific properties. Resource types are Specification, UseCase, InterchangeFormat, Software, Interface, ",
  "properties": {
    "@id": {
      "type": "string",
      "description": "globally identifier string for this metadata record, commonly a UUID with or without an HTTP prefix for web resolution"
    },
    "@type": {
      "type": "array",
      "minItems": 0,
      "items": {
        "enum": [
          "CreativeWork",
          "SoftwareApplication",
          "Product",
          "WebAPI"
        ]
      }
    },
    "name": {
      "type": "string",
      "description": "Short name by which this resource will be recognized; for human users to identify the resource; should be unique in scope of registry and informative enough to tell someone what the described resource is"
    },
    "alternateName": {
      "title": "alternate name for resource",
      "description": "other names, abbreviations, languages, by which the resource might be known.  If names are provided in a non-English language, please suffix a language identifier using the '@' delimiter and an ISO-639-1 two letter language code, e.g. Forme universelle binaire de l'OMM@fr. Separate entries with a pipe ('|') character",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "subjectOf": {
      "title": "URL to User-Readable Page",
      "description": "Name and url for one or more web pages or other web accessible document about the resource",
      "type": "array",
      "items": {
        "$ref": "#/definitions/creativeWork_type",

      }
    },
    "identifier": {
      "title": "External Identifier",
      "description": "Globally unique identifier for the described resource; could be single value or array of strings for multiple identifiers",
      "type": "array",
      "items": {
        "$ref": "#/definitions/identifier_type",

      }
    },
    "description": {
      "type": "string",
      "description": "a text description of the resource. This text will be indexed by search aggregators, and the information contained should be sufficient to tell a person what the resource is, broadly how to use it."
    },
    "datePublished": {
      "type": "string",
      "format": "date"
    },
    "creator": {
      "title": "one or more person or organization entities responsible for the intellectual content of the resource",
      "type": "array",
      "items": {
        "$ref": "#/definitions/agent_type"
      }
    },
    "editor": {
      "title": "one or more person or organization entities responsible editing the resource",
      "type": "array",
      "items": {
        "$ref": "#/definitions/agent_type"
      }
    },
    "contributor": {
      "title": "one or more person or organization entities who contributed to creation of the resource",
      "type": "array",
      "items": {
        "$ref": "#/definitions/agent_type"
      }
    },
    "publisher": {
      "$ref": "#/definitions/agent_type"
    },
    "developer": {
      "type": "array",
            "items": {
              "$ref": "#/definitions/agent_type"
            }
    },
    "metadataCreator": {
      "$ref": "#/definitions/metadataCreatorType"
    },
    "stewardship": {
      "$ref": "#/definitions/agent_type"
    },
   "ecrro:ECRRO_0000600": {

               "type": "object",
               "description": "primary publication-- a text citation to one or more publications about the resource; separated by pipe ('|') characters",
               "properties": {
                 "@type": {"type": "string", "const": "PropertyValue", "default":"PropertyValue"},
                 "propertyID": {"type": "string", "const": "ecrro:ECRRO_0000600", "default": "ecrro:ECRRO_0000600"},
                 "name": {
                   "type": "string",
                   "default": "primary publication"
                 },
                 "value": {"type": "string"}
               }
             },
    "keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "list of keywords"
    },
    "license": {
      "title": "legal statement of conditions for use and access",
      "type": "array",
      "uniqueItems": true,
      "items": {
//         "oneOf": [
//
//         ]
      }
    },
    "version": {
      "type": "string",
      "description": "string that identifies a particular version of the resource if it is not identified by the schema:identifier element"
    },
    "funder": {
      "description": "could be one funding agency or organization, or an array with items that can be agents (person or organization) or Grants; grants have a funding agency",
      "type": "array",
      "items": {
        "anyOf": [
          {
            "$ref": "#/definitions/funding_agent_type"
          },
          { "$ref": "#/definitions/grant_type" },

        ]
      }
    },
    "audience": {
      "title": "Intended Audience/Target User",
      "description": "terms from controlled vocabulary to identify the kinds of users who are the target of the described resource",
      "type": "array",
      "items": {
        "$ref": "#/definitions/audience_type"
      }
    },
    "about": {
      "title": "Science Domain",
      "type": "array",
      "items": {
        "$ref": "#/definitions/definedTerm_type"
      }
    },
    "contentType": {
      "title": "Content Type(s) of Catalogued Objects in a Catalog or repository",
      "description": "Content Type(s) of Catalogued Objects; one object or array of objects, could be anything to type is 'schema:Thing'; each with name and optional identifier",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "@type": {
              "type": "string",
              "default": "Thing",
            "const": "Thing"
          },
          "name": {
            "type": "string"
          },
          "identifier": {
            "type": "string"
          }
        }
      }
    },
    "isRelatedTo": {
      "title": "Related Resources",
      "description": "array of labeled links {name, url} to related resources. the label should express the relationship to the target and identify the target for a user; URL should be a resolvable address to access the related resource (or some representation of it...). Machine readable endpoint for a web api (e.g. Swagger document goes here, typed as schema:Product",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "@type": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string"
          }
        }
      }
    },
    "mainEntity": {
      "title": "Type of Resource",
      "description": "url is URI for ECRR resource type; name is ECRR resource type name. This should include the ECRR URI; it is used to validate resource specific properties",
      //"type": "Object",
      // "uniqueItems": true,
//       "items": {
//     //    "$ref": "#/definitions/resourceTypes_type"
//       }
    },
    "encodingFormat": {
      "title": "Representation Format or base format for a profile specification",
      "description": "format pattern is a registered MIME type prefix for the base format, and an application specific extension (after a ';' delimiter.  Values should be from the register at https://github.com/earthcube/GeoCODES-Metadata/blob/main/resources/encodingFormat.csv ",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "isBasedOn": {
      "title": "Semantic Resources it Uses",
      "description": "references to Semantic Resources used by the described resource",
      "type": "array",
      "items": {
        "$ref": "#/definitions/creativeWork_type"
      }
    },
    "dct:conformsTo": {
      "title": "Conforms to",
      "description": "references to specifications that the described resource is in conformance with",
      "type": "array",
      "items": {
        "$ref": "#/definitions/creativeWork_type"
      }
    },
    "eccro:ECRRO_0000501": {
      "title": "profile of",
      "description": "Links to base specifications that a specifcation resource profiles. Only applicable if resource type is specification",
          "type": "array",
          "items": {
            "$ref": "#/definitions/creativeWork_type"
          }
    },
    "ecrro:ECRRO_0000502": {
      "title": "Communication Protocol(s)",
      "description": "communication protocol(s) used. Use ECRR controlled vocabulary",

          "type": "array",
          "items": {
            "$ref": "#/definitions/definedTerm_type"
  }
    },
    "applicationCategory": {
      "title": "Application function and subfunction",
      "description": "strings use special syntac like {function: ... uri: ... }. The function value is the label associated with the ECRR uri in the function vocabulary (http://cor.esipfed.org/ont/earthcube/SFO_0000001)",

          "type": "array",
          "items": {
            "type": "string"
          }

    },
    "runtimePlatform": {
      "title": "runtime platform",
      "description": "runtime environments for the application, uses controlled vocabulary http://cor.esipfed.org/ont/earthcube/RTE. content is crude at this point, string entries in array with platform name and URI; should be DefinedTerm",

          "type": "array",
          "items": {
            "type": "string"
          }

    },
    "programmingLanguage": {
      "title": "Programming language",
      "description": "list of names of programming languages, with versions thereof.  Ideally should be definedTerms with name and URI",
      "type": "array",
      "items": {


            "type": "object",
            "properties": {
              "@type": {
                "type": "string",
                 "default": "ComputerLanguage",
                "const": "ComputerLanguage"
              },
              "name": {
                "type": "string"
              },
              "identifier": {
                "type": "string"
              }
            }

      }
    },
    "supportingData": {
      "title": "Supporting input and output data formats",
      "description": "critical bit for linking data and software; the input encodingFormat is used to match to the distribution encodingFormat for a dataset",

          "type": "array",
          "items": {
            "$ref": "#/definitions/supportingData_type"
          }

    },
    "codeRepository": {
      "title": "Code Repository",
      "description": "name and URL location for repository in which code for an application or semantic resource is managed",

          "type": "array",
          "items": {
            "$ref": "#/definitions/creativeWork_type"
 }
    },
    "installURL": {
      "title": "Software Install URL",
      "description": "URL that locates an installer package or instructions for installing software for use in a local environment",

          "type": "array",
          "items": {
            "$ref": "#/definitions/creativeWork_type"
          }

    },
    "potentialAction": {
      "title": "Direct invocation of App on the web",
      "description": "use schema.org Action to document url or url template and parameters to invoke the application through a web accessible location. At this point, schema is set up for online one action-- an HTTP Get that invokes the web application. The url template can have only one paramter 'contentURL' that will be the contentURL from a distribution for a dataset that has an encoding format matchign the supportingData input for this application.",

          "type": "array",
          "items": {
            "$ref": "#/definitions/action_type"
          }

    },
    "url": {
      "title": "Service endpoint base URL",
      "description": "",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "@type": {"type": "string",
            "default": "DefinedTerm",
             "const": "DefinedTerm"
          },
          "name": {
            "type": "string"
          },
          "identifier": {
            "type": "string"
          }
        }
      }

    },
    "additionalProperty": {
              "type": "array",
              "title": "Other Properties",
              "description": "EC resource registry properties that extend Schema.org are implemented as an array of PropertyValue inside a schema:additionalProperty",
              "items": {
                "$ref": "#/definitions/additionalProperty_type"
              }
            },
    /* EXPOSED ADDITIONAL PROPERTIES
    These will need to be stored in the additionalProperty.
    But for defining the form, they are stored at the top level
    */
    "dc:BibliographicCitation": {
      "title": "Bibliographic Citation",
      "$ref": "#/definitions/citationType"

      },
      "ecrro:ECRRO_0000138" : {
      "title": "Maturity",
                         "type": "object",
                         "description": "ECRR resource maturity status, from controlled vocabulary http://cor.esipfed.org/ont/earthcube/MTU",
                         "properties": {
                                "value": {
                                                "type": "object",
                                                "properties": {
                                                   "name": {"type": "string"},
                                                  "@type": {"type": "string", "default": "DefinedTerm", "const": "DefinedTerm"},

                                                  "identifier": {"type": "string"}
                                                },
                                                "required": [
                                                  "identifier",
                                                  "@type",
                                                  "name"
                                                ]
                                              },
                           "@type": {"type": "string","default": "PropertyValue", "const": "PropertyValue"},
                           "propertyID": {"type": "string","default": "ecrro:ECRRO_0000138", "const": "ecrro:ECRRO_0000138"},
                           "name": {
                             "type": "string",
                             "default": "has maturity state",
                             "readonly": true
                           },
                        //   "value": {"$ref": "#/definitions/definedTerm_type"}

                         }
      },
      "ecrro:ECRRO_0000219":        {
                "type": "object",
                "description": "Expected lifetime-- how long is it anticipated that the resource will be maintained and accessible online, from controlled vocabulary http://cor.esipfed.org/ont/earthcube/ELT",
                "properties": {
                  "name": {
                    "type": "string",
                    "default": "expected lifetime"
                  },
                                    "@type": {"type": "string", "default": "PropertyValue", "const": "PropertyValue"},
                  "propertyID": {"type": "string","default": "ecrro:ECRRO_0000219", "const": "ecrro:ECRRO_0000219"},

                 //   "value": {"$ref": "#/definitions/definedTerm_type"}
             "value": {
                            "type": "object",
                            "properties": {
                              "name": {"type": "string"},
                              "@type": {"type": "string","default": "DefinedTerm", "const": "DefinedTerm"},

                              "identifier": {"type": "string"}
                            },
                            "required": [
                              "identifier",
                              "@type",
                              "name"
                            ]
                          }

                }
              },
              "ecrro:ECRRO_0000218":{
                            "type": "object",
                            "description": "stewardship: name of person or organization responsible for maintenance of the resource",
                            "properties": {
                              "@type": {"type":"string", "const": "PropertyValue", "default": "PropertyValue"},
                              "propertyID": {"type":"string", "default": "ecrro:ECRRO_0000218", "const": "ecrro:ECRRO_0000218"},
                              "name": {
                                "type": "string",
                                "default": "Stewardship",
                                "const": "Stewardship"
                              },
                              "value":
                                  {
                                    "type": "array",
                                    "items": {"$ref": "#/definitions/agent_type"}
                                  }
                            }
             },
             "dependencies": {
                       "type": "object",
                       "description": "dependencies and their url",
                       "properties": {
                         "name": {"type": "string"},
                         "@type": {"type": "string", "const": "PropertyValue"},
                         "propertyID": {"type": "string", "const": "http://purl.obolibrary.org/obo/RO_0002502"},

                         "value": {
                               "type": "array",
                               "items": {"$ref": "#/definitions/creativeWork_type"}
                         }
                       }
           },
       "ecrro:ECRRO_0000017": {
          "type": "object",
          "title": "Current Usage Level",
          "description": "usage volume from controlled vocabulary at http://cor.esipfed.org/ont/earthcube/UBA",
          "properties": {
                       "name": {
                         "type": "string",
                         "default": "Usage",
                         "const": "Usage"
                       },
                        "@type": {"type": "string","default": "PropertyValue", "const": "PropertyValue"},
                      "propertyID": {"type": "string","default": "ecrro:ECRRO_0000017", "const": "ecrro:ECRRO_0000017"},
                     "value": {"$ref": "#/definitions/definedTerm_type"}
          }
        },
        "ecrro:ECRRO_0000503":{
                  "type": "object",
                  "description": "Interface specification",
                  "properties": {
                    "@type": {"type": "string","default":"PropertyValue", "const": "PropertyValue"},
                    "propertyID": {"type": "string","default":"ecrro:ECRRO_0000503", "const": "ecrro:ECRRO_0000503"},
                    "name": {"type": "string"},
                    "value": {

                          "type": "array",
                          "items": {"$ref": "#/definitions/creativeWork_type"}

                    }
                  }
                },
  },
  "required": [
    "name",
    "description",

    "license",
    "url",
    "datePublished",
    "keywords"
  ],
  "definitions": {
    "identifier_type":
    {
      "type": "object",
      "properties": {

        "value": {"type": "string"},
        "@type": {"type": "string", "const": "sdo:PropertyValue", "default":  "sdo:PropertyValue"},
        "propertyID": {"type": "string",
          "enum": ["DATACITEURL", "PERLURL","DOIURL"],
          "default":"DOIURL"},
        "name": {"type": "string",
          "enum": ["DATACITE", "DOI","OTHER"],
          "default":"DOI"}

      }
    },
    "agent_type": {
      "description": "{name (optional)identifier} pairs, typed either Person or Organization.  Other person or organization properties could be added",
      "type": "object",
      "properties": {
                "name": {"type": "string"},
                "@type": { "type": "string",
          "enum": [
            "Person",
            "Organization"
          ],
          "default":"Person"
        },

        "identifier": {"type": "string"}
      },
      "required": [
        "@type",
        "name"
      ]
    },
     "funding_agent_type": {
          "title": "Funder",
          "description": "{name (optional)identifier} pairs, typed either Person or Organization.  Other person or organization properties could be added",
          "type": "object",
          "properties": {
                        "name": {"type": "string"},
                        "@type": {
              "enum": [
                "Person",
                "Organization"
              ],

            },

            "identifier": {"type": "string"}
          },
          "required": [
            "@type",
            "name"
          ]
        },
        "grant_type":
        {
                    "type": "object",
                    "title": "Grant",
                    "description": "a Grant instrument",
                    "properties": {
                                            "identifier": {
                                              "type": "string"
                                            },
                                            "@type": {
                        "type": "string",
                        "default": "Grant",
                        "const": "Grant"
                      },
                      "name": {
                        "type": "string"
                      },

                      "sponsor": {
                        "type": "object",
                        "description": "agency that provided and adminsters the grant funding",
                        "properties": {
                          "@type": {
                            "type": "string",
                            "default": "FundingAgency",
                            "const": "FundingAgency"
                          },
                          "name": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  },
    "audience_type": {
      "type": "object",
      "properties": {
                "audienceType": {"type": "string"},
                "@type": {
          "type": "string",
          "default":"Audience",
          "const": "Audience"
        },

        "identifier": {"type": "string"}
      },
      "required": [
        "@type",
        "audienceType"
      ]
    },
    "creativeWork_type": {
      "type": "object",
      "properties": {
        "@type": {"type": "string", "default":"CreativeWork", "const": "CreativeWork"},
        "name": {"type": "string"},
        "url": {"type": "string"}
      }
    },
    "resourceTypes_type":{
          "type": "object",
          "properties": {
                "name": {"type": "string"},
                                "@type": {"type": "string", "default":"CreativeWork", "const": "CreativeWork"},

                "url": {"type": "string"}
              }

    },
    "definedTerm_type": {
      "type": "object",
      "properties": {
        "name": {"type": "string"},
        "@type": {"type": "string","default": "DefinedTerm", "const": "DefinedTerm"},
        "identifier": {"type": "string"}
      },
      "required": [
        "identifier",
        "@type",
        "name"
      ]
    },
    "supportingData_type": {
      "type": "object",
      "properties": {
        "name": {"type": "string"},
                "@type": {
          "type": "string",
          "default": "DataFeed",
          "const": "DataFeed"
        },

        "position": {
          "type": "string",
          "enum": [
            "input",
            "output"
          ],
          "default": "input"
        },
        "encodingFormat": {
          "title": "file format and profile for input or output data to/from the application (consistent with value of 'positition' element)",
          "description": "mime type with 'type' or 'application' extension that indicates specific application or profile compatibility of file content; values should come from https://github.com/earthcube/GeoCODES-Metadata/blob/main/resources/encodingFormat.csv",

              "type": "array",
              "items": {"type": "string"}

        }
      }
    },
    "action_type": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string",
          "default": "Open software on the web"
        },
                "@type": {"type": "string", "default": "Action", "const": "Action"},
        "urlTemplate": {"type": "string"},

        "httpMethod": {
        "title": "HTTP Method",
          "type": "array",
          "items":
            {
              "type": "string",
              "default": "GET",
              "enum": ["GET","PUT","POST","PATCH","DELETE","COPY","HEAD","OPTIONS", "PROPFIND" ]
            }

        }
      }
    },
    "citationType":  {
      "type": "object",
      "properties": {
        "name": {"type": "string"},
                "@type": {"type": "string","default": "PropertyValue", "const": "PropertyValue"},
        "propertyID": {"type": "string","default": "dc:BibliographicCitation", "const": "dc:BibliographicCitation"},

        "value": {"type": "string"}
      }
    },
    "metadataCreatorType": {
                                    "type": "object",
                                    "description": "metadata contributor information",
                                    "properties": {
                                      "@type": {"type": "string","default": "PropertyValue", "const": "PropertyValue"},
                                      "propertyID": { "type": "string","default":  "ecrro:ECRRO_0001301", "const": "ecrro:ECRRO_0001301"},
                                      "name": {
                                        "type": "string",
                                        "default": "registration metadata"
                                      },
                                      "value": {
                                        "type": "object",
                                        "properties": {
                                          "@type": { "type": "string","default":"StructuredValue", "const": "StructuredValue"},
                                          "additionalType": {"type": "string","default":"ecrro:ECRRO_0000156", "const": "ecrro:ECRRO_0000156"},
                                          "contributor": {
                                            "type": "object",
                                            "properties": {
                                              "@type": { "type": "string","default":"Person", "const": "Person"},
                                              "name": {"type": "string"},
                                              "identifier": {"type": "string"}
                                            }
                                          },
                                          "datePublished": {"type": "string"}
                                        }
                                      }
                                    }
                                  },

    "additionalProperty_type": {
      "anyOf": [
        { "$anchor":"additionalProperty0", // these are where they are in the additionalProperty oneOf array
          "type": "object",
          "properties": {
            "@type": { "type": "string","default": "PropertyValue","const": "PropertyValue"},
            "propertyID": { "type": "string","default":"dc:BibliographicCitation","const": "dc:BibliographicCitation"},
            "name": {"type": "string"},
            "value": {"type": "string"}
          }
        },
        { "$anchor":"additionalProperty1", // these are where they are in the additionalProperty oneOf array
          "type": "object",
          "description": "Interface specification",
          "properties": {
            "@type": { "type": "string","default":"PropertyValue", "const": "PropertyValue"},
            "propertyID": { "type": "string","default":"ecrro:ECRRO_0000503", "const": "ecrro:ECRRO_0000503"},
            "name": {"type": "string"},
            "value": {

                  "type": "array",
                  "items": {"$ref": "#/definitions/creativeWork_type"}

            }
          }
        },
        { "$anchor":"additionalProperty2", // these are where they are in the additionalProperty oneOf array
          "type": "object",
          "description": "dependencies and their url",
          "properties": {
            "@type": {"type": "string","default":"PropertyValue","const": "PropertyValue"},
            "propertyID": {"type": "string","default":"http://purl.obolibrary.org/obo/RO_0002502","const": "http://purl.obolibrary.org/obo/RO_0002502"},
            "name": {"type": "string"},
            "value": {

                  "type": "array",
                  "items": {"$ref": "#/definitions/creativeWork_type"}

            }
          }
        },
        { "$anchor":"additionalProperty3", // these are where they are in the additionalProperty oneOf array
          "type": "object",
          "description": "ECRR resource maturity status, from controlled vocabulary http://cor.esipfed.org/ont/earthcube/MTU",
          "properties": {
            "@type": {"type": "string","default":"PropertyValue","const": "PropertyValue"},
            "propertyID": {"type": "string","default": "ecrro:ECRRO_0000138","const": "ecrro:ECRRO_0000138"},
            "name": {
              "type": "string",
              "default": "has maturity state"
            },
            "value": {"$ref": "#/definitions/definedTerm_type"}
          }
        },
        {"$anchor":"additionalProperty4", // these are where they are in the additionalProperty oneOf array
          "type": "object",
          "description": "Expected lifetime-- how long is it anticipated that the resource will be maintained and accessible online, from controlled vocabulary http://cor.esipfed.org/ont/earthcube/ELT",
          "properties": {
            "@type": {"type": "string","default":"PropertyValue","const": "PropertyValue"},
            "propertyID": {"type": "string","default":"ecrro:ECRRO_0000219","const": "ecrro:ECRRO_0000219"},
            "name": {
              "type": "string",
              "default": "expected lifetime"
            },
            "value": {"$ref": "#/definitions/definedTerm_type"}
          }
        },
        {
          "type": "object",
          "$anchor":"additionalProperty5", // these are where they are in the additionalProperty oneOf array
          "description": "primary publication-- a text citation to one or more publications about the resource; separated by pipe ('|') characters",
          "properties": {
            "@type": {"type": "string","default":"PropertyValue","const": "PropertyValue"},
            "propertyID": {"type": "string","default": "ecrro:ECRRO_0000600","const": "ecrro:ECRRO_0000600"},
            "name": {
              "type": "string",
              "default": "primary publication"
            },
            "value": {"type": "string"}
          }
        },
        { "$anchor":"additionalProperty6", // these are where they are in the additionalProperty oneOf array
          "type": "object",
          "description": "stewardship: name of person or organization responsible for maintenance of the resource",
          "properties": {
            "@type": {"type": "string","default":"PropertyValue","const": "PropertyValue"},
            "propertyID": {"type": "string","default": "ecrro:ECRRO_0000218","const": "ecrro:ECRRO_0000218"},
            "name": {
              "type": "string",
              "default": "Stewardship"
            },
            "value": {

                  "type": "array",
                  "items": {"$ref": "#/definitions/agent_type"}

            }
          }
        },
        {"$anchor":"additionalProperty7", // these are where they are in the additionalProperty oneOf array
          "type": "object",
          "description": "usage volume from controlled vocabulary at http://cor.esipfed.org/ont/earthcube/UBA",
          "properties": {
            "@type": {"type": "string","default":"PropertyValue","const": "PropertyValue"},
            "propertyID": {"type": "string","default": "ecrro:ECRRO_0000017","const": "ecrro:ECRRO_0000017"},
            "name": {
              "type": "string",
              "default": "Usage"
            },
            "value": {"$ref": "#/definitions/definedTerm_type"}
          }
        },
        { "$anchor":"additionalProperty8", // these are where they are in the additionalProperty oneOf array
          "type": "object",
          "description": "metadata contributor information",
          "properties": {
            "@type": {"type": "string","default":"PropertyValue","const": "PropertyValue"},
            "propertyID": {"type": "string","default":"ecrro:ECRRO_0001301","const": "ecrro:ECRRO_0001301"},
            "name": {
              "type": "string",
              "default": "registration metadata"
            },
            "value": {
              "type": "object",
              "properties": {
                "@type": {"type": "string","default":"StructuredValue", "const": "StructuredValue"},
                "additionalType": {"type": "string","default":"ecrro:ECRRO_0000156","const": "ecrro:ECRRO_0000156"},
                "contributor": {
                  "type": "object",
                  "properties": {
                    "@type": {"type": "string","default":"Person","const": "Person"},
                    "name": {"type": "string"},
                    "identifier": {"type": "string"}
                  }
                },
                "datePublished": {"type": "string"}
              }
            }
          }
        }
      ]
    }
  }
}

const withEnum =     function() {

    let licenses = licenseList()
   // const licenseOneOf = [...licenseList ]
    jsonschema.properties.license.items= licenses

    let rtypes = resourceTypeList()
    jsonschema.properties.mainEntity.oneOf = rtypes.oneOf
    //jsonschema.properties.mainEntity.items= rtypes
    //jsonschema.definitions.resourceTypes_type.items= rtypes

    return  jsonschema
}

export { jsonschema as default,  withEnum as schemaWithEnum}

