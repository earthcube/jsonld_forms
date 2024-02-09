import { default as interchange } from './resourceTypes/resourceType_interchangeformat';
import { default as specification } from './resourceTypes/resourceType_specification';
import { default as catalog } from './resourceTypes/resourceType_catalog';
import { default as semantic } from './resourceTypes/resourceType_semantic';
import { default as interfaceapi } from './resourceTypes/resourceType_interface';
import { default as servicedesc } from './resourceTypes/resourceType_service';
import { default as software } from './resourceTypes/resourceType_software';
import { default as repository } from './resourceTypes/resourceType_repository';
import { default as platform } from './resourceTypes/resourceType_platform';
import { default as usecase } from './resourceTypes/resourceType_usecase';
import { default as bundledobject } from './resourceTypes/resourceType_bundledObject';
const cat2 = {
  type: 'Category',
  label: 'Resource Type',
  elements: [
    {
      type: 'Label',
      text: 'What is the type of resource'
    },
    {
      type: 'Control',
      scope: '#/properties/mainEntity',
      options: {
        "elementLabelProp": "name" ,
        "showUnfocusedDescription": true,
        "detail": {
          "type": "VerticalLayout",
          "elements": [
            {
              "label": "Type",
              "type": "Control",
              "scope": "#/properties/@type"
            },
            {
              "label": "Name",
              "type": "Control",
              "scope": "#/properties/name"
            },
            {
              "label": "Identifier",
              "type": "Control",
              "scope": "#/properties/identifier"

            },
          ]}
      }
    },
    servicedesc(),
    software() ,
    interchange,
    specification,
    catalog,
    semantic,
    interfaceapi,
    repository,
    platform,
    usecase,
    bundledobject
  ]
};

// cat2.elements.push(servicedesc());
// cat2.elements.push(software());
// cat2.elements.push(interchange);
// cat2.elements.push(specification);
// cat2.elements.push(catalog);
// cat2.elements.push(semantic);
// cat2.elements.push(interfaceapi);
// cat2.elements.push(repository);
// cat2.elements.push(platform);
// cat2.elements.push(usecase);
// cat2.elements.push(bundledobject);
export default cat2;
