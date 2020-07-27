var factory = require('./factory');

// Creates API controllers to perform persistent CRUD operations
// Dependencies:
// - persistentServices: The persistent data access services
module.exports = (persistentServices) => ({
    users : factory(persistentServices.users),
    roles : factory(persistentServices.roles),
    permissions : factory(persistentServices.permissions),
    rolePermissions : factory(persistentServices.rolePermissions),
    userRoles : factory(persistentServices.userRoles),
    licenses : factory(persistentServices.licenses),
    specialties : factory(persistentServices.specialties),
    drugs : factory(persistentServices.drugs),
    inputs : factory(persistentServices.inputs),
    batches : factory(persistentServices.batches),
    purchases : factory(persistentServices.purchases),
    transfers : factory(persistentServices.transfers),
    outputs : factory(persistentServices.outputs),
    patients : factory(persistentServices.patients),
    prescriptions : factory(persistentServices.prescriptions),
    prescriptionDrugs : factory(persistentServices.prescriptionDrugs),
    prescriptionFills : factory(persistentServices.prescriptionFills),
    fillBatches : factory(persistentServices.fillBatches),
    prescriptionReturns : factory(persistentServices.prescriptionReturns),
});
