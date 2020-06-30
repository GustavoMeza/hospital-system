module.exports = (persistentServices, fillBatchesService) => ({
    create : async (req,res) => {
        var obj = req.body;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result= await persistentServices.create(obj, fillBatchesService, author);
        res.send(result);
    },
    readAll : async (req,res) => {
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.readAll(fillBatchesService, author);
        res.send(result);
    },
    readById : async (req,res) => {
        var id = req.params.id;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.readById(id, fillBatchesService, author);
        res.send(result);
    },
    update : async (req,res) => {
        var obj = req.body;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.update(obj, fillBatchesService, author);
        res.send(result);
    },
    delete : async (req,res) => {
        var id = req.params.id;
        var author = res.locals.author;
        var permissions = res.locals.permissions;
        var result = await persistentServices.delete(id, fillBatchesService, author);
        res.send(result);
    },
});
