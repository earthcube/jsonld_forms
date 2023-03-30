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
        const whichValue = f.flattened? f.flattened: f.propertyID
            if (jsonld[ whichValue] ) { //  get the flattened value
                // populate with the property value
                 jsonld.additionalProperty.push(jsonld[whichValue ] )
                 delete jsonld[whichValue ]
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
