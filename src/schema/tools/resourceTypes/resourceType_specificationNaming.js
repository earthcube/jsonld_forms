const resourceType = {
  type: 'Group',
  label: 'Naming convention',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
        //const: 'Specification'
         "const": [
                  {
                  "name":
                  "Naming Convention",
                  "@type":
                  "CreativeWork",
                  "url":
                  "http://cor.esipfed.org/ont/earthcube/SPKT_0000002"
                  }
                  ]
      }
    }
  },

  //need to pick specific specification type.



  elements: [
    {
      type: 'Label',
      text: 'Specification of a generally agreed to scheme for naming things, e.g. files, samples, software...'
    },


      {
          type: 'Control',
          label:'please choose a more specific specification type',
          scope: '#/properties/mainEntity',

          //  "elementLabelProp": "name",
          options: {
          }
      },

    {
      label: 'File Format: how is the specification represented digitally (typically as a text file, e.g. pdf, txt, docx',
      type: 'Control',
      scope: '#/properties/encodingFormat',
      options: {
        showUnfocusedDescription: true
      }
    },

        {
          label: 'Base specification that this is a profile on; restricts conventions from the base profile',
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
