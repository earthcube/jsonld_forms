
/*
A specification that defines a web service (webAPI) intended for implementation by multiple
servers (e.g. OGC API). In the original ECRR design, Interface/API was considered as
separate resource.  Based on the resource descriptions compiled in the initial development
phase, it became apparent that it is unnecessary to make a distinction between the
interface as a conceptual entity, the specification for that interface, and the
applications/service instances that implement the interface. There are many API endpoints
that are implemented with some documentation specific to that endpoint, but not a
specification intended to be useful to implement other service endpoints that operate
the same way. Service instances should be represented as Service Instance resources , with
dct:conformsTo providing a
link to the service specification (this resource type) if there is such a specification.
*/


// properties of Interface/API:
//communication  protocol DefinedTerm, property ecrro:ECRRO_0000502
//function  schema:applicationCategory. string. String values should use this syntax: “function: ... uri: ...”.
//    The function value is the label associated with the ECRR uri in the function vocabulary
//conformsTo dct:conformsTo, array of CreativeWork.

import { functionallsuggestion } from '../controlledFromGooglesheet';
import _ from "lodash";

const interfaceResource = {
  type: 'Group',
  label: 'Interface/API options',
  rule: {
    effect: 'SHOW',
    condition: {
      scope: '#/properties/mainEntity/',
      schema: {
       // const: 'Interface/API'
         "const":
[
{ "name": "Interface/API",
"@type": "CreativeWork",
"url":
"http://cor.esipfed.org/ont/earthcube/ECRRO_0000207"
 }
]
      }
    }
  },
  elements: [
    {label: 'Communication protocol for API',
      type: 'Control',
      scope: '#/properties/ecrro:ECRRO_0000502',
      options: {
        showUnfocusedDescription: true,
        detail: {
          type: 'HorizontalLayout',
          elements: [
            {label: 'communication protocol',
              type: 'Control',
              scope: '#/properties/value/',
              options:{"childLabelProp": "name"}
            }
          ]
        }
      }
    },

    {label: 'Interface Functions',
      type: 'Control',
      scope: '#/properties/applicationCategory',
      options: {
        autocomplete: true,
        suggestion: []
      }
    },
    // TBD-- figure out how to add subfunction categories.

    { label: 'Specification(s) of interface operation and interaction protocols',
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
        },

    {label: 'Potential Actions',
          type: 'Control',
          scope: '#/properties/potentialAction',
          options: {
            showUnfocusedDescription: true,
            detail: {
              type: 'VerticalLayout',
              elements: [

                { label: 'name',
                  type: 'Control',
                  scope: '#/properties/name' },
                {
                  label: 'description',
                  type: 'Control',
                  scope: '#/properties/target/properties/description'
                },
                {label: 'urlTemplate',
                  type: 'Control',
                  scope: '#/properties/target/properties/urlTemplate'
                },

                {
                  label: 'httpMethod',
                  type: 'Control',
                  scope: '#/properties/target/properties/httpMethod',
                  options: {
                    // detail: {
                    //   type: 'HorizontalLayout',
                    //   elements: [
                    //     { label: 'Method', type: 'Control', scope: '#' }
                    //   ]
                    // }
                  }
                }
              ]
            }
          }
        }
      ]
    };

const resourceType2 = function() {
  let functionsuggestionList = functionallsuggestion();
  let applicationCategory = _.find(interfaceResource.elements, o => {
    return o.scope === '#/properties/applicationCategory';
  });
  applicationCategory.options.suggestion = functionsuggestionList;
  return interfaceResource;
};

let theschema = resourceType2();

//export default resourceType2;
export default theschema;
