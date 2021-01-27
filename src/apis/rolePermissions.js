// Api controller for rolePermissions
// Dependencies:
// - rolePermissionsService: The persistent data access service for rolePermissions
module.exports = (rolePermissionsService) => ({
    create : async (req, res, next) => {
        var obj = req.body;
        var author = res.locals.author;
        var result = await rolePermissionsService.create(obj, author);
        res.send(result);
    },
    readAll : async (req, res, next) => {
        var author = res.locals.author;
        var result = await rolePermissionsService.readAll(author);
        res.send(result);
    },
    readById : async (req, res, next) => {
        var id = req.params.id;
        var author = res.locals.author;
        var result = await rolePermissionsService.readById(id, author);
        res.send(result);
    },
    update : async (req, res, next) => {
        var obj = req.body;
        var author = res.locals.author;
        var result = await rolePermissionsService.update(obj, author);
        res.send(result);
    },
    delete : async (req, res, next) => {
        var id = req.params.id;
        var author = res.locals.author;
        var result = await rolePermissionsService.delete(id, author);
        res.send(result);
    },
});