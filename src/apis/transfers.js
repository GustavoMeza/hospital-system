// Api controller for transfers
// Dependencies:
// - transfersService: The persistent data access service for transfers
module.exports = (transfersService) => ({
    create : async (req, res, next) => {
        var obj = req.body;
        var author = res.locals.author;
        var result = await transfersService.create(obj, author);
        res.send(result);
    },
    readAll : async (req, res, next) => {
        var author = res.locals.author;
        var result = await transfersService.readAll(author);
        res.send(result);
    },
    readById : async (req, res, next) => {
        var id = req.params.id;
        var author = res.locals.author;
        var result = await transfersService.readById(id, author);
        res.send(result);
    },
    update : async (req, res, next) => {
        var obj = req.body;
        var author = res.locals.author;
        var result = await transfersService.update(obj, author);
        res.send(result);
    },
    delete : async (req, res, next) => {
        var id = req.params.id;
        var author = res.locals.author;
        var result = await transfersService.delete(id, author);
        res.send(result);
    },
});