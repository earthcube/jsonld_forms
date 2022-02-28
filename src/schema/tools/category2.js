import {default as interchange}  from './resourceType_interchangeformat'
import {default as specification}  from './resourceType_specification'
import {default as catalog}  from './resourceType_catalog'
import {default as semantic} from './resourceType_semantic'
import {default as interfaceapi} from './resourceType_interface'
import {default as servicedesc} from './resourceType_service'
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
export default cat2
