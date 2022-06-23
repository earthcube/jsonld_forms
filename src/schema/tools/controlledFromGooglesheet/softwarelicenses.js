
import  licenseSheet from  'dsv-loader!../controlledFromGooglesheet/softwarelicenses.csv'
const licenseOneOf =   function()  {
    const nameCol = "Pruned for the form"
    //labels are abbreviated to fit in the form better
    const urlCol ="URI"
    const sheet = licenseSheet
    let propList =  sheet.filter(o => o[nameCol]).map( o => {
//values implemented as schema:CreativeWork
        return  {  "title": o[nameCol],
            "const": {
                "name": o[nameCol],
                "@type": "CreativeWork",
                "url": o[urlCol]
            }
        }
    })
    return {"oneOf":   propList }

}
export { licenseOneOf as licenseList}
