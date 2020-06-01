module.exports = (authServices) => async (req, res, next) => {
    var bearerToken = req.headers["authorization"];
    if (!bearerToken) return res.status(401).send("Access denied. No token provided.");
    try {
        var match = bearerToken.match(/^Bearer (.*)$/);
        var token = match[1];
        var decoded = await authServices.decodeJwt(token);
        res.locals.author = decoded.user;
        res.locals.permissions = decoded.permissions;
        next();
    } catch (ex) {
        return res.status(400).send("Invalid Token");
    }
};
