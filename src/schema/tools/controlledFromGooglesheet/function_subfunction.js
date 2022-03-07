
import  suggestionSheet from  'dsv-loader!../controlledFromGooglesheet/function_subcategory.csv'
const fucntionenum =   function()  {
    const nameCol = "Combined (shown in the form)"

     const sheet = suggestionSheet
//    var  licenseSheet = require( 'csv-loader!../controlledFromGooglesheet/ECRR Controlled Vocabularies - Software Licenses.csv' )
     let propList =  sheet.filter(o => o[nameCol]).map( o => {

              return   o[nameCol]

               })
     return {"type":"string", "enum":   propList }

 }
const functionsuggestion =   function()  {
    const nameCol = "Combined (shown in the form)"

     const sheet = suggestionSheet
//    var  licenseSheet = require( 'csv-loader!../controlledFromGooglesheet/ECRR Controlled Vocabularies - Software Licenses.csv' )
     let propList =  sheet.filter(o => o[nameCol]).map( o => {

              return   o[nameCol]

               })
     return  propList

 }
export { fucntionenum as functionenum, functionsuggestion as functionsuggestion}


