//import {default as licenseOneOf} from './licenseOneOf'
import {
  licenseList,
  resourceTypeList,
  scienceDomainList,
  maturityOneOf,
  lifetimeOneOf,
  audienceOneOf,
  communicationList,
  usageOneOf
} from './controlledFromGooglesheet';

const jsonschema = {
  $comment: 'Simplified for use in a forms application. Encoded as Javascript object in the the ECRR ' +
      'jsonforms application. Will need to pay attention to synchronization with JSON schema in ' +
      ' github. ',
  type: 'object',
  title: 'EarthCube Resource Registry (ECRR) Resource Description',
  description:
      'JSON schema for EarthCube Resource Registry (ECRR) resource descriptions. The base object is common to all ' +
      'resource types, and definition section adds resource-specific properties. Resource types are Specification, ' +
      'UseCase, InterchangeFormat, Software, Interface,...  Schema compiled by Stephen M. Richard based on Resource ' +
      ' instance data and example GeoCODES dataset metadata from several providers 2022-07-05',
  properties: {
    '@id': {
      type: 'string',
      description:
          'globally identifier string for this metadata record, commonly a UUID with or without an HTTP prefix for web resolution'
    },
    '@type': {
      type: 'array',
      "description": 'a schema.org Class that specifies the expected information content for the metadata record. '  +
          'For GeoCodes, expected values are (CreativeWork, SoftwareApplication, Product, WebAPI, Dataset). The ' +
          'type classes for a given resource description enable the schema.org properties used ' +
          'to describe the resource.',
      minItems: 1,
      items: {
        type:"string",
        enum: ['CreativeWork', 'SoftwareApplication', 'Product', 'WebAPI', 'Dataset','Collection']
      },
      "default": "CreativeWork"
    },
    name: {
      type: 'string',
      description:
          'Short name by which this resource will be recognized; for human users to identify the resource; should be unique in scope of registry and informative enough to tell someone what the described resource is'
    },
    description: {
      type: 'string',
      description:
          'a text description of the resource. This text will be indexed by search aggregators, and the information contained should be sufficient to tell a person what the resource is, broadly how to use it.'
    },
    identifier: {
      title: 'External Identifier',
      description:
          'Globally unique identifier for the described resource; could be single value or array of strings for multiple identifiers',
        type: 'string',
      "$comment": " change type, don't use {'$ref': '#/definitions/identifier_type'} for now, legacy data doesn't have identifier type, and there are lots of kinds of identifiers; as long as they are a URI, the scheme is indicated by the identifier prefix"
    },
    sameAs: {
      type: "array",
      items:{type:"string"},
      description:"array of alternate identifier strings for a resource. Add for compatibility with GeoCODES dataset schema."
    } ,
    alternateName: {
      title: 'alternate name for resource',
      description:
          "other names, abbreviations, languages, by which the resource might be known.  If names are provided in a non-English language, please suffix a language identifier using the '@' delimiter and an ISO-639-1 two letter language code, e.g. Forme universelle binaire de l'OMM@fr. Separate entries with a pipe ('|') character",
      type: 'array',
      items: {
        type: 'string'
      }
    },
    url: {
      title: 'URL to access the resource.',
      description: "For a Service instance, this is the URL of the Service endPoint. For DataSets, the recommended content is a link to a landing page with a description of the resource and other links to access it. Other important URLs have specific properties in this schema and should be populated there, e.g. subjectOf, installURL, codeRepository, service endpoint. For web applications, the url to invoke the app should be in potentialAction/Action/target/EntryPoint/urlTemplate. ",
      type: 'string'
    },
    datePublished: {
      title:'date of publication',
      type: 'string',
      format: 'date'
    },
    version: {
      type: ['string','number'],
      description:
          'string or integer that identifies a particular version of the resource if it is not identified by the schema:identifier element'
    },
    license: {
      title: 'Legal statement of conditions for use and access',
      type: 'array',
      uniqueItems: true,
      items: {
        oneOf: [
          {
            title:'Labeled link',
            $ref: '#/definitions/creativeWork_type'},
          {title:'URI for license',
            type:'string'}
            ]
      }
    },
    creator: {
      title:'creator or author',
      description:
          'one or more person or organization entities responsible for the intellectual content of the resource',
      type: 'array',
      items: {
        $ref: '#/definitions/agent_type'
      }
    },
    contributor: {
      title:'contributor(s)',
      description:
          'one or more person or organization entities who contributed to creation of the resource',
      type: 'array',
      items: {
        $ref: '#/definitions/agent_type'
      }
    },
    publisher: {
      $ref: '#/definitions/agent_type'
    },
    funding: {
      description: 'An array of grants. Grant has a funder -- person or organization that provides financial ' +
          'support, or a sponsor-- person or organization that provides financial or other kinds of support (office space, lab supplies',
      type: "array",
      items: {"$ref": "#/definitions/grant_type"}
    },
    subjectOf: {
      title: "URL to User-Readable Page or to a more formal metadata record",
      description: 'Name and url for one or more web pages or other web accessible document '  +
          'about the resource; require at least one URL. Use creativeWork to get a labeled '  +
          'link. ScienceOnSchema.org recommendation is to use this property to link to a more ' +
          'formal metadata record, using type=DataDownload.',
      type: "array",
      items: {
        type: "object",
        properties: {
          "@id": {"type": "string"},
          "@type": {
            "type": "string",
            "enum": ["DataDownload","CreativeWork"]
          },
          "name": {
            "type": "string",
            "description": "a label for a metadata record using another schema that can provide information about the described resource",
          },
          "contentUrl": {
            "type": "string",
            "description": "url to access the alternated metadata record"
          },
          "url": {
            "type": "string",
            "description": "url to access the alternated metadata record"
          },
          "contentSize": {"type": "string"},
          "encodingFormat": {
            "description": "format identifier; array to allow multiple format identifiers with different granularity; recommend using at least one identifier from ECRR format registry (https://github.com/earthcube/GeoCODES-Metadata/blob/main/resources/encodingFormat.csv)",

            "type": "array",
            "items": {"type": "string"}

          }
        }
      }
    },
    keywords: {
      type: 'array',
      items: {
        type: 'string'
      },
      description: 'list of keywords'
    },
    potentialAction: {
      title: 'Direct invocation of App on the web',
      description:
          "use schema.org Action to document url or url template and parameters to invoke the application through a web accessible location. At this point, schema is set up for online one action-- an HTTP Get that invokes the web application. The url template can have only one parameter 'contentURL' that will be the contentURL from a distribution for a dataset that has an encoding format matching the supportingData input for this application.",

      type: 'array',
      items: {
        $ref: '#/definitions/action_type'
      }
    },

//above properties are common to GeoCODES schema:Dataset and ECRR resources

    // properties here are specific to ECRR Resources
    developer: {
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
    stewardship: {
      '$comment':'this will be replaced by schema:maintainer when schema.org adopts that',
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
        value: {
          type:'array',
          items: {type: 'string'}
        }
      }
    },
   audience: {
      title: 'Intended Audience or Target User',
      // description:
      //     'terms from controlled vocabulary to identify the kinds of users who are the target of the described resource',
    // uniqueItems: true,
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
            title:'kind of resources listed; use schema.org types',
            type: 'string',
            default: 'Thing',
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
      description: "Labeled link url is URI for ECRR resource type; name is ECRR resource type name. The ECRR URI (ECRRO_ or SFO_ prefix URIs) is used to validate resource specific properties. If the resource type is Specification or Semantic Resource, a more specific resource type from the SPKT or srt vocabulary (respectively) can be specified.",
      type:"array",

      items: {
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

      applicationCategory: {
        title: 'Application function and subfunction',
        description:
            'strings use special syntax like {function: ... uri: ... }. The function value is the label associated with the ECRR uri in the function vocabulary (http://cor.esipfed.org/ont/earthcube/SFO_0000001)',

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
    hasPart: {
      title: "parts of a composite resource",
      description: "use to list the component parts in a Bundled Object/Collection resource.",
      type: "array",
      items: {
        type: "object",
        properties: {
          '@type': {
            type: "string",
            description: "should be a schema.org CreativeWork or subclass of that",
            default: "CreativeWork"
          },
          name: {"type": "string"},
          url: {"type": "string"},
          encodingFormat: {
            description: "format for this bundle/collection component; recommend using identifier from ECRR format registry (https://github.com/earthcube/GeoCODES-Metadata/blob/main/resources/encodingFormat.csv)",
            type: "string"
          }
        }
      }
    },

// EXPOSED ADDITIONAL PROPERTIES   These will need to be stored in the additionalProperty.
//      But for defining the form, they are stored at the top level
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
            default: 'has maturity state'
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
      'ecrro:ECRRO_0000501': {
      title: 'profile of',
      description:
          'Links to base specifications that a specification resource profiles. Only applicable if resource type is specification',
      type: 'array',
      items: {
        $ref: '#/definitions/creativeWork_type'
      }
    },
      'ecrro:ECRRO_0000502': {title: 'Communication Protocol(s)',
      description:
          'communication protocol(s) used. Use ECRR controlled vocabulary',
      type: 'object',

      properties: {
        '@type': {
          type: 'string',
          default: 'PropertyValue',
          const: 'PropertyValue'
        },
        propertyID: {
          type: 'string',
          default: 'ecrro:ECRRO_0000502',
          const: 'ecrro:ECRRO_0000502'
        },
        name: {type: 'string'},
        value: {
          type: 'array',
          uniqueItems: true,
          items: {$ref: '#/definitions/definedTerm_type'}
        }
      }
    },
      'ecrro:ECRRO_0000503': {title: 'Interface specification',
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
    additionalProperty: {
      type: 'array',
      title: 'Other Properties',
      description:
          'EC resource registry properties that extend Schema.org are implemented as an array of PropertyValue inside a schema:additionalProperty',
      items: {
        $ref: '#/definitions/additionalProperty_type'
      }
    },

// these properties are properties used by GeoCODES datasets

    "additionalType": {
      "description": "identifiers for datatypes from other vocabularies (not schema.org) that apply to the described resource.",
      "type": "array",
      "minItems": 0,
      "items": {"type": "string"}
    },
    "citation": {
      "title":"citations for other related resources",
      "description":"schema.org documentation is explicit that this property should not be used to provide a preferred citation for a resource. GeoCODES recommendation is to used dct:bibliographicCitation",
      "type": "string"},
    "creativeWorkStatus": {
      "type": "string",
      "description": "The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete."
    },
    "dateCreated": {
      "type": "string",
      "description": "use to specify the date the dataset was initially generated (e.g., when a sensor recorded a value, when a model was run, or when data processing was completed). This is typically fixed when the first dataset version is created. ISO8601 formatted date (and optional time if relevant). Use one of these options: YYYY, YYYY-MM, YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS, YYYY-MM-DDTHH:MM:SSZ, YYYY-MM-DDTHH:MM:SS-NN (see https://en.wikipedia.org/wiki/ISO_8601 for details). "
    },
    "dateModified": {
      "type": "string",
      "description": "ISO8601 formatted date (and optional time if relevant) when Dataset was last updated"
    },
    "distribution": {
      "description": "specifies how to download the data in a specific format. This property describes where to get the data and in what format by using the schema:DataDownload type. If your dataset is not accessible through a direct download URL, but rather through a service URL, use potentialAction. If user must access data through a landing page, provide link to landing page in the 'url' property for the dataset",
      "type": "array",
      "items": {"$ref": "#/definitions/distribution_type"}
    },
    "expires": {
      "type": "string",
      "description": "use to specify the date when the dataset expires and is no longer useful or available. If datePublished is when the dataset is made available, then 'expires' brackets the time the dataset is valid or recommended for use."
    },
    "funder": {
      "type": "array",
      "description": "this is a legacy implementation for acknowledging funding for the dataset. In march,2022 the funding property was adopted by schema.org; recommendation is to use that.",
      "items": {"$ref": "#/definitions/agent_type"}
    },
    "includedInDataCatalog": {
      "type": "object",
      "description": "identify the data collection or repository that contains the described dataset. The value is expected to be a schema:DataCatalog",
      "properties": {
        "@id": {
          "type": "string",
          "description": "identifier for the containing catalog or repository; example data at https://github.com/ESIPFed/science-on-schema.org/blob/develop/guides/Dataset.md#catalog puts identifier here"
        },
        "@type": {
          "type": "string",
          "default": "DataCatalog",
          "const": "DataCatalog"
        },
        "name": {"type": "string"},
        "url": {
          "type": "string",
          "description": "locator to access a landing page for the collection or catalog"
        },
        "identifier": {
          "type": "string",
          "description": "identifier for the collection or catalog;"
        }
      }
    },
    "inLanguage": {
      "type": "string",
      "description": "the language of the dataset content"
    },
    "isAccessibleForFree": {
      "type": "boolean",
      "description": "Boolean (true|false) specifying if the dataset is accessible for free.",
      default:false
    },
    "provider": {
      "description": "Party who maintains the distribution options for the dataset. If there are multiple distributions from different providers, use the provider property on distribution/DataDownload. For more granularity on how a person contributed to a Dataset, use schema:Role. The schema.org documentation does not state that the Role type is an expected data type of author, creator and contributor, but that is addressed in this blog post (http://blog.schema.org/2014/06/introducing-role.html). see https://github.com/ESIPFed/science-on-schema.org/blob/develop/guides/Dataset.md#roles-of-people",
      "$ref": "#/definitions/agent_type"
    },
    "spatialCoverage": {
      //have to specify properties inline to work with JSON forms/vue

          "type": "array",

          "items": {title:'schema.org place-geo point or box',
            type: "object",
            properties: {
              "@type": {
                "type": "string",
                "const": "Place",
                "default": "Place"
              },
              "geo": {
                "oneOf": [
                  { "title":"WGS84 point location with lat and long",
                    "type": "object",
                    "description": "A point location. Point locations are recommended for data that is associated with specific sample locations, particularly if these are widely spaced such that an enclosing bounding box would be a misleading representation of the spatial location. Be aware that some client applications might only index or display bounding box extents or a single point location.",
                    "properties": {
                      "@type": {
                        "type": "string",
                        "const": "GeoCoordinates",
                        "default": "GeoCoordinates"
                      },
                      "latitude": {"type": "number"},
                      "longitude": {"type": "number"}
                    }
                  },
                  { "title":"GeoShape schema:box",
                    "type": "object",
                    "description": "This form implementation restricts GeoShape to be a box. The geometry is described with a set of <b>latitude/longitude</b> pairs (in that order).The documentation for schema:GeoShape states 'Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.'",
                    "properties": {
                      "@type": {
                        "type": "string",
                        "enum": ["GeoShape"],
                        "default": "GeoShape"
                      },

                      "box": {
                        "type": "string",
                        "description": "A GeoShape box defines an area on the surface of the earth defined by point locations of the southwest corner and northeast corner of the rectangle in latitude-longitude coordinates. A space should be used to separate the latitude and longitude values. The two corner coordinate points are separated by a space. 'East longitude' means positive longitude values are east of the prime (Greenwich) meridian."
                      }
                    }
                  }
                ]
              }
            }}

    },
    "temporalCoverage": {
      "description": "The time interval during which data was collected or observations were made; or a time period that an activity or collection is linked to intellectually or thematically (for example, 1997 to 1998; the 18th century) (see https://documentation.ardc.edu.au/display/DOC/Temporal+coverage). For documentation of Earth Science, Paleobiology or Paleontology datasets, we are interested in the second case-- the time period that data are linked to thematically.",
      "oneOf": [
        {title:"calendar date, time, or dateTime",
          type: "string",
          description: 'Simple ISO8601 encoding of calendar date, dateTime, or time interval. Use the Start/End ' +
              'encoding of calendar time intervals, e.g. &quot;2007-03-01T13:00:00Z/2008-05-11T15:30:00Z&quot;.  ' +
                  'For non-calendar time intervals use time:ProperInterval encoding. ' +
                  'See ESIP SOSO guidance https://github.com/ESIPFed/science-on-schema.org/blob/develop/guides/Dataset.md#temporal-coverage',
        },
        {"title":"Geologic (W3C proper) time interval",
          "type": "object",
          "description": "A w3c time proper interval; use for geologic age bounds on the temporal coverage. This is an ESIP Science on Schema.org (SOSO) schema.org extension",
          "properties": {
            "@context": {"type":"object",
              "properties": {
                "const": {"time": "http://www.w3.org/2006/time#"}
              }
            },
            "@type": {
              "type": "string",
         //     "default": "time:ProperInterval",
              "const": "time:ProperInterval"
            },
            "time:hasBeginning":
                { "type": "object",
                  "properties": {
                    "@type": {
                      title: 'time:Instant is default and only choice',
                      "type": "string",
                      "default": "time:Instant",
                      "const": "time:Instant"
                    },
                    "time:inTimePosition":
                    //{"$ref": "#/definitions/timePosition_type"}
                        { "type": "object",
                          "properties": {
                            "rdf:type": {
                              title: 'time:TimePosition is default and only choice',
                              "type": "string",
                              "default": "time:TimePosition",
                              "enum":[ "time:TimePosition" ]
                            },
                            "time:hasTRS": {
                        //      title:'Temporal reference system (TRS) for time coordinate',

                              type: "object",
                              properties: {
                                "@id": {
                                  title:'identifier for Temporal reference system (TRS) for time coordinate',
                                  description:'For temporal reference systems, recommend identifiers from registry at ' +
                                      'http://linked.data.gov.au/def/trs',
                                  "type": "string"}
                              }
                            },
                            'time:numericPosition': {
                              description:'numeric coordinate, in years, Ka, Ma, Ga (based on TRS) before present',
                              type: "number"},
                            'time:nominalPosition': {
                              title:"Position assigned using a named time ordinal era, e.g. geologic time scale",
                              type:"string"}

                          }}
                  }},
//{"$ref": "#/definitions/intervalBound_type"}
            "time:hasEnd":
                { "type": "object",
                  "properties": {
                    "@type": {
                      "type": "string",
                      "default": "time:Instant",
                      "const": "time:Instant"
                    },
                    "time:inTimePosition":
                        //{"$ref": "#/definitions/timePosition_type"}
                        { "type": "object",
                          "properties": {
                            "rdf:type": {
                              "type": "string",
                              "default": "time:TimePosition",
                              "enum":[ "time:TimePosition" ]
                            },
                            "time:hasTRS": {
                              title:'Temporal reference system (TRS) for time coordinate',
                              "type": "object",
                              "description":"For temporal reference systems, recommend using those listed in registry at http://linked.data.gov.au/def/trs",
                              "properties": {
                                "@id": {"type": "string"}
                              }
                            },
                            'time:numericPosition': {
                              title:'numeric coordinate, in years, Ka, Ma, Ga (based on TRS) before present',
                              type: "number"},
                            'time:nominalPosition': {
                              title:"Position assigned using a named time ordinal era, e.g. geologic time scale",
                              type:"string"}

                          }}
                  }}
//{"$ref": "#/definitions/intervalBound_type"}
          }
        }
      ]
    },
    "variableMeasured": {
      "description": "What does the dataset measure? (e.g., temperature, pressure)",
      "$ref": "#/definitions/variableMeasured_type"
    }

    //
    // end of property definitions.

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

      agent_type: {
        description:
            '{name (optional)identifier} pairs, typed either Person or Organization.  Other person or organization properties could be added',
        type: 'object',
        properties: {
          name: {type: 'string'},
          '@type': {
            type: 'string',
            enum: ['Person', 'Organization','FundingAgency'],
            default: 'Person'
          },
          identifier: {type: 'string'}
        },
        required: ['@type', 'name']
      },
      grant_type: {
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
            }
          },
          "funder": {
            "description": "agent that provided and administers financial support to create or maintain the resource",
            "$comment": "$ref not working. #/definitions/agent_type",
            '$ref':'#/definitions/agent_type'
           // type: 'object',

            // properties: {
            //   name: {type: 'string'},
            //   '@type': {
            //     type: 'string',
            //     enum: ['Person', 'Organization'],
            //     default: 'Person'
            //   },
            //
            //   identifier: {type: 'string'}
            // },
            // required: ['@type', 'name']
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
        }
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
      // resourceTypes_type: {
      //   type: 'object',
      //   properties: {
      //     name: {type: 'string'},
      //     '@type': {
      //       type: 'string',
      //       default: 'CreativeWork',
      //       const: 'CreativeWork'
      //     },
      //
      //     url: {type: 'string'}
      //   }
      // },
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
        }
 //       required: ['identifier', '@type', 'name']
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
                "file format and profile for input or output data to/from the application (consistent with value of 'position' element)",
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
          '@type': {
            type: 'string',
            description:'Action is generic; SearchAction adds a query property that enables the ' +
                'query-input specification of parameters in the urlTemplate',
            default: 'Action',
            enum: ["Action","SearchAction"]
          },
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
              },
              'query-input': {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    '@type': {
                      type: "string",
                      default: "PropertyValueSpecification",
                      const: "PropertyValueSpecification"
                    },
                    description: {"type": "string"},
                    valueName: {"type": "string"},
                    valueRequired: {"type": "boolean"},
                    valuePattern: {"type": "string"}
                  }
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
      subjectOf_type: {
        type: "object",
        description: "Copied from GeoCODES dataset metadata schema for alternate value in subjectOf property; use with datasets. 6Link to the location of the alternative forms of the metadata. Many providers have other metadata records that may be more complete or that conform to other metadata formats and vocabularies that might be useful. For example, repositories often contain detailed records in ISO TC 211 formats, EML, and other formats. Aggregators and other consumers can make use of this additional metadata if they are linked in a standardized way to the schema.org record. ",
        properties: {
          "@id": {"type": "string"},
          "@type": {
            "type": "string",
            "const": "DataDownload",
            "default": "DataDownload"
          },
          "name": {
            "type": "string",
            "description": "a label for a metadata record using another schema that can provide information about the described resource",
            "default":"link to formal metadata record"
          },
          "contentUrl": {
            "type": "string",
            "description": "url to access the alternated metadata record"
          },
          "contentSize": {"type": "string"},
          "encodingFormat": {
            "description": "format identifier; array to allow multiple format identifiers with different granularity; recommend using at least one identifier from ECRR format registry (https://github.com/earthcube/GeoCODES-Metadata/blob/main/resources/encodingFormat.csv)",
            "oneOf": [
              {"type": "string"},
              {
                "type": "array",
                "items": {"type": "string"}
              }
            ]
          }
        },
        "required": [
          "@type",
          "name",
          "contentUrl"
        ]
      },

      distribution_type: {
        type: "object",
        properties: {
             "@type": {
                type: 'array',
//                uniqueItems: true,
                items: {
                   type: "string",
                    default: "DataDownload",
                    enum: ["WebSite", "DataDownload", "WebAPI"]
                  }
              },
              "name": {"type": "string"},
              "contentUrl": {
                title: 'url to directly get the described distribution',
                type: "string"
              },
              "url": {
                title: 'web location for landing page to access download',
                type: "string"
              },
              "contentSize": {"type": "string"},
              "encodingFormat": {
                "type": "array",
                "items": {"type": "string"}

              },
              "provider": {
                "description": "Party who maintains this particular distribution option for the dataset. Use this property if there are multiple distributions from different providers",
                "$ref": "#/definitions/agent_type"
              }
            },
            "required": [
              "name",
              "@type"
            ]
          },
      spatialCoverage_type: {
        type: "object",
        properties: {
          "@type": {
            "type": "string",
            "const": "Place",
            "default": "Place"
          },
          "geo": {
            "oneOf": [
              { "title":"WGS84 point location with lat and long",
                "type": "object",
                "description": "A point location. Point locations are recommended for data that is associated with specific sample locations, particularly if these are widely spaced such that an enclosing bounding box would be a misleading representation of the spatial location. Be aware that some client applications might only index or display bounding box extents or a single point location.",
                "properties": {
                  "@type": {
                    "type": "string",
                    "const": "GeoCoordinates",
                    "default": "GeoCoordinates"
                  },
                  "latitude": {"type": "number"},
                  "longitude": {"type": "number"}
                }
              },
              { "title":"GeoShape schema:box",
                "type": "object",
                "description": "A schema:GeoShape can describe spatial coverage as a line (e.g. a ship track), a bounding box, a polygon, or a circle; This form implementation restricts GeoShape to be a box. The geometry is described with a set of latitude/longitude pairs (in that order).The documentation for schema:GeoShape states 'Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.'",
                "properties": {
                  "@type": {
                    "type": "string",
                    "const": "GeoShape",
                    "default": "GeoShape"
                  },

                  "box": {
                    "type": "string",
                    "description": "A GeoShape box defines an area on the surface of the earth defined by point locations of the southwest corner and northeast corner of the rectangle in latitude-longitude coordinates. A space should be used to separate the latitude and longitude values. The two corner coordinate points are separated by a space. 'East longitude' means positive longitude values are east of the prime (Greenwich) meridian."
                  }
                }
              }
            ]
          }
        }
      },
      "timePosition_type": {
        "type": "object",
        "properties": {
          "rdf:type": {
            "type": "string",
            "default": "time:TimePosition",
            "const": "time:TimePosition"
          },
          "time:hasTRS": {
            "type": "object",
            "description":"For temporal reference systems, recommend using those listed in registry at http://linked.data.gov.au/def/trs",
            "properties": {
              "@id": {"type": "string"}
            }
          },
          "time:numericPosition": {"type": "number"},
          "time:nominalPosition": {
            "description":"position assigned using a named time ordinal era",
            "type":"string"}

        }
      },
      "intervalBound_type": {
        "type": "object",
        "properties": {
          "@type": {
            "type": "string",
            "default": "time:Instant",
            "const": "time:Instant"
          },
          "time:inTimePosition": {"$ref": "#/definitions/timePosition_type"}
        }
      },
      "variableMeasured_type": {
        "type": "array",
        "minItems": 0,
        "items": {
          "type": "object",
          "properties": {
            "@type": {
              "type": "string",
              "default": "PropertyValue",
              "const": "PropertyValue"
            },
            "@id": {"type": "string"},
            "name": {
              "type": "string",
              "description": "this is the string label that is expected to be associated with the variable in the dataset serialization"
            },
            "alternateName": {
              "type": "string",
              "description": "other label for the property, typically something meaningful for human users if the name is opaque"
            },
            "description": {"type": "string"},
            "propertyID": {
              "type": "string",
              "description": "identifier for the property concept quantified by the values in this variable slot"
            },
            "measurementTechnique": {
              "type": "string",
              "description": "A text description of the measurement method used to determine values for this variable. If standard measurement protocols are defined and registered, these can be identified via http URI's."
            },
            "unitText": {
              "type": "string",
              "description": "A string that identifies a unit of measurement that applies to all values for this variable."
            },
            "unitCode": {
              "type": "string",
              "description": "Value is expected to be TEXT or URL. We recommend providing an HTTP URI that identifies a unit of measure from a vocabulary accessible on the web. The QUDT unit vocabulary provides and extensive set of registered units of measure that can be used to populate the schema:unitCode property to specify the units of measure used to report data values when that is appropriate."
            },
            "minValue": {
              "type": "number",
              "description": " If the value for the variable is numeric, this is the minimum value that occurs in the dataset. Not useful for other value types."
            },
            "maxValue": {
              "type": "number",
              "description": " If the value for the variable is numeric, this is the maximum value that occurs in the dataset. Not useful for other value types."
            },
            "url": {
              "type": "string",
              "description": "Any schema:Thing can have a URL property, but because the value is simply a url the relationship of the linked resource can not be expressed. Usage is optional. The recommendation is that schema:url should link to a web page that would be useful for a person to interpret the variable, but is not intended to be machine-actionable."
            }
          },
          "required": [
            "@type",
            "name"
          ]
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
                'communication protocols used; populate from http://cor.esipfed.org/ont/earthcube/CMPR',
            properties: {
              '@type': {
                type: 'string',
                default: 'PropertyValue',
                const: 'PropertyValue'
              },
              propertyID: {
                type: 'string',
                default: 'ecrro:ECRRO_0000502',
                const: 'ecrro:ECRRO_0000502'
              },
              name: {
                type: 'string',
 //               default: 'communication protocol'
              },
              value: {
                type: 'array',
                items: {$ref: '#/definitions/definedTerm_type'}
              }
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
              value: {
                type: 'array',
                items: {type: 'string'}
              }
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
  } ;


const withEnum = function() {
  //let licenses = licenseList();
  // const licenseOneOf = [...licenseList ]
//  jsonschema.properties.license.items = licenseList();

//  let rtypes = resourceTypeList();
  jsonschema.properties.mainEntity.items = resourceTypeList();

//  let scienceDomains = scienceDomainList();
  jsonschema.properties.about.items = scienceDomainList();

//  let maturity = maturityOneOf();
  jsonschema.properties['ecrro:ECRRO_0000138'].properties.value = maturityOneOf();

//  let lifetime = lifetimeOneOf();
  jsonschema.properties['ecrro:ECRRO_0000219'].properties.value = lifetimeOneOf();

//  let commprotocols = communicationList();
  jsonschema.properties['ecrro:ECRRO_0000502'].properties.value.items = communicationList();

//  let audience = audienceOneOf();
  jsonschema.properties.audience.items = audienceOneOf();

  //  let usage = usageOneOf();
  jsonschema.properties['ecrro:ECRRO_0000017'].properties.value = usageOneOf();

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
  { flattened: 'ecrro:ECRRO_0000600', flattenTo: 'additionalProperty' },  //primary publication
  { flattened: 'ecrro:ECRRO_0000138', flattenTo: 'additionalProperty' },
  { flattened: 'ecrro:ECRRO_0000219', flattenTo: 'additionalProperty' },
  { flattened: 'ecrro:ECRRO_0000218', flattenTo: 'additionalProperty' },
  { flattened: 'ecrro:ECRRO_0000017', flattenTo: 'additionalProperty' }, // usage
  { flattened: 'ecrro:ECRRO_0000503', flattenTo: 'additionalProperty' },
  { flattened: 'ecrro:ECRRO_0000502', flattenTo: 'additionalProperty' },
  { flattened: 'ecrro:ECRRO_0001301', flattenTo: 'additionalProperty' }
];
export { jsonschema as default, withEnum as schemaWithEnum, flattenList };