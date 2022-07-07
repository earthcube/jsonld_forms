import { default as interchange } from './resourceTypes/interchangeformat';
import { default as catalog } from './resourceTypes/catalog';
import { default as interfaceapi } from './resourceTypes/interface';
import { default as servicedesc } from './resourceTypes/serviceInstance';
import { default as software } from './resourceTypes/software';
import { default as repository } from './resourceTypes/repository';
import { default as platform } from './resourceTypes/platform';
import { default as usecase } from './resourceTypes/usecase';
import { default as bundledobject } from './resourceTypes/bundledObject';
import { default as dataset } from './resourceTypes/dataset';

import { default as specification } from './resourceTypes/specification';
import { default as dataformatspec } from './resourceTypes/specificationDataFormat';
import { default as namingconvention } from './resourceTypes/specificationNaming';
import { default as webservicespec } from './resourceTypes/specificationWebService';
import { default as datamodelspec } from './resourceTypes/specificationDataModel';
import { default as dataconversionspec} from './resourceTypes/specificationDataConversion';
import { default as metadataprofile } from './resourceTypes/specificationMetadataConvention';
import { default as programlangspec } from './resourceTypes/specificationProgrammingLanguage';
import { default as datamodelprofile } from './resourceTypes/specificationDataModelProfile';
import { default as filepackagespec } from './resourceTypes/specificationFilePackaging';
import { default as interopspec } from './resourceTypes/specificationInteroperability';
import { default as apispec } from './resourceTypes/specificationAPI';
import { default as processmodelspec } from './resourceTypes/specificationProcessModel';

import { default as semantic } from './resourceTypes/semantic';
import { default as conceptmod } from './resourceTypes/semanticConceptualModel';
import { default as controlvoc } from './resourceTypes/semanticControlledVocab';
import { default as glossary } from './resourceTypes/semanticGlossary';
import { default as ontology } from './resourceTypes/semanticOntology';
import { default as rdfvocab } from './resourceTypes/semanticRDFvocab';
import { default as skosvocab } from './resourceTypes/semanticSKOSVocab';
import { default as taxonomy } from './resourceTypes/semanticTaxonomy';
import { default as thesaurus } from './resourceTypes/semanticThesaurus';


// TBD-- there must be a way to get the initial resource type selection
// then dynamically load only the component needed for cat2...

const cat2 = {
  type: 'Category',
  label: 'Resource Details',
  elements: [

  ]
};

cat2.elements.push(servicedesc);
cat2.elements.push(software);
cat2.elements.push(interchange);
cat2.elements.push(catalog);
cat2.elements.push(interfaceapi);
cat2.elements.push(repository);
cat2.elements.push(platform);
cat2.elements.push(usecase);
cat2.elements.push(bundledobject);
cat2.elements.push(dataset);

//specifications and subtypes of specification
// this duplication would not be necessary if a rule
// could be constructed to SHOW on one of a list of
// resource types. I couldn't make it work (smr 2022-06-30)
cat2.elements.push(specification);
cat2.elements.push(dataformatspec);
cat2.elements.push(namingconvention);
cat2.elements.push(webservicespec);
cat2.elements.push(datamodelspec);
cat2.elements.push(dataconversionspec);
cat2.elements.push(metadataprofile);
cat2.elements.push(programlangspec);
cat2.elements.push(datamodelprofile);
cat2.elements.push(filepackagespec);
cat2.elements.push(interopspec);
cat2.elements.push(apispec);
cat2.elements.push(processmodelspec);

//semantic resources and subtypes
cat2.elements.push(semantic);
cat2.elements.push(conceptmod);
cat2.elements.push(controlvoc);
cat2.elements.push(glossary);
cat2.elements.push(ontology);
cat2.elements.push(rdfvocab);
cat2.elements.push(skosvocab);
cat2.elements.push(taxonomy);
cat2.elements.push(thesaurus);

export default cat2;
