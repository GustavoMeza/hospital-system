var factory = require('./factory');

// Creates API controllers to perform persistent CRUD operations
// Dependencies:
// - persistentServices: The persistent data access services
module.exports = (persistentServices) => ({
@table{    ^name : factory(persistentServices.^name),}
});
