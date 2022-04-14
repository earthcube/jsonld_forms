const resourceType = {
  type: 'Group',
  label: 'Use Case options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
        //const: 'Use Case'
         "const":
[
{
"name":
"Use Case",
"@type":
"CreativeWork",
"url":
"http://cor.esipfed.org/ont/earthcube/ECRRO_0000005"
}
]
      }
    }
  },
  elements: [
    {
      type: 'Label',
      text: 'File Format of Use Case description'
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
