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
module.exports = (persistentServices, config) => ({
    validate: async (username, password) => {
        var user = (await persistentServices.users.readAll(null))
            .find((user) => user.username == username);
        var hash = getHash(password, user.salt);
        return user.hash == hash ? user.id : null;
    },
    createJwt: async(userId) => {
        var obj = {
            user: userId,
        };
        var token = jwt.sign(obj, config.SECRET, { expiresIn: '15m' });
        return token;
    },
    decodeJwt: async(token) => {
        var decoded = jwt.verify(token, config.SECRET);
        return decoded;
    }
});
