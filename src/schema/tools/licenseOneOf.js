// https://www.papaparse.com/#remote-files
// https://docs.google.com/spreadsheets/d/e/2PACX-1vQhQNGiV5TP2ATB6vWo1zbooOUPdOQ14hrg6xFLjp-42whsd4jOltYHn-Q3rUyK5CD9jRaht7BUx8tC/pub?gid=0&single=true&output=tsv

//const licenseSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhQNGiV5TP2ATB6vWo1zbooOUPdOQ14hrg6xFLjp-42whsd4jOltYHn-Q3rUyK5CD9jRaht7BUx8tC/pub?gid=0&single=true&output=tsv"

const nameCol = "Pruned for the form"
const urlCol ="URI"
import toCreativeWork from '../controlledFromGooglesheet/sheetToCreativeWork'
var  licenseSheet = require( 'csv-loader!../controlledFromGooglesheet/ECRR Controlled Vocabularies - Software Licenses.csv' )

const licenseOneOf =   function()  {
 return {"oneOf":   toCreativeWork(licenseSheet, nameCol, urlCol) }

 }

export { licenseOneOf as default}
