
import  suggestionSheet from  'dsv-loader!../controlledFromGooglesheet/function_category.csv';
const nameCol = "Category";
const sheet = suggestionSheet;

const functioncatenum =   function()  {
     let propList =  sheet.filter(o => o[nameCol]).map( o => {
              return   o[nameCol]
               })
     return {"type":"string", "enum":   propList }
 }
const functioncatsuggestion =   function()  {
     let propList =  sheet.filter(o => o[nameCol]).map( o => {
              return   o[nameCol]
               })
     return  propList
 }
export {functioncatenum, functioncatsuggestion}


