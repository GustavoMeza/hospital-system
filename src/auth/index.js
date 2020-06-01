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
module.exports = (businessService, config) => ({
    validate: async (username, password) => {
        var user = await businessService.findUserByUsername(username, null);
        var hash = getHash(password, user.salt);
        return user.hash == hash;
    },
    createJwt: async(userId) => {
        var permissions = await businessService.findPermissionsByUserId(userId, null)
        var obj = {
            user: userId,
            permissions: permissions,
        }
        var token = jwt.sign(obj, config.APP_SECRET, { expiresIn: '15m' })
        return token;
    },
    decodeJwt: async(token) => {
        var decoded = jwt.verify(token, process.env.APP_SECRET);
        return decoded;
    }
});
