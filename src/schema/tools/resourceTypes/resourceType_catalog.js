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
      label: 'access interface',
      type: 'Control',
      scope: '#/properties/ecrro:ECRRO_0000503',
      options: {
        showUnfocusedDescription: true
      }
    },
      {
          label: 'type of resource cataloged',
          type: 'Control',
          scope: '#/properties/contentType',
          options: {
              showUnfocusedDescription: true,
              detail: {
                  type: 'VerticalLayout',
                  elements: [
                      { label: 'schema.org type', type: 'Control', scope: '#/properties/@type' },
                      { label: 'name', type: 'Control', scope: '#/properties/name' },
                      { label: 'identifier', type: 'Control', scope: '#/properties/identifier' }
                  ]
              }
          }
      }
  ]
};

export default resourceType;
