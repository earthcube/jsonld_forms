import resourceTypeSheet from 'dsv-loader!../controlledFromGooglesheet/resourceTypes.csv';

const resourceTypeOneOf = function () {
    const nameCol = "Resource Type"
    const urlCol = "URI"
    const sheet = resourceTypeSheet
//    var  licenseSheet = require( 'csv-loader!../controlledFromGooglesheet/ECRR Controlled Vocabularies - Software Licenses.csv' )
    let propList = sheet.filter(o => o[nameCol]).map(o => {

        return {
            "title": o[nameCol],
            "const": [{
                "name": o[nameCol],
                "@type": "CreativeWork",
                "url": o[urlCol]
            }]
        }
    })
    return {"oneOf": propList}

}
export {resourceTypeOneOf as resourceTypeList};