//import {default as licenseOneOf} from './licenseOneOf'
import {
  licenseList,
  resourceTypeList,
  //functionenum,
  scienceDomainList,
  maturityOneOf,
  lifetimeOneOf,
  audienceOneOf
} from './controlledFromGooglesheet';

const jsonschema = {
  $comment: "Simplified for use in a forms application. Generated. Edits to schema  should happen in the the ECRR jsonforms application. https://github.com/earthcube/jsonld_forms/blob/master/src/schema/tools/ecrr_jsonschema_1_0.js",
  type: 'object',
  title: 'EarthCube Resource Registry (ECRR) Resource Description',
  description:
      'JSON schema for EarthCube Resource Registry (ECRR) resource descriptions. The base object is common to allresource types, and definition section adds resource-specific properties. Resource types are Specification, UseCase, InterchangeFormat, Software, Interface, ',
  properties: {
    '@id': {
      type: 'string',
      description:
          'globally identifier string for this metadata record, commonly a UUID with or without an HTTP prefix for web resolution'
    },
    '@type': {
      type: 'array',
      "description": "a schema.org Class that specifies the expected information content for the metadata record. For ECRR resources, expected values are (CreativeWork, SoftwareApplication, Product, WebAPI). The type classes for a given resource description are selected based on the schema.org properties used to describe the resource.",
      minItems: 1,
      items: {
        enum: ['CreativeWork', 'SoftwareApplication', 'Product', 'WebAPI']
      },
      "default": "CreativeWork"
    },
    name: {
      type: 'string',
      description:
          'Short name by which this resource will be recognized; for human users to identify the resource; should be unique in scope of registry and informative enough to tell someone what the described resource is'
    },
    alternateName: {
      title: 'alternate name for resource',
      description:
          "other names, abbreviations, languages, by which the resource might be known.  If names are provided in a non-English language, please suffix a language identifier using the '@' delimiter and an ISO-639-1 two letter language code, e.g. Forme universelle binaire de l'OMM@fr. Separate entries with a pipe ('|') character",
      type: 'array',
      items: {
        type: 'string'
      }
    },
    subjectOf: {
      title: 'URL to User-Readable Page',
      "description": "Name and url for one or more web pages or other web accessible document about the resource; require at least one URL. Use creativeWork to get a labeled link. Future-- change to schema:LinkRole?",
      type: 'array',
      items: {
        $ref: '#/definitions/creativeWork_type'
      }
    },
    identifier: {
      title: 'External Identifier',
      description:
          'Globally unique identifier for the described resource; could be single value or array of strings for multiple identifiers',
      type: 'array',
      items: {
        type: 'string'
        // oneOf complex anno ther
        //       "oneOf": [
        //         {"type": "string", "title":"String"},
        //         {"$ref": "#/definitions/identifier_type",
        //         "title":"Detailed Idenfier"},
        //
        //
        //       ]
      },
      "$comment": " change type, don't use {'$ref': '#/definitions/identifier_type'} for now, legacy data doesn't have identifier type, and there are lots of kinds of identifiers; as long as they are a URI, the scheme is indicated by the identifier prefix"
    },
    description: {
      type: 'string',
      description:
          'a text description of the resource. This text will be indexed by search aggregators, and the information contained should be sufficient to tell a person what the resource is, broadly how to use it.'
    },
    datePublished: {
      type: 'string',
      format: 'date'
    },
    creator: {
      title:
          'one or more person or organization entities responsible for the intellectual content of the resource',
      type: 'array',
      items: {
        $ref: '#/definitions/agent_type'
      }
    },
    editor: {
      title:
          'one or more person or organization entities responsible editing the resource',
      type: 'array',
      items: {
        $ref: '#/definitions/agent_type'
      }
    },
    contributor: {
      title:
          'one or more person or organization entities who contributed to creation of the resource',
      type: 'array',
      items: {
        $ref: '#/definitions/agent_type'
      }
    },
    publisher: {
      $ref: '#/definitions/agent_type'
    },
    developer: {
      type: 'array',
      items: {
        $ref: '#/definitions/agent_type'
      }
    },

    stewardship: {
      $ref: '#/definitions/agent_type'
    },
    'ecrro:ECRRO_0000600': {
      type: 'object',
      description:
          "primary publication-- a text citation to one or more publications about the resource; separated by pipe ('|') characters",
      properties: {
        '@type': {
          type: 'string',
          const: 'PropertyValue',
          default: 'PropertyValue'
        },
        propertyID: {
          type: 'string',
          const: 'ecrro:ECRRO_0000600',
          default: 'ecrro:ECRRO_0000600'
        },
        name: {
          type: 'string',
          title: 'short name',
          default: 'primary publication'
        },
        value: {type: 'string'}
      }
    },
    keywords: {
      type: 'array',
      items: {
        type: 'string'
      },
      description: 'list of keywords'
    },
    license: {
      title: 'legal statement of conditions for use and access',
      type: 'array',
      uniqueItems: true,
      items: {
        //         "oneOf": [
        //
        //         ]
      }
    },
    version: {
      type: 'string',
      description:
          'string that identifies a particular version of the resource if it is not identified by the schema:identifier element'
    },
    "funding": {
      "description": "An array of grants. Grant has a funder -- person or organization that provides financial support, or a sponsor-- person or organization that provides financial or other kinds of support (office space, lab supplies",
      "type": "array",
      "items": {"$ref": "#/definitions/grant_type"}
    },
    audience: {
      title: 'Intended Audience/Target User',
      description:
          'terms from controlled vocabulary to identify the kinds of users who are the target of the described resource',
      //  "uniqueItems": true,
      type: 'array',
      items: {
        //    "$ref": "#/definitions/audience_type"
      }
    },
    about: {
      title: 'Science Domain',
      type: 'array',
      uniqueItems: true,
      items: {
        //     "$ref": "#/definitions/definedTerm_type"
      }
    },
    contentType: {
      title: 'Content Type(s) of Catalogued Objects in a Catalog or repository',
      description:
          "Content Type(s) of Catalogued Objects; one object or array of objects, could be anything to type is 'schema:Thing'; each with name and optional identifier",
      type: 'array',
      items: {
        type: 'object',
        properties: {
          '@type': {
            type: 'string',
            default: 'Thing',
            const: 'Thing'
          },
          name: {
            type: 'string'
          },
          identifier: {
            type: 'string'
          }
        }
      }
    },
    isRelatedTo: {
      title: 'Related Resources',
      description:
          'array of labeled links {name, url} to related resources. the label should express the relationship to the target and identify the target for a user; URL should be a resolvable address to access the related resource (or some representation of it...). Machine readable endpoint for a web api (e.g. Swagger document goes here, typed as schema:Product',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          '@type': {
            type: 'string'
          },
          name: {
            type: 'string'
          },
          url: {
            type: 'string'
          }
        }
      }
    },
    mainEntity: {
      title: 'Type of Resource',
      "description": "Labeled link url is URI for ECRR resource type; name is ECRR resource type name. The ECRR URI (ECRRO_ or SFO_ prefix URIs) is used to validate resource specific properties. If the resource type is Specification or Semantic Resource, a more specific resource type from the SPKT or srt vocabulary (respectively) can be specified.",
      "items": {
        //"type": "Object",
        // "uniqueItems": true,
        //       "items": {
        //     //    "$ref": "#/definitions/resourceTypes_type"
        //       }

      },
    },
      encodingFormat: {
        title: 'Representation Format or base format for a profile specification',
        description:
            "format pattern is a registered MIME type prefix for the base format, and an application specific extension (after a ';' delimiter.  Values should be from the register at https://github.com/earthcube/GeoCODES-Metadata/blob/main/resources/encodingFormat.csv ",
        type: 'array',
        items: {
          type: 'string'
        }
      },
      isBasedOn: {
        title: 'Semantic Resources it Uses',
        description:
            'references to Semantic Resources used by the described resource',
        type: 'array',
        items: {
          $ref: '#/definitions/creativeWork_type'
        }
      },
      'dct:conformsTo': {
        title: 'Conforms to',
        description:
            'references to specifications that the described resource is in conformance with',
        type: 'array',
        items: {
          $ref: '#/definitions/creativeWork_type'
        }
      },
      'eccro:ECRRO_0000501': {
        title: 'profile of',
        description:
            'Links to base specifications that a specifcation resource profiles. Only applicable if resource type is specification',
        type: 'array',
        items: {
          $ref: '#/definitions/creativeWork_type'
        }
      },
      'ecrro:ECRRO_0000502': {
        title: 'Communication Protocol(s)',
        description:
            'communication protocol(s) used. Use ECRR controlled vocabulary',

        type: 'array',
        items: {
          $ref: '#/definitions/definedTerm_type'
        }
      },
      applicationCategory: {
        title: 'Application function and subfunction',
        description:
            'strings use special syntac like {function: ... uri: ... }. The function value is the label associated with the ECRR uri in the function vocabulary (http://cor.esipfed.org/ont/earthcube/SFO_0000001)',

        type: 'array',
        items: {
          type: 'string'
        }
      },
      runtimePlatform: {
        title: 'runtime platform',
        description:
            'runtime environments for the application, uses controlled vocabulary http://cor.esipfed.org/ont/earthcube/RTE. content is crude at this point, string entries in array with platform name and URI; should be DefinedTerm',

        type: 'array',
        items: {
          type: 'string'
        }
      },
      programmingLanguage: {
        title: 'Programming language',
        description:
            'list of names of programming languages, with versions thereof.  Ideally should be definedTerms with name and URI',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            '@type': {
              type: 'string',
              default: 'ComputerLanguage',
              const: 'ComputerLanguage'
            },
            name: {
              type: 'string'
            },
            identifier: {
              type: 'string'
            }
          }
        }
      },
      supportingData: {
        title: 'Supporting input and output data formats',
        description:
            'critical bit for linking data and software; the input encodingFormat is used to match to the distribution encodingFormat for a dataset',

        type: 'array',
        items: {
          $ref: '#/definitions/supportingData_type'
        }
      },
      codeRepository: {
        title: 'Code Repository',
        description:
            'name and URL location for repository in which code for an application or semantic resource is managed',

        type: 'array',
        items: {
          $ref: '#/definitions/creativeWork_type'
        }
      },
      installURL: {
        title: 'Software Install URL',
        description:
            'URL that locates an installer package or instructions for installing software for use in a local environment',

        type: 'array',
        items: {
          $ref: '#/definitions/creativeWork_type'
        }
      },
      potentialAction: {
        title: 'Direct invocation of App on the web',
        description:
            "use schema.org Action to document url or url template and parameters to invoke the application through a web accessible location. At this point, schema is set up for online one action-- an HTTP Get that invokes the web application. The url template can have only one paramter 'contentURL' that will be the contentURL from a distribution for a dataset that has an encoding format matchign the supportingData input for this application.",

        type: 'array',
        items: {
          $ref: '#/definitions/action_type'
        }
      },
      url: {
        title: 'URL to access the resource.',
        "description": "For a Service instance, this is the URL of the Service endPoint. For DataSets, the recommended content is a link to a landing page with a description of the resource and other links to access it. Other important URLs have specific properties in this schema and should be populated there, e.g. subjectOf, installURL, codeRepository, service endpoint. For web applications, the url to invoke the app should be in potentialAction/Action/target/EntryPoint/urlTemplate. ",
        type: 'array',
        items: {
          $comment: "this is not consistent with schema.org expected type 'string', but with LinkRole; use for labeled urls",
          type: 'object',
          properties: {
            '@type': {
              type: 'string',
              default: 'LinkRole',
              const: 'LinkRole'
            },
            "url": {"type": "string"},
            "linkRelationship": {"type": "string"}
          }
        }
      },
      additionalProperty: {
        type: 'array',
        title: 'Other Properties',
        description:
            'EC resource registry properties that extend Schema.org are implemented as an array of PropertyValue inside a schema:additionalProperty',
        items: {
          $ref: '#/definitions/additionalProperty_type'
        }
      },
      /* EXPOSED ADDITIONAL PROPERTIES
      These will need to be stored in the additionalProperty.
      But for defining the form, they are stored at the top level
      */
      'ecrro:ECRRO_0001301': {
        $ref: '#/definitions/metadataCreatorType'
      },
      'dct:bibliographicCitation': {
        title: 'Bibliographic Citation',
        $ref: '#/definitions/citationType'
      },
      'ecrro:ECRRO_0000138': {
        title: 'Maturity',
        type: 'object',
        description:
            'ECRR resource maturity status, from controlled vocabulary http://cor.esipfed.org/ont/earthcube/MTU',
        properties: {
          value: {
            oneOf: []
          },
          '@type': {
            type: 'string',
            default: 'PropertyValue',
            const: 'PropertyValue'
          },
          propertyID: {
            type: 'string',
            default: 'ecrro:ECRRO_0000138',
            const: 'ecrro:ECRRO_0000138'
          },
          name: {
            type: 'string',
            default: 'has maturity state',
            readonly: true
          }
          //   "value": {"$ref": "#/definitions/definedTerm_type"}
        }
      },
      'ecrro:ECRRO_0000219': {
        type: 'object',
        description:
            'Expected lifetime-- how long is it anticipated that the resource will be maintained and accessible online, from controlled vocabulary http://cor.esipfed.org/ont/earthcube/ELT',
        properties: {
          name: {
            type: 'string',
            default: 'expected lifetime'
          },
          '@type': {
            type: 'string',
            default: 'PropertyValue',
            const: 'PropertyValue'
          },
          propertyID: {
            type: 'string',
            default: 'ecrro:ECRRO_0000219',
            const: 'ecrro:ECRRO_0000219'
          },

          //   "value": {"$ref": "#/definitions/definedTerm_type"}
          value: {
            type: 'object',
            properties: {
              name: {type: 'string'},
              '@type': {
                type: 'string',
                default: 'DefinedTerm',
                const: 'DefinedTerm'
              },

              identifier: {type: 'string'}
            },
            required: ['identifier', '@type', 'name']
          }
        }
      },
      'ecrro:ECRRO_0000218': {
        type: 'object',
        description:
            'stewardship: name of person or organization responsible for maintenance of the resource',
        properties: {
          '@type': {
            type: 'string',
            const: 'PropertyValue',
            default: 'PropertyValue'
          },
          propertyID: {
            type: 'string',
            default: 'ecrro:ECRRO_0000218',
            const: 'ecrro:ECRRO_0000218'
          },
          name: {
            type: 'string',
            default: 'Stewardship',
            const: 'Stewardship'
          },
          value: {
            type: 'array',
            items: {$ref: '#/definitions/agent_type'}
          }
        }
      },
      dependencies: {
        type: 'object',
        description: 'dependencies and their url',
        properties: {
          name: {type: 'string'},
          '@type': {type: 'string', const: 'PropertyValue'},
          propertyID: {
            type: 'string',
            const: 'http://purl.obolibrary.org/obo/RO_0002502'
          },

          value: {
            type: 'array',
            items: {$ref: '#/definitions/creativeWork_type'}
          }
        }
      },
      'ecrro:ECRRO_0000017': {
        type: 'object',
        title: 'Current Usage Level',
        description:
            'usage volume from controlled vocabulary at http://cor.esipfed.org/ont/earthcube/UBA',
        properties: {
          name: {
            type: 'string',
            default: 'Usage',
            const: 'Usage'
          },
          '@type': {
            type: 'string',
            default: 'PropertyValue',
            const: 'PropertyValue'
          },
          propertyID: {
            type: 'string',
            default: 'ecrro:ECRRO_0000017',
            const: 'ecrro:ECRRO_0000017'
          },
          value: {$ref: '#/definitions/definedTerm_type'}
        }
      },
      'ecrro:ECRRO_0000503': {
        type: 'object',
        description: 'Interface specification',
        properties: {
          '@type': {
            type: 'string',
            default: 'PropertyValue',
            const: 'PropertyValue'
          },
          propertyID: {
            type: 'string',
            default: 'ecrro:ECRRO_0000503',
            const: 'ecrro:ECRRO_0000503'
          },
          name: {type: 'string'},
          value: {
            type: 'array',
            items: {$ref: '#/definitions/creativeWork_type'}
          }
        }
      }
    },
    required: [
      "@id",
      "@type",
      "name",
      "description",
      "license",
      "mainEntity"
    ],
    definitions: {
      identifier_type: {
        type: 'object',
        title: 'identifier',
        properties: {
          value: {type: 'string'},
          '@type': {
            type: 'string',
            const: 'PropertyValue',
            default: 'PropertyValue'
          },
          propertyID: {
            type: 'string',
            // "enum": ["DATACITEURL", "PERLURL","DOIURL"],
            default: 'DOIURL'
          },
          name: {
            type: 'string',
            //  "enum": ["DATACITE", "DOI","OTHER"],
            default: 'DOI'
          }
        }
      },
      agent_type: {
        description:
            '{name (optional)identifier} pairs, typed either Person or Organization.  Other person or organization properties could be added',
        type: 'object',
        properties: {
          name: {type: 'string'},
          '@type': {
            type: 'string',
            enum: ['Person', 'Organization'],
            default: 'Person'
          },

          identifier: {type: 'string'}
        },
        required: ['@type', 'name']
      },
      "grant_type": {
        "type": "object",
        "title": "Grant",
        "description": "a Grant instrument",
        "properties": {
          "@type": {
            "type": "string",
            "default": "Grant",
            "const": "Grant"
          },
          "name": {"type": "string"},
          "identifier": {"type": "string"},
          "sponsor": {
            "description": "agent that provided financial or other kinds of support for development of resource",
            "$comment": "$ref not working. #/definitions/agent_type",
            type: 'object',
            properties: {
              name: {type: 'string'},
              '@type': {
                type: 'string',
                enum: ['Person', 'Organization'],
                default: 'Person'
              },

              identifier: {type: 'string'}
            },
            required: ['@type', 'name']
          },
          "funder": {
            "description": "agent that provided and adminsters financial support to create or maintain the resource",
            "$comment": "$ref not working. #/definitions/agent_type",
            type: 'object',
            properties: {
              name: {type: 'string'},
              '@type': {
                type: 'string',
                enum: ['Person', 'Organization'],
                default: 'Person'
              },

              identifier: {type: 'string'}
            },
            required: ['@type', 'name']
          }
        },
        "required": [
          "@type",
          "name"
        ]
      },
      audience_type: {
        type: 'object',
        properties: {
          audienceType: {type: 'string'},
          '@type': {
            type: 'string',
            default: 'Audience',
            const: 'Audience'
          },
          identifier: {type: 'string'}
        },
        required: ['@type', 'audienceType']
      },
      creativeWork_type: {
        type: 'object',
        properties: {
          name: {type: 'string'},
          '@type': {
            type: 'string',
            default: 'CreativeWork',
            const: 'CreativeWork'
          },
          url: {type: 'string'}
        }
      },
      resourceTypes_type: {
        type: 'object',
        properties: {
          name: {type: 'string'},
          '@type': {
            type: 'string',
            default: 'CreativeWork',
            const: 'CreativeWork'
          },

          url: {type: 'string'}
        }
      },
      definedTerm_type: {
        type: 'object',
        properties: {
          name: {type: 'string'},
          '@type': {
            type: 'string',
            default: 'DefinedTerm',
            const: 'DefinedTerm'
          },
          identifier: {type: 'string'}
        },
        required: ['identifier', '@type', 'name']
      },
      supportingData_type: {
        type: 'object',
        properties: {
          name: {type: 'string'},
          '@type': {
            type: 'string',
            default: 'DataFeed',
            const: 'DataFeed'
          },

          position: {
            type: 'string',
            enum: ['input', 'output'],
            default: 'input'
          },
          encodingFormat: {
            title:
                "file format and profile for input or output data to/from the application (consistent with value of 'positition' element)",
            description:
                "mime type with 'type' or 'application' extension that indicates specific application or profile compatibility of file content; values should come from https://github.com/earthcube/GeoCODES-Metadata/blob/main/resources/encodingFormat.csv",

            type: 'array',
            items: {type: 'string'}
          }
        }
      },
      action_type: {
        type: 'object',
        properties: {
          '@type': {type: 'string', default: 'Action', const: 'Action'},
          name: {type: 'string', default: 'Execute web application'},
          target: {
            type: 'object',
            properties: {
              '@type': {
                type: 'string',
                default: 'EntryPoint',
                const: 'EntryPoint'
              },
              description: {
                type: 'string',
                default: 'Open software on the web'
              },
              urlTemplate: {type: 'string'},

              httpMethod: {
                title: 'HTTP Method',
                type: 'array',
                items: {
                  type: 'string',
                  default: 'GET',
                  enum: [
                    'GET',
                    'PUT',
                    'POST',
                    'PATCH',
                    'DELETE',
                    'COPY',
                    'HEAD',
                    'OPTIONS',
                    'PROPFIND'
                  ]
                }
              }
            }
          }
        }
      },
      citationType: {
        type: 'object',
        properties: {
          name: {type: 'string'},
          '@type': {
            type: 'string',
            default: 'PropertyValue',
            const: 'PropertyValue'
          },
          propertyID: {
            type: 'string',
            default: 'dct:bibliographicCitation',
            const: 'dct:bibliographicCitation'
          },

          value: {type: 'string'}
        }
      },
      metadataCreatorType: {
        type: 'object',
        description: 'metadata contributor information',
        properties: {
          '@type': {
            type: 'string',
            default: 'PropertyValue',
            const: 'PropertyValue'
          },
          propertyID: {
            type: 'string',
            default: 'ecrro:ECRRO_0001301',
            const: 'ecrro:ECRRO_0001301'
          },
          name: {
            type: 'string',
            default: 'registration metadata'
          },
          value: {
            type: 'object',
            properties: {
              '@type': {
                type: 'string',
                default: 'StructuredValue',
                const: 'StructuredValue'
              },
              additionalType: {
                type: 'string',
                default: 'ecrro:ECRRO_0000156',
                const: 'ecrro:ECRRO_0000156'
              },
              contributor: {
                type: 'object',
                properties: {
                  '@type': {type: 'string', default: 'Person', const: 'Person'},
                  name: {type: 'string'},
                  identifier: {type: 'string'}
                }
              },
              datePublished: {type: 'string', "format": "date-time"}
            }
          }
        }
      },

      additionalProperty_type: {
        anyOf: [
          {

            type: 'object',
            properties: {
              '@type': {
                type: 'string',
                default: 'PropertyValue',
                const: 'PropertyValue'
              },
              propertyID: {
                type: 'string',
                default: 'dct:bibliographicCitation',
                const: 'dct:bibliographicCitation'
              },
              name: {type: 'string'},
              value: {type: 'string'}
            }
          },
          {

            type: 'object',
            description: 'Interface specification',
            properties: {
              '@type': {
                type: 'string',
                default: 'PropertyValue',
                const: 'PropertyValue'
              },
              propertyID: {
                type: 'string',
                default: 'ecrro:ECRRO_0000503',
                const: 'ecrro:ECRRO_0000503'
              },
              name: {type: 'string'},
              value: {
                type: 'array',
                items: {$ref: '#/definitions/creativeWork_type'}
              }
            }
          },
          {

            type: 'object',
            description: 'dependencies and their url',
            properties: {
              '@type': {
                type: 'string',
                default: 'PropertyValue',
                const: 'PropertyValue'
              },
              propertyID: {
                type: 'string',
                default: 'http://purl.obolibrary.org/obo/RO_0002502',
                const: 'http://purl.obolibrary.org/obo/RO_0002502'
              },
              name: {type: 'string'},
              value: {
                type: 'array',
                items: {$ref: '#/definitions/creativeWork_type'}
              }
            }
          },
          {

            type: 'object',
            description:
                'ECRR resource maturity status, from controlled vocabulary http://cor.esipfed.org/ont/earthcube/MTU',
            properties: {
              '@type': {
                type: 'string',
                default: 'PropertyValue',
                const: 'PropertyValue'
              },
              propertyID: {
                type: 'string',
                default: 'ecrro:ECRRO_0000138',
                const: 'ecrro:ECRRO_0000138'
              },
              name: {
                type: 'string',
                default: 'has maturity state'
              },
              value: {$ref: '#/definitions/definedTerm_type'}
            }
          },
          {

            type: 'object',
            description:
                'Expected lifetime-- how long is it anticipated that the resource will be maintained and accessible online, from controlled vocabulary http://cor.esipfed.org/ont/earthcube/ELT',
            properties: {
              '@type': {
                type: 'string',
                default: 'PropertyValue',
                const: 'PropertyValue'
              },
              propertyID: {
                type: 'string',
                default: 'ecrro:ECRRO_0000219',
                const: 'ecrro:ECRRO_0000219'
              },
              name: {
                type: 'string',
                default: 'expected lifetime'
              },
              value: {$ref: '#/definitions/definedTerm_type'}
            }
          },
          {
            type: 'object',

            description:
                "primary publication-- a text citation to one or more publications about the resource; separated by pipe ('|') characters",
            properties: {
              '@type': {
                type: 'string',
                default: 'PropertyValue',
                const: 'PropertyValue'
              },
              propertyID: {
                type: 'string',
                default: 'ecrro:ECRRO_0000600',
                const: 'ecrro:ECRRO_0000600'
              },
              name: {
                type: 'string',
                default: 'primary publication'
              },
              value: {type: 'string'}
            }
          },
          {

            type: 'object',
            description:
                'stewardship: name of person or organization responsible for maintenance of the resource',
            properties: {
              '@type': {
                type: 'string',
                default: 'PropertyValue',
                const: 'PropertyValue'
              },
              propertyID: {
                type: 'string',
                default: 'ecrro:ECRRO_0000218',
                const: 'ecrro:ECRRO_0000218'
              },
              name: {
                type: 'string',
                default: 'Stewardship'
              },
              value: {
                type: 'array',
                items: {$ref: '#/definitions/agent_type'}
              }
            }
          },
          {

            type: 'object',
            description:
                'usage volume from controlled vocabulary at http://cor.esipfed.org/ont/earthcube/UBA',
            properties: {
              '@type': {
                type: 'string',
                default: 'PropertyValue',
                const: 'PropertyValue'
              },
              propertyID: {
                type: 'string',
                default: 'ecrro:ECRRO_0000017',
                const: 'ecrro:ECRRO_0000017'
              },
              name: {
                type: 'string',
                default: 'Usage'
              },
              value: {$ref: '#/definitions/definedTerm_type'}
            }
          },
          {

            type: 'object',
            description: 'metadata contributor information',
            properties: {
              '@type': {
                type: 'string',
                default: 'PropertyValue',
                const: 'PropertyValue'
              },
              propertyID: {
                type: 'string',
                default: 'ecrro:ECRRO_0001301',
                const: 'ecrro:ECRRO_0001301'
              },
              name: {
                type: 'string',
                default: 'registration metadata'
              },
              value: {
                type: 'object',
                properties: {
                  '@type': {
                    type: 'string',
                    default: 'StructuredValue',
                    const: 'StructuredValue'
                  },
                  additionalType: {
                    type: 'string',
                    default: 'ecrro:ECRRO_0000156',
                    const: 'ecrro:ECRRO_0000156'
                  },
                  contributor: {
                    type: 'object',
                    properties: {
                      '@type': {
                        type: 'string',
                        default: 'Person',
                        const: 'Person'
                      },
                      name: {type: 'string'},
                      identifier: {type: 'string'}
                    }
                  },
                  datePublished: {type: 'string'}
                }
              }
            }
          }
        ]
      }
    }
  }


const withEnum = function() {
  let licenses = licenseList();
  // const licenseOneOf = [...licenseList ]
  jsonschema.properties.license.items = licenses;

  let rtypes = resourceTypeList();
  jsonschema.properties.mainEntity.oneOf = rtypes.oneOf;
  //jsonschema.properties.mainEntity.items= rtypes
  //jsonschema.definitions.resourceTypes_type.items= rtypes

  // not good at suggestions, so let's try suggestions
  // but using oneOf means the list must match
  // let functions = functionenum()
  // jsonschema.properties.applicationCategory.items = functions

  let scienceDomains = scienceDomainList();
  jsonschema.properties.about.items = scienceDomains;

  let maturity = maturityOneOf();
  jsonschema.properties['ecrro:ECRRO_0000138'].properties.value = maturity;

  let lifetime = lifetimeOneOf();
  jsonschema.properties['ecrro:ECRRO_0000219'].properties.value = lifetime;

  let audience = audienceOneOf();
  jsonschema.properties.audience.items = audience;

  return jsonschema;
};

// one case where the propertyID causes issues with the json ref path, so it cannot be used as
// the name for a jsonld form. otherwise the propertyID and the flattened are the same.
const flattenList = [
  { flattened: 'dct:bibliographicCitation', flattenTo: 'additionalProperty' },
  {
    flattened: 'dependencies',
    propertyID: 'http://purl.obolibrary.org/obo/RO_0002502',
    flattenTo: 'additionalProperty'
  },
  { flattened: 'ecrro:ECRRO_0000600', flattenTo: 'additionalProperty' },
  { flattened: 'ecrro:ECRRO_0000138', flattenTo: 'additionalProperty' },
  { flattened: 'ecrro:ECRRO_0000219', flattenTo: 'additionalProperty' },
  { flattened: 'ecrro:ECRRO_0000218', flattenTo: 'additionalProperty' },
  { flattened: 'ecrro:ECRRO_0000017', flattenTo: 'additionalProperty' },
  { flattened: 'ecrro:ECRRO_0000503', flattenTo: 'additionalProperty' },
  { flattened: 'ecrro:ECRRO_0001301', flattenTo: 'additionalProperty' }
];
export { jsonschema as default, withEnum as schemaWithEnum, flattenList };
