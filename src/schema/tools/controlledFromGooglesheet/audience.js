import  csvFile from  'dsv-loader!../controlledFromGooglesheet/audience.csv'
export const audienceOneOf =   function()  {
    const nameCol = "Audience types"
    const proplCol ="URI"
     const sheet = csvFile
//    var  licenseSheet = require( 'csv-loader!../controlledFromGooglesheet/ECRR Controlled Vocabularies - Software Licenses.csv' )
     let propList =  sheet.filter(o => o[nameCol]).map( o => {
          return  {  "title": o[nameCol],
                       "const": {
                           "@type": "Audience",
                           "identifier": o[proplCol],
                           "audienceType": o[nameCol]
                              }
                    }
           })
     return {"oneOf":   propList }

 }

// export {oneOf as audienceOneOf }
