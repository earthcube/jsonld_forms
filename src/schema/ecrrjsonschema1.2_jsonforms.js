
const jsonschema = {
    '@context': './ecrr-context.json',
//  Simplified for use in a forms application. Additional properties are included inLine as opposed to array of additionalProperty/PropertyValue elements. Edits to schema should be made in the ECRR jsonforms application (https://github.com/earthcube/jsonld_forms/blob/master/src/schema/tools/ecrr_jsonschema_1_1.js) to show up in the forms UI.
    'type': 'object',
    'title': 'EarthCube Resource Registry (ECRR) Resource Description',
    'description': 'JSON schema for EarthCube Resource Registry (ECRR) resource descriptions. The base object is common to all resource types, and definition section adds resource-specific properties. Resource types are Specification, UseCase, InterchangeFormat, Software, Interface. This schema Updated by S. Richard to align with existing ECRR metadata.',
    'properties': {
        '@id': {
            'type': 'string',
            'description': 'globally identifier string for this metadata record (not the resource it describes!), commonly a UUID with or without an HTTP prefix for web resolution'
        },
        '@type': {
            'type': 'array',
            'description': 'a schema.org Class that specifies the expected information content for the metadata record. For ECRR resources, expected values are (CreativeWork, SoftwareApplication, Product, WebAPI). The type classes for a given resource description are selected based on the schema.org properties used to describe the resource.',
            'minItems': 1,
            'items': {
                'enum': [
                    'CreativeWork',
                    'SoftwareApplication',
                    'Product',
                    'WebAPI'
                ]
            },
            'default': 'CreativeWork'
        },
        'name': {
            'type': 'string',
            'description': 'Short name by which this resource will be recognized; for human users to identify the resource; should be unique in scope of registry and informative enough to tell someone what the described resource is'
        },
        'alternateName': {
            'title': 'alternate name for resource',
            'description': 'other names, abbreviations, languages, by which the resource might be known.  If names are provided in a non-English language, please suffix a language identifier using the '@' delimiter and an ISO-639-1 two letter language code, e.g. Forme universelle binaire de l'OMM@fr. Separate entries with a pipe ('|') character',
            'type': 'array',
            'items': {'type': 'string'}
        },
        'subjectOf': {
            'title': 'URL to User-Readable Page',
            'description': 'Name and url for one or more web pages or other web accessible document about the resource; require at least one URL. Use creativeWork to get a labeled link. Future-- change to schema:LinkRole?',
            'type': 'array',
            'items': {'$ref': '#/definitions/creativeWork_type'}
        },
        'identifier': {
            'title': 'External Identifier',
            'description': 'Globally unique identifier for the described resource; could be single value or array of strings for multiple identifiers',
            'type': 'array',
            'items': {'type': 'string'},
// there are lots of kinds of identifiers; as long as they are a URI, the scheme is indicated by the identifier prefix'
        },
        'description': {
            'type': 'string',
            'description': 'a text description of the resource. This text will be indexed by search aggregators, and the information contained should be sufficient to tell a person what the resource is, broadly how to use it.'
        },
        'datePublished': {
            'type': 'string',
            'format': 'date'
        },
        'creator': {
            'title': 'one or more person or organization entities responsible for the intellectual content of the resource',
            'type': 'array',
            'items': {'$ref': '#/definitions/agent_type'}
        },
        'editor': {
            'title': 'one or more person or organization entities responsible editing the resource',
            'type': 'array',
            'items': {'$ref': '#/definitions/agent_type'}
        },
        'contributor': {
            'title': 'one or more person or organization entities who contributed to creation of the resource',
            'type': 'array',
            'items': {'$ref': '#/definitions/agent_type'}
        },
        'publisher': {'$ref': '#/definitions/agent_type'},
        'developer': {
            'type': 'array',
            'items': {'$ref': '#/definitions/agent_type'}
        },
        'keywords': {
            'type': 'array',
            'items': {'type': 'string'},
            'description': 'list of words related to the content of the resource, for use in search interface. Pick words that users might use to find this resource.'
        },
        'license': {
            'description': 'legal statement of conditions for use and access',
            'type': 'array',
            'uniqueItems': true,
            'items': {
                'oneOf': [
                    {
                        'title': 'Creative Commons Attribution (CC BY)',
                        'const': {
                            'name': 'Creative Commons Attribution (CC BY)',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/CCL_0000001'
                        }
                    },
                    {
                        'title': 'Creative Commons Attribution ShareAlike (CC BY-SA)',
                        'const': {
                            'name': 'Creative Commons Attribution ShareAlike (CC BY-SA)',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/CCL_0000002'
                        }
                    },
                    {
                        'title': 'Creative Commons Attribution-NoDerivatives 1.0',
                        'const': {
                            'name': 'Creative Commons Attribution-NoDerivatives 1.0',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/CCL_0000003'
                        }
                    },
                    {
                        'title': 'Creative Commons Attribution-NonCommercial (CC BY-NC)',
                        'const': {
                            'name': 'Creative Commons Attribution-NonCommercial (CC BY-NC)',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/CCL_0000004'
                        }
                    },
                    {
                        'title': 'Creative Commons Attribution-NonCommercial-ShareAlike (CC BY-NC-SA)',
                        'const': {
                            'name': 'Creative Commons Attribution-NonCommercial-ShareAlike (CC BY-NC-SA)',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/CCL_0000005'
                        }
                    },
                    {
                        'title': 'Creative Commons Attribution-NonCommercial-NoDerivatives (CC BY-NC-ND)',
                        'const': {
                            'name': 'Creative Commons Attribution-NonCommercial-NoDerivatives (CC BY-NC-ND)',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/CCL_0000007'
                        }
                    },
                    {
                        'title': 'Creative Commons Public Domain',
                        'const': {
                            'name': 'Creative Commons Public Domain',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/CCL_0000011'
                        }
                    },
                    {
                        'title': 'Creative Commons CC0 'No Rights Reserved'',
                        'const': {
                            'name': 'Creative Commons CC0 'No Rights Reserved'',
                            '@type': 'CreativeWork',
                            'url': 'https://creativecommons.org/publicdomain/zero/1.0/'
                        }
                    },
                    {
                        'title': 'Creative Commons PDM 'No Known Copyright'',
                        'const': {
                            'name': 'Creative Commons PDM 'No Known Copyright'',
                            '@type': 'CreativeWork',
                            'url': 'http://core.esipfed.org/ont/SWL_0000014'
                        }
                    },
                    {
                        'title': 'Common Development and Distribution License 1.0',
                        'const': {
                            'name': 'Common Development and Distribution License 1.0',
                            '@type': 'CreativeWork',
                            'url': 'https://opensource.org/licenses/CDDL-1.0'
                        }
                    },
                    {
                        'title': 'Eclipse Public License version 2.0',
                        'const': {
                            'name': 'Eclipse Public License version 2.0',
                            '@type': 'CreativeWork',
                            'url': 'https://opensource.org/licenses/EPL-2.0'
                        }
                    },
                    {
                        'title': 'MIT',
                        'const': {
                            'name': 'MIT',
                            '@type': 'CreativeWork',
                            'url': 'https://opensource.org/licenses/MIT'
                        }
                    },
                    {
                        'title': 'Apache',
                        'const': {
                            'name': 'Apache',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/SWL_0000013'
                        }
                    },
                    {
                        'title': 'BSD',
                        'const': {
                            'name': 'BSD',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/SWL_0000015'
                        }
                    },
                    {
                        'title': 'Mozilla Public License 2.0 (MPL-2.0)',
                        'const': {
                            'name': 'Mozilla Public License 2.0 (MPL-2.0)',
                            '@type': 'CreativeWork',
                            'url': 'https://opensource.org/licenses/MPL-2.0'
                        }
                    },
                    {
                        'title': 'GNU General Public License (GPL)',
                        'const': {
                            'name': 'GNU General Public License (GPL)',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/SWL_0000017'
                        }
                    },
                    {
                        'title': 'GNU Lesser General Public License (LGPL)',
                        'const': {
                            'name': 'GNU Lesser General Public License (LGPL)',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/SWL_0000018'
                        }
                    },
                    {
                        'title': 'GNU Affero General Public License (AGPL)',
                        'const': {
                            'name': 'GNU Affero General Public License (AGPL)',
                            '@type': 'CreativeWork',
                            'url': 'https://www.gnu.org/licenses/agpl-3.0.html'
                        }
                    },
                    {
                        'title': 'Proprietary',
                        'const': {
                            'name': 'Proprietary',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/SWL_0000019'
                        }
                    }
                ]
            }
        },
        'version': {
            'type': 'string',
            'description': 'string that identifies a particular version of the resource if it is not identified by the schema:identifier element'
        },
        'funding': {
            'description': 'An array of grants. Grant has a funder -- person or organization that provides financial support, or a sponsor-- person or organization that provides financial or other kinds of support (office space, lab supplies, etc.)',
            'type': 'array',
            'items': {'$ref': '#/definitions/grant_type'}
        },
        'audience': {
            'title': 'Intended Audience/Target User',
            'description': 'terms from ECRR Audience Types controlled vocabulary (http://cor.esipfed.org/ont/earthcube/AUT) that identify the kinds of users who are the target of the described resource. ',
            'type': 'array',
            'items': {
                'oneOf': [
                    {
                        'title': 'Data Producers',
                        'const': {
                            'audienceType': 'Data Producers',
                            '@type': 'Audience',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/AUT_0000001'
                        }
                    },
                    {
                        'title': 'Data Users',
                        'const': {
                            'audienceType': 'Data Users',
                            '@type': 'Audience',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/AUT_0000002'
                        }
                    },
                    {
                        'title': 'Data Facilities and Repositories',
                        'const': {
                            'audienceType': 'Data Facilities and Repositories',
                            '@type': 'Audience',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/AUT_0000003'
                        }
                    },
                    {
                        'title': 'Technologists',
                        'const': {
                            'audienceType': 'Technologists',
                            '@type': 'Audience',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/AUT_0000004'
                        }
                    },
                    {
                        'title': 'Data Managers',
                        'const': {
                            'audienceType': 'Data Managers',
                            '@type': 'Audience',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/AUT_0000005'
                        }
                    },
                    {
                        'title': 'Developers',
                        'const': {
                            'audienceType': 'Developers',
                            '@type': 'Audience',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/AUT_0000006'
                        }
                    },
                    {
                        'title': 'Scientists',
                        'const': {
                            'audienceType': 'Scientists',
                            '@type': 'Audience',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/AUT_0000007'
                        }
                    },
                    {
                        'title': 'Infomaticists',
                        'const': {
                            'audienceType': 'Infomaticists',
                            '@type': 'Audience',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/AUT_0000008'
                        }
                    },
                    {
                        'title': 'Members of the Public',
                        'const': {
                            'audienceType': 'Members of the Public',
                            '@type': 'Audience',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/AUT_0000009'
                        }
                    },
                    {
                        'title': 'All',
                        'const': {
                            'audienceType': 'All',
                            '@type': 'Audience',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/AUT_0000010'
                        }
                    }
                ]
            }
        },
        'about': {
            'title': 'Science Domain',
            'type': 'array',
            'description': 'terms from ECRR Academic Discipline controlled vocabulary (http://cor.esipfed.org/ont/earthcube/ADO) that identify the community expected to be interested in this resource',
            'uniqueItems': true,
            'items': {
                'oneOf': [
                    {
                        'title': 'Anthropology',
                        'const': [
                            {
                                'name': 'Anthropology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000012'
                            }
                        ]
                    },
                    {
                        'title': 'Applied Sciences',
                        'const': [
                            {
                                'name': 'Applied Sciences',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000024'
                            }
                        ]
                    },
                    {
                        'title': 'Archaeology',
                        'const': [
                            {
                                'name': 'Archaeology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000013'
                            }
                        ]
                    },
                    {
                        'title': 'Atmospheric Chemistry',
                        'const': [
                            {
                                'name': 'Atmospheric Chemistry',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000037'
                            }
                        ]
                    },
                    {
                        'title': 'Atmospheric Dynamics',
                        'const': [
                            {
                                'name': 'Atmospheric Dynamics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000038'
                            }
                        ]
                    },
                    {
                        'title': 'Atmospheric Physics',
                        'const': [
                            {
                                'name': 'Atmospheric Physics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000036'
                            }
                        ]
                    },
                    {
                        'title': 'Atmospheric Science',
                        'const': [
                            {
                                'name': 'Atmospheric Science',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000033'
                            }
                        ]
                    },
                    {
                        'title': 'Biogeography',
                        'const': [
                            {
                                'name': 'Biogeography',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000039'
                            }
                        ]
                    },
                    {
                        'title': 'Biogeology',
                        'const': [
                            {
                                'name': 'Biogeology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000057'
                            }
                        ]
                    },
                    {
                        'title': 'Biogeophysics',
                        'const': [
                            {
                                'name': 'Biogeophysics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000090'
                            }
                        ]
                    },
                    {
                        'title': 'Biological Oceanography',
                        'const': [
                            {
                                'name': 'Biological Oceanography',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000047'
                            }
                        ]
                    },
                    {
                        'title': 'Biology',
                        'const': [
                            {
                                'name': 'Biology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0003070'
                            }
                        ]
                    },
                    {
                        'title': 'Biostratigraphy',
                        'const': [
                            {
                                'name': 'Biostratigraphy',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000108'
                            }
                        ]
                    },
                    {
                        'title': 'Chemical Hydrology',
                        'const': [
                            {
                                'name': 'Chemical Hydrology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000080'
                            }
                        ]
                    },
                    {
                        'title': 'Chemical Oceanography',
                        'const': [
                            {
                                'name': 'Chemical Oceanography',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000048'
                            }
                        ]
                    },
                    {
                        'title': 'Chemistry',
                        'const': [
                            {
                                'name': 'Chemistry',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0003314'
                            }
                        ]
                    },
                    {
                        'title': 'Climatology',
                        'const': [
                            {
                                'name': 'Climatology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000035'
                            }
                        ]
                    },
                    {
                        'title': 'Coastal Geography',
                        'const': [
                            {
                                'name': 'Coastal Geography',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000045'
                            }
                        ]
                    },
                    {
                        'title': 'Discipline-agnostic',
                        'const': [
                            {
                                'name': 'Discipline-agnostic',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000188'
                            }
                        ]
                    },
                    {
                        'title': 'Earth Science',
                        'const': [
                            {
                                'name': 'Earth Science',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000021'
                            }
                        ]
                    },
                    {
                        'title': 'Ecohydrology',
                        'const': [
                            {
                                'name': 'Ecohydrology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000081'
                            }
                        ]
                    },
                    {
                        'title': 'Ecology',
                        'const': [
                            {
                                'name': 'Ecology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000610'
                            }
                        ]
                    },
                    {
                        'title': 'Economic Geology',
                        'const': [
                            {
                                'name': 'Economic Geology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000058'
                            }
                        ]
                    },
                    {
                        'title': 'Edaphology',
                        'const': [
                            {
                                'name': 'Edaphology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000053'
                            }
                        ]
                    },
                    {
                        'title': 'Engineering and Technology',
                        'const': [
                            {
                                'name': 'Engineering and Technology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000027'
                            }
                        ]
                    },
                    {
                        'title': 'Engineering Geology',
                        'const': [
                            {
                                'name': 'Engineering Geology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000059'
                            }
                        ]
                    },
                    {
                        'title': 'Environmental Chemistry',
                        'const': [
                            {
                                'name': 'Environmental Chemistry',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000029'
                            }
                        ]
                    },
                    {
                        'title': 'Environmental Geology',
                        'const': [
                            {
                                'name': 'Environmental Geology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000060'
                            }
                        ]
                    },
                    {
                        'title': 'Environmental Science',
                        'const': [
                            {
                                'name': 'Environmental Science',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000028'
                            }
                        ]
                    },
                    {
                        'title': 'Exploration Geophysics',
                        'const': [
                            {
                                'name': 'Exploration Geophysics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000091'
                            }
                        ]
                    },
                    {
                        'title': 'Formal Sciences',
                        'const': [
                            {
                                'name': 'Formal Sciences',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000023'
                            }
                        ]
                    },
                    {
                        'title': 'Geobiology',
                        'const': [
                            {
                                'name': 'Geobiology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000055'
                            }
                        ]
                    },
                    {
                        'title': 'Geochemistry',
                        'const': [
                            {
                                'name': 'Geochemistry',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000030'
                            }
                        ]
                    },
                    {
                        'title': 'Geodesy',
                        'const': [
                            {
                                'name': 'Geodesy',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000031'
                            }
                        ]
                    },
                    {
                        'title': 'Geodynamics',
                        'const': [
                            {
                                'name': 'Geodynamics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000093'
                            }
                        ]
                    },
                    {
                        'title': 'Geologic Modeling',
                        'const': [
                            {
                                'name': 'Geologic Modeling',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000061'
                            }
                        ]
                    },
                    {
                        'title': 'Geological Oceanography',
                        'const': [
                            {
                                'name': 'Geological Oceanography',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000049'
                            }
                        ]
                    },
                    {
                        'title': 'Geology',
                        'const': [
                            {
                                'name': 'Geology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000056'
                            }
                        ]
                    },
                    {
                        'title': 'Geomagnetism',
                        'const': [
                            {
                                'name': 'Geomagnetism',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000094'
                            }
                        ]
                    },
                    {
                        'title': 'Geomorphology',
                        'const': [
                            {
                                'name': 'Geomorphology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000062'
                            }
                        ]
                    },
                    {
                        'title': 'Geophysical Fluid Dynamics',
                        'const': [
                            {
                                'name': 'Geophysical Fluid Dynamics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000092'
                            }
                        ]
                    },
                    {
                        'title': 'Geophysics',
                        'const': [
                            {
                                'name': 'Geophysics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000063'
                            }
                        ]
                    },
                    {
                        'title': 'Geostatistics',
                        'const': [
                            {
                                'name': 'Geostatistics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000077'
                            }
                        ]
                    },
                    {
                        'title': 'Glaciology',
                        'const': [
                            {
                                'name': 'Glaciology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000078'
                            }
                        ]
                    },
                    {
                        'title': 'Historical Geology',
                        'const': [
                            {
                                'name': 'Historical Geology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000064'
                            }
                        ]
                    },
                    {
                        'title': 'Human Geography',
                        'const': [
                            {
                                'name': 'Human Geography',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000015'
                            }
                        ]
                    },
                    {
                        'title': 'Hydrogeology',
                        'const': [
                            {
                                'name': 'Hydrogeology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000082'
                            }
                        ]
                    },
                    {
                        'title': 'Hydroinformatics',
                        'const': [
                            {
                                'name': 'Hydroinformatics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000083'
                            }
                        ]
                    },
                    {
                        'title': 'Hydrology',
                        'const': [
                            {
                                'name': 'Hydrology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000079'
                            }
                        ]
                    },
                    {
                        'title': 'Hydrometeorology',
                        'const': [
                            {
                                'name': 'Hydrometeorology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000084'
                            }
                        ]
                    },
                    {
                        'title': 'Invertebrate Paleontology',
                        'const': [
                            {
                                'name': 'Invertebrate Paleontology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000103'
                            }
                        ]
                    },
                    {
                        'title': 'Isotope Hydrology',
                        'const': [
                            {
                                'name': 'Isotope Hydrology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000085'
                            }
                        ]
                    },
                    {
                        'title': 'Landscape Ecology',
                        'const': [
                            {
                                'name': 'Landscape Ecology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000088'
                            }
                        ]
                    },
                    {
                        'title': 'Limnology',
                        'const': [
                            {
                                'name': 'Limnology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000087'
                            }
                        ]
                    },
                    {
                        'title': 'Magnetotellurics',
                        'const': [
                            {
                                'name': 'Magnetotellurics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000190'
                            }
                        ]
                    },
                    {
                        'title': 'Marine Geology',
                        'const': [
                            {
                                'name': 'Marine Geology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000065'
                            }
                        ]
                    },
                    {
                        'title': 'Mathematical Geophysics',
                        'const': [
                            {
                                'name': 'Mathematical Geophysics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000095'
                            }
                        ]
                    },
                    {
                        'title': 'Meteorology',
                        'const': [
                            {
                                'name': 'Meteorology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000034'
                            }
                        ]
                    },
                    {
                        'title': 'Micropaleontology',
                        'const': [
                            {
                                'name': 'Micropaleontology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000106'
                            }
                        ]
                    },
                    {
                        'title': 'Mineral Physics',
                        'const': [
                            {
                                'name': 'Mineral Physics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000096'
                            }
                        ]
                    },
                    {
                        'title': 'Mineralogy',
                        'const': [
                            {
                                'name': 'Mineralogy',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000066'
                            }
                        ]
                    },
                    {
                        'title': 'Mining Geology',
                        'const': [
                            {
                                'name': 'Mining Geology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000067'
                            }
                        ]
                    },
                    {
                        'title': 'Natural Sciences',
                        'const': [
                            {
                                'name': 'Natural Sciences',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000019'
                            }
                        ]
                    },
                    {
                        'title': 'Near-Surface Geophysics',
                        'const': [
                            {
                                'name': 'Near-Surface Geophysics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000097'
                            }
                        ]
                    },
                    {
                        'title': 'Oceanography',
                        'const': [
                            {
                                'name': 'Oceanography',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000046'
                            }
                        ]
                    },
                    {
                        'title': 'Paleobiology',
                        'const': [
                            {
                                'name': 'Paleobiology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000109'
                            }
                        ]
                    },
                    {
                        'title': 'Paleobotany',
                        'const': [
                            {
                                'name': 'Paleobotany',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000104'
                            }
                        ]
                    },
                    {
                        'title': 'Paleoceanography',
                        'const': [
                            {
                                'name': 'Paleoceanography',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000051'
                            }
                        ]
                    },
                    {
                        'title': 'Paleoclimatology',
                        'const': [
                            {
                                'name': 'Paleoclimatology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000043'
                            }
                        ]
                    },
                    {
                        'title': 'Paleoecology',
                        'const': [
                            {
                                'name': 'Paleoecology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000107'
                            }
                        ]
                    },
                    {
                        'title': 'Paleogeography',
                        'const': [
                            {
                                'name': 'Paleogeography',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000044'
                            }
                        ]
                    },
                    {
                        'title': 'Paleomagnetism',
                        'const': [
                            {
                                'name': 'Paleomagnetism',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000098'
                            }
                        ]
                    },
                    {
                        'title': 'Paleontology',
                        'const': [
                            {
                                'name': 'Paleontology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000101'
                            }
                        ]
                    },
                    {
                        'title': 'Palynology',
                        'const': [
                            {
                                'name': 'Palynology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000105'
                            }
                        ]
                    },
                    {
                        'title': 'Pedology',
                        'const': [
                            {
                                'name': 'Pedology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000054'
                            }
                        ]
                    },
                    {
                        'title': 'Petroleum Geology',
                        'const': [
                            {
                                'name': 'Petroleum Geology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000069'
                            }
                        ]
                    },
                    {
                        'title': 'Petrology',
                        'const': [
                            {
                                'name': 'Petrology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000070'
                            }
                        ]
                    },
                    {
                        'title': 'Philosophy',
                        'const': [
                            {
                                'name': 'Philosophy',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000009'
                            }
                        ]
                    },
                    {
                        'title': 'Physical Geography',
                        'const': [
                            {
                                'name': 'Physical Geography',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000032'
                            }
                        ]
                    },
                    {
                        'title': 'Physical Oceanography',
                        'const': [
                            {
                                'name': 'Physical Oceanography',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000050'
                            }
                        ]
                    },
                    {
                        'title': 'Physics',
                        'const': [
                            {
                                'name': 'Physics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0003318'
                            }
                        ]
                    },
                    {
                        'title': 'Phytogeography',
                        'const': [
                            {
                                'name': 'Phytogeography',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000040'
                            }
                        ]
                    },
                    {
                        'title': 'Quaternary Science',
                        'const': [
                            {
                                'name': 'Quaternary Science',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000089'
                            }
                        ]
                    },
                    {
                        'title': 'Sedimentology',
                        'const': [
                            {
                                'name': 'Sedimentology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000071'
                            }
                        ]
                    },
                    {
                        'title': 'Seismology',
                        'const': [
                            {
                                'name': 'Seismology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000099'
                            }
                        ]
                    },
                    {
                        'title': 'Soil Science',
                        'const': [
                            {
                                'name': 'Soil Science',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000052'
                            }
                        ]
                    },
                    {
                        'title': 'Space Science',
                        'const': [
                            {
                                'name': 'Space Science',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000022'
                            }
                        ]
                    },
                    {
                        'title': 'Speleology',
                        'const': [
                            {
                                'name': 'Speleology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000075'
                            }
                        ]
                    },
                    {
                        'title': 'Statistics and Probability',
                        'const': [
                            {
                                'name': 'Statistics and Probability',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0002269'
                            }
                        ]
                    },
                    {
                        'title': 'Stratigraphy',
                        'const': [
                            {
                                'name': 'Stratigraphy',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000072'
                            }
                        ]
                    },
                    {
                        'title': 'Structural Geology',
                        'const': [
                            {
                                'name': 'Structural Geology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000073'
                            }
                        ]
                    },
                    {
                        'title': 'Surface Hydrology',
                        'const': [
                            {
                                'name': 'Surface Hydrology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000086'
                            }
                        ]
                    },
                    {
                        'title': 'Tectonics',
                        'const': [
                            {
                                'name': 'Tectonics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000076'
                            }
                        ]
                    },
                    {
                        'title': 'Tectonophysics',
                        'const': [
                            {
                                'name': 'Tectonophysics',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000100'
                            }
                        ]
                    },
                    {
                        'title': 'Vertebrate Paleontology',
                        'const': [
                            {
                                'name': 'Vertebrate Paleontology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000102'
                            }
                        ]
                    },
                    {
                        'title': 'Volcanology',
                        'const': [
                            {
                                'name': 'Volcanology',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000074'
                            }
                        ]
                    },
                    {
                        'title': 'Zoogeography',
                        'const': [
                            {
                                'name': 'Zoogeography',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/ADO_0000041'
                            }
                        ]
                    }
                ]
            }
        },
        'contentType': {
            'title': 'Content Type(s) of Catalogued Objects in a Catalog or repository',
            'description': 'Content Type(s) of Catalogued Objects; array of {[optional @type], name, identifier} tuples, could be anything, but recommend using sub types of 'schema:Thing'; identifier is optional. Only applicable if resourceType is catalog or repository',
            'type': 'array',
            'items': {
                'type': 'object',
                'properties': {
                    '@type': {
                        'type': 'string',
                        'default': 'Thing',
                        'const': 'Thing'
                    },
                    'name': {'type': 'string'},
                    'identifier': {'type': 'string'},
                    'required': ['name']
                }
            }
        },
        'isRelatedTo': {
            'title': 'Related Resources',
            'description': 'array of labeled links {name, url} to related resources. the name (label) should express the relationship to the target and identify the target for a user; URL should be a resolvable address to access the related resource (or some representation of it...). Machine readable endpoint for a web api (e.g. Swagger document goes here, typed as schema:Product). Note that schema.org defined expected domain to be schema:Product or schema:Service. schema:WebAPI is the only subtype @type of schema:Service expected for an ECRR resource',
            'type': 'array',
            'items': {
                'type': 'object',
                'properties': {
                    '@type': {
                        'type': 'string',
                        'description': 'the schema.org type of the target resource'
                    },
                    'name': {'type': 'string'},
                    'url': {'type': 'string'}
                }
            }
        },
        'mainEntity': {
            'title': 'Type of Resource',
            'description': 'Labeled link url is URI for ECRR resource type; name is ECRR resource type name. The ECRR URI (ECRRO_ or SFO_ prefix URIs) in the url value is used to validate resource specific properties. If the resource type is Specification or Semantic Resource, a more specific resource type from the SPKT or SRT vocabulary (respectively) can be specified.',
            'oneOf': [
                {
                    'title': 'Bundled Object',
                    'const': [
                        {
                            'name': 'Bundled Object',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/earthcube/SFO_0000075'
                        }
                    ]
                },
                {
                    'title': 'Catalog/Registry',
                    'const': [
                        {
                            'name': 'Catalog/Registry',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/earthcube/ECRRO_0000212'
                        }
                    ]
                },
                {
                    'title': 'Interchange file format',
                    'const': [
                        {
                            'name': 'Interchange file format',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/earthcube/ECRRO_0000208'
                        }
                    ]
                },
                {
                    'title': 'Interface/API',
                    'const': [
                        {
                            'name': 'Interface/API',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/earthcube/ECRRO_0000207'
                        }
                    ]
                },
                {
                    'title': 'Platform',
                    'const': [
                        {
                            'name': 'Platform',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/earthcube/ECRRO_0000211'
                        }
                    ]
                },
                {
                    'title': 'Repository',
                    'const': [
                        {
                            'name': 'Repository',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/earthcube/ECRRO_0000209'
                        }
                    ]
                },
                {
                    'title': 'Semantic Resource',
                    'const': [
                        {
                            'name': 'Semantic Resource',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/earthcube/ECRRO_0000210'
                        }
                    ]
                },
                {
                    'title': 'Service Instance',
                    'const': [
                        {
                            'name': 'Service Instance',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/earthcube/ECRRO_0000202'
                        }
                    ]
                },
                {
                    'title': 'Software',
                    'const': [
                        {
                            'name': 'Software',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/earthcube/ECRRO_0000206'
                        }
                    ]
                },
                {
                    'title': 'Specification',
                    'const': [
                        {
                            'name': 'Specification',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/earthcube/ECRRO_0000204'
                        }
                    ]
                },
                {
                    'title': 'Use Case',
                    'const': [
                        {
                            'name': 'Use Case',
                            '@type': 'CreativeWork',
                            'url': 'http://cor.esipfed.org/ont/earthcube/ECRRO_0000005'
                        }
                    ]
                }
            ]
        },
        'encodingFormat': {
            'title': 'Representation Format or base format for a profile specification',
            'description': 'format pattern is a registered MIME type prefix for the base format, and an application specific extension (after a ';' delimiter.  Values should be from the 'use' column in the register at https://github.com/earthcube/GeoCODES-Metadata/blob/main/resources/encodingFormat.csv ',
            'type': 'array',
            'items': {'type': 'string'}
        },
        'isBasedOn': {
            'title': 'Semantic Resources it Uses',
            'description': 'references to Semantic Resources used by the described resource',
            'type': 'array',
            'items': {'$ref': '#/definitions/creativeWork_type'}
        },
        'applicationCategory': {
            'title': 'Application function and subfunction',
            'description': 'strings use special syntax like {function: ... uri: ... }. The function value is the label associated with the ECRR uri in the function vocabulary (http://cor.esipfed.org/ont/earthcube/sfo)',
            'type': 'array',
            'items': {
                'oneOf': [
                    {'title': 'research software function',
                        'const': {
                            'name': 'research software function',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000001'
                        }
                    },
                    {'title': 'research planning',
                        'const': {
                            'name': 'research planning',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000002'
                        }
                    },
                    {'title': 'user interaction',
                        'const': {
                            'name': 'user interaction',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000003'
                        }
                    },
                    {'title': 'data acquisition',
                        'const': {
                            'name': 'data acquisition',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000004'
                        }
                    },
                    {'title': 'data discovery and access',
                        'const': {
                            'name': 'data discovery and access',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000005'
                        }
                    },
                    {'title': 'data exploration',
                        'const': {
                            'name': 'data exploration',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000006'
                        }
                    },
                    {'title': 'data preparation',
                        'const': {
                            'name': 'data preparation',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000007'
                        }
                    },
                    {'title': 'data processing and modeling',
                        'const': {
                            'name': 'data processing and modeling',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000008'
                        }
                    },
                    {'title': 'workflow management',
                        'const': {
                            'name': 'workflow management',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000009'
                        }
                    },
                    {'title': 'data analysis',
                        'const': {
                            'name': 'data analysis',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000010'
                        }
                    },
                    {'title': 'visualization',
                        'const': {
                            'name': 'visualization',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000011'
                        }
                    },
                    {'title': 'reporting',
                        'const': {
                            'name': 'reporting',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000012'
                        }
                    },
                    {'title': 'data preservation',
                        'const': {
                            'name': 'data preservation',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000013'
                        }
                    },
                    {'title': 'programmer assistance',
                        'const': {
                            'name': 'programmer assistance',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000014'
                        }
                    },
                    {'title': 'mental modeling',
                        'const': {
                            'name': 'mental modeling',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000015'
                        }
                    },
                    {'title': 'project planning',
                        'const': {
                            'name': 'project planning',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000016'
                        }
                    },
                    {'title': 'logistics planning',
                        'const': {
                            'name': 'logistics planning',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000017'
                        }
                    },
                    {'title': 'data management planning',
                        'const': {
                            'name': 'data management planning',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000018'
                        }
                    },
                    {'title': 'authentication and access control',
                        'const': {
                            'name': 'authentication and access control',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000019'
                        }
                    },
                    {'title': 'user interface',
                        'const': {
                            'name': 'user interface',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000020'
                        }
                    },
                    {'title': 'community support & social networking',
                        'const': {
                            'name': 'community support & social networking',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000021'
                        }
                    },
                    {'title': 'notification',
                        'const': {
                            'name': 'notification',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000022'
                        }
                    },
                    {'title': 'instrument control',
                        'const': {
                            'name': 'instrument control',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000023'
                        }
                    },
                    {'title': 'instrument calibration',
                        'const': {
                            'name': 'instrument calibration',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000024'
                        }
                    },
                    {'title': 'streaming data handling',
                        'const': {
                            'name': 'streaming data handling',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000025'
                        }
                    },
                    {'title': 'data ingest',
                        'const': {
                            'name': 'data ingest',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000026'
                        }
                    },
                    {'title': 'data query',
                        'const': {
                            'name': 'data query',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000027'
                        }
                    },
                    {'title': 'data access/order',
                        'const': {
                            'name': 'data access/order',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000028'
                        }
                    },
                    {'title': 'web crawling',
                        'const': {
                            'name': 'web crawling',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000029'
                        }
                    },
                    {'title': 'data harvesting',
                        'const': {
                            'name': 'data harvesting',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000030'
                        }
                    },
                    {'title': 'data mining',
                        'const': {
                            'name': 'data mining',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000033'
                        }
                    },
                    {'title': 'exploratory data analysis',
                        'const': {
                            'name': 'exploratory data analysis',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000034'
                        }
                    },
                    {'title': 'QA/QC',
                        'const': {
                            'name': 'QA/QC',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000036'
                        }
                    },
                    {'title': 'subsetting',
                        'const': {
                            'name': 'subsetting',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000039'
                        }
                    },
                    {'title': 'metadata assistance',
                        'const': {
                            'name': 'metadata assistance',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000041'
                        }
                    },
                    {
                        'title': 'data cleaning',
                        'const': {
                            'name': 'data cleaning',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000042'
                        }
                    },
                    {
                        'title': 'data desensitization',
                        'const': {
                            'name': 'data desensitization',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000043'
                        }
                    },
                    {
                        'title': 'grid or mesh generation',
                        'const': {
                            'name': 'grid or mesh generation',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000044'
                        }
                    },
                    {
                        'title': 'test data generation',
                        'const': {
                            'name': 'test data generation',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000045'
                        }
                    },
                    {
                        'title': 'output validation',
                        'const': {
                            'name': 'output validation',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000046'
                        }
                    },
                    {
                        'title': 'model coupling',
                        'const': {
                            'name': 'model coupling',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000047'
                        }
                    },
                    {
                        'title': 'data processing',
                        'const': {
                            'name': 'data processing',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000048'
                        }
                    },
                    {
                        'title': 'computational model',
                        'const': {
                            'name': 'computational model',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000049'
                        }
                    },
                    {
                        'title': 'model calibration',
                        'const': {
                            'name': 'model calibration',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000050'
                        }
                    },
                    {
                        'title': 'inversion/assimilation',
                        'const': {
                            'name': 'inversion/assimilation',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000051'
                        }
                    },
                    {
                        'title': 'data integration',
                        'const': {
                            'name': 'data integration',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000053'
                        }
                    },
                    {
                        'title': 'time series analysis',
                        'const': {
                            'name': 'time series analysis',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000054'
                        }
                    },
                    {
                        'title': 'spatial analysis',
                        'const': {
                            'name': 'spatial analysis',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000055'
                        }
                    },
                    {
                        'title': 'statistical analysis',
                        'const': {
                            'name': 'statistical analysis',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000056'
                        }
                    },
                    {
                        'title': 'image processing',
                        'const': {
                            'name': 'image processing',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000057'
                        }
                    },
                    {
                        'title': 'text analysis',
                        'const': {
                            'name': 'text analysis',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000058'
                        }
                    },
                    {
                        'title': 'graph or network analysis',
                        'const': {
                            'name': 'graph or network analysis',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000059'
                        }
                    },
                    {
                        'title': 'machine learning',
                        'const': {
                            'name': 'machine learning',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000060'
                        }
                    },
                    {
                        'title': 'display',
                        'const': {
                            'name': 'display',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000062'
                        }
                    },
                    {
                        'title': 'animation',
                        'const': {
                            'name': 'animation',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000063'
                        }
                    },
                    {
                        'title': 'rendering',
                        'const': {
                            'name': 'rendering',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000064'
                        }
                    },
                    {
                        'title': 'document generation',
                        'const': {
                            'name': 'document generation',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000065'
                        }
                    },
                    {
                        'title': 'report rendering',
                        'const': {
                            'name': 'report rendering',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000066'
                        }
                    },
                    {
                        'title': 'data reporting',
                        'const': {
                            'name': 'data reporting',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000067'
                        }
                    },
                    {
                        'title': 'usage monitoring',
                        'const': {
                            'name': 'usage monitoring',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000068'
                        }
                    },
                    {
                        'title': 'version control',
                        'const': {
                            'name': 'version control',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000071'
                        }
                    },
                    {
                        'title': 'code optimization',
                        'const': {
                            'name': 'code optimization',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000072'
                        }
                    },
                    {
                        'title': 'code validation and testing',
                        'const': {
                            'name': 'code validation and testing',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000073'
                        }
                    },
                    {
                        'title': 'reproducibility support',
                        'const': {
                            'name': 'reproducibility support',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000100'
                        }
                    },
                    {
                        'title': 'provenance management',
                        'const': {
                            'name': 'provenance management',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000101'
                        }
                    },
                    {
                        'title': 'workflow design',
                        'const': {
                            'name': 'workflow design',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000102'
                        }
                    },
                    {
                        'title': 'workflow orchestration',
                        'const': {
                            'name': 'workflow orchestration',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000103'
                        }
                    },
                    {
                        'title': 'workflow execution',
                        'const': {
                            'name': 'workflow execution',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000104'
                        }
                    },
                    {
                        'title': 'long-term archiving',
                        'const': {
                            'name': 'long-term archiving',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000105'
                        }
                    },
                    {
                        'title': 'backup',
                        'const': {
                            'name': 'backup',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000106'
                        }
                    },
                    {
                        'title': 'data migration',
                        'const': {
                            'name': 'data migration',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000107'
                        }
                    },
                    {
                        'title': 'data transformation',
                        'const': {
                            'name': 'data transformation',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000310'
                        }
                    },
                    {
                        'title': 'user management',
                        'const': {
                            'name': 'user management',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/SFO_0000311'
                        }
                    }
                ]
            }
        },
        'runtimePlatform': {
            'title': 'runtime platform',
            'description': 'runtime environments for the application, uses controlled vocabulary http://cor.esipfed.org/ont/earthcube/RTE. content is crude at this point, string entries in array with platform name and URI; should be DefinedTerm',
            'type': 'array',
            'items': {'type': 'string'}
        },
        'programmingLanguage': {
            'title': 'Programming language',
            'description': 'list of names of programming languages, with versions thereof.  Ideally should be definedTerms with name and URI',
            'type': 'array',
            'items': {
                'type': 'object',
                'properties': {
                    '@type': {
                        'type': 'string',
                        'default': 'ComputerLanguage',
                        'const': 'ComputerLanguage'
                    },
                    'name': {'type': 'string'},
                    'identifier': {'type': 'string'}
                }
            }
        },
        'supportingData': {
            'title': 'Supporting input and output data formats',
            'description': 'critical bit for linking data and software; the input encodingFormat is used to match to the distribution encodingFormat for a dataset',
            'type': 'array',
            'items': {'$ref': '#/definitions/supportingData_type'}
        },
        'codeRepository': {
            'title': 'Code Repository',
            'description': 'name and URL location for repository in which code for an application or semantic resource is managed. Use schema:CreativeWork as kludge to implement simple labeled link.',
            'type': 'array',
            'items': {'$ref': '#/definitions/creativeWork_type'}
        },
        'installUrl': {
            'title': 'Software Install URL',
            'description': 'URL that locates an installer package or instructions for installing software for use in a local environment. Use schema:CreativeWork as kludge to implement simple labeled link.',
            'type': 'array',
            'items': {'$ref': '#/definitions/creativeWork_type'}
        },
        'potentialAction': {
            'title': 'Direct invocation of App on the web',
            'description': 'use schema.org Action to document url or url template and parameters to invoke the application through a web accessible location. At this point, schema is set up for online one action-- an HTTP Get that invokes the web application. The url template can have only one paramter 'contentURL' that will be the contentURL from a distribution for a dataset that has an encoding format matchign the supportingData input for this application.',
            'type': 'array',
            'items': {'$ref': '#/definitions/action_type'}
        },
        'url': {
            'title': 'URL to access the resource.',
            'description': 'For a Service instance, this is the URL of the Service endPoint. For DataSets, the recommended content is a link to a landing page with a description of the resource and other links to access it. Other important URLs have specific properties in this schema and should be populated there, e.g. subjectOf, installURL, codeRepository, service endpoint. For web applications, the url to invoke the app should be in potentialAction/Action/target/EntryPoint/urlTemplate.',
            'type': 'array',
            'items': {
/*this is not consistent with schema.org expected type 'string', but with LinkRole; use for labeled urls */
                'type': 'object',
                'properties': {
                    '@type': {
                        'type': 'string',
                        'default': 'LinkRole',
                        'const': 'LinkRole'
                    },
                    'url': {'type': 'string'},
                    'linkRelationship': {'type': 'string'}
                }
            }
        },
/*elements below here are schema.org extensions, some from other vocabularies, others defined in this schema.  These are defined inline here to work with the JSON forms user interface tools. keys that have a 'propertyID' property are mapped to ecrr defined properties implemented as additionalProperty/PropertyValue in the JSON schema for instance documents*/
    /* EXPOSED ADDITIONAL PROPERTIES
    These will need to be stored in the additionalProperty.
    But for defining the form, they are stored at the top level
    */
        'dct:conformsTo': {
            'title': 'Conforms to',
            'description': 'references to specifications that the described resource is in conformance with',
            'type': 'array',
            'items': {'$ref': '#/definitions/creativeWork_type'}
        },
        'dct:bibliographicCitation': {
            'title': 'Bibliographic Citation',
            'description': 'suggested citation text to reference the described resource in reference lists',
            'type': 'string'
        },

        'primaryPublication': {
            'type': 'array',
            'title': 'Primary publication(s)',
            'description': 'text citation to one or more publications about the resource; value is array of strings that are standard bibliographic citations; map to ecrro:ECRRO_0000600 in JSON-LD context',
            'propertyID': 'ecrro:ECRRO_0000600',
            'items': {'type': 'string'}
        },
        'profileOf': {
            'title': 'profile of',
            'propertyID': 'ecrro:ECRRO_0000501',
            'description': 'Links to base specifications that a specifcation resource profiles. Only applicable if resource type is specification.  Map key to ecrro:ECRRO_0000501 in JSON-LD context',
            'type': 'array',
            'items': {'$ref': '#/definitions/creativeWork_type'}
        },
        'communicationProtocol': {
            'title': 'Communication Protocol(s)',
            'propertyID': 'ecrro:ECRRO_0000502',
            'description': 'communication protocol(s) used. Use ECRR controlled vocabulary',
            'type': 'array',
            'items': {'$ref': '#/definitions/definedTerm_type'}
        },
        'registrationMetadata': {
            'title': 'registration metadata',
            'description': 'object to define metadata creator and update date',
            'propertyID': 'ecrro:ECRRO_0001301',
            '$ref': '#/definitions/metadataCreatorType'
        },

        'resourceMaturity': {
            'title': 'Maturity',
            'propertyID': 'ecrro:ECRRO_0000138',
            'type': 'object',
            'description': 'ECRR resource maturity status, from controlled vocabulary http://cor.esipfed.org/ont/earthcube/MTU',
            'properties': {
                
                    'oneOf': [
                        {
                            'title': 'Used in multiple places',
                            'const': {
                                'name': 'Used in multiple places',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/MTU_0000001'
                            }
                        },
                        {
                            'title': 'In production',
                            'const': {
                                'name': 'In production',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/MTU_0000002'
                            }
                        },
                        {
                            'title': 'Production ready',
                            'const': {
                                'name': 'Production ready',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/MTU_0000003'
                            }
                        },
                        {
                            'title': 'Beta or complete draft',
                            'const': {
                                'name': 'Beta or complete draft',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/MTU_0000004'
                            }
                        },
                        {
                            'title': 'Alpha or rough draft',
                            'const': {
                                'name': 'Alpha or rough draft',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/MTU_0000005'
                            }
                        },
                        {
                            'title': 'In development: <1 yr out',
                            'const': {
                                'name': 'In development: <1 yr out',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/MTU_0000006'
                            }
                        },
                        {
                            'title': 'In development: >1 yr out',
                            'const': {
                                'name': 'In development: >1 yr out',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/MTU_0000007'
                            }
                        },
                        {
                            'title': 'Planning',
                            'const': {
                                'name': 'Planning',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/MTU_0000008'
                            }
                        },
                        {
                            'title': 'Superseded',
                            'const': {
                                'name': 'Superseded',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/MTU_0000009'
                            }
                        },
                        {
                            'title': 'Not accessible',
                            'const': {
                                'name': 'Not accessible',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/MTU_0000010'
                            }
                        },
                        {
                            'title': 'Unknown',
                            'const': {
                                'name': 'Unknown',
                                '@type': 'DefinedTerm',
                                'identifier': 'http://cor.esipfed.org/ont/earthcube/MTU_0000011'
                            }
                        }
                    ]
               
            }
        },
        'expectedLifetime': {
            'type': 'object',
            'propertyID': 'ecrro:ECRRO_0000219',
            'description': 'Expected lifetime-- how long is it anticipated that the resource will be maintained and accessible online, from controlled vocabulary http://cor.esipfed.org/ont/earthcube/ELT',
            'properties': {
                'oneOf': [
                    {
                        'title': 'Long-term',
                        'const': {
                            'name': 'Long-term',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/ELT_0000001'
                        }
                    },
                    {
                        'title': 'More than 5 years',
                        'const': {
                            'name': 'More than 5 years',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/ELT_0000002'
                        }
                    },
                    {
                        'title': '1 - 5 years',
                        'const': {
                            'name': '1 - 5 years',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/ELT_0000003'
                        }
                    },
                    {
                        'title': 'Unknown',
                        'const': {
                            'name': 'Unknown',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/ELT_0000004'
                        }
                    },
                    {
                        'title': 'Not applicable',
                        'const': {
                            'name': 'Not applicable',
                            '@type': 'DefinedTerm',
                            'identifier': 'http://cor.esipfed.org/ont/earthcube/ELT_0000005'
                        }
                    }
                ]
            }
        },
        'stewardship': {
            'type': 'array',
            'items': {'$ref': '#/definitions/agent_type'},
            'title': 'Stewardship',
            'description': 'name of person or organization (agent) responsible for maintenance of the resource',
            'propertyID': 'ecrro:ECRRO_0000218'
        },
        'dependencies': {
            'type': 'array',
            'title': 'dependencies',
            'description': 'dependencies and their url',
            'propertyID': 'http://purl.obolibrary.org/obo/RO_0002502',
            'items': {'$ref': '#/definitions/creativeWork_type'}
        },
        'usage': {
            'type': 'object',
            'propertyID': 'ecrro:ECRRO_0000017',
            'title': 'Current Usage Level',
            'description': 'usage volume from controlled vocabulary at http://cor.esipfed.org/ont/earthcube/UBA',
            'properties': {'$ref': '#/definitions/definedTerm_type'}
        },
        'interfaceType': {
            'type': 'array',
            'items': {'$ref': '#/definitions/creativeWork_type'},
            'title': 'Interface type',
            'propertyID': 'ecrro:ECRRO_0000503',
            'description': 'title and identifier for specification of an interface'
        },
        'additionalProperty': {
            'type': 'array',
            'title': 'Other Properties',
            'description': 'EC resource registry properties that extend Schema.org are implemented as an array of PropertyValue inside a schema:additionalProperty in the JSON-LD that is loaded to the resource registry; this maintains compatibility with the schema.org validator',
            'items': {'$ref': '#/definitions/additionalProperty_type'}
        }
    },
    'required': [
        '@id',
        '@type',
        'name',
        'description',
        'license',
        'mainEntity'
    ],
    'definitions': {
        'agent_type': {
            'description': '{name (optional)identifier} pairs, typed either Person or Organization.  Other person or organization properties could be added',
            'type': 'object',
            'properties': {
                'name': {'type': 'string'},
                '@type': {
                    'type': 'string',
                    'enum': [
                        'Person',
                        'Organization'
                    ],
                    'default': 'Person'
                },
                'identifier': {'type': 'string'}
            },
            'required': [
                '@type',
                'name'
            ]
        },
        'grant_type': {
            'type': 'object',
            'title': 'Grant',
            'description': 'a Grant instrument',
            'properties': {
                '@type': {
                    'type': 'string',
                    'default': 'Grant',
                    'const': 'Grant'
                },
                'name': {'type': 'string'},
                'identifier': {'type': 'string'},
                'sponsor': {
                    'description': 'agent that provided financial or other kinds of support for development of resource',
// $ref not working. #/definitions/agent_type'
                    'type': 'object',
                    'properties': {
                        'name': {'type': 'string'},
                        '@type': {
                            'type': 'string',
                            'enum': [
                                'Person',
                                'Organization'
                            ],
                            'default': 'Person'
                        },
                        'identifier': {'type': 'string'}
                    },
                    'required': [
                        '@type',
                        'name'
                    ]
                },
                'funder': {
                    'description': 'agent that provided and adminsters financial support to create or maintain the resource',
// $ref not working. #/definitions/agent_type'
                    'type': 'object',
                    'properties': {
                        'name': {'type': 'string'},
                        '@type': {
                            'type': 'string',
                            'enum': [
                                'Person',
                                'Organization'
                            ],
                            'default': 'Person'
                        },
                        'identifier': {'type': 'string'}
                    },
                    'required': [
                        '@type',
                        'name'
                    ]
                }
            },
            'required': [
                '@type',
                'name'
            ]
        },
        'audience_type': {
            'type': 'object',
            'properties': {
                'audienceType': {'type': 'string'},
                '@type': {
                    'type': 'string',
                    'default': 'Audience',
                    'const': 'Audience'
                },
                'identifier': {'type': 'string'}
            },
            'required': [
                '@type',
                'audienceType'
            ]
        },
        'creativeWork_type': {
            'type': 'object',
            'properties': {
                'name': {'type': 'string'},
                '@type': {
                    'type': 'string',
                    'default': 'CreativeWork',
                    'const': 'CreativeWork'
                },
                'url': {'type': 'string'}
            }
        },
        'resourceTypes_type': {
            'type': 'object',
            'properties': {
                'name': {'type': 'string'},
                '@type': {
                    'type': 'string',
                    'default': 'CreativeWork',
                    'const': 'CreativeWork'
                },
                'url': {'type': 'string'}
            }
        },
        'definedTerm_type': {
            'type': 'object',
            'properties': {
                'name': {'type': 'string'},
                '@type': {
                    'type': 'string',
                    'default': 'DefinedTerm',
                    'const': 'DefinedTerm'
                },
                'identifier': {'type': 'string'}
            },
            'required': [
                'identifier',
                '@type',
                'name'
            ]
        },
        'supportingData_type': {
            'type': 'object',
            'properties': {
                'name': {'type': 'string'},
                '@type': {
                    'type': 'string',
                    'default': 'DataFeed',
                    'const': 'DataFeed'
                },
                'position': {
                    'type': 'string',
                    'enum': [
                        'input',
                        'output'
                    ],
                    'default': 'input'
                },
                'encodingFormat': {
                    'title': 'file format and profile for input or output data to/from the application (consistent with value of 'positition' element)',
                    'description': 'mime type with 'type' or 'application' extension that indicates specific application or profile compatibility of file content; values should come from the 'use' column in the registry at https://github.com/earthcube/GeoCODES-Metadata/blob/main/resources/encodingFormat.csv',
                    'type': 'array',
                    'items': {'type': 'string'}
                }
            }
        },
        'action_type': {
            'type': 'object',
            'properties': {
                '@type': {
                    'type': 'string',
                    'default': 'Action',
                    'const': 'Action'
                },
                'name': {
                    'type': 'string',
                    'default': 'Execute web application'
                },
                'target': {
                    'type': 'object',
                    'properties': {
                        '@type': {
                            'type': 'string',
                            'default': 'EntryPoint',
                            'const': 'EntryPoint'
                        },
                        'description': {
                            'type': 'string',
                            'default': 'Open software on the web'
                        },
                        'urlTemplate': {'type': 'string'},
                        'httpMethod': {
                            'title': 'HTTP Method',
                            'type': 'array',
                            'items': {
                                'type': 'string',
                                'default': 'GET',
                                'enum': [
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
        'citationType': {
            'title': 'Bibliographic citation as a string',
            'type': 'object',
            'properties': {
                'name': {'type': 'string'},
                '@type': {
                    'type': 'string',
                    'default': 'PropertyValue',
                    'const': 'PropertyValue'
                },
                'propertyID': {
                    'type': 'string',
                    'default': 'dct:bibliographicCitation',
                    'const': 'dct:bibliographicCitation'
                },
                'value': {'type': 'string'}
            }
        },
        'metadataCreatorType': {
            'type': 'object',
            'description': 'metadata contributor information',
            'properties': {
                '@type': {
                    'type': 'string',
                    'default': 'PropertyValue',
                    'const': 'PropertyValue'
                },
                'propertyID': {
                    'type': 'string',
                    'default': 'ecrro:ECRRO_0001301',
                    'const': 'ecrro:ECRRO_0001301'
                },
                'name': {
                    'type': 'string',
                    'default': 'registration metadata'
                },
                'value': {
                    'type': 'object',
                    'properties': {
                        '@type': {
                            'type': 'string',
                            'default': 'StructuredValue',
                            'const': 'StructuredValue'
                        },
                        'additionalType': {
                            'type': 'string',
                            'default': 'ecrro:ECRRO_0000156',
                            'const': 'ecrro:ECRRO_0000156'
                        },
                        'contributor': {
                            'type': 'object',
                            'properties': {
                                '@type': {
                                    'type': 'string',
                                    'default': 'Person',
                                    'const': 'Person'
                                },
                                'name': {'type': 'string'},
                                'identifier': {'type': 'string'}
                            }
                        },
                        'datePublished': {
                            'type': 'string',
                            'format': 'date-time'
                        }
                    }
                }
            }
        },
        'additionalProperty_type': {
            'anyOf': [
                {
                    'title': 'Bibliographic citation',
                    'type': 'object',
                    'description': 'suggested citation text to reference the described resource in reference lists',
                    'properties': {
                        '@type': {
                            'type': 'string',
                            'default': 'PropertyValue',
                            'const': 'PropertyValue'
                        },
                        'propertyID': {
                            'type': 'string',
                            'default': 'dct:bibliographicCitation',
                            'const': 'dct:bibliographicCitation'
                        },
                        'name': {'type': 'string'},
                        'value': {'type': 'string'}
                    }
                },
                {
                    'title': 'Primary publication',
                    'type': 'object',
                    'description': 'primary publication-- a text citation to one or more publications about the resource; separated by pipe ('|') characters',
                    'properties': {
                        '@type': {
                            'type': 'string',
                            'default': 'PropertyValue',
                            'const': 'PropertyValue'
                        },
                        'propertyID': {
                            'type': 'string',
                            'default': 'ecrro:ECRRO_0000600',
                            'const': 'ecrro:ECRRO_0000600'
                        },
                        'name': {
                            'type': 'string',
                            'default': 'primary publication'
                        },
                        'value': {'type': 'string'}
                    }
                },
                {
                    'title': 'Interface type',
                    'type': 'object',
                    'description': 'Link to specification defining input and output file formats and information models, and protocol for requesting operations',
                    'properties': {
                        '@type': {
                            'type': 'string',
                            'default': 'PropertyValue',
                            'const': 'PropertyValue'
                        },
                        'propertyID': {
                            'type': 'string',
                            'default': 'ecrro:ECRRO_0000503',
                            'const': 'ecrro:ECRRO_0000503'
                        },
                        'name': {'type': 'string'},
                        'value': {
                            'type': 'array',
                            'items': {'$ref': '#/definitions/creativeWork_type'}
                        }
                    }
                },
                {
                    'title': 'Dependencies',
                    'type': 'object',
                    'description': 'dependencies and their url',
                    'properties': {
                        '@type': {
                            'type': 'string',
                            'default': 'PropertyValue',
                            'const': 'PropertyValue'
                        },
                        'propertyID': {
                            'type': 'string',
                            'default': 'http://purl.obolibrary.org/obo/RO_0002502',
                            'const': 'http://purl.obolibrary.org/obo/RO_0002502'
                        },
                        'name': {'type': 'string'},
                        'value': {
                            'type': 'array',
                            'items': {'$ref': '#/definitions/creativeWork_type'}
                        }
                    }
                },
                {
                    'title': 'Resource maturity status',
                    'type': 'object',
                    'description': 'ECRR resource maturity status, from controlled vocabulary http://cor.esipfed.org/ont/earthcube/MTU',
                    'properties': {
                        '@type': {
                            'type': 'string',
                            'default': 'PropertyValue',
                            'const': 'PropertyValue'
                        },
                        'propertyID': {
                            'type': 'string',
                            'default': 'ecrro:ECRRO_0000138',
                            'const': 'ecrro:ECRRO_0000138'
                        },
                        'name': {
                            'type': 'string',
                            'default': 'has maturity state'
                        },
                        'value': {'$ref': '#/definitions/definedTerm_type'}
                    }
                },
                {
                    'title': 'Expected lifetime',
                    'type': 'object',
                    'description': 'Time duration it is anticipated that the resource will be maintained and accessible online, from controlled vocabulary http://cor.esipfed.org/ont/earthcube/ELT',
                    'properties': {
                        '@type': {
                            'type': 'string',
                            'default': 'PropertyValue',
                            'const': 'PropertyValue'
                        },
                        'propertyID': {
                            'type': 'string',
                            'default': 'ecrro:ECRRO_0000219',
                            'const': 'ecrro:ECRRO_0000219'
                        },
                        'name': {
                            'type': 'string',
                            'default': 'expected lifetime'
                        },
                        'value': {'$ref': '#/definitions/definedTerm_type'}
                    }
                },
                {
                    'title': 'Usage volume',
                    'type': 'object',
                    'description': 'usage volume from controlled vocabulary at http://cor.esipfed.org/ont/earthcube/UBA',
                    'properties': {
                        '@type': {
                            'type': 'string',
                            'default': 'PropertyValue',
                            'const': 'PropertyValue'
                        },
                        'propertyID': {
                            'type': 'string',
                            'default': 'ecrro:ECRRO_0000017',
                            'const': 'ecrro:ECRRO_0000017'
                        },
                        'name': {
                            'type': 'string',
                            'default': 'Usage'
                        },
                        'value': {'$ref': '#/definitions/definedTerm_type'}
                    }
                },
                {
                    'type': 'object',
                    'description': 'stewardship: name of person or organization responsible for maintenance of the resource',
                    'properties': {
                        '@type': {
                            'type': 'string',
                            'default': 'PropertyValue',
                            'const': 'PropertyValue'
                        },
                        'propertyID': {
                            'type': 'string',
                            'default': 'ecrro:ECRRO_0000218',
                            'const': 'ecrro:ECRRO_0000218'
                        },
                        'name': {
                            'type': 'string',
                            'default': 'Stewardship'
                        },
                        'value': {
                            'type': 'array',
                            'items': {'$ref': '#/definitions/agent_type'}
                        }
                    }
                },
                {
                    'type': 'object',
                    'description': 'metadata contributor information',
                    'properties': {
                        '@type': {
                            'type': 'string',
                            'default': 'PropertyValue',
                            'const': 'PropertyValue'
                        },
                        'propertyID': {
                            'type': 'string',
                            'default': 'ecrro:ECRRO_0001301',
                            'const': 'ecrro:ECRRO_0001301'
                        },
                        'name': {
                            'type': 'string',
                            'default': 'registration metadata'
                        },
                        'value': {
                            'type': 'object',
                            'properties': {
                                '@type': {
                                    'type': 'string',
                                    'default': 'StructuredValue',
                                    'const': 'StructuredValue'
                                },
                                'additionalType': {
                                    'type': 'string',
                                    'default': 'ecrro:ECRRO_0000156',
                                    'const': 'ecrro:ECRRO_0000156'
                                },
                                'contributor': {
                                    'type': 'object',
                                    'properties': {
                                        '@type': {
                                            'type': 'string',
                                            'default': 'Person',
                                            'const': 'Person'
                                        },
                                        'name': {'type': 'string'},
                                        'identifier': {'type': 'string'}
                                    }
                                },
                                'datePublished': {'type': 'string'}
                            }
                        }
                    }
                }
            ]
        }
    }
}
}