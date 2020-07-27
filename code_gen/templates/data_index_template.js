// Instantiates the data access services and packs them together in a single object
// Dependencies:
// - connector: The database connection pool
module.exports = (connector) => ({
@table{    ^name : require('./^name')(connector),}
});
