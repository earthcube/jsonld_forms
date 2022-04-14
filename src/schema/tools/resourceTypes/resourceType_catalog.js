const resourceType = {
  type: 'Group',
  label: 'Catalog/Registry options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
        //const: 'Catalog/Registry'
         "const":[
                 {
                 "name":
                 "Catalog/Registry",
                 "@type":
                 "CreativeWork",
                 "url":
                 "http://cor.esipfed.org/ont/earthcube/ECRRO_0000212"
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
