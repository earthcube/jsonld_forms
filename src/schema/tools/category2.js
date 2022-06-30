import { default as interchange } from './resourceTypes/resourceType_interchangeformat';
import { default as catalog } from './resourceTypes/resourceType_catalog';
import { default as semantic } from './resourceTypes/resourceType_semantic';
import { default as interfaceapi } from './resourceTypes/resourceType_interface';
import { default as servicedesc } from './resourceTypes/resourceType_service';
import { default as software } from './resourceTypes/resourceType_software';
import { default as repository } from './resourceTypes/resourceType_repository';
import { default as platform } from './resourceTypes/resourceType_platform';
import { default as usecase } from './resourceTypes/resourceType_usecase';
import { default as bundledobject } from './resourceTypes/resourceType_bundledObject';

import { default as specification } from './resourceTypes/resourceType_specification';
import { default as dataformatspec } from './resourceTypes/resourceType_specificationDataFormat';
import { default as namingconvention } from './resourceTypes/resourceType_specificationNaming';
import { default as webservicespec } from './resourceTypes/resourceType_specificationWebService';
import { default as datamodelspec } from './resourceTypes/resourceType_specificationDataModel';
import { default as dataconversionspec} from './resourceTypes/resourceType_specificationDataConversion';
import { default as metadataprofile } from './resourceTypes/resourceType_specificationMetadataConvention';
import { default as programlangspec } from './resourceTypes/resourceType_specificationProgrammingLanguage';
import { default as datamodelprofile } from './resourceTypes/resourceType_specificationDataModelProfile';
import { default as filepackagespec } from './resourceTypes/resourceType_specificationFilePackaging';
import { default as interopspec } from './resourceTypes/resourceType_specificationInteroperability';
import { default as apispec } from './resourceTypes/resourceType_specificationAPI';
import { default as processmodelspec } from './resourceTypes/resourceType_specificationProcessModel';



const cat2 = {
  type: 'Category',
  label: 'Resource Type',
  elements: [
    {
      type: 'Label',
      text: 'What is the type of resource. The ECRR resource type is used to select resource specific properties.'
    },
    {
      type: 'Control',
      label:false,
      scope: '#/properties/mainEntity',
      options: {
      }
    }

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

//specifications and subtypes of specification
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
export default cat2;
