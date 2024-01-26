import  csvFile from  '@/schema/tools/controlledFromGooglesheet/audience.csv'
const audienceList =   function()  {
     const nameCol = "Audience types"
     const proplCol ="URI"
     const sheet = csvFile
     let propList =  sheet.filter(o => o[nameCol]).map( o => {
              return  {  "title": o[nameCol],
                           "const": {
                                  "audienceType": o[nameCol],
                                  "@type": "Audience",
                                  "identifier": o[proplCol]
                                  }
                        }
               })
     return {"anyOf":   propList }
 }
const oneOf =   function()  {
    const nameCol = "Audience types"
    const proplCol ="URI"
    const sheet = csvFile
//    var  licenseSheet = require( 'csv-loader!../controlledFromGooglesheet/ECRR Controlled Vocabularies - Software Licenses.csv' )
    let propList =  sheet.filter(o => o[nameCol]).map( o => {

        return  {  "title": o[nameCol],
            "const": {
                "audienceType": o[nameCol],
                "@type": "Audience",
                "identifier": o[proplCol]
            }
        }
    })
    return {"oneOf":   propList }

}

export {audienceList as audienceList}
export {oneOf as audienceOneOf }
