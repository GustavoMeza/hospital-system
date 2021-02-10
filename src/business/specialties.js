// Business logic for specialties
// Dependencies:
// - specialtiesService: The persistent data access service for specialties
// - licensesBusinessLogic: Business logic to manage licenses
module.exports = (specialtiesService, licensesBusinessLogic) => ({
    readByUserId : async (id,author) => {
        var specialties = await specialtiesService.readAll(author);
        var myLicenses = await licensesBusinessLogic.readByUserId(id,author);
        var mySpecialties = specialties
            .filter(specialty=>myLicenses.some(license=>specialty.license==license.id))
            .map(specialty=>specialty.field);
        return mySpecialties;
    }
});