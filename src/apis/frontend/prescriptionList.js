// Frontend api controller for prescription list
// Dependencies:
// - patientPrescriptionsBusinessLogic: Business logic to manage patientPrescriptions
module.exports = (patientPrescriptionsBusinessLogic) => ({
    readAll : async (req, res, next) => {
        var author = res.locals.author;
        
        var result = await patientPrescriptionsBusinessLogic.readAll(author);

        res.send(result);
    },
});