
import  suggestionSheet from  'dsv-loader!../controlledFromGooglesheet/runtime.csv'
const enumList =   function()  {
       const nameCol = "Runtime Environments"
       const uriCol = "URI"
     const sheet = suggestionSheet
//    var  licenseSheet = require( 'csv-loader!../controlledFromGooglesheet/ECRR Controlled Vocabularies - Software Licenses.csv' )
     let propList =  sheet.filter(o => o[nameCol]).map( o => {

              return   `${o[nameCol]}, uri:${o[uriCol]}`

               })
     return {"type":"string", "enum":   propList }

 }
const suggestionList =   function()  {
       const nameCol = "Runtime Environments"
       const uriCol = "URI"

     const sheet = suggestionSheet
//    var  licenseSheet = require( 'csv-loader!../controlledFromGooglesheet/ECRR Controlled Vocabularies - Software Licenses.csv' )
     let propList =  sheet.filter(o => o[nameCol]).map( o => {

              return   `${o[nameCol]}, uri:${o[uriCol]}`

               })
     return  propList

 }
export { enumList as enumList, suggestionList as suggestionList}


