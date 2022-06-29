import scienceDomain from 'dsv-loader!../controlledFromGooglesheet/sciencedomains.csv';

export const scienceDomainTypeOneOf = function () {
    const nameCol = "SCIENCE DOMAIN"
    const urlCol = "URI"
    const sheet = scienceDomain
    let propList = sheet.filter(o => o[nameCol]).map(o => {

        return {
            "title": o[nameCol],
            "const": {
                "name": o[nameCol],
                "@type": "DefinedTerm",
                "identifier": o[urlCol]
            }
        }
    })
    return {"oneOf": propList}

}
export {scienceDomainTypeOneOf as scienceDomainList};