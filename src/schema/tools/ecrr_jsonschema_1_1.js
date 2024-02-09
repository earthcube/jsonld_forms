//import {default as licenseOneOf} from './licenseOneOf'
// 2022-06-20 copied from ecrr_jsonschema1_0.js to update and align with ecrrjsonschema1.1_jsonforms.json schema.
// Stephen Richard
import {
    licenseList,
    resourceTypeList,
    //functionList,
    //platformList,
    //protocolList
    scienceDomainList,
    maturityOneOf,
    lifetimeOneOf,
   // audienceOneOf
    audienceList,
}
    from '@/schema/tools/controlledFromGooglesheet';

const jsonschema = {
    type: 'object',
    //  Simplified for use in a forms application. Additional properties are included inLine as opposed to array of additionalProperty/PropertyValue elements. Edits to schema should be made in the ECRR jsonforms application (https://github.com/earthcube/jsonld_forms/blob/master/src/schema/tools/ecrr_jsonschema_1_1.js) to show up in the forms UI.
    title: 'EarthCube Resource Registry (ECRR) Resource Description v1.1',
    description:
        'JSON schema for EarthCube Resource Registry (ECRR) resource descriptions. The base object is common to all resource types, and definition section adds resource-specific properties. Resource types are Specification, UseCase, InterchangeFormat, Software, Interface. This schema Updated by S. Richard to align with existing ECRR metadata.',
    properties: {
        '@id': {
            type: 'string',
            description:
                'globally identifier string for this metadata record, commonly a UUID with or without an HTTP prefix for web resolution'
        },
        '@type': {
            type: 'array',
            description: 'a schema.org Class that specifies the expected information content for the metadata record. For ECRR resources, expected values are (CreativeWork, SoftwareApplication, Product, WebAPI). The type classes for a given resource description are selected based on the schema.org properties used to describe the resource.',
            minItems: 1,
            items: {
                enum: ['CreativeWork', 'SoftwareApplication', 'Product', 'WebAPI']
            },
            default: 'CreativeWork'
        },
        name: {
            type: 'string',
            description:
                'Short name by which this resource will be recognized; for human users to identify the resource; should be unique in scope of registry and informative enough to tell someone what the described resource is'
        },
        alternateName: {
            title: 'alternate name for resource',
            description:
                "other names, abbreviations, languages, by which the resource might be known.  If names are provided in a non-English language, please suffix a language identifier using the '@' delimiter and an ISO-639-1 two letter language code, e.g. Forme universelle binaire de l'OMM@fr.",
            type: 'array',
            items: {
                type: 'string'
            }
        },
        subjectOf: {
            title: 'URL to User-Readable Page',
            description:
                'Name and url for one or more web pages or other web accessible document about the resource; require at least one URL. Use creativeWork to get a labeled link. Future-- change to schema:LinkRole?',
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
            }
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
            title: 'author or creator',
            description:
                'one or more person or organization entities responsible for the intellectual content of the resource',
            type: 'array',
            items: {
                $ref: '#/definitions/agent_type'
            }
        },
        editor: {
            title: 'editor',
            description:
                'one or more person or organization entities responsible editing the resource',
            type: 'array',
            items: {
                $ref: '#/definitions/agent_type'
            }
        },
        contributor: {
            description:
                'one or more person or organization entities who contributed to creation of the resource',
            type: 'array',
            items: {
                $ref: '#/definitions/agent_type'
            }
        },
        publisher: {
            description:
                'person or organization that makes the resource available',
            $ref: '#/definitions/agent_type'
        },
        developer: {
            description:
                'one or more person or organization entities who created, debugged, and maintain a software resource',
            type: 'array',
            items: {
                $ref: '#/definitions/agent_type'
            }
        },
// dupe included below
        // stewardship: {
        //     $ref: '#/definitions/agent_type'
        // },

        keywords: {
            type: 'array',
            items: {
                type: 'string'
            },
            description: 'list of words related to the content of the resource, for use in search interface. Pick words that users might use to find this resource.'
        },

        license: {
            title: 'License',
            description: 'legal statement of conditions for use and access. Values from controlled vocabulary that includes ECRR Creative commons license vocab (http://cor.esipfed.org/ont/earthcube/cclo), ECRR software license vocabulary (http://cor.esipfed.org/ont/earthcube/swl), and other standard licence identifiers',
            type: 'array',
            uniqueItems: true,
            items: {
                //populated from licenseList
                //     "$ref": "#/definitions/creativeWork_type"
                //should this be left empty??
                // or have type: 'string'
            }
        },
        version: {
            type: 'string',
            description:
                'string that identifies a particular version of the resource if it is not identified by the schema:identifier element'
        },

        funding: {
            title: 'source of funding',
            description:
                'An array of grants. Grant has a funder -- person or organization that provides financial support, or a sponsor-- person or organization that provides financial or other kinds of support (office space, lab supplies, etc.). NOTE this is update from jsonschema1.0, uses new schema:funding property. Funder is now a property of Grant to provide clearer binding between Grant and funding agency.',
            type: 'array',
            items: {
                '$ref': '#/definitions/grant_type'
            }
        },
        audience: {
            title: 'Intended Audience/Target User',
            description:
                'terms from ECRR Audience Types controlled vocabulary (http://cor.esipfed.org/ont/earthcube/AUT) that identify the kinds of users who are the target of the described resource. ',
            //  "uniqueItems": true,
            type: 'array',
            items: {
                //    "$ref": "#/definitions/audience_type"
            }
        },
        about: {
            title: 'Science Domain',
            description: 'terms from ECRR Academic Discipline controlled vocabulary (http://cor.esipfed.org/ont/earthcube/ADO) that identify the community expected to be interested in this resource',
            type: 'array',
            uniqueItems: true,
            items: {
                //populated from scienceDomainList
                //should this be type:'string', ??
                //     "$ref": "#/definitions/definedTerm_type"
            }
        },
        contentType: {
            title: 'Content Type(s) of Catalogued Objects in a Catalog or repository',
            description:
                "Content Type(s) of Catalogued Objects; array of {name, identifier} tuples, could be anything, but recommend using sub types of 'schema:Thing'; identifier is optional. Only applicable if resourceType is catalog or repository",
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
                },
                required: ['name']
            }
        },
        isRelatedTo: {
            title: 'Related Resources',
            description:
                'array of labeled links {name, url} to related resources. the name (label) should express the relationship to the target and identify the target for a user; URL should be a resolvable address to access the related resource (or some representation of it...). Machine readable endpoint for a web api (e.g. Swagger document goes here, typed as schema:Product). Note that schema.org defined expected domain to be schema:Product or schema:Service. schema:WebAPI is the only subtype @type of schema:Service expected for an ECRR resource',
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    '@type': {
                        type: 'string',
                        description: 'the schema.org type of the target resource'
                    },
                    name: {
                        description: 'used here to label the relation target or relationship type',
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
            description:
                'Labeled link url is URI for ECRR resource type; name is ECRR resource type name. The ECRR URI (ECRRO_ or SFO_ prefix URIs) in the url value is used to validate resource specific properties. If the resource type is Specification or Semantic Resource, a more specific resource type from the SPKT or SRT vocabulary (respectively) can be specified.',
            //populated from resourceTypeList
            //     "$ref": "#/definitions/creativeWork_type"
            // "uniqueItems": true,
            items: {
                //     //    "$ref": "#/definitions/resourceTypes_type"
            }
        },
        encodingFormat: {
            title: 'Representation Format or base format for a profile specification',
            description:
                "format pattern is a registered MIME type prefix for the base format, and an application specific extension as a type parameter (after a ';' delimiter).  Values should be from the 'use' column in the register at https://github.com/earthcube/GeoCODES-Metadata/blob/main/resources/encodingFormat.csv",
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

        applicationCategory: {
            title: 'Application function and subfunction',
            description:
                'strings use special syntac like {function: ... uri: ... }. The function value is the label associated with the ECRR uri in the function vocabulary (http://cor.esipfed.org/ont/earthcube/SFO_0000001)',

            type: 'array',
            items: {
                //populated from functionList
                //     "$ref": "#/definitions/definedTerm_type"
                type: 'string'
            }
        },
        runtimePlatform: {
            title: 'runtime platform',
            description:
                'runtime environments for the application, uses controlled vocabulary http://cor.esipfed.org/ont/earthcube/RTE. content is crude at this point, string entries in array with platform name and URI; should be DefinedTerm',

            type: 'array',
            items: {
                //populate from platformList
                //     "$ref": "#/definitions/definedTerm_type"
                type: 'string'
            }
        },
        programmingLanguage: {
            title: 'Programming language',
            description:
                'list of names of programming languages, with versions thereof.  TBD: make definedTerms with name and URI',
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
                'name and URL location for repository in which code for an application or semantic resource is managed. Use schema:CreativeWork as kludge to implement simple labeled link.',

            type: 'array',
            items: {
                $ref: '#/definitions/creativeWork_type'
            }
        },
        installURL: {
            title: 'Software Install URL',
            description:
                'URL that locates an installer package or instructions for installing software for use in a local environment. Use schema:CreativeWork as kludge to implement simple labeled link.',
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
            description: 'For a Service instance, this is the URL of the Service endPoint. For DataSets, the recommended content is a link to a landing page with a description of the resource and other links to access it. Other important URLs have specific properties in this schema and should be populated there, e.g. subjectOf, installURL, codeRepository, service endpoint. For web applications, the url to invoke the app should be in potentialAction/Action/target/EntryPoint/urlTemplate.',
            type: 'array',
            items: {
                /*this is not consistent with schema.org expected type 'string', but with LinkRole (https://schema.org/LinkRole); use for labeled urls */
                type: 'object',
                properties: {
                    '@type': {
                        type: 'string',
                        default: 'LinkRole',
                        const: 'LinkRole'
                    },
                    url: {type: 'string'},
                    linkRelationship: {type: 'string'}
                }
            }
        },
        /*elements below here are schema.org extensions, some from other vocabularies, others defined in this schema.  These are defined inline here to work with the JSON forms user interface tools. keys that have a 'propertyID' property are mapped to ecrr defined properties implemented as additionalProperty/PropertyValue in the JSON schema for instance documents
        */
        /* EXPOSED ADDITIONAL PROPERTIES
         These will need to be stored in the additionalProperty.
         But for defining the form, they are stored at the top level
         */
        'dct:conformsTo': {
            title: 'Conforms to',
            description:
                'references to specifications that the described resource is in conformance with',
            type: 'array',
            items: {
                $ref: '#/definitions/creativeWork_type'
            }
        },
        'dct:bibliographicCitation': {
            title: 'Bibliographic Citation',
            description: 'suggested citation text to reference the described resource in reference lists',
            type: 'string'
        },
        primaryPublication: {
            type: 'array',
            title: 'Primary publication(s)',
            description:
                "text citation to one or more publications about the resource; value is array of strings that are standard bibliographic citations; map to ecrro:ECRRO_0000600 in JSON-LD context",
            propertyID: 'ecrro:ECRRO_0000600',
            items: {
                'type': 'string'
            }
        },
        profileOf: {
            title: 'Profile of',
            propertyID: 'ecrro:ECRRO_0000501',
            description: 'Links to base specifications that a specifcation resource profiles. Only applicable if resource type is specification.  Map key to ecrro:ECRRO_0000501 in JSON-LD context',
            type: 'array',
            items: {'$ref': '#/definitions/creativeWork_type'}
        },
        communicationProtocol: {
            title: 'Communication Protocol(s)',
            propertyID: 'ecrro:ECRRO_0000502',
            description: 'communication protocol(s) used. Use ECRR controlled vocabulary http://cor.esipfed.org/ont/earthcube/CMPR',
            type: 'array',
            items: {
                //populated from protocolList
                //     "$ref": "#/definitions/definedTerm_type"

            }
        },
        registrationMetadata: {
            title: 'registration metadata',
            description: 'object to define metadata creator and update date',
            propertyID: 'ecrro:ECRRO_0001301',
            $ref: '#/definitions/metadataCreatorType'
        },

        'resourceMaturity': {
            title: 'Maturity',
            propertyID: 'ecrro:ECRRO_0000138',
            type: 'object',
            description:
                'ECRR resource maturity status, from controlled vocabulary http://cor.esipfed.org/ont/earthcube/MTU',
            properties: {
                /*                value: {
                                   oneOf:[]
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
               */
                //populated from maturityOneOf
                // "$ref": "#/definitions/definedTerm_type"}
            }
        },
        'expectedLifetime': {
            type: 'object',
            propertyID: 'ecrro:ECRRO_0000219',
            description:
                'Expected lifetime-- how long is it anticipated that the resource will be maintained and accessible online, from controlled vocabulary http://cor.esipfed.org/ont/earthcube/ELT',
            properties: {
// populate from lifetimeOneOf
//   "$ref": "#/definitions/definedTerm_type"
                /*                name: {
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


                                value: {
                                    type: 'object',
                                    properties: {
                                        name: {
                                            type: 'string'
                                        },
                                        '@type': {
                                            type: 'string',
                                            default: 'DefinedTerm',
                                            const: 'DefinedTerm'
                                        },

                                        identifier: {
                                            type: 'string'
                                        }
                                    },
                                    required:[ 'identifier', '@type', 'name']
                                }
                */
            }
        },


//SMR stop updating here 2022-06-21

        'stewardship': {
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
                    items: {
                        $ref: '#/definitions/agent_type'
                    }
                }
            }
        },
        dependencies: {
            type: 'object',
            description: 'dependencies and their url',
            properties: {
                name: {
                    type: 'string'
                },
                '@type': {
                    type: 'string', const: 'PropertyValue'
                },
                propertyID: {
                    type: 'string',
                    const: 'http://purl.obolibrary.org/obo/RO_0002502'
                },

                value: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/creativeWork_type'
                    }
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
                value: {
                    $ref: '#/definitions/definedTerm_type'
                }
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
                name: {
                    type: 'string'
                },
                value: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/creativeWork_type'
                    }
                }
            }
        },
        /*  ADDITIONAL PROPERTIES
         *
         for compatibility with schema.org validation
         */
        additionalProperty: {
            type: 'array',
            title: 'Other Properties',
            description:
                'EC resource registry properties that extend Schema.org are implemented as an array of PropertyValue inside a schema:additionalProperty',
            items: {
                $ref: '#/definitions/additionalProperty_type'
            }
        },


    },
    required: [
        'name',
        'description',
        'license',
        'url',
        'datePublished',
        'keywords'],
    definitions: {
        identifier_type: {
            type: 'object',
            title: 'identifier',
            properties: {
                value: {
                    type: 'string'
                },
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
                name: {
                    type: 'string'
                },
                '@type': {
                    type: 'string',
                    enum: ['Person', 'Organization'],
                    default: 'Person'
                },

                identifier: {
                    type: 'string'
                }
            },
            required: ['@type', 'name']
        },
        funding_agent_type: {
            title: 'Funder',
            description:
                '{name (optional)identifier} pairs, typed either Person or Organization.  Other person or organization properties could be added',
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                },
                '@type': {
                    type: 'string',
                    default: 'Person',
                    enum: ['Person', 'Organization']
                },

                identifier: {
                    type: 'string'
                }
            },
            required: ['@type', 'name']
        },
        grant_type: {
            type: 'object',
            title: 'Grant',
            description: 'a Grant instrument',
            properties: {
                identifier: {
                    type: 'string'
                },
                '@type': {
                    type: 'string',
                    default: 'Grant',
                    const: 'Grant'
                },
                name: {
                    type: 'string'
                },

                sponsor: {
                    type: 'object',
                    description: 'agency that provided and adminsters the grant funding',
                    properties: {
                        '@type': {
                            type: 'string',
                            default: 'FundingAgency',
                            const: 'FundingAgency'
                        },
                        name: {
                            type: 'string'
                        }
                    }
                }
            }
        },
        audience_type: {
            type: 'object',
            properties: {
                audienceType: {
                    type: 'string'
                },
                '@type': {
                    type: 'string',
                    default: 'Audience',
                    const: 'Audience'
                },
                identifier: {
                    type: 'string'
                }
            },
            required: ['@type', 'audienceType']
        },
        creativeWork_type: {
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                },
                '@type': {
                    type: 'string',
                    default: 'CreativeWork',
                    const: 'CreativeWork'
                },
                url: {
                    type: 'string'
                }
            }
        },
        resourceTypes_type: {
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                },
                '@type': {
                    type: 'string',
                    default: 'CreativeWork',
                    const: 'CreativeWork'
                },

                url: {
                    type: 'string'
                }
            }
        },
        definedTerm_type: {
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                },
                '@type': {
                    type: 'string',
                    default: 'DefinedTerm',
                    const: 'DefinedTerm'
                },
                identifier: {
                    type: 'string'
                }
            },
            required: ['identifier', '@type', 'name']
        },
        supportingData_type: {
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                },
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
                    items: {
                        type: 'string'
                    }
                }
            }
        },
        action_type: {
            type: 'object',
            properties: {
                '@type': {
                    type: 'string', default: 'Action', const: 'Action'
                },
                name: {
                    type: 'string', default: 'Execute web application'
                },
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
                        urlTemplate: {
                            type: 'string'
                        },

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
                                    'PROPFIND']
                            }
                        }
                    }
                }
            }
        },
        citationType: {
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                },
                '@type': {
                    type: 'string',
                    default: 'PropertyValue',
                    const: 'PropertyValue'
                },
                propertyID: {
                    type: 'string',
                    default: 'dc:BibliographicCitation',
                    const: 'dc:BibliographicCitation'
                },

                value: {
                    type: 'string'
                }
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
                                '@type': {
                                    type: 'string', default: 'Person', const: 'Person'
                                },
                                name: {
                                    type: 'string'
                                },
                                identifier: {
                                    type: 'string'
                                }
                            }
                        },
                        datePublished: {
                            type: 'string'
                        }
                    }
                }
            }
        },

        additionalProperty_type: {
            anyOf: [{
                type: 'object',
                properties: {
                    '@type': {
                        type: 'string',
                        default: 'PropertyValue',
                        const: 'PropertyValue'
                    },
                    propertyID: {
                        type: 'string',
                        default: 'dc:BibliographicCitation',
                        const: 'dc:BibliographicCitation'
                    },
                    name: {
                        type: 'string'
                    },
                    value: {
                        type: 'string'
                    }
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
                        name: {
                            type: 'string'
                        },
                        value: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/creativeWork_type'
                            }
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
                        name: {
                            type: 'string'
                        },
                        value: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/creativeWork_type'
                            }
                        }
                    }
                }, {
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
                        value: {
                            $ref: '#/definitions/definedTerm_type'
                        }
                    }
                }, {
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
                        value: {
                            $ref: '#/definitions/definedTerm_type'
                        }
                    }
                }, {
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
                            type: 'string'
                        }
                    }
                }, {
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
                            items: {
                                $ref: '#/definitions/agent_type'
                            }
                        }
                    }
                }, {
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
                        value: {
                            $ref: '#/definitions/definedTerm_type'
                        }
                    }
                }, {
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
                                        name: {
                                            type: 'string'
                                        },
                                        identifier: {
                                            type: 'string'
                                        }
                                    }
                                },
                                datePublished: {
                                    type: 'string'
                                }
                            }
                        }
                    }
                }]
        }
    }
};

const withEnum = function () {
    const licenses = licenseList();
    // const licenseOneOf = [...licenseList ]
    jsonschema.properties.license.items = licenses;

    const rtypes = resourceTypeList();
    jsonschema.properties.mainEntity.oneOf = rtypes.oneOf;
    //jsonschema.properties.mainEntity.items= rtypes
    //jsonschema.definitions.resourceTypes_type.items= rtypes

    // not good at suggestions, so let's try suggestions
    // but using oneOf means the list must match
    // let functions = functionenum()
    // jsonschema.properties.applicationCategory.items = functions

    const scienceDomains = scienceDomainList();
    jsonschema.properties.about.items = scienceDomains;
    //
    // const maturity = maturityOneOf();
    // jsonschema.properties['ecrro:ECRRO_0000138'].properties.value = maturity;
    // //
    // const lifetime = lifetimeOneOf();
    // jsonschema.properties['ecrro:ECRRO_0000219'].properties.value = lifetime;

    //let audience = audienceOneOf();
    const audience = audienceList();
    jsonschema.properties.audience.items = audience;

    return jsonschema;
};

// one case where the propertyID causes issues with the json ref path, so it cannot be used as
// the name for a jsonld form. otherwise the propertyID and the flattened are the same.
const flattenList = [{
    flattened: 'dc:BibliographicCitation', flattenTo: 'additionalProperty'
}, {
    flattened: 'dependencies',
    propertyID: 'http://purl.obolibrary.org/obo/RO_0002502',
    flattenTo: 'additionalProperty'
}, {
    flattened: 'ecrro:ECRRO_0000600', flattenTo: 'additionalProperty'
}, {
    flattened: 'ecrro:ECRRO_0000138', flattenTo: 'additionalProperty'
}, {
    flattened: 'ecrro:ECRRO_0000219', flattenTo: 'additionalProperty'
}, {
    flattened: 'ecrro:ECRRO_0000218', flattenTo: 'additionalProperty'
}, {
    flattened: 'ecrro:ECRRO_0000017', flattenTo: 'additionalProperty'
}, {
    flattened: 'ecrro:ECRRO_0000503', flattenTo: 'additionalProperty'
}, {
    flattened: 'ecrro:ECRRO_0001301', flattenTo: 'additionalProperty'
}];
export {
    jsonschema as default, withEnum as schemaWithEnum, flattenList
};
