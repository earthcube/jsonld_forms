/*  This module gathers functions to read vocabularies from csv files in the controlledFromGooglesheet directory
The vocabularies here are populated in instance documents as schema:definedTerm or schema:creativeWork
Thus the values are JSON objects, not simple strings.
*/
export {functionList as functionList, functionsuggestion as functionsuggestion} from './function_category'
export {subfunctionList as subfunctionList, subfunctionsuggestion as subfunctionsuggestion} from './function_subcategory'
export {enumList as runtimeEnumList, suggestionList as runtimeSuggestionList} from './runtime'
export {audienceList as audienceList} from './audience'
export {resourceTypes as resourceTypeList} from './resourcetypes'
export {specificationOneOf as specificationOneOf} from './specifications'
export {semanticResourceOneOf as semanticResourceOneOf} from './semanticresources'
export {communicationProtocols as communicationList } from './communication'
export {scienceDomains as scienceDomainList} from './sciencedomains'
export {maturityOneOf as maturityOneOf} from './maturity'
export {lifetimeOneOf as lifetimeOneOf} from './lifetime'
export {licenses as licenseList} from './softwarelicenses'

