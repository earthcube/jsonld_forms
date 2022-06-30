const resourceType = {
  type: 'Group',
  label: 'Data Format Specification',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
        //const: 'Specification'
         "const": [
                  {
                  "name":
                  "Data Format Convention",
                  "@type":
                  "CreativeWork",
                  "url":
                  "http://cor.esipfed.org/ont/earthcube/SPKT_0000001"
                  }
                  ]
      }
    }
  },

  //need to pick specific specification type.



  elements: [
    {
      type: 'Label',
      text: 'A specification that includes the mandatory, preferred or optional ways the components of the data are formatted.'
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
          text: 'optional: A profile defines a set of clauses, classes, options or parameters from one or more base specifications that are used to implement a particular set of requirements. Profiles must be constructed such that conformance to the profile implies conformance to the base specification from which it is derived.'
        },
        {
          label: 'Profile of',
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
