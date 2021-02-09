// Frontend api controller for user list
// Dependencies:
// - usersService: The persistent data access service for users
// - userRolesService: The persistent data access service for userRoles
// - rolesService: The persistent data access service for roles
module.exports = (usersService,userRolesService,rolesService) => ({
    get : async (req, res, next) => {
        var author = res.locals.author;
        var users = await usersService.readAll(author);
        var userRoles = await userRolesService.readAll(author);
        var roles = await rolesService.readAll(author);
        var result=users.map((user)=>{
            roleNames=roles
                .filter(role => userRoles.some(userRole=>userRole.user==user.id&&userRole.role==role.id))
                .map(role => role.name);
            return {
                id: user.id,
                nombre: `${user.first_name} ${user.last_name}`,
                usuario: user.username,
                cargo: roleNames,
            };
        });
        res.send(result);
    },
});