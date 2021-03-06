// Instantiates the data access services and packs them together in a single object
// Dependencies:
// - connector: The database connection pool
module.exports = (connector) => ({
    users : require('./users')(connector),
    roles : require('./roles')(connector),
    permissions : require('./permissions')(connector),
    rolePermissions : require('./rolePermissions')(connector),
    userRoles : require('./userRoles')(connector),
    licenses : require('./licenses')(connector),
    specialties : require('./specialties')(connector),
    drugs : require('./drugs')(connector),
    inputs : require('./inputs')(connector),
    batches : require('./batches')(connector),
    purchases : require('./purchases')(connector),
    transfers : require('./transfers')(connector),
    outputs : require('./outputs')(connector),
    patients : require('./patients')(connector),
    prescriptions : require('./prescriptions')(connector),
    prescriptionDrugs : require('./prescriptionDrugs')(connector),
    prescriptionFills : require('./prescriptionFills')(connector),
    fillBatches : require('./fillBatches')(connector),
    prescriptionReturns : require('./prescriptionReturns')(connector),
});
