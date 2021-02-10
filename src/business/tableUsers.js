// Business logic for users
// Dependencies:
// - usersService: The persistent data access service for users
// - rolesBusinessLogic: Business logic to manage roles
module.exports = (usersService,rolesBusinessLogic) => ({
    readAll : async (author) => {
        var users = await usersService.readAll(author);
        var result = await Promise.all(users.map(async (user) => ({
            id: user.id,
            nombre: `${user.first_name} ${user.last_name}`,
            usuario: user.username,
            cargo: await rolesBusinessLogic.readByUserId(user.id),
        })));
        return result;
    },
});