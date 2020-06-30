module.exports = (apiServices) => {
    var router = require('express').Router();

    // api
    
    // users
    router.post('/api/users/', apiServices.users.create);
    router.get('/api/users/', apiServices.users.readAll);
    router.get('/api/users/:id', apiServices.users.readById);
    router.put('/api/users/', apiServices.users.update);
    router.delete('/api/users/:id', apiServices.users.delete);

    // roles
    router.post('/api/roles/', apiServices.roles.create);
    router.get('/api/roles/', apiServices.roles.readAll);
    router.get('/api/roles/:id', apiServices.roles.readById);
    router.put('/api/roles/', apiServices.roles.update);
    router.delete('/api/roles/:id', apiServices.roles.delete);

    // permissions
    router.post('/api/permissions/', apiServices.permissions.create);
    router.get('/api/permissions/', apiServices.permissions.readAll);
    router.get('/api/permissions/:id', apiServices.permissions.readById);
    router.put('/api/permissions/', apiServices.permissions.update);
    router.delete('/api/permissions/:id', apiServices.permissions.delete);

    // rolePermissions
    router.post('/api/rolePermissions/', apiServices.rolePermissions.create);
    router.get('/api/rolePermissions/', apiServices.rolePermissions.readAll);
    router.get('/api/rolePermissions/:id', apiServices.rolePermissions.readById);
    router.put('/api/rolePermissions/', apiServices.rolePermissions.update);
    router.delete('/api/rolePermissions/:id', apiServices.rolePermissions.delete);

    // userRoles
    router.post('/api/userRoles/', apiServices.userRoles.create);
    router.get('/api/userRoles/', apiServices.userRoles.readAll);
    router.get('/api/userRoles/:id', apiServices.userRoles.readById);
    router.put('/api/userRoles/', apiServices.userRoles.update);
    router.delete('/api/userRoles/:id', apiServices.userRoles.delete);

    // licenses
    router.post('/api/licenses/', apiServices.licenses.create);
    router.get('/api/licenses/', apiServices.licenses.readAll);
    router.get('/api/licenses/:id', apiServices.licenses.readById);
    router.put('/api/licenses/', apiServices.licenses.update);
    router.delete('/api/licenses/:id', apiServices.licenses.delete);

    // specialties
    router.post('/api/specialties/', apiServices.specialties.create);
    router.get('/api/specialties/', apiServices.specialties.readAll);
    router.get('/api/specialties/:id', apiServices.specialties.readById);
    router.put('/api/specialties/', apiServices.specialties.update);
    router.delete('/api/specialties/:id', apiServices.specialties.delete);

    // drugs
    router.post('/api/drugs/', apiServices.drugs.create);
    router.get('/api/drugs/', apiServices.drugs.readAll);
    router.get('/api/drugs/:id', apiServices.drugs.readById);
    router.put('/api/drugs/', apiServices.drugs.update);
    router.delete('/api/drugs/:id', apiServices.drugs.delete);

    // inputs
    router.post('/api/inputs/', apiServices.inputs.create);
    router.get('/api/inputs/', apiServices.inputs.readAll);
    router.get('/api/inputs/:id', apiServices.inputs.readById);
    router.put('/api/inputs/', apiServices.inputs.update);
    router.delete('/api/inputs/:id', apiServices.inputs.delete);

    // batches
    router.post('/api/batches/', apiServices.batches.create);
    router.get('/api/batches/', apiServices.batches.readAll);
    router.get('/api/batches/:id', apiServices.batches.readById);
    router.put('/api/batches/', apiServices.batches.update);
    router.delete('/api/batches/:id', apiServices.batches.delete);

    // purchases
    router.post('/api/purchases/', apiServices.purchases.create);
    router.get('/api/purchases/', apiServices.purchases.readAll);
    router.get('/api/purchases/:id', apiServices.purchases.readById);
    router.put('/api/purchases/', apiServices.purchases.update);
    router.delete('/api/purchases/:id', apiServices.purchases.delete);

    // transfers
    router.post('/api/transfers/', apiServices.transfers.create);
    router.get('/api/transfers/', apiServices.transfers.readAll);
    router.get('/api/transfers/:id', apiServices.transfers.readById);
    router.put('/api/transfers/', apiServices.transfers.update);
    router.delete('/api/transfers/:id', apiServices.transfers.delete);

    // outputs
    router.post('/api/outputs/', apiServices.outputs.create);
    router.get('/api/outputs/', apiServices.outputs.readAll);
    router.get('/api/outputs/:id', apiServices.outputs.readById);
    router.put('/api/outputs/', apiServices.outputs.update);
    router.delete('/api/outputs/:id', apiServices.outputs.delete);

    // patients
    router.post('/api/patients/', apiServices.patients.create);
    router.get('/api/patients/', apiServices.patients.readAll);
    router.get('/api/patients/:id', apiServices.patients.readById);
    router.put('/api/patients/', apiServices.patients.update);
    router.delete('/api/patients/:id', apiServices.patients.delete);

    // prescriptions
    router.post('/api/prescriptions/', apiServices.prescriptions.create);
    router.get('/api/prescriptions/', apiServices.prescriptions.readAll);
    router.get('/api/prescriptions/:id', apiServices.prescriptions.readById);
    router.put('/api/prescriptions/', apiServices.prescriptions.update);
    router.delete('/api/prescriptions/:id', apiServices.prescriptions.delete);

    // prescriptionDrugs
    router.post('/api/prescriptionDrugs/', apiServices.prescriptionDrugs.create);
    router.get('/api/prescriptionDrugs/', apiServices.prescriptionDrugs.readAll);
    router.get('/api/prescriptionDrugs/:id', apiServices.prescriptionDrugs.readById);
    router.put('/api/prescriptionDrugs/', apiServices.prescriptionDrugs.update);
    router.delete('/api/prescriptionDrugs/:id', apiServices.prescriptionDrugs.delete);

    // prescriptionFills
    router.post('/api/prescriptionFills/', apiServices.prescriptionFills.create);
    router.get('/api/prescriptionFills/', apiServices.prescriptionFills.readAll);
    router.get('/api/prescriptionFills/:id', apiServices.prescriptionFills.readById);
    router.put('/api/prescriptionFills/', apiServices.prescriptionFills.update);
    router.delete('/api/prescriptionFills/:id', apiServices.prescriptionFills.delete);

    // fillBatches
    router.post('/api/fillBatches/', apiServices.fillBatches.create);
    router.get('/api/fillBatches/', apiServices.fillBatches.readAll);
    router.get('/api/fillBatches/:id', apiServices.fillBatches.readById);
    router.put('/api/fillBatches/', apiServices.fillBatches.update);
    router.delete('/api/fillBatches/:id', apiServices.fillBatches.delete);

    // prescriptionReturns
    router.post('/api/prescriptionReturns/', apiServices.prescriptionReturns.create);
    router.get('/api/prescriptionReturns/', apiServices.prescriptionReturns.readAll);
    router.get('/api/prescriptionReturns/:id', apiServices.prescriptionReturns.readById);
    router.put('/api/prescriptionReturns/', apiServices.prescriptionReturns.update);
    router.delete('/api/prescriptionReturns/:id', apiServices.prescriptionReturns.delete);

    return router;
};
