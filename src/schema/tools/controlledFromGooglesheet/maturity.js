import  csvFile from  'dsv-loader!../controlledFromGooglesheet/maturity.csv'
const oneOf =   function()  {
    const nameCol = "MATURITY"
    const proplCol ="URI"
     const sheet = csvFile
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

export {oneOf as maturityOneOf }
