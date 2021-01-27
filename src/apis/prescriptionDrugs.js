// Api controller for prescriptionDrugs
// Dependencies:
// - prescriptionDrugsService: The persistent data access service for prescriptionDrugs
module.exports = (prescriptionDrugsService) => ({
    create : async (req, res, next) => {
        var obj = req.body;
        var author = res.locals.author;
        var result = await prescriptionDrugsService.create(obj, author);
        res.send(result);
    },
    readAll : async (req, res, next) => {
        var author = res.locals.author;
        var result = await prescriptionDrugsService.readAll(author);
        res.send(result);
    },
    readById : async (req, res, next) => {
        var id = req.params.id;
        var author = res.locals.author;
        var result = await prescriptionDrugsService.readById(id, author);
        res.send(result);
    },
    update : async (req, res, next) => {
        var obj = req.body;
        var author = res.locals.author;
        var result = await prescriptionDrugsService.update(obj, author);
        res.send(result);
    },
    delete : async (req, res, next) => {
        var id = req.params.id;
        var author = res.locals.author;
        var result = await prescriptionDrugsService.delete(id, author);
        res.send(result);
    },
});