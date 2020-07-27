// Returns API controllers to handle auth
// Dependencies:
// - authServices: The auth services
module.exports = (authServices) => ({

    // Controller to handle log in requests
    login: async (req, res) => {
        var username = req.body.username;
        var password = req.body.password;
        var userId = await authServices.validate(username, password);
        if(userId === null) {
            res.status(401).send("Invalid username-password");
        }
        var token = await authServices.createJwt(userId);
        res.json(token).send();
    },

    // Controller for the middleare to authenticate / authorize
    middleware: async (req, res, next) => {
        var bearerToken = req.headers["authorization"];
        if (!bearerToken) {
            return res.status(401).send("Access denied. No token provided.");
        }
        try {
            var match = bearerToken.match(/^Bearer (.*)$/);
            var token = match[1];
            var decoded = await authServices.decodeJwt(token);
            res.locals.author = decoded.user;
            next();
        } catch (ex) {
            return res.status(400).send("Invalid Token");
        }
    },
});
