const interchange = {
  type: 'Group',
  label: 'Bundled Object options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
       // const: 'Bundled Object'
         "const": [
                  {
                  "name":
                  "Bundled Object",
                  "@type":
                  "CreativeWork",
                  "url":
                  "http://cor.esipfed.org/ont/earthcube/SFO_0000075"
                  }
                  ]
      }
    }
  },
  elements: [
    {
      type: 'Label',
      text: 'Base Format',
      description:
        'This is the base syntactic file type that should be a registered MIME-type if available. Generally, an interchange format will add additional constraints on the serialization using the base format. For example, text/xml might be the base format. Use the conformsTo property to identify more specific profiles that are more proscriptive, e.g. the xml schema for the file content, or a URI for a profile of WaterML used for a specific application. For data package formats, e.g bagit, frictionless data package, this would be the mime type for the container, and the conformsTo would provide identifers for the specific packaging specification or profile thereof. If the package specification defines a MIME type, that should be used here.'
    },
    {
      label: ' Base Format',
      type: 'Control',
      scope: '#/properties/encodingFormat',
      options: {
        showUnfocusedDescription: true
      }
    },
    {
      type: 'Label',
      text: 'Supporting Data'
    },
    {
      label: ' Supporting Data',
      type: 'Control',
      scope: '#/properties/supportingData',
      options: {
        showUnfocusedDescription: true,
        detail: {
          type: 'HorizontalLayout',
          elements: [
            { label: 'name', type: 'Control', scope: '#/properties/name' },
            {
              label: 'position',
              type: 'Control',
              scope: '#/properties/position'
            },
            {
              label: 'encodingFormat',
              type: 'Control',
              scope: '#/properties/encodingFormat'
            }
          ]
        }
      }
    },
    {
      type: 'Label',
      text: 'Semantic Resource it Uses',
      description:
        "(NEEDS CHECKING)Select from Semantic Resources already entered in the Registry. The intention is to link the interchange format with its underlying information model and vocabularies used to populate values in instance documents; these specify the semantics of the content in interchange format files. Visit https://tinyurl.com/ecrr-semanticresource to see a current list of registered semantic resources if the resource you need is not listed. Use the resource title in the 'other' option here to add it."
    },
    // TODO: Assuning this is correct.
    // Custom UI for entered and related resourcces, needed
    {
      label: ' Semantic Resource',
      type: 'Control',
      scope: '#/properties/isRelatedTo',
      options: {
        showUnfocusedDescription: true
      }
    },

    {
      type: 'Label',
      text: 'Conforms to'
    },
    {
      label: ' Conforms to',
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
    }
  ]
};

export default interchange;
