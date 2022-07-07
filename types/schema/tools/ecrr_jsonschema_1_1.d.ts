declare namespace jsonschema {
    const $comment: string;
    const type: string;
    const title: string;
    const description: string;
    const properties: {
        '@id': {
            type: string;
            description: string;
        };
        '@type': {
            type: string;
            description: string;
            minItems: number;
            items: {
                enum: string[];
            };
            default: string;
        };
        name: {
            type: string;
            description: string;
        };
        alternateName: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
            };
        };
        subjectOf: {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        identifier: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
            };
            $comment: string;
        };
        description: {
            type: string;
            description: string;
        };
        datePublished: {
            type: string;
            format: string;
        };
        creator: {
            title: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        editor: {
            title: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        contributor: {
            title: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        publisher: {
            $ref: string;
        };
        developer: {
            type: string;
            items: {
                $ref: string;
            };
        };
        stewardship: {
            $ref: string;
        };
        'ecrro:ECRRO_0000600': {
            type: string;
            description: string;
            properties: {
                '@type': {
                    type: string;
                    const: string;
                    default: string;
                };
                propertyID: {
                    type: string;
                    const: string;
                    default: string;
                };
                name: {
                    type: string;
                    default: string;
                };
                value: {
                    type: string;
                };
            };
        };
        keywords: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        license: {
            title: string;
            type: string;
            uniqueItems: boolean;
            items: {};
        };
        version: {
            type: string;
            description: string;
        };
        funding: {
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        audience: {
            title: string;
            description: string;
            type: string;
            items: {};
        };
        about: {
            title: string;
            type: string;
            uniqueItems: boolean;
            items: {};
        };
        contentType: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                    };
                    identifier: {
                        type: string;
                    };
                };
            };
        };
        isRelatedTo: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
                properties: {
                    '@type': {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                    url: {
                        type: string;
                    };
                };
            };
        };
        mainEntity: {
            title: string;
            description: string;
            items: {};
        };
        encodingFormat: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
            };
        };
        isBasedOn: {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        'dct:conformsTo': {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        'eccro:ECRRO_0000501': {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        'ecrro:ECRRO_0000502': {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        applicationCategory: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
            };
        };
        runtimePlatform: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
            };
        };
        programmingLanguage: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                    };
                    identifier: {
                        type: string;
                    };
                };
            };
        };
        supportingData: {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        codeRepository: {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        installURL: {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        potentialAction: {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        url: {
            title: string;
            description: string;
            type: string;
            items: {
                $comment: string;
                type: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    url: {
                        type: string;
                    };
                    linkRelationship: {
                        type: string;
                    };
                };
            };
        };
        additionalProperty: {
            type: string;
            title: string;
            description: string;
            items: {
                $ref: string;
            };
        };
        'ecrro:ECRRO_0001301': {
            $ref: string;
        };
        'dc:BibliographicCitation': {
            title: string;
            $ref: string;
        };
        'ecrro:ECRRO_0000138': {
            title: string;
            type: string;
            description: string;
            properties: {
                value: {
                    oneOf: any[];
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                    const: string;
                };
                name: {
                    type: string;
                    default: string;
                    readonly: boolean;
                };
            };
        };
        'ecrro:ECRRO_0000219': {
            type: string;
            description: string;
            properties: {
                name: {
                    type: string;
                    default: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                    const: string;
                };
                value: {
                    type: string;
                    properties: {
                        name: {
                            type: string;
                        };
                        '@type': {
                            type: string;
                            default: string;
                            const: string;
                        };
                        identifier: {
                            type: string;
                        };
                    };
                    required: string[];
                };
            };
        };
        'ecrro:ECRRO_0000218': {
            type: string;
            description: string;
            properties: {
                '@type': {
                    type: string;
                    const: string;
                    default: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                    const: string;
                };
                name: {
                    type: string;
                    default: string;
                    const: string;
                };
                value: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
            };
        };
        dependencies: {
            type: string;
            description: string;
            properties: {
                name: {
                    type: string;
                };
                '@type': {
                    type: string;
                    const: string;
                };
                propertyID: {
                    type: string;
                    const: string;
                };
                value: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
            };
        };
        'ecrro:ECRRO_0000017': {
            type: string;
            title: string;
            description: string;
            properties: {
                name: {
                    type: string;
                    default: string;
                    const: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                    const: string;
                };
                value: {
                    $ref: string;
                };
            };
        };
        'ecrro:ECRRO_0000503': {
            type: string;
            description: string;
            properties: {
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                    const: string;
                };
                name: {
                    type: string;
                };
                value: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
            };
        };
    };
    const required: string[];
    namespace definitions {
        namespace identifier_type {
            const type_1: string;
            export { type_1 as type };
            const title_1: string;
            export { title_1 as title };
            const properties_1: {
                value: {
                    type: string;
                };
                '@type': {
                    type: string;
                    const: string;
                    default: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                };
                name: {
                    type: string;
                    default: string;
                };
            };
            export { properties_1 as properties };
        }
        namespace agent_type {
            const description_1: string;
            export { description_1 as description };
            const type_2: string;
            export { type_2 as type };
            const properties_2: {
                name: {
                    type: string;
                };
                '@type': {
                    type: string;
                    enum: string[];
                    default: string;
                };
                identifier: {
                    type: string;
                };
            };
            export { properties_2 as properties };
            const required_1: string[];
            export { required_1 as required };
        }
        namespace grant_type {
            const type_3: string;
            export { type_3 as type };
            const title_2: string;
            export { title_2 as title };
            const description_2: string;
            export { description_2 as description };
            const properties_3: {
                "@type": {
                    type: string;
                    default: string;
                    const: string;
                };
                name: {
                    type: string;
                };
                identifier: {
                    type: string;
                };
                sponsor: {
                    description: string;
                    $comment: string;
                    type: string;
                    properties: {
                        name: {
                            type: string;
                        };
                        '@type': {
                            type: string;
                            enum: string[];
                            default: string;
                        };
                        identifier: {
                            type: string;
                        };
                    };
                    required: string[];
                };
                funder: {
                    description: string;
                    $comment: string;
                    type: string;
                    properties: {
                        name: {
                            type: string;
                        };
                        '@type': {
                            type: string;
                            enum: string[];
                            default: string;
                        };
                        identifier: {
                            type: string;
                        };
                    };
                    required: string[];
                };
            };
            export { properties_3 as properties };
            const required_2: string[];
            export { required_2 as required };
        }
        namespace audience_type {
            const type_4: string;
            export { type_4 as type };
            const properties_4: {
                audienceType: {
                    type: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                identifier: {
                    type: string;
                };
            };
            export { properties_4 as properties };
            const required_3: string[];
            export { required_3 as required };
        }
        namespace creativeWork_type {
            const type_5: string;
            export { type_5 as type };
            const properties_5: {
                name: {
                    type: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                url: {
                    type: string;
                };
            };
            export { properties_5 as properties };
        }
        namespace resourceTypes_type {
            const type_6: string;
            export { type_6 as type };
            const properties_6: {
                name: {
                    type: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                url: {
                    type: string;
                };
            };
            export { properties_6 as properties };
        }
        namespace definedTerm_type {
            const type_7: string;
            export { type_7 as type };
            const properties_7: {
                name: {
                    type: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                identifier: {
                    type: string;
                };
            };
            export { properties_7 as properties };
            const required_4: string[];
            export { required_4 as required };
        }
        namespace supportingData_type {
            const type_8: string;
            export { type_8 as type };
            const properties_8: {
                name: {
                    type: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                position: {
                    type: string;
                    enum: string[];
                    default: string;
                };
                encodingFormat: {
                    title: string;
                    description: string;
                    type: string;
                    items: {
                        type: string;
                    };
                };
            };
            export { properties_8 as properties };
        }
        namespace action_type {
            const type_9: string;
            export { type_9 as type };
            const properties_9: {
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                name: {
                    type: string;
                    default: string;
                };
                target: {
                    type: string;
                    properties: {
                        '@type': {
                            type: string;
                            default: string;
                            const: string;
                        };
                        description: {
                            type: string;
                            default: string;
                        };
                        urlTemplate: {
                            type: string;
                        };
                        httpMethod: {
                            title: string;
                            type: string;
                            items: {
                                type: string;
                                default: string;
                                enum: string[];
                            };
                        };
                    };
                };
            };
            export { properties_9 as properties };
        }
        namespace citationType {
            const type_10: string;
            export { type_10 as type };
            const properties_10: {
                name: {
                    type: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                    const: string;
                };
                value: {
                    type: string;
                };
            };
            export { properties_10 as properties };
        }
        namespace metadataCreatorType {
            const type_11: string;
            export { type_11 as type };
            const description_3: string;
            export { description_3 as description };
            const properties_11: {
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                    const: string;
                };
                name: {
                    type: string;
                    default: string;
                };
                value: {
                    type: string;
                    properties: {
                        '@type': {
                            type: string;
                            default: string;
                            const: string;
                        };
                        additionalType: {
                            type: string;
                            default: string;
                            const: string;
                        };
                        contributor: {
                            type: string;
                            properties: {
                                '@type': {
                                    type: string;
                                    default: string;
                                    const: string;
                                };
                                name: {
                                    type: string;
                                };
                                identifier: {
                                    type: string;
                                };
                            };
                        };
                        datePublished: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
            export { properties_11 as properties };
        }
        namespace additionalProperty_type {
            const anyOf: ({
                type: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    propertyID: {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                        default?: undefined;
                    };
                    value: {
                        type: string;
                        items?: undefined;
                        $ref?: undefined;
                        properties?: undefined;
                    };
                };
                description?: undefined;
            } | {
                type: string;
                description: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    propertyID: {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                        default?: undefined;
                    };
                    value: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                        $ref?: undefined;
                        properties?: undefined;
                    };
                };
            } | {
                type: string;
                description: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    propertyID: {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                        default: string;
                    };
                    value: {
                        $ref: string;
                        type?: undefined;
                        items?: undefined;
                        properties?: undefined;
                    };
                };
            } | {
                type: string;
                description: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    propertyID: {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                        default: string;
                    };
                    value: {
                        type: string;
                        items?: undefined;
                        $ref?: undefined;
                        properties?: undefined;
                    };
                };
            } | {
                type: string;
                description: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    propertyID: {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                        default: string;
                    };
                    value: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                        $ref?: undefined;
                        properties?: undefined;
                    };
                };
            } | {
                type: string;
                description: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    propertyID: {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                        default: string;
                    };
                    value: {
                        type: string;
                        properties: {
                            '@type': {
                                type: string;
                                default: string;
                                const: string;
                            };
                            additionalType: {
                                type: string;
                                default: string;
                                const: string;
                            };
                            contributor: {
                                type: string;
                                properties: {
                                    '@type': {
                                        type: string;
                                        default: string;
                                        const: string;
                                    };
                                    name: {
                                        type: string;
                                    };
                                    identifier: {
                                        type: string;
                                    };
                                };
                            };
                            datePublished: {
                                type: string;
                            };
                        };
                        items?: undefined;
                        $ref?: undefined;
                    };
                };
            })[];
        }
    }
}
declare function withEnum(): {
    $comment: string;
    type: string;
    title: string;
    description: string;
    properties: {
        '@id': {
            type: string;
            description: string;
        };
        '@type': {
            type: string;
            description: string;
            minItems: number;
            items: {
                enum: string[];
            };
            default: string;
        };
        name: {
            type: string;
            description: string;
        };
        alternateName: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
            };
        };
        subjectOf: {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        identifier: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
            };
            $comment: string;
        };
        description: {
            type: string;
            description: string;
        };
        datePublished: {
            type: string;
            format: string;
        };
        creator: {
            title: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        editor: {
            title: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        contributor: {
            title: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        publisher: {
            $ref: string;
        };
        developer: {
            type: string;
            items: {
                $ref: string;
            };
        };
        stewardship: {
            $ref: string;
        };
        'ecrro:ECRRO_0000600': {
            type: string;
            description: string;
            properties: {
                '@type': {
                    type: string;
                    const: string;
                    default: string;
                };
                propertyID: {
                    type: string;
                    const: string;
                    default: string;
                };
                name: {
                    type: string;
                    default: string;
                };
                value: {
                    type: string;
                };
            };
        };
        keywords: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        license: {
            title: string;
            type: string;
            uniqueItems: boolean;
            items: {};
        };
        version: {
            type: string;
            description: string;
        };
        funding: {
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        audience: {
            title: string;
            description: string;
            type: string;
            items: {};
        };
        about: {
            title: string;
            type: string;
            uniqueItems: boolean;
            items: {};
        };
        contentType: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                    };
                    identifier: {
                        type: string;
                    };
                };
            };
        };
        isRelatedTo: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
                properties: {
                    '@type': {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                    url: {
                        type: string;
                    };
                };
            };
        };
        mainEntity: {
            title: string;
            description: string;
            items: {};
        };
        encodingFormat: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
            };
        };
        isBasedOn: {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        'dct:conformsTo': {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        'eccro:ECRRO_0000501': {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        'ecrro:ECRRO_0000502': {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        applicationCategory: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
            };
        };
        runtimePlatform: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
            };
        };
        programmingLanguage: {
            title: string;
            description: string;
            type: string;
            items: {
                type: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                    };
                    identifier: {
                        type: string;
                    };
                };
            };
        };
        supportingData: {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        codeRepository: {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        installURL: {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        potentialAction: {
            title: string;
            description: string;
            type: string;
            items: {
                $ref: string;
            };
        };
        url: {
            title: string;
            description: string;
            type: string;
            items: {
                $comment: string;
                type: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    url: {
                        type: string;
                    };
                    linkRelationship: {
                        type: string;
                    };
                };
            };
        };
        additionalProperty: {
            type: string;
            title: string;
            description: string;
            items: {
                $ref: string;
            };
        };
        'ecrro:ECRRO_0001301': {
            $ref: string;
        };
        'dc:BibliographicCitation': {
            title: string;
            $ref: string;
        };
        'ecrro:ECRRO_0000138': {
            title: string;
            type: string;
            description: string;
            properties: {
                value: {
                    oneOf: any[];
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                    const: string;
                };
                name: {
                    type: string;
                    default: string;
                    readonly: boolean;
                };
            };
        };
        'ecrro:ECRRO_0000219': {
            type: string;
            description: string;
            properties: {
                name: {
                    type: string;
                    default: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                    const: string;
                };
                value: {
                    type: string;
                    properties: {
                        name: {
                            type: string;
                        };
                        '@type': {
                            type: string;
                            default: string;
                            const: string;
                        };
                        identifier: {
                            type: string;
                        };
                    };
                    required: string[];
                };
            };
        };
        'ecrro:ECRRO_0000218': {
            type: string;
            description: string;
            properties: {
                '@type': {
                    type: string;
                    const: string;
                    default: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                    const: string;
                };
                name: {
                    type: string;
                    default: string;
                    const: string;
                };
                value: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
            };
        };
        dependencies: {
            type: string;
            description: string;
            properties: {
                name: {
                    type: string;
                };
                '@type': {
                    type: string;
                    const: string;
                };
                propertyID: {
                    type: string;
                    const: string;
                };
                value: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
            };
        };
        'ecrro:ECRRO_0000017': {
            type: string;
            title: string;
            description: string;
            properties: {
                name: {
                    type: string;
                    default: string;
                    const: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                    const: string;
                };
                value: {
                    $ref: string;
                };
            };
        };
        'ecrro:ECRRO_0000503': {
            type: string;
            description: string;
            properties: {
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                    const: string;
                };
                name: {
                    type: string;
                };
                value: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
            };
        };
    };
    required: string[];
    definitions: {
        identifier_type: {
            type: string;
            title: string;
            properties: {
                value: {
                    type: string;
                };
                '@type': {
                    type: string;
                    const: string;
                    default: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                };
                name: {
                    type: string;
                    default: string;
                };
            };
        };
        agent_type: {
            description: string;
            type: string;
            properties: {
                name: {
                    type: string;
                };
                '@type': {
                    type: string;
                    enum: string[];
                    default: string;
                };
                identifier: {
                    type: string;
                };
            };
            required: string[];
        };
        grant_type: {
            type: string;
            title: string;
            description: string;
            properties: {
                "@type": {
                    type: string;
                    default: string;
                    const: string;
                };
                name: {
                    type: string;
                };
                identifier: {
                    type: string;
                };
                sponsor: {
                    description: string;
                    $comment: string;
                    type: string;
                    properties: {
                        name: {
                            type: string;
                        };
                        '@type': {
                            type: string;
                            enum: string[];
                            default: string;
                        };
                        identifier: {
                            type: string;
                        };
                    };
                    required: string[];
                };
                funder: {
                    description: string;
                    $comment: string;
                    type: string;
                    properties: {
                        name: {
                            type: string;
                        };
                        '@type': {
                            type: string;
                            enum: string[];
                            default: string;
                        };
                        identifier: {
                            type: string;
                        };
                    };
                    required: string[];
                };
            };
            required: string[];
        };
        audience_type: {
            type: string;
            properties: {
                audienceType: {
                    type: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                identifier: {
                    type: string;
                };
            };
            required: string[];
        };
        creativeWork_type: {
            type: string;
            properties: {
                name: {
                    type: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                url: {
                    type: string;
                };
            };
        };
        resourceTypes_type: {
            type: string;
            properties: {
                name: {
                    type: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                url: {
                    type: string;
                };
            };
        };
        definedTerm_type: {
            type: string;
            properties: {
                name: {
                    type: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                identifier: {
                    type: string;
                };
            };
            required: string[];
        };
        supportingData_type: {
            type: string;
            properties: {
                name: {
                    type: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                position: {
                    type: string;
                    enum: string[];
                    default: string;
                };
                encodingFormat: {
                    title: string;
                    description: string;
                    type: string;
                    items: {
                        type: string;
                    };
                };
            };
        };
        action_type: {
            type: string;
            properties: {
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                name: {
                    type: string;
                    default: string;
                };
                target: {
                    type: string;
                    properties: {
                        '@type': {
                            type: string;
                            default: string;
                            const: string;
                        };
                        description: {
                            type: string;
                            default: string;
                        };
                        urlTemplate: {
                            type: string;
                        };
                        httpMethod: {
                            title: string;
                            type: string;
                            items: {
                                type: string;
                                default: string;
                                enum: string[];
                            };
                        };
                    };
                };
            };
        };
        citationType: {
            type: string;
            properties: {
                name: {
                    type: string;
                };
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                    const: string;
                };
                value: {
                    type: string;
                };
            };
        };
        metadataCreatorType: {
            type: string;
            description: string;
            properties: {
                '@type': {
                    type: string;
                    default: string;
                    const: string;
                };
                propertyID: {
                    type: string;
                    default: string;
                    const: string;
                };
                name: {
                    type: string;
                    default: string;
                };
                value: {
                    type: string;
                    properties: {
                        '@type': {
                            type: string;
                            default: string;
                            const: string;
                        };
                        additionalType: {
                            type: string;
                            default: string;
                            const: string;
                        };
                        contributor: {
                            type: string;
                            properties: {
                                '@type': {
                                    type: string;
                                    default: string;
                                    const: string;
                                };
                                name: {
                                    type: string;
                                };
                                identifier: {
                                    type: string;
                                };
                            };
                        };
                        datePublished: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
        };
        additionalProperty_type: {
            anyOf: ({
                type: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    propertyID: {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                        default?: undefined;
                    };
                    value: {
                        type: string;
                        items?: undefined;
                        $ref?: undefined;
                        properties?: undefined;
                    };
                };
                description?: undefined;
            } | {
                type: string;
                description: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    propertyID: {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                        default?: undefined;
                    };
                    value: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                        $ref?: undefined;
                        properties?: undefined;
                    };
                };
            } | {
                type: string;
                description: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    propertyID: {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                        default: string;
                    };
                    value: {
                        $ref: string;
                        type?: undefined;
                        items?: undefined;
                        properties?: undefined;
                    };
                };
            } | {
                type: string;
                description: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    propertyID: {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                        default: string;
                    };
                    value: {
                        type: string;
                        items?: undefined;
                        $ref?: undefined;
                        properties?: undefined;
                    };
                };
            } | {
                type: string;
                description: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    propertyID: {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                        default: string;
                    };
                    value: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                        $ref?: undefined;
                        properties?: undefined;
                    };
                };
            } | {
                type: string;
                description: string;
                properties: {
                    '@type': {
                        type: string;
                        default: string;
                        const: string;
                    };
                    propertyID: {
                        type: string;
                        default: string;
                        const: string;
                    };
                    name: {
                        type: string;
                        default: string;
                    };
                    value: {
                        type: string;
                        properties: {
                            '@type': {
                                type: string;
                                default: string;
                                const: string;
                            };
                            additionalType: {
                                type: string;
                                default: string;
                                const: string;
                            };
                            contributor: {
                                type: string;
                                properties: {
                                    '@type': {
                                        type: string;
                                        default: string;
                                        const: string;
                                    };
                                    name: {
                                        type: string;
                                    };
                                    identifier: {
                                        type: string;
                                    };
                                };
                            };
                            datePublished: {
                                type: string;
                            };
                        };
                        items?: undefined;
                        $ref?: undefined;
                    };
                };
            })[];
        };
    };
};
export const flattenList: ({
    flattened: string;
    flattenTo: string;
    propertyID?: undefined;
} | {
    flattened: string;
    propertyID: string;
    flattenTo: string;
})[];
export { jsonschema as default, withEnum as schemaWithEnum };
