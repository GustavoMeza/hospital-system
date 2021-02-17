const PROFESSIONAL_LICENSE='professional';

const licenseWrapper = (license) => ({
    id:license.id,
    code:license.code,
    college:license.college,
    type:license.type,
});

// Business logic for licenses
// Dependencies:
// - licensesService: The persistent data access service for licenses
module.exports = (licensesService) => ({
    readByUserId : async (id,author) => {
        var licenses = await licensesService.readAll(author);
        var result=licenses
            .filter(license => license.user == id)
            .map(licenseWrapper);
        return result;
    },
    readProfessionalLicenseByUserId : async(id,author) => {
        var licenses = await licensesService.readAll(author);
        var result = licenses.find(license => license.type == PROFESSIONAL_LICENSE && license.user == id);
        return result ? licenseWrapper(result) : null;
    },
});