var HttpError = require('http-errors')

// Returns API controllers to handle auth
// Dependencies:
// - authServices: The auth services
module.exports = (authServices) => ({

    // Controller to handle log in requests
    login: async (req, res, next) => {
        var username = req.body.username;
        var password = req.body.password;
        var userId = await authServices.validate(username, password);
        if(userId === null) {
            throw HttpError(401, "Invalid username or password");
        }
        var token = await authServices.createJwt(userId);
        res.json(token).send();
    },

    // Controller for the middleare to authenticate / authorize
    middleware: async (req, res, next) => {
        var bearerToken = req.headers["authorization"];
        if (!bearerToken) {
            throw HttpError(401, "Authorization required");
        }
        try {
            var match = bearerToken.match(/^Bearer (.*)$/);
            var token = match[1];
            var decoded = await authServices.decodeJwt(token);
            res.locals.author = decoded.user;
            next();
        } catch (ex) {
            throw HttpError(400, "Invalid Token");
        }
    },
});
