// oneOf.. this is part of an array. so each item is unique
import  scienceDomain from  '@/schema/tools/controlledFromGooglesheet/sciencedomains.csv'
export const scienceDomains =   function()  {
    const nameCol = "SCIENCE DOMAIN"
    const urlCol ="URI"
    const sheet = scienceDomain
    const propList =  sheet.filter(o => o[nameCol]).map( o => {
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
export { scienceDomains as scienceDomainList}
