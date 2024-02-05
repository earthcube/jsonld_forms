import suggestionSheet from '@/schema/tools/controlledFromGooglesheet/function_category.csv'

const functionList =   function()  {
     const nameCol = "Category"
    const proplCol ="URI"
     const sheet = suggestionSheet
    const propList =  sheet.filter(o => o[nameCol]).map( o => {
        return  {  "title": o[nameCol],
            "const": {
                "name": o[nameCol],
                "@type": "DefinedTerm",
                "identifier": o[proplCol]
            }
        }
    })
    return {"anyOf":   propList }
 }


const functionsuggestion =   function()  {
     const nameCol = "Category"
     const sheet = suggestionSheet
    // was having issues. it was causeed by a UTF-8 BOM being at the start of the line
     return sheet.filter(o => o[nameCol]).map(o2 => {
         return o2[nameCol]
     })
    // const filtered = sheet.map(o2 => {
    //     return o2[nameCol]
    // })
    // return [ ...filtered]
 }

export { functionList as functionList, functionsuggestion as functionsuggestion}


