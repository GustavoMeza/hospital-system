var crypto = require('crypto');
var jwt = require('jsonwebtoken');

// Salt generator
var getSalt = () => {
    var salt = crypto.randomBytes(16).toString('hex');
    return salt;
};

// Hash generator
// Arguments:
// - password: Password to be hashed
// - salt: Salt for the hash
var getHash = (password, salt) => {
    // This algorithm is slow, which is great because it decreases
    // the probability of a succesful bruteforce attack
    var hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash;
};

// Auth services to deal with cryptography and security protocols
// Dependencies:
// - persistentServices: Persistent data access services to fetch users
// - config: Authentication configuration object for secrets
module.exports = (persistentServices, config) => ({

    // Validates a username password pair
    // Returns:
    // - user id if the validation was succesfull
    // - null otherwis
    // Arguments:
    // - username: the username
    // - password: the password to be tested
    validate: async (username, password) => {
        var user = (await persistentServices.users.readAll(null))
            .find((user) => user.username == username);
        var hash = getHash(password, user.salt);
        return user.hash == hash ? user.id : null;
    },

    // Creates a JWT
    // Returns:
    // - The token
    // Arguments:
    // - userId: The id of the user to who we will grant a token
    createJwt: async(userId) => {
        var obj = {
            user: userId,
        };
        var token = jwt.sign(obj, config.SECRET, { expiresIn: '15m' });
        return token;
    },

    // Decodes a JWT
    // Returns:
    // - The decoded object
    // Arguments:
    // - token: The token to be decoded
    decodeJwt: async(token) => {
        var decoded = jwt.verify(token, config.SECRET);
        return decoded;
    }
});
