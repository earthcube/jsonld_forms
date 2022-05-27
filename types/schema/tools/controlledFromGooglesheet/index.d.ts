export { maturityOneOf } from "./maturity";
export { lifetimeOneOf } from "./lifetime";
export { audienceOneOf } from "./audience";
declare function licenseOneOf(): {
    oneOf: any;
};
declare function resourceTypeOneOf(): {
    oneOf: any;
};
declare function scienceDomainTypeOneOf(): {
    oneOf: any;
};
export { licenseOneOf as licenseList, resourceTypeOneOf as resourceTypeList, scienceDomainTypeOneOf as scienceDomainList };
export { functionenum, functionsuggestion } from "./function_subfunction";
export { enumList as runtimeEnumList, suggestionList as runtimeSuggestionList } from "./runtime";
