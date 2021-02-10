// Business logic for doctor users
// Dependencies:
// - usersService: The persistent data access service for users
// - doctorsBusinessLogic: Business logic to manage doctors
// - rolesBusinessLogic: Business logic to manage roles
module.exports = (usersService,doctorsBusinessLogic,rolesBusinessLogic) => ({
    readById : async (id,author) => {
        var user = await usersService.readById(id,author);
        var doctorUser={
            id: id,
            usuario: user.username,
            contrasenia: '',
            cargo: await rolesBusinessLogic.readByUserId(id,author),
            medico: await doctorsBusinessLogic.readById(id,author),
        };
        return doctorUser;
    }
});