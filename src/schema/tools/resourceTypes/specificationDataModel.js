const resourceType = {
    type: 'Group',
    label: 'Data Model Specification',
    rule: {
        effect: 'SHOW',
        condition: {
            scope: '#/properties/mainEntity/',
            schema: {
                //const: 'Specification'
                "const": [
                    {
                        "name":
                        "Data Model",
                        "@type":
                        "CreativeWork",
                        "url":
                        "http://cor.esipfed.org/ont/earthcube/ECRRO_0000204"
                    }
                ]
            }
        }
    },


    elements: [
        {
            type: 'Label',
            text: 'A specification of an abstract model that organizes elements of data and standardizes how they relate to one another and to the properties of real-world entities.'
        },

        {
            label: 'File Format: how is the specification represented digitally',
            type: 'Control',
            scope: '#/properties/encodingFormat',
            options: {
                showUnfocusedDescription: true
            }
        },
        {
            type: 'Label',
            text: 'If the data model is a profile based on another model, please choose the -Data Model Convention- resource type'
        }
    ]
};

export default resourceType;
