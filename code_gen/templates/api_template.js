// Api controller for ^table
// Dependencies:
// - ^tableService: The persistent data access service for ^table
module.exports = (^tableService) => ({
    create : async (req, res, next) => {
        var obj = req.body;
        var author = res.locals.author;
        var result = await ^tableService.create(obj, author);
        res.send(result);
    },
    readAll : async (req, res, next) => {
        var author = res.locals.author;
        var result = await ^tableService.readAll(author);
        res.send(result);
    },
    readById : async (req, res, next) => {
        var id = req.params.id;
        var author = res.locals.author;
        var result = await ^tableService.readById(id, author);
        res.send(result);
    },
    update : async (req, res, next) => {
        var obj = req.body;
        var author = res.locals.author;
        var result = await ^tableService.update(obj, author);
        res.send(result);
    },
    delete : async (req, res, next) => {
        var id = req.params.id;
        var author = res.locals.author;
        var result = await ^tableService.delete(id, author);
        res.send(result);
    },
});