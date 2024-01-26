Tools schemas and UI Schemas

WHEN SAVING UPDATED CSV files, be sure that the UTF is not "UTF with a BOM"
used BBEdit on mac to convert  from UTF with BOM to UTF-8



These are the schemas.
Rather than one set of monster form, ecrr_1_0_uischema.json
I've made this into a set of javascript classes, that buidl on each other

ecrr_1_1_uischema.js
* category1
   * resourceTypes
* category2
* catagory3
* category4

Vocabularies will be loaded from the controlledFromGooglesheet directory.

* licenses 
  * property
* resourceTypes
  * property 

=== subtypes with resources
[{
"@type": "CreativeWork",
"url": "http://cor.esipfed.org/ont/earthcube/ECRRO_0000210",
"name": "Semantic Resource"
},{
"@type": "CreativeWork",
"url": "http://cor.esipfed.org/ont/earthcube/srt_0000003",
"name": "Ontology"
}
]
