const resourceType = {
  type: 'Group',
  label: 'Semantic Resource options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
       // const: 'Semantic Resource'
     //  https://github.com/eclipsesource/jsonforms/issues/1141
         "enum":[
                [
                  {
                  "name":
                  "Semantic Resource",
                  "@type": "DefinedTerm",
                    "identifier": "http://cor.esipfed.org/ont/earthcube/ECRRO_0000210"
                  }
                  ],
                  [{
                  "@type": "CreativeWork",
                  "url": "http://cor.esipfed.org/ont/earthcube/ECRRO_0000210",
                  "name": "Semantic Resource"
                  },{
                  "@type": "CreativeWork",
                  "url": "http://cor.esipfed.org/ont/earthcube/srt_0000003",
                  "name": "Ontology"
                  }
                  ]
             ]
//               "oneOf":[
//                              {
//                                  "scope": "#",
//                                   "schema": {
//                                     "const": [
//                                                {
//                                                "name":
//                                                "Semantic Resource",
//                                                "@type":
//                                                "CreativeWork",
//                                                "url":
//                                                "http://cor.esipfed.org/ont/earthcube/ECRRO_0000210"
//                                                }
//                                            ]
//                                     }
//
//                                 },
//                                {
//                                "scope": "#",
//                                 "schema": {
//                                   "const": [{
//                                        "@type": "CreativeWork",
//                                        "url": "http://cor.esipfed.org/ont/earthcube/ECRRO_0000210",
//                                        "name": "Semantic Resource"
//                                        },{
//                                        "@type": "CreativeWork",
//                                        "url": "http://cor.esipfed.org/ont/earthcube/srt_0000003",
//                                        "name": "Ontology"
//                                        }
//                                      ]
//                                      }}
//                           ]
      }
    }
  },
  elements: [
    {
      type: 'Label',
      text: 'Semantic Resource Type'
    },
    {
      label: 'Semantic  Resource Type',
      type: 'Control',
      scope: '#/properties/dct:conformsTo',
      options: {
        showUnfocusedDescription: true,
        detail: {
          type: 'HorizontalLayout',
          elements: [
            { label: 'name', type: 'Control', scope: '#/properties/name' },
            { label: 'url', type: 'Control', scope: '#/properties/url' }
          ]
        }
      }
    },
    {
      type: 'ShowGroup',
      label: 'add Resourse Details',
      elements: [
        {
          type: 'Label',
          text: 'Model Language'
        },
        {
          label: 'Model Language',
          type: 'Control',
          scope: '#/properties/programmingLanguage',
          options: {
            showUnfocusedDescription: true
          }
        },
        {
          type: 'Label',
          text: 'Specification Type'
        },
        {
          label: 'encodingFormat',
          type: 'Control',
          scope: '#/properties/encodingFormat',
          options: {
            showUnfocusedDescription: true
          }
        }
      ]
    }
  ]
};

export default resourceType;
