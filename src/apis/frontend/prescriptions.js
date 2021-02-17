// Frontend api controller for prescriptions
// Dependencies:
// - prescriptionsUsersBusinessLogic: Business logic to manage prescriptions
module.exports = (prescriptionsBusinessLogic) => ({
    readAll : async (req, res, next) => {
        var author = res.locals.author;

        var result = await prescriptionsBusinessLogic.readAll(author);

        res.send(result);
    },
    readById : async (req, res, next) => {
        var author = res.locals.author;
        var id = req.params.id;

        var result = await prescriptionsBusinessLogic.readById(id, author);

        res.send(result);
    },
});