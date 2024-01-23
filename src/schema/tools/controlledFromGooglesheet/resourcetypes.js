
import  resourceTypeSheet from '@/schema/tools/controlledFromGooglesheet/resourcetypes.csv'

export const resourceTypes =   function()  {
    const nameCol = "Resource Type"
    const urlCol ="URI"
    const sheet = resourceTypeSheet
    let propList =  sheet.filter(o => o[nameCol]).map( o => {
//values implemented as schema:DefinedTerm
        return  {  "title": o[nameCol],
            "const": {
                "name": o[nameCol],
                "@type": "DefinedTerm",
                "identifier": o[urlCol]
            }
        }
    })
    return {"anyOf":   propList }
}
export { resourceTypes as resourceTypeList}
