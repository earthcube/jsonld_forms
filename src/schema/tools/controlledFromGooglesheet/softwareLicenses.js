// oneOf. this is part of an array. so each item is unique
import licenseSheet from 'dsv-loader!../controlledFromGooglesheet/softwareLicenses.csv';

export const licenseOneOf = function () {
    const nameCol = "Pruned for the form"
    const urlCol = "URI"
    const sheet = licenseSheet
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
//export {licenseOneOf as licenseList};