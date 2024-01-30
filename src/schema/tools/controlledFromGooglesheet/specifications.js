import  resourceTypeSheet from '@/schema/tools/controlledFromGooglesheet/specifications.csv'

const sOneOf = function () {
    const nameCol = "Specification Types"
    const urlCol = "URI"
    const sheet = resourceTypeSheet
    const propList = sheet.filter(o => o[nameCol]).map(o => {
//values implemented as schema:DefinedTerm
        return {
            "title": o[nameCol],
            "const": [{
                "name": o[nameCol],
                "@type": "DefinedTerm",
                "identifier": o[urlCol]
            }]
        }
    })
    return {"oneOf": propList}
};
export {sOneOf as specificationOneOf}
