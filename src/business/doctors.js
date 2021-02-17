// Business logic for doctors
// Dependencies:
// - usersService: The persistent data access service for users
// - licensesBusinessLogic: Business logic to manage licenses
// - specialtiesBusinessLogic: Business logic to manage specialties
module.exports = (usersService,licensesBusinessLogic,specialtiesBusinessLogic) => ({
    readById : async (id,author) => {
        var user = await usersService.readById(id,author);
        var myProfessionalLicense = await licensesBusinessLogic.readProfessionalLicenseByUserId(id,author);
        if(myProfessionalLicense == null) return null;
        var doctor = {
            id: user.id,
            nombre: `${user.first_name} ${user.last_name}`,
            cedula: myProfessionalLicense.code,
            universidad: myProfessionalLicense.college,
            turno: user.shift,
            direccion: '',
            especialidad: await specialtiesBusinessLogic.readByUserId(id,author),
        };
        return doctor;
    }
});