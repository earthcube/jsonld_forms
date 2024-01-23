import suggestionSheet from '@/schema/tools/controlledFromGooglesheet/runtime.csv'

export const enumList =   function()  {
     const nameCol = "Runtime Environments"
     const uriCol = "URI"
     const sheet = suggestionSheet
     let propList =  sheet.filter(o => o[nameCol]).map( o => {
         return  {  "title": o[nameCol],
             "const": {
                 "name": o[nameCol],
                 "@type": "DefinedTerm",
                 "identifier": o[uriCol]
             }
         }
               })
     return {"anyOf": propList }
 }

export const suggestionList =   function()  {
     const nameCol = "Runtime Environments"
//     const uriCol = "URI"
     const sheet = suggestionSheet
     return  sheet.filter(o => o[nameCol]).map(o => {
         return o[nameCol]
     })
 }

export {enumList as runtimeEnumList, suggestionList as runtimeSuggestionList}


