import specsSheet from 'dsv-loader!../controlledFromGooglesheet/specifications.csv';
export const specTypeOneOf = function () {
    const nameCol = "Specification Types"
    const urlCol = "URI"
    const sheet = specsSheet
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