// Business logic for roles
// Dependencies:
// - userRolesService: The persistent data access service for userRoles
// - rolesService: The persistent data access service for roles
module.exports = (userRolesService,rolesService) => ({
    readByUserId : async (id,author) => {
        var userRoles = await userRolesService.readAll(author);
        var roles = await rolesService.readAll(author);
        var myRoles=roles
            .filter(role => userRoles.some(userRole=>userRole.user==id&&userRole.role==role.id))
            .map(role => role.name);
        return myRoles;
    },
});