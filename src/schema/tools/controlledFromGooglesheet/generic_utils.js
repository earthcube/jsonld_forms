//maturity JSCO schema values as oneOf [schema:DefinedTerm objects]
import  csvFile from  '@/schema/tools/controlledFromGooglesheet/maturity.csv'
const oneOf =   function()  {
    const nameCol = "Maturity"
    const proplCol ="URI"
     const sheet = csvFile
     let propList =  sheet.filter(o => o[nameCol]).map( o => {
              return  {  "title": o[nameCol],
                           "const": {
                                  "name": o[nameCol],
                                  "@type": "DefinedTerm",
                                  "identifier": o[proplCol]
                                  }
                        }
               })
     return {"oneOf":   propList }  //shouldn't this be JSON array for [propList]?
 }
export {oneOf as default }

//function subcategory pick list
import  suggestionSheet from  '@/schema/tools/controlledFromGooglesheet/function_subcategory.csv'
const enumList =   function()  {
    const nameCol = "Combined (shown in the form)"
     const sheet = suggestionSheet
     let propList =  sheet.filter(o => o[nameCol]).map( o => {
              return   o[nameCol]
               })
     return {"type":"string", "enum":   propList }
 }

const suggestionList =   function()  {
    const nameCol = "Combined (shown in the form)"
     const sheet = suggestionSheet
     let propList =  sheet.filter(o => o[nameCol]).map( o => {
              return   o[nameCol]
               })
     return  propList
 }
export { enumList as enumList, suggestionList as suggestionList}

