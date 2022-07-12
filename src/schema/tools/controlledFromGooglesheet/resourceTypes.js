import resourceTypeSheet from 'dsv-loader!../controlledFromGooglesheet/resourceTypes.csv';
export const resourceTypeOneOf = function () {
    const nameCol = "Resource Type"
    const urlCol = "URI"
    const sheet = resourceTypeSheet
    let propList = sheet.filter(o => o[nameCol]).map(o => {
        return {
            "title": o[nameCol],
            "const": {
                "name": o[nameCol],
                "@type": "CreativeWork",
                "url": o[urlCol]
            }
        }
    })
    return {"oneOf": propList}
}
//export {resourceTypeOneOf as resourceTypeList};