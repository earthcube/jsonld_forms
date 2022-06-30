import semResourceSheet from 'dsv-loader!../controlledFromGooglesheet/semanticresources.csv';
export const semResourceTypeOneOf = function () {
    const nameCol = "Semantic Resource Type"
    const urlCol = "URI"
    const sheet = semResourceSheet
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