const resourceType = {
  type: 'Group',
  label: 'Platform options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
        //  const: 'Platform'
       "const":
[
{
"name":
"Platform",
"@type":
"DefinedTerm",
"identifier":
"http://cor.esipfed.org/ont/earthcube/ECRRO_0000211"
}
]
      }
    }
  },
  elements: [
    {
      type: 'Label',
      text: 'Interface'
    },
    {
      label: 'Protocol',
      type: 'Control',
      scope: '#/properties/ecrro:ECRRO_0000502',
      options: {
        showUnfocusedDescription: true,
        detail: {
          type: 'HorizontalLayout',
          elements: [
            { label: 'name', type: 'Control', scope: '#/properties/name' },
            {
              label: 'identifier',
              type: 'Control',
              scope: '#/properties/identifier'
            }
          ]
        }
      }
    },
    {
      type: 'Label',
      text: 'General Functions'
    },
    {
      label: 'Application Category',
      type: 'Control',
      scope: '#/properties/applicationCategory'
    },
    {
      type: 'ShowGroup',
      label: 'add additional function details',
      elements: [
        {
          type: 'Label',
          text: 'Function subcategory'
        },
        {
          label: 'Protocol',
          type: 'Control',
          scope: '#/properties/applicationCategory',
          options: {
            showUnfocusedDescription: true
          }
        }
      ]
    }
  ]
};

export default resourceType;
