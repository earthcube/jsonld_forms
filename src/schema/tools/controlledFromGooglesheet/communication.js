import  csvFile from  'dsv-loader!../controlledFromGooglesheet/communication.csv'
export const communicationProtocols =   function()  {
    const nameCol = "Communication Protocol"
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

// export {communicationProtocols as communicationList }