// Frontend api controller for user list
// Dependencies:
// - tableUsersBusinessLogic: Business logic to manage table users
module.exports = (tableUsersBusinessLogic) => ({
    readAll : async (req, res, next) => {
        var author = res.locals.author;
        
        var result = await tableUsersBusinessLogic.readAll(author);

        res.send(result);
    },
});