module.exports = (dataServices, persistentServices) => ({
    findUserByUsername: async (username, author) => {
        var users = await persistentServices.readAll(dataServices.users, author);
        var result = users.find((user) => user.username == username);
        return result;
    },
    findPermissionsByUserId: async(userId, author) => {
        var userRoles = await persistentServices.readAll(dataServices.userRoles, author);
        var myUserRoles = userRoles.filter((userRole)=>userRole.user == userId);
        var myRoles = myUserRoles.map((myUserRole)=>myUserRole.role);
        var rolePermissions = await persistentServices.readAll(dataServices.rolePermissions, author);
        var myRolePermissions = rolePermissions.filter((rolePermission)=>myRoles.includes(rolePermission.permission));
        var myPermissions = myRolePermissions.map((rolePermission)=>rolePermission.permission);
        return myPermissions;
    },
    findAllActiveUsers: async(author) => {
        var users = await persistentServices.readAll(dataServices.users, author);
        var res = users.map((user)=>({'id': user.id, 'username': user.username}));
        return res;
    }
});
