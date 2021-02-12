// Frontend api controller for prescriptions
// Dependencies:
// - prescriptionsUsersBusinessLogic: Business logic to manage prescriptions
module.exports = (prescriptionsBusinessLogic) => ({
    readById : async (req, res, next) => {
        var author = res.locals.author;
        var id = req.params.id;

        var result = await prescriptionsBusinessLogic.readById(id, author);

        res.send(result);
    },
});