import _ from 'lodash'

const flatten = (jsonld,  flattenList)=>{
    var jsonflat = jsonld
    flattenList.forEach ( (f)=> {
        var p = getProperty(jsonld, f.flattenTo, f.propertyID?  f.propertyID : f.flattened )
        if (p){
            jsonflat[f.flattened] = p
        }
    } )

    jsonflat.additionalProperty = undefined // just delete it
    return jsonflat

}

const unflatten =(jsonflat,  flattenList)=>{
    var jsonld = jsonflat
    jsonld.additionalProperty = []

    flattenList.forEach ( (f)=> {
            if (jsonld[f.propertyID?  f.propertyID : f.flattened ] ) {
                 jsonld.additionalProperty.push(jsonld[f.propertyID?  f.propertyID : f.flattened ] )
                 jsonld[f.propertyID?  f.propertyID : f.flattened ] = undefined
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
