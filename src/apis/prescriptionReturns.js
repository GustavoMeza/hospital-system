// Api controller for prescriptionReturns
// Dependencies:
// - prescriptionReturnsService: The persistent data access service for prescriptionReturns
module.exports = (prescriptionReturnsService) => ({
    create : async (req, res, next) => {
        var obj = req.body;
        var author = res.locals.author;
        var result = await prescriptionReturnsService.create(obj, author);
        res.send(result);
    },
    readAll : async (req, res, next) => {
        var author = res.locals.author;
        var result = await prescriptionReturnsService.readAll(author);
        res.send(result);
    },
    readById : async (req, res, next) => {
        var id = req.params.id;
        var author = res.locals.author;
        var result = await prescriptionReturnsService.readById(id, author);
        res.send(result);
    },
    update : async (req, res, next) => {
        var obj = req.body;
        var author = res.locals.author;
        var result = await prescriptionReturnsService.update(obj, author);
        res.send(result);
    },
    delete : async (req, res, next) => {
        var id = req.params.id;
        var author = res.locals.author;
        var result = await prescriptionReturnsService.delete(id, author);
        res.send(result);
    },
});