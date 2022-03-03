import {default as interchange}  from './resoureTypes/resourceType_interchangeformat'
import {default as specification}  from './resoureTypes/resourceType_specification'
import {default as catalog}  from './resoureTypes/resourceType_catalog'
import {default as semantic} from './resoureTypes/resourceType_semantic'
import {default as interfaceapi} from './resoureTypes/resourceType_interface'
import {default as servicedesc} from './resoureTypes/resourceType_service'
import {default as software} from './resoureTypes/resourceType_software'
import {default as repository} from './resoureTypes/resourceType_repository'
import {default as platform} from './resoureTypes/resourceType_platform'
const cat2 =
{
      "type": "Category",
      "label": "Section 2. Resource Type",
      "elements": [
        {
          "type": "Label",
          "text": "2.1 What is the type of resource"
        },
        {
          "type": "Control",
          "scope": "#/properties/mainEntity",

        //  "elementLabelProp": "name",
           "options": {
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
    }

cat2.elements.push(interchange)
cat2.elements.push(specification)
cat2.elements.push(catalog)
cat2.elements.push(semantic)
cat2.elements.push(interfaceapi)
cat2.elements.push(servicedesc)
cat2.elements.push(software)
cat2.elements.properties(repository)

export default cat2
