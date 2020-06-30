var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var getSalt = () => {
    var salt = crypto.randomBytes(16).toString('hex');
    return salt;
};
var getHash = (password, salt) => {
    var hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash;
};
module.exports = (persistentServices, dataServices, config) => ({
    getUser: async (username, password) => {
        var user = (await persistentServices.readAll(dataServices.users, null))
            .find((user) => user.username == username);
        var hash = getHash(password, user.salt);
        return user.hash == hash ? user : null;
    },
    createJwt: async(userId) => {
        var roles = (await persistentServices.readAll(dataServices.userRoles, null))
            .filter((userRole)=>userRole.user == userId)
            .map((userRole)=>userRole.role);

        var permissions = (await persistentServices.readAll(dataServices.rolePermissions, null))
            .filter((rolePermission)=>roles.includes(rolePermission.role))
            .map((rolePermission)=>rolePermission.permission);

        var obj = {
            user: userId,
            permissions: permissions,
        };
        var token = jwt.sign(obj, config.APP_SECRET, { expiresIn: '15m' });
        return token;
    },
    decodeJwt: async(token) => {
        var decoded = jwt.verify(token, process.env.APP_SECRET);
        return decoded;
    }
});
