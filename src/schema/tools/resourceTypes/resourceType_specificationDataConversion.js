const resourceType = {
  type: 'Group',
  label: 'Specification of mapping between data formats',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
        //const: 'Specification'
         "const": [
                  {
                  "name":
                  "Data Conversion",
                  "@type":
                  "CreativeWork",
                  "url":
                  "http://cor.esipfed.org/ont/earthcube/SPKT_0000008"
                  }
                  ]
      }
    }
  },


  elements: [
    {
      type: 'Label',
      text: 'Specification for converting computer data from one format to another'
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
          label: 'Link to base specification that this conversion specification extends or restricts',
          type: 'Control',
          scope: '#/properties/eccro:ECRRO_0000501',
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
        }
      ]
    };

export default resourceType;
