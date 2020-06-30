module.exports = (persistentServices, rolesService) => ({
    create : async (req,res) => {
        var obj = req.body;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result= await persistentServices.create(obj, rolesService, author);
        res.send(result);
    },
    readAll : async (req,res) => {
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.readAll(rolesService, author);
        res.send(result);
    },
    readById : async (req,res) => {
        var id = req.params.id;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.readById(id, rolesService, author);
        res.send(result);
    },
    update : async (req,res) => {
        var obj = req.body;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.update(obj, rolesService, author);
        res.send(result);
    },
    delete : async (req,res) => {
        var id = req.params.id;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.delete(id, rolesService, author);
        res.send(result);
    },
});
