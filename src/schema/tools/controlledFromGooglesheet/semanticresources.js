import  resourceTypeSheet from '@/schema/tools/controlledFromGooglesheet/semanticresources.csv'
const semanticResourceOneOf =   function()  {
    const nameCol = "Semantic Resource Type"
    const urlCol ="URI"
    const sheet = resourceTypeSheet
    const propList =  sheet.filter(o => o[nameCol]).map( o => {
//values implemented as schema:DefinedTerm
        return  {  "title": o[nameCol],
            "const": [{
                "name": o[nameCol],
                "@type": "DefinedTerm",
                "identifier": o[urlCol]
            } ]
        }
    })
    return {"oneOf":   propList }
}
export {semanticResourceOneOf as semanticResourceOneOf}
