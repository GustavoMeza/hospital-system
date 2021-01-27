// Api controller for roles
// Dependencies:
// - rolesService: The persistent data access service for roles
module.exports = (rolesService) => ({
    create : async (req, res, next) => {
        var obj = req.body;
        var author = res.locals.author;
        var result = await rolesService.create(obj, author);
        res.send(result);
    },
    readAll : async (req, res, next) => {
        var author = res.locals.author;
        var result = await rolesService.readAll(author);
        res.send(result);
    },
    readById : async (req, res, next) => {
        var id = req.params.id;
        var author = res.locals.author;
        var result = await rolesService.readById(id, author);
        res.send(result);
    },
    update : async (req, res, next) => {
        var obj = req.body;
        var author = res.locals.author;
        var result = await rolesService.update(obj, author);
        res.send(result);
    },
    delete : async (req, res, next) => {
        var id = req.params.id;
        var author = res.locals.author;
        var result = await rolesService.delete(id, author);
        res.send(result);
    },
});