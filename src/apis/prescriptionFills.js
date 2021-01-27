// Api controller for prescriptionFills
// Dependencies:
// - prescriptionFillsService: The persistent data access service for prescriptionFills
module.exports = (prescriptionFillsService) => ({
    create : async (req, res, next) => {
        var obj = req.body;
        var author = res.locals.author;
        var result = await prescriptionFillsService.create(obj, author);
        res.send(result);
    },
    readAll : async (req, res, next) => {
        var author = res.locals.author;
        var result = await prescriptionFillsService.readAll(author);
        res.send(result);
    },
    readById : async (req, res, next) => {
        var id = req.params.id;
        var author = res.locals.author;
        var result = await prescriptionFillsService.readById(id, author);
        res.send(result);
    },
    update : async (req, res, next) => {
        var obj = req.body;
        var author = res.locals.author;
        var result = await prescriptionFillsService.update(obj, author);
        res.send(result);
    },
    delete : async (req, res, next) => {
        var id = req.params.id;
        var author = res.locals.author;
        var result = await prescriptionFillsService.delete(id, author);
        res.send(result);
    },
});