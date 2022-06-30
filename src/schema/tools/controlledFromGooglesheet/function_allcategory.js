
import  suggestionSheet from  'dsv-loader!../controlledFromGooglesheet/function_allcategory.csv';
const nameCol = "Category"
const sheet = suggestionSheet
const fucntionenum =   function()  {
     let propList =  sheet.filter(o => o[nameCol]).map( o => {
              return   o[nameCol]
               })
     return {"type":"string", "enum":   propList }
 }
const functionsuggestion =   function()  {
     let propList =  sheet.filter(o => o[nameCol]).map( o => {
              return   o[nameCol]
               })
     return  propList
 }
export { fucntionenum, functionsuggestion}


