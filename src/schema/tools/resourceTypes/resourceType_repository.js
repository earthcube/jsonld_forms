const resourceType = {
  type: 'Group',
  label: 'Repository options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
       // const: 'Repository'
         "const": [
                  {
                  "name":
                  "Repository",
                  "@type":
                  "CreativeWork",
                  "url":
                  "http://cor.esipfed.org/ont/earthcube/ECRRO_0000209"
                  }
                  ]
      }
    }
  },
  elements: [
    {
      type: 'Label',
      text: 'Type of the Cataloged Object'
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
};

export default resourceType;
