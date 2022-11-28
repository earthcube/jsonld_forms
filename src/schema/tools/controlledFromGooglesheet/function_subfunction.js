
import  suggestionSheet from  'dsv-loader!../controlledFromGooglesheet/function_subcategory.csv';
const nameCol = "Combined (shown in the form)";
const sheet = suggestionSheet;

const functionsubenum =   function()  {
     let propList =  sheet.filter(o => o[nameCol]).map( o => {
              return   o[nameCol]
               })
     return {"type":"string", "enum":   propList }
 }
const functionsubsuggestion =   function()  {
     let propList =  sheet.filter(o => o[nameCol]).map( o => {
              return   o[nameCol]
               })
     return  propList
 }
export {functionsubenum,  functionsubsuggestion}


