// Creates API controllers
// Dependencies:
// - persistentServices: The persistent data access services
module.exports = (persistentServices) => ({
    users : require('./users')(persistentServices.users),
    roles : require('./roles')(persistentServices.roles),
    permissions : require('./permissions')(persistentServices.permissions),
    rolePermissions : require('./rolePermissions')(persistentServices.rolePermissions),
    userRoles : require('./userRoles')(persistentServices.userRoles),
    licenses : require('./licenses')(persistentServices.licenses),
    specialties : require('./specialties')(persistentServices.specialties),
    drugs : require('./drugs')(persistentServices.drugs),
    inputs : require('./inputs')(persistentServices.inputs),
    batches : require('./batches')(persistentServices.batches),
    purchases : require('./purchases')(persistentServices.purchases),
    transfers : require('./transfers')(persistentServices.transfers),
    outputs : require('./outputs')(persistentServices.outputs),
    patients : require('./patients')(persistentServices.patients),
    prescriptions : require('./prescriptions')(persistentServices.prescriptions),
    prescriptionDrugs : require('./prescriptionDrugs')(persistentServices.prescriptionDrugs),
    prescriptionFills : require('./prescriptionFills')(persistentServices.prescriptionFills),
    fillBatches : require('./fillBatches')(persistentServices.fillBatches),
    prescriptionReturns : require('./prescriptionReturns')(persistentServices.prescriptionReturns),
    frontendPrescriptionList : require('./frontend/prescriptionList')(persistentServices.prescriptions,persistentServices.users,persistentServices.patients),
    frontendUserList : require('./frontend/userList')(persistentServices.users,persistentServices.userRoles,persistentServices.roles),
    frontendDoctors: require('./frontend/doctors')(persistentServices.users,persistentServices.licenses,persistentServices.specialties,persistentServices.userRoles,persistentServices.roles),
});
