import suggestionSheet from 'dsv-loader!../controlledFromGooglesheet/function_category.csv'

const functionList =   function()  {
     const nameCol = "Category"
    const proplCol ="URI"
     const sheet = suggestionSheet
    let propList =  sheet.filter(o => o[nameCol]).map( o => {
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
     return  sheet.filter(o => o[nameCol]).map(o => {
         return o[nameCol]
     })
 }

export { functionList as functionList, functionsuggestion as functionsuggestion}


