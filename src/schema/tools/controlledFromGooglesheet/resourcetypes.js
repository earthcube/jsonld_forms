
import  resourceTypeSheet from 'dsv-loader!./resourcetypes.csv'

const resourceTypeOneOf =   function()  {
    const nameCol = "Resource Type"
    const urlCol ="URI"
    const sheet = resourceTypeSheet
    let propList =  sheet.filter(o => o[nameCol]).map( o => {
//values implemented as schema:CreativeWork
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
export { resourceTypeOneOf as resourceTypeList}