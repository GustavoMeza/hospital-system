module.exports = (businessServices) => ({
    route: '/api/users/',
    method: 'get',
    auth: (req, res, next) => {
        if(res.locals.permissions.includes(10)) next();
        else res.status(401).send();
    },
    controller: async (req, res) => {
        var author = res.locals.author;
        var allUsers = await businessServices.findAllActiveUsers(author);
        res.send(allUsers);
    }
});
