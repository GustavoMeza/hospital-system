// Frontend api controller for doctors
// Dependencies:
// - doctorUsersBusinessLogic: Business logic to manage doctor users
module.exports = (doctorUsersBusinessLogic) => ({
    readById : async (req, res, next) => {
        var author = res.locals.author;
        var id = req.params.id;

        var result = await doctorUsersBusinessLogic.readById(id, author);

        res.send(result);
    },
});