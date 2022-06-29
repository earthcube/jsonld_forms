import  csvFile from  'dsv-loader!../controlledFromGooglesheet/usage.csv'
export const usageOneOf =   function()  {
    const nameCol = "Usage Volume"
    const proplCol ="URI"
    const sheet = csvFile
//    var  licenseSheet = require( 'csv-loader!../controlledFromGooglesheet/ECRR Controlled Vocabularies - Software Licenses.csv' )
    let propList =  sheet.filter(o => o[nameCol]).map( o => {

        return  {  "title": o[nameCol],
            "const": {
                "name": o[nameCol],
                "@type": "DefinedTerm",
                "identifier": o[proplCol]
            }
        }
    })
    return {"oneOf":   propList }

}

//export {usageoneOf as lifetimeOneOf }