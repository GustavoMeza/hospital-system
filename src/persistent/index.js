var factory = require('./factory');

// Instantiates and packs together the persistent data access services
// Dependencies:
// - dataServices: The raw data access services
module.exports = (dataServices) => ({
    users : factory(dataServices.users),
    roles : factory(dataServices.roles),
    permissions : factory(dataServices.permissions),
    rolePermissions : factory(dataServices.rolePermissions),
    userRoles : factory(dataServices.userRoles),
    licenses : factory(dataServices.licenses),
    specialties : factory(dataServices.specialties),
    drugs : factory(dataServices.drugs),
    inputs : factory(dataServices.inputs),
    batches : factory(dataServices.batches),
    purchases : factory(dataServices.purchases),
    transfers : factory(dataServices.transfers),
    outputs : factory(dataServices.outputs),
    patients : factory(dataServices.patients),
    prescriptions : factory(dataServices.prescriptions),
    prescriptionDrugs : factory(dataServices.prescriptionDrugs),
    prescriptionFills : factory(dataServices.prescriptionFills),
    fillBatches : factory(dataServices.fillBatches),
    prescriptionReturns : factory(dataServices.prescriptionReturns),
});
