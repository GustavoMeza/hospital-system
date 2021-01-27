// Creates API controllers
// Dependencies:
// - persistentServices: The persistent data access services
module.exports = (persistentServices) => ({
@table{    ^name : require('./^name')(persistentServices.^name),}
});
