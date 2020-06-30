module.exports = (persistentServices, prescriptionsService) => ({
    create : async (req,res) => {
        var obj = req.body;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result= await persistentServices.create(obj, prescriptionsService, author);
        res.send(result);
    },
    readAll : async (req,res) => {
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.readAll(prescriptionsService, author);
        res.send(result);
    },
    readById : async (req,res) => {
        var id = req.params.id;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.readById(id, prescriptionsService, author);
        res.send(result);
    },
    update : async (req,res) => {
        var obj = req.body;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.update(obj, prescriptionsService, author);
        res.send(result);
    },
    delete : async (req,res) => {
        var id = req.params.id;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.delete(id, prescriptionsService, author);
        res.send(result);
    },
});
