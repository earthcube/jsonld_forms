import suggestionSheet from 'dsv-loader!../controlledFromGooglesheet/function_subcategory.csv'

const subfunctionList =   function()  {
     const nameCol = "Combined (shown in the form)"
     const propCol ="URI"
     const sheet = suggestionSheet
     let propList =  sheet.filter(o => o[nameCol]).map( o => {
         return  {  "title": o[nameCol],
             "const": {
                 "name": o[nameCol],
                 "@type": "DefinedTerm",
                 "identifier": o[propCol]
             }
         }
               })
     return {"anyOf":   propList  }
 }
const subfunctionsuggestion =   function()  {
     const nameCol = "Combined (shown in the form)"
     const sheet = suggestionSheet
     return  sheet.filter(o => o[nameCol]).map(o => {
         return o[nameCol]
     })
 }
export { subfunctionList as subfunctionList, subfunctionsuggestion as subfunctionsuggestion}


