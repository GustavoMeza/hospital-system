module.exports = (persistentServices, inputsService) => ({
    create : async (req,res) => {
        var obj = req.body;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result= await persistentServices.create(obj, inputsService, author);
        res.send(result);
    },
    readAll : async (req,res) => {
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.readAll(inputsService, author);
        res.send(result);
    },
    readById : async (req,res) => {
        var id = req.params.id;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.readById(id, inputsService, author);
        res.send(result);
    },
    update : async (req,res) => {
        var obj = req.body;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.update(obj, inputsService, author);
        res.send(result);
    },
    delete : async (req,res) => {
        var id = req.params.id;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.delete(id, inputsService, author);
        res.send(result);
    },
});
