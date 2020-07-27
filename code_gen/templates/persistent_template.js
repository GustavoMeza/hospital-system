var factory = require('./factory');

// Instantiates and packs together the persistent data access services
// Dependencies:
// - dataServices: The raw data access services
module.exports = (dataServices) => ({
@table{    ^name : factory(dataServices.^name),}
});
