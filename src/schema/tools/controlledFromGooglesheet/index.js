// /*
// "creativeWork_type": {
//       "type": "object",
//       "properties": {
//         "@type": {"const": "CreativeWork"},
//         "name": {"type": "string"},
//         "url": {"type": "string"}
//       }
//     },
// */
/*
             {  "title": "License 1",
               "const": {
                 "@type": "CreativeWork",
                 "name": "License 1",
                 "url": "use if CreativeWork or URL; if use url, the value is a string"
               }
             }
             */

// const  toOneOf =  async  function(sheet, nameCol, urlCol) {
//  let  results =  await Papa.parse(sheet, {
//
// 	header: true,
// //     complete: function(results) {
// //       console.log(results);
// //       let propList = results.data.filter(o => o[nameCol]).map( o => {
// //
// //           return  {  "title": o[nameCol],
// //                        "const": {
// //                               "name": o[nameCol],
// //                               "@type": "CreativeWork",
// //                               "url": o[urlCol]
// //                               }
// //           }
// //       })
// //
// //       return propList;
// //       }
// 	// rest of config ...
//      })
//      let propList = await results.data.filter(o => o[nameCol]).map( o => {
//
//           return  {  "title": o[nameCol],
//                        "const": {
//                               "name": o[nameCol],
//                               "@type": "CreativeWork",
//                               "url": o[urlCol]
//                               }
//           }
//       })
//
//       return propList;
// }

//import  licenseSheet from  'csv-loader!../controlledFromGooglesheet/ECRR Controlled Vocabularies - Software Licenses.csv'
import  licenseSheet from  'dsv-loader!../controlledFromGooglesheet/ECRR Controlled Vocabularies - Software Licenses.csv'
const licenseOneOf =   function()  {
    const nameCol = "Pruned for the form"
    const urlCol ="URI"
     const sheet = licenseSheet
//    var  licenseSheet = require( 'csv-loader!../controlledFromGooglesheet/ECRR Controlled Vocabularies - Software Licenses.csv' )
     let propList =  sheet.filter(o => o[nameCol]).map( o => {

              return  {  "title": o[nameCol],
                           "const": {
                                  "name": o[nameCol],
                                  "@type": "CreativeWork",
                                  "url": o[urlCol]
                                  }
                        }
               })
     return {"oneOf":   propList }

 }

export { licenseOneOf as licenseList}

import  resourceTypeSheet from  'dsv-loader!../controlledFromGooglesheet/ECRR Controlled Vocabularies - Resource Types.csv'
const resourceTypeOneOf =   function()  {
    const nameCol = "Resource Type"
    const urlCol ="URI"
     const sheet = resourceTypeSheet
//    var  licenseSheet = require( 'csv-loader!../controlledFromGooglesheet/ECRR Controlled Vocabularies - Software Licenses.csv' )
     let propList =  sheet.filter(o => o[nameCol]).map( o => {

              return  {  "title": o[nameCol],
                           "const": {
                                  "name": o[nameCol],
                                  "@type": "CreativeWork",
                                  "url": o[urlCol]
                                  }
                        }
               })
     return {"oneOf":   propList }

 }
export { resourceTypeOneOf as resourceTypeList}
 //export default toOneOf
