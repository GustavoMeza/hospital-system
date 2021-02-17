// Business logic for doctor users
// Dependencies:
// - usersService: The persistent data access service for users
// - doctorsBusinessLogic: Business logic to manage doctors
// - rolesBusinessLogic: Business logic to manage roles
module.exports = (usersService,doctorsBusinessLogic,rolesBusinessLogic) => {
    var readById = async (id,author) => {
        var user = await usersService.readById(id,author);
        var doctorUser={
            usuario: user.username,
            contrasenia: '',
            cargo: await rolesBusinessLogic.readByUserId(id,author),
            medico: await doctorsBusinessLogic.readById(id,author),
        };
        return doctorUser;
    }
    var readAll = async (author) => {
        var users = await usersService.readAll(author);
        var doctorUsers = (await Promise.all(users
            .map(async (user) => await readById(user.id))
        )).filter(doctorUser => doctorUser.medico);
        return doctorUsers;
    }
    return {
        readAll: readAll,
        readById: readById,
    }
};