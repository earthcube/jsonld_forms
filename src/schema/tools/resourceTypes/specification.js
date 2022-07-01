const resourceType = {
  type: 'Group',
  label: 'Specification options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
        //const: 'Specification'
         "const": [
                  {
                  "name":
                  "Specification",
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
      text: 'Specification: A specification is a document that defines how a particular activity ' +
          'can be done for consistency between different implementers of that activity. ' +
           'Note that more specific sub types for specification can be selected;' +
                  ' these include: Data Format Convention; Naming Convention; ' +
        'Web Service Convention;  Data Model; Data Model Convention;  Metadata Convention; ' +
        'Programming Language;  Data Conversion; Metadata Vocabulary;  File Packaging Convention; ' +
          'Interoperability Specification;  API;  Process Model. ' +
                  'Selecting one of these provides a more informative metadata record.'
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
          text: 'Profile of: A profile defines a set of clauses, classes, options or parameters from one or more base specifications that are used to implement a particular set of requirements. Profiles must be constructed such that conformance to the profile implies conformance to the base specification from which it is derived.'
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
