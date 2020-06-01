var crypto = require('crypto');
var getSalt = () => {
    var salt = crypto.randomBytes(16).toString('hex');
    return salt;
};
var getHash = (password, salt) => {
    var hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash;
};
module.exports = (businessService) => ({
    validate: async (username, password) => {
        var user = await businessService.findUserByUsername(username, null);
        var hash = getHash(password, user.salt);
        return user.hash == hash;
    },
});
