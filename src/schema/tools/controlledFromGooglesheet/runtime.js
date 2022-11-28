
import  suggestionSheet from  'dsv-loader!../controlledFromGooglesheet/runtime.csv'
//currently not used anywhere, so not exported
const enumList =   function()  {
     const nameCol = "Runtime Environments"
     const uriCol = "URI"
     const sheet = suggestionSheet
     let propList =  sheet.filter(o => o[nameCol]).map( o => {
              return   `${o[nameCol]}, uri:${o[uriCol]}`
               })
     return {"type":"string", "enum":   propList }
 }


export  const suggestionList =   function()  {
     const nameCol = "Runtime Environments"
     const uriCol = "URI"
     const sheet = suggestionSheet
     let propList =  sheet.filter(o => o[nameCol]).map( o => {
              return   `${o[nameCol]}, uri:${o[uriCol]}`
               })
     return  propList

 }
//export { enumList as enumList, suggestionList as suggestionList}


