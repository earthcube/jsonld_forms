const jsonschema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "type": "object",
    "title": "Dataset metadata schema",
    "description": "JSON schema for JSON-LD documents that describe science datasets, based on Google guide for publishers (https://developers.google.com/search/docs/data-types/dataset), and the Earth Science Information Partners (ESIP) Science on Schema.org recommendations v1.3 prerelease (see https://doi.org/10.5281/zenodo.2628755 dataset.md for current recommendations document). The Google guide asserts only two required fields - name and description. The Google guide suggests the following recommended fields: url, sameAs, version, isAccessibleForFree, keywords, identifeir and variableMeasured. Created by Stephen Richard 2022-05-04; tested with validation of schema.org metadata from GeoCODES for magic, opentopo, earthchem, bco-dmo and hydroshare.",
    "properties": {
        "@context": {
            "title": "Dataset Linked Data",
            "description": "context defines mapping from JSON keys to URIs; default is the schema.org vocabulary only",
            "type": "object",
            "default": "{&quot;@vocab&quot;: &quot;https://schema.org/&quot;}"
        },
        "@id": {
            "type": "string",
            "description": "identifier for this metadata record (as distinct from the dataset it describes); this identifier will be used to reference the metadata record or attach annotation to the metadata"
        },
        "@type": {
            "description": "a schema.org Class that specifies the expected information content for the metadata record. For Datasets, expected value is 'Dataset'. The type classes for a given resource description are selected based on the schema.org properties used to describe the resource.",
            "oneOf": [
                {
                    "type": "string",
                    "default": "Dataset"
                },
                {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "minItems": 1,
                        "default": "Dataset"
                    }
                }
            ]
        },
        "additionalType": {
            "description": "identifiers for datatypes from other vocabularies (not schema.org) that apply to this metadata.",
            "oneOf": [
                {"type": "string"},
                {
                    "type": "array",
                    "minItems": 0,
                    "items": {"type": "string"}
                }
            ]
        },
        "name": {
            "type": "string",
            "description": "A descriptive name of a dataset (e.g., 'Snow depth in Northern Hemisphere')"
        },
        "description": {
            "type": "string",
            "description": "A short summary describing a dataset. This text will be indexed by search applications, so the more information here, the better."
        },
        "identifier": {
            "description": "The primary identifier for the dataset; other identifiers should be listed in the sameAs field. Schema.org has three ways of encoding identifiers-- a text description, a URL, or by using the schema:PropertyValue field. The Science on Schema.org guidance strongly recommends using the PropertyValue approach. see https://github.com/ESIPFed/science-on-schema.org   .... Dataset.md#identifier.  Ideally, for any given data provided they would provide identifiers either all as strings or all as identifier_type.  Dataset identifiers must be a URL, Text or PropertyValue&quot;",
            "oneOf": [
                {"$ref": "#/definitions/identifier_type"},
                {"type": "string"},
                {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                        "anyOf": [
                            {"$ref": "#/definitions/identifier_type"},
                            {"type": "string"}
                        ]
                    }
                }
            ]
        },
        "version": {
            "type": ["string","number"],
            "description": "The version number or identifier for this dataset (text or numeric). The values should sort from oldest to newest using an alphanumeric sort on version strings"
        },
        "alternateName": {
            "type": "string",
            "description": "Other label strings that are used to identify the dataset, e.g. in different languages"
        },
        "sameAs": {
            "description": "other identifiers for this dataset",
            "oneOf": [
                {"type": "string"},
                {"$ref": "#/definitions/identifier_type"},
                {
                    "type": "array",
                    "items": {
                        "anyOf": [
                            {"type": "string"},
                            {"$ref": "#/definitions/identifier_type"}
                        ]
                    }
                }
            ]
        },
        "keywords": {
            "description": "Keywords can be a comma-delimited string, and array of strings, an array of schema:DefinedTerms, or some combination of these. If you have information about a controlled vocabulary from which keywords come from, use schema:DefinedTerm to descibe that kewyword. This allowed variability makes parsing metadata hard; recommend using DefinedTerm for all keywords if any of them are from a known vocabulary, otherwise an array of strings. ",
            "oneOf": [
                {"type": "string"},
                {"$ref": "#/definitions/definedTerm_type"},
                {
                    "type": "array",
                    "items": {
                        "anyOf": [
                            {"type": "string"},
                            {"$ref": "#/definitions/definedTerm_type"}
                        ]
                    }
                }
            ]
        },
        "creativeWorkStatus": {
            "type": "string",
            "description": "The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete."
        },
        "url": {
            "type": "string",
            "description": "Web Location of a page describing the dataset. TBD--? use schema:LinkRole"
        },
        "inLanguage": {
            "type": "string",
            "description": "the language of the dataset content"
        },
        "dateCreated": {
            "type": "string",
            "description": "use to specify the date the dataset was initially generated (e.g., when a sensor recorded a value, when a model was run, or when data processing was completed). This is typically fixed when the first dataset version is created. ISO8601 formatted date (and optional time if relevant). Use one of these options: YYYY, YYYY-MM, YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS, YYYY-MM-DDTHH:MM:SSZ, YYYY-MM-DDTHH:MM:SS-NN (see https://en.wikipedia.org/wiki/ISO_8601 for details). "
        },
        "dateModified": {
            "type": "string",
            "description": "ISO8601 formatted date (and optional time if relevant) when Dataset was last updated"
        },
        "datePublished": {
            "type": "string",
            "description": "ISO8601 formatted date (and optional time if relevant) when Dataset was made public."
        },
        "expires": {
            "type": "string",
            "description": "use to specify the date when the dataset expires and is no longer useful or available. If datePublished is when the dataset is made available, then 'expires' brackets the time the dataset is valid or recommended for use."
        },
        "isAccessibleForFree": {
            "type": "boolean",
            "description": "Boolean (true|false) specifying if the dataset is accessible for free."
        },
        "license": {
            "description": "legal statement of conditions for use and access; recommend using schema:CreativeWork to provide a label (name) for the license, and an identifier. Sources of license identifiers: https://opensource.org/licenses/, https://creativecommons.org/about/cclicenses/, https://spdx.org/licenses/, http://cor.esipfed.org/ont/earthcube/swl. If only a string is provided, it should be an identifier for the license, ideally a resolvable URI",
            "oneOf": [
                {"type": "string"},
                {"$ref": "#/definitions/creativeWork_type"},
                {
                    "type": "array",
                    "minItems": 0,
                    "items": {
                        "anyOf": [
                            {"type": "string"},
                            {"$ref": "#/definitions/creativeWork_type"}
                        ]
                    }
                }
            ]
        },
        "creator": {
            "description": "author or orginator of intellectual content of dataset",
            "oneOf": [
                {
                    "type": "array",
                    "items": {
                        "anyOf": [
                            {"$ref": "#/definitions/person_type"},
                            {"$ref": "#/definitions/organization_type"}
                        ]
                    }
                },
                {
                    "type": "object",
                    "description": "The order of these creators can be preserved by the using the @list JSON-LD keyword:",
                    "properties": {
                        "@list": {
                            "type": "array",
                            "items": {
                                "anyOf": [
                                    {"$ref": "#/definitions/person_type"},
                                    {"$ref": "#/definitions/organization_type"}
                                ]
                            }
                        }
                    }
                },
                {
                    "type": "array",
                    "description": "For more granularity on how a person contributed to a Dataset, use schema:Role. The schema.org documentation does not state that the Role type is an expected data type of author, creator and contributor, but that is addressed in this blog post (http://blog.schema.org/2014/06/introducing-role.html). See https://github.com/ESIPFed/science-on-schema.org/blob/develop/guides/Dataset.md#roles-of-people",
                    "items": {
                        "type": "object",
                        "properties": {
                            "@type": {
                                "type": "string",
                                "default": "Role",
                                "const": "Role"
                            },
                            "roleName": {"type": "string"},
                            "creator": {
                                "type": "object",
                                "items": {
                                    "oneOf": [
                                        {"$ref": "#/definitions/person_type"},
                                        {"$ref": "#/definitions/organization_type"}
                                    ]
                                }
                            }
                        }
                    }
                }
            ]
        },
        "contributor": {
            "description": "other parties who played a role in production of dataset",
            "oneOf": [
                {
                    "type": "array",
                    "items": {
                        "anyOf": [
                            {"type": "string"},
                            {
                                "type": "object",
                                "properties": {
                                    "@id": {
                                        "type": "string",
                                        "description": "a identifier for an agent defined in this metadata, or externally; must be dereferenceable"
                                    }
                                }
                            },
                            {"$ref": "#/definitions/person_type"},
                            {"$ref": "#/definitions/organization_type"}
                        ]
                    }
                },
                {
                    "description": "a single value-- either @id reference, a person, or an organization",
                    "oneOf": [
                        {"type": "string"},
                        {
                            "type": "object",
                            "description": "just an identifier, reference to object defined somewhere else",
                            "properties": {
                                "@id": {
                                    "type": "string",
                                    "description": "a identifier for an agent defined in this metadata, or externally; must be dereferenceable"
                                }
                            }
                        },
                        {"$ref": "#/definitions/person_type"},
                        {"$ref": "#/definitions/organization_type"}
                    ]
                },
                {
                    "type": "array",
                    "description": "For more granularity on how a person contributed to a Dataset, use schema:Role. The schema.org documentation does not state that the Role type is an expected data type of author, creator and contributor, but that is addressed in this blog post (http://blog.schema.org/2014/06/introducing-role.html). see https://github.com/ESIPFed/science-on-schema.org/blob/develop/guides/Dataset.md#roles-of-people",
                    "items": {
                        "type": "object",
                        "properties": {
                            "@type": {
                                "type": "string",
                                "default": "Role",
                                "const": "Role"
                            },
                            "roleName": {"type": "string"},
                            "contributor": {
                                "type": "object",
                                "items": {
                                    "oneOf": [
                                        {"type": "string"},
                                        {
                                            "type": "object",
                                            "properties": {
                                                "@id": {
                                                    "type": "string",
                                                    "description": "a identifier for an agent defined in this metadata, or externally; must be dereferenceable"
                                                }
                                            }
                                        },
                                        {"$ref": "#/definitions/person_type"},
                                        {"$ref": "#/definitions/organization_type"}
                                    ]
                                }
                            }
                        }
                    }
                }
            ]
        },
        "publisher": {
            "description": "Party who made the dataset publicly available",
            "anyOf": [
                {
                    "type": "object",
                    "properties": {
                        "@id": {
                            "type": "string",
                            "description": "a identifier for an agent defined in this metadata, or externally; must be dereferenceable"
                        }
                    }
                },
                {"$ref": "#/definitions/person_type"},
                {"$ref": "#/definitions/organization_type"}
            ]
        },
        "provider": {
            "description": "Party who maintains the distribution options for the dataset. If there are multiple distributions from different providers, use the provider property on distribution/DataDownload",
            "oneOf": [
                {
                    "anyOf": [
                        {
                            "type": "object",
                            "properties": {
                                "@id": {
                                    "type": "string",
                                    "description": "a identifier for an agent defined in this metadata, or externally; must be dereferenceable"
                                }
                            }
                        },
                        {"$ref": "#/definitions/person_type"},
                        {"$ref": "#/definitions/organization_type"}
                    ]
                },
                {
                    "type": "array",
                    "description": "For more granularity on how a person contributed to a Dataset, use schema:Role. The schema.org documentation does not state that the Role type is an expected data type of author, creator and contributor, but that is addressed in this blog post (http://blog.schema.org/2014/06/introducing-role.html). see https://github.com/ESIPFed/science-on-schema.org/blob/develop/guides/Dataset.md#roles-of-people",
                    "items": {
                        "anyOf": [
                            {"$ref": "#/definitions/person_type"},
                            {"$ref": "#/definitions/organization_type"}
                        ]
                    }
                }
            ]
        },
        "funder": {
            "type": "array",
            "description": "this is a legacy implementation for acknowledging funding for the dataset. In march,2022 the funding property was adopted by schema.org; recommendation is to use that.",
            "items": {"$ref": "#/definitions/funder_type"}
        },
        "funding": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "@type": {
                        "type": "string",
                        "default": "MonetaryGrant",
                        "const": "MonetaryGrant"
                    },
                    "identifier": {
                        "type": "string",
                        "description": "string that identifies a particular grant"
                    },
                    "name": {
                        "type": "string",
                        "description": "title of the grant"
                    },
                    "url": {
                        "type": "string",
                        "description": "web location to access more inforamtion about the grant"
                    },
                    "funder": {"$ref": "#/definitions/funder_type"}
                }
            }
        },
        "temporalCoverage": {
            "description": "The time interval during which data was collected or observations were made; or a time period that an activity or collection is linked to intellectually or thematically (for example, 1997 to 1998; the 18th century) (see https://documentation.ardc.edu.au/display/DOC/Temporal+coverage). For documentation of Earth Science, Paleobiology or Paleontology datasets, we are interested in the second case-- the time period that data are linked to thematically.",
            "oneOf": [
                {
                    "type": "string",
                    "description": "Simple ISO8601 encoding of calendar date, dateTime, or time interval"
                },
                {
                    "type": "object",
                    "description": "a w3c time proper interval; use for geologic age bounds on the temporal coverage. This is a SOSO schema.org extension",
                    "properties": {
                        "@context": {"const": "{\"time\": \"http://www.w3.org/2006/time#\"}"},
                        "@type": {
                            "type": "string",
                            "default": "time:ProperInterval",
                            "const": "time:ProperInterval"
                        },
                        "time:hasBeginning": {"$ref": "#/definitions/intervalBound_type"},
                        "time:hasEnd": {"$ref": "#/definitions/intervalBound_type"}
                    }
                }
            ]
        },
        "spatialCoverage": {
            "oneOf": [
                {"$ref": "#/definitions/spatialCoverage_type"},
                {
                    "type": "array",
                    "items": {"$ref": "#/definitions/spatialCoverage_type"}
                }
            ]
        },
        "distribution": {
            "description": "specifies how to download the data in a specific format. This property describes where to get the data and in what format by using the schema:DataDownload type. If your dataset is not accessible through a direct download URL, but rather through a service URL, use potentialAction. If user must access data through a landing page, provide link to landing page in the 'url' property for the dataset",
            "oneOf": [
                {
                    "type": "array",
                    "items": {"$ref": "#/definitions/distribution_type"}
                },
                {"$ref": "#/definitions/distribution_type"}
            ]
        },
        "potentialAction": {
            "title": "Direct data access via web servcie",
            "description": "use schema.org Action to document url or url template and parameters to request data through a web accessible location. At this point, schema is set up for one action-- an HTTP Get that requests data. The url template parameters (in curly brackets '{}') specify query paramters to filter the source data, request particular output formats or other aspects of data.",
            "type": "array",
            "items": {"$ref": "#/definitions/action_type"}
        },
        "variableMeasured": {
            "description": "What does the dataset measure? (e.g., temperature, pressure)",
            "$ref": "#/definitions/variableMeasured_type"
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
                    "$ref": "#/definitions/identifier_type",
                    "description": "identifier for the collection or catalog; use identifier_type to provide information on identifier scheme and context for identifier"
                }
            }
        },
        "subjectOf": {
            "description": "link to other metadata records that may be more complete or that conform to metadata formats and vocabularies that might be useful. For example, repositories often contain detailed records in ISO TC 211 formats, EML, and other formats. Aggregators and other consumers can make use of this additional metadata if they are linked in a standardized way to the schema.org record. We recommend that the location of the alternative forms of the metadata be provided using the schema:subjectOf and schema:about properties:\n\nLink metadata documents to a schema:Dataset by using schema:subjectOf. - Or if a schema.org snippet describes the metadata as the main resource, then link to the Dataset it describes using schema:about.",
            "oneOf": [
                {"$ref": "#/definitions/subjectOf_type"},
                {
                    "type": "array",
                    "items": {"$ref": "#/definitions/subjectOf_type"}
                }
            ]
        },
        "citation": {"type": "string"}
    },
    "required": [
    "@id",
    "@type",
    "@context",
        "name",
        "description",
        "url"
    ],
    "definitions": {
        "action_type": {
            "type": "object",
            "description": "this element defines an action (operation) that can be invoked via messages using the protocol defined. In most cases this will be an http request via TCP/IP, but in desktop or LAN environments, other protocols might be used. The target property defines the endpoint and syntax for invoking the action. Result specifies the encoding format for the (possible) response(s) when the action is invoked. Object specifies the information model for the resource that is the object of the action. This approach is an adoptation of the Action Blog Post from schema.org (see https://schema.org/docs/actions.html, and https://github.com/schemaorg/suggestions-questions-brainstorming/issues/62) ",
            "properties": {
                "@type": {
                    "type": "string",
                    "default": "Action",
                    "const": "Action"
                },
                "name": {
                    "type": "string",
                    "description": "text label for the action"
                },
                "target": {
                    "$ref": "#/definitions/target_type",
                    "description": "specifies the request target location and request syntax"
                },
                "result": {
                    "$ref": "#/definitions/result_type",
                    "description": "specifies the serialization scheme (encoding format, information model) for expected representation of the data"
                },
                "object": {
                    "$ref": "#/definitions/object_type",
                    "description": "specification of information model/schema for target resource. Only necessary if the request allow specifying the fields to include in the response"
                },
                "query-input": {
                    "$ref": "#/definitions/query-input_type",
                    "description": "set of explanations of the parameters in the URL template for the target."
                }
            }
        },
        "target_type": {
            "type": "object",
            "properties": {
                "@type": {
                    "type": "string",
                    "default": "EntryPoint",
                    "const": "EntryPoint"
                },
                "description": {"type": "string"},
                "urlTemplate": {
                    "type": "string",
                    "description": "a templated URL; parameters are enclosed in curly braces ('{..}'); parameters MUST be documented in the query-input element. Template should be consitent with URI Template (https://datatracker.ietf.org/doc/html/rfc6570)",
                    "examples": [
                        "http://portal.chordsrt.com/api/v1/data.{encoding}; single parameter",
                        "http://portal.chordsrt.com/api/v1/data.{encoding}?instruments={instruments}&start={start}&end={end} ; multiple parameters",
                        "{endpoint}{encoding}; endpoint URL path is a parameter,should only appear in potential actions for API specification descriptions, which are generic-not specific to a particular endpoint."
                    ]
                },
                "httpMethod": {
                    "title": "HTTP Method",
                    "description": "only applicable if protocol is http or a protocol that tunnels on http",
                    "type": "array",
                    "items": {
                        "type": "string",
                        "default": "GET",
                        "enum": [
                            "GET",
                            "PUT",
                            "POST",
                            "PATCH",
                            "DELETE",
                            "COPY",
                            "HEAD",
                            "OPTIONS",
                            "PROPFIND"
                        ]
                    }
                },
                "contentType": {
                    "type": "array",
                    "description": "The supported content type(s) for an EntryPoint response. a MIME type (https://www.iana.org/assignments/media-types/media-types.xhtml) that specifies the content type for messages in resonses from the service endpoint. This is a schema.org property, and is redundant with encodingFormat in the result property for the Action.",
                    "items": {"type": "string"}
                }
            }
        },
        "result_type": {
            "type": "object",
            "properties": {
                "@type": {
                    "type": "string",
                    "default": "DataDownload"
                },
                "encodingFormat": {
                    "type": "array",
                    "items": {"type": "string"}
                },
                "description": {"type": "string"}
            }
        },
        "query-input_type": {
            "type": "array",
            "minItems": 0,
            "items": {
                "type": "object",
                "properties": {
                    "@id": {"type": "string"},
                    "@type": {
                        "type": "string",
                        "default": "PropertyValueSpecification",
                        "const": "PropertyValueSpecification"
                    },
                    "valueName": {"type": "string"},
                    "description": {"type": "string"},
                    "valueRequired": {"type": "boolean"},
                    "valuePattern": {"type": "string"}
                }
            }
        },
        "object_type": {
            "type": "object",
            "properties": {
                "@type": {
                    "type": "string",
                    "default": "DataFeed",
                    "const": "DataFeed"
                },
                "description": {"type": "string"},
                "variableMeasured": {
                    "type": "object",
                    "properties": {
                        "@type": {
                            "type": "string",
                            "default": "PropertyValue",
                            "const": "PropertyValue"
                        },
                        "name": {
                            "type": "string",
                            "description": "name of the variable"
                        },
                        "description": {
                            "type": "string",
                            "description": "example of documentation for a varible provided in the result.dataDownload"
                        },
                        "propertyID": {
                            "type": "string",
                            "description": "URI for the property in some ontology"
                        }
                    }
                },
                "encodingFormat-input": {
                    "type": "array",
                    "items": {"type": "string"}
                }
            }
        },
        "additionalProperty_type": {
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
                    "propertyID": {"type": "string"},
                    "name": {"type": "string"},
                    "value": {
                        "type": [
                            "string",
                            "object",
                            "number",
                            "array"
                        ]
                    }
                },
                "required": [
                    "@type",
                    "name",
                    "value"
                ]
            }
        },
        "creativeWork_type": {
            "type": "object",
            "description": "this is a shell used mostly for labeled links to other resources, but any schema.org CreativeWork property could be included.",
            "properties": {
                "name": {"type": "string"},
                "@type": {
                    "type": "string",
                    "default": "CreativeWork",
                    "const": "CreativeWork"
                },
                "url": {"type": "string"}
            },
            "required": ["@type"]
        },
        "definedTerm_type": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "text label for the keyord that is useful to human user"
                },
                "@type": {
                    "type": "string",
                    "default": "DefinedTerm",
                    "const": "DefinedTerm"
                },
                "identifier": {"$ref": "#/definitions/identifier_type"},
                "inDefinedTermSet": {
                    "type": "string",
                    "description": "Identifier for the controlled vocabulary responsible for this keyword."
                },
                "url": {
                    "type": "string",
                    "description": "The canonical URL for the keyword. (Optional)"
                },
                "termCode": {
                    "type": "string",
                    "description": "A representative code for this keyword in the controlled vocabulary (Optional)"
                }
            },
            "required": [
                "@type",
                "name"
            ]
        },
        "distribution_type": {
            "type": "object",
            "properties": {
                "@type": {
                    "type": "string",
                    "default": "DataDownload",
                    "const": "DataDownload"
                },
                "name": {"type": "string"},
                "contentUrl": {"type": "string"},
                "contentSize": {"type": "string"},
                "encodingFormat": {
                    "oneOf": [
                        {"type": "string"},
                        {
                            "type": "array",
                            "items": {"type": "string"}
                        }
                    ]
                },
                "provider": {
                    "type": "array",
                    "description": "Party who maintains this particular distribution option for the dataset. Use this property if there are multiple distributions from different providers",
                    "items": {
                        "anyOf": [
                            {"$ref": "#/definitions/person_type"},
                            {"$ref": "#/definitions/organization_type"}
                        ]
                    }
                }
            },
            "required": [
                "contentUrl",
                "@type",
                "encodingFormat"
            ]
        },
        "identifierArray_type": {
            "type": "array",
            "description": "an array of identifiers",
            "minItems": 1,
            "items": {"$ref": "#/definitions/identifier_type"}
        },
        "identifier_type": {
            "type": "object",
            "properties": {
                "@type": {
                    "type": "string",
                    "const": "PropertyValue",
                    "default": "PropertyValue"
                },
                "propertyID": {
                    "type": "string",
                    "description": "identifier for the identifier schema, e.g. DOI, ARK.  Get values from https://registry.identifiers.org/registry/ for interoperability"
                },
                "value": {
                    "type": "string",
                    "description": "the identifier string. E.g. doi:10.5066/F7VX0DMQ"
                },
                "url": {
                    "type": "string",
                    "description": "web-resolveable string for the identifier; host name part is location of a resolver that will return some representation for the given identifier value. E.g. https://doi.org/10.5066/F7VX0DMQ "
                }
            }
        },
        "spatialCoverage_type": {
            "type": "object",
            "properties": {
                "@type": {
                    "type": "string",
                    "const": "Place",
                    "default": "Place"
                },
                "geo": {
                    "oneOf": [
                        {
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
                        {
                            "type": "object",
                            "description": "A schema:GeoShape can describe spatial coverage as a line (e.g. a ship track), a bounding box, a polygon, or a circle. The geometry is described with a set of latitude/longitude pairs (in that order).The documentation for schema:GeoShape states 'Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.'",
                            "properties": {
                                "@type": {
                                    "type": "string",
                                    "const": "GeoShape",
                                    "default": "GeoShape"
                                },
                                "line": {"type": "string"},
                                "polygon": {
                                    "type": "string",
                                    "description": "a series of four or more points where the first and final points are identical."
                                },
                                "box": {
                                    "type": "string",
                                    "description": "A GeoShape box defines an area on the surface of the earth defined by point locations of the southwest corner and northeast corner of the rectangle in latitude-longitude coordinates. A space should be used to separate the latitude and longitude values. The two corner coordinate points are separated by a space. 'East longitude' means positive longitude values are east of the prime (Greenwich) meridian."
                                }
                            },
                            "anyOf": [
                                {
                                    "required": [
                                        "@type",
                                        "line"
                                    ],
                                    "not": {
                                        "anyOf": [
                                            {
                                                "required": ["polygon"]
                                            },
                                            {
                                                "required": ["box"]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "required": [
                                        "@type",
                                        "polygon"
                                    ],
                                    "not": {
                                        "required": ["line"]
                                    }
                                },
                                {
                                    "required": [
                                        "@type",
                                        "box"
                                    ],
                                    "not": {
                                        "required": ["line"]
                                    }
                                }
                            ]
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
                    "properties": {
                        "@id": {"type": "string"}
                    }
                },
                "time:numericPosition": {"type": "integer"}
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
                "time:inXSDDateTimeStamp": {"type": "string"},
                "time:inTimePosition": {"$ref": "#/definitions/timePosition_type"}
            },
            "oneOf": [
                {
                    "required": [
                        "@type",
                        "time:inXSDDateTimeStamp"
                    ],
                    "not": {
                        "required": ["time:inTimePosition"]
                    }
                },
                {
                    "required": [
                        "@type",
                        "time:inTimePosition"
                    ],
                    "not": {
                        "required": ["time:inXSDDateTimeStamp"]
                    }
                }
            ]
        },
        "person_type": {
            "type": "object",
            "properties": {
                "@id": {"type": "string"},
                "@type": {
                    "type": "string",
                    "const": "Person",
                    "default": "Person"
                },
                "name": {
                    "type": "string",
                    "description": "string label for person that is meaningful for human users"
                },
                "alternateName": {
                    "type": "string",
                    "description": "other labels by which the person might be known"
                },
                "affiliation": {"$ref": "#/definitions/organization_type"},
                "description": {"type": "string"},
                "identifier": {
                    "description": "identifier for person",
                    "oneOf": [
                        {"$ref": "#/definitions/identifier_type"},
                        {"type": "string"}
                    ]
                },
                "sameAs": {
                    "type": "array",
                    "description": "other identifiers for the person",
                    "items": {"type": "string"}
                }
            },
            "required": [
                "@type",
                "name"
            ]
        },
        "organization_type": {
            "type": "object",
            "properties": {
                "@id": {"type": "string"},
                "@type": {
                    "type": "string",
                    "enum": [
                        "Organization",
                        "FundingAgency",
                        "Consortium",
                        "Corporation",
                        "EducationalOrganization",
                        "FundingScheme",
                        "GovernmentOrganization",
                        "NGO",
                        "Project",
                        "ResearchOrganization"
                    ],
                    "default": "Organization"
                },
                "name": {
                    "type": "string",
                    "description": "string label for organization that is meaningful for human users"
                },
                "alternateName": {
                    "type": "string",
                    "description": "other labels by which the organization might be known"
                },
                "description": {"type": "string"},
                "identifier": {"type": "string"},
                "sameAs": {
                    "type": "array",
                    "description": "other identifiers for the organization",
                    "items": {"type": "string"}
                }
            },
            "required": [
                "@type",
                "name"
            ]
        },
        "subjectOf_type": {
            "type": "object",
            "description": "Link to the location of the alternative forms of the metadata. Many providers have other metadata records that may be more complete or that conform to other metadata formats and vocabularies that might be useful. For example, repositories often contain detailed records in ISO TC 211 formats, EML, and other formats. Aggregators and other consumers can make use of this additional metadata if they are linked in a standardized way to the schema.org record. ",
            "properties": {
                "@id": {"type": "string"},
                "@type": {
                    "type": "string",
                    "const": "DataDownload",
                    "default": "DataDownload"
                },
                "name": {
                    "type": "string",
                    "description": "a label for a metadata record usign another schema that can provide information about the described resource"
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
        "funder_type": {
            "anyOf": [
                {
                    "type": "object",
                    "properties": {
                        "@id": {
                            "type": "string",
                            "description": "a identifier for an agent defined in this metadata, or externally; must be dereferenceable"
                        }
                    }
                },
                {"$ref": "#/definitions/person_type"},
                {"$ref": "#/definitions/organization_type"}
            ]
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
                        "description": "Value is expected to be TEXT or URL. We recommend providing an HTTP URI that identifies a unit of measure from a vocabulary accessible on the web. The QUDT unit vocabulary provides and extensive set of registered units of measure that can be used to populate the schema:unitCode property to specify the units of measure used to report datavalues when that is appropriate."
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
        }
    }
}

export { jsonschema as default}
