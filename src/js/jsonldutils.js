import _ from 'lodash'

const flatten = (jsonld,  flattenList)=>{
    var jsonflat =  JSON.parse(JSON.stringify(jsonld))
    flattenList.forEach ( (f)=> {
        var p = getProperty(jsonld, f.flattenTo, f.propertyID?  f.propertyID : f.flattened )
        if (p){
            jsonflat[f.flattened] = p
        }
    } )

    delete jsonflat.additionalProperty // just delete it
    return jsonflat

}

const unflatten =(jsonflat,  flattenList)=>{
    var jsonld = JSON.parse(JSON.stringify(jsonflat))
    jsonld.additionalProperty = []

    flattenList.forEach ( (f)=> {
            if (jsonld[f.propertyID?  f.propertyID : f.flattened ] ) {
                 jsonld.additionalProperty.push(jsonld[f.propertyID?  f.propertyID : f.flattened ] )
                 delete jsonld[f.propertyID?  f.propertyID : f.flattened ]
            }
        } )
    return jsonld

}

const getProperty= (jsonld, additionalProperty, propertyId ) =>{
 if (jsonld[additionalProperty] ){
        return _.find(jsonld[additionalProperty],(o) => {
            if (o["propertyID" ] == propertyId ) {
            return true
            }
            return false
        }
        )
 }
 return undefined
}

// const merge= (jsonld, mergeToProperty, propertyMerge )=>{
// }

export {
flatten as flatten,
unflatten as unflatten
}
