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
      text: '2.1 What is the type of resource'
    },
    {
      type: 'Control',
      scope: '#/properties/mainEntity',

      //  "elementLabelProp": "name",
      options: {
        // "elementLabelProp": "#/properties/mainEntity/properties/name"
        //           format: 'radio',
        //                       "detail": {
        //                         "type": "VertialLayout",
        //                         "elements": [
        //                           {
        //                             "type": "Control",
        //                             "scope": "#/properties/name",
        //
        //                           }
        //                         ]
        //                       }
      }
    }
  ]
};

cat2.elements.push(servicedesc());
cat2.elements.push(software());
cat2.elements.push(interchange);
cat2.elements.push(specification);
cat2.elements.push(catalog);
cat2.elements.push(semantic);
cat2.elements.push(interfaceapi);
cat2.elements.push(repository);
cat2.elements.push(platform);
cat2.elements.push(usecase);
cat2.elements.push(bundledobject);
export default cat2;
