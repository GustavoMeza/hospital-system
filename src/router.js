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

    // certificates
    router.post('/api/certificates/', apiServices.certificates.create);
    router.get('/api/certificates/', apiServices.certificates.readAll);
    router.get('/api/certificates/:id', apiServices.certificates.readById);
    router.put('/api/certificates/', apiServices.certificates.update);
    router.delete('/api/certificates/:id', apiServices.certificates.delete);

    // specialtyDetail
    router.post('/api/specialtyDetail/', apiServices.specialtyDetail.create);
    router.get('/api/specialtyDetail/', apiServices.specialtyDetail.readAll);
    router.get('/api/specialtyDetail/:id', apiServices.specialtyDetail.readById);
    router.put('/api/specialtyDetail/', apiServices.specialtyDetail.update);
    router.delete('/api/specialtyDetail/:id', apiServices.specialtyDetail.delete);

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

    // purchaseDetails
    router.post('/api/purchaseDetails/', apiServices.purchaseDetails.create);
    router.get('/api/purchaseDetails/', apiServices.purchaseDetails.readAll);
    router.get('/api/purchaseDetails/:id', apiServices.purchaseDetails.readById);
    router.put('/api/purchaseDetails/', apiServices.purchaseDetails.update);
    router.delete('/api/purchaseDetails/:id', apiServices.purchaseDetails.delete);

    // transferDetails
    router.post('/api/transferDetails/', apiServices.transferDetails.create);
    router.get('/api/transferDetails/', apiServices.transferDetails.readAll);
    router.get('/api/transferDetails/:id', apiServices.transferDetails.readById);
    router.put('/api/transferDetails/', apiServices.transferDetails.update);
    router.delete('/api/transferDetails/:id', apiServices.transferDetails.delete);

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

    // prescriptionReturns
    router.post('/api/prescriptionReturns/', apiServices.prescriptionReturns.create);
    router.get('/api/prescriptionReturns/', apiServices.prescriptionReturns.readAll);
    router.get('/api/prescriptionReturns/:id', apiServices.prescriptionReturns.readById);
    router.put('/api/prescriptionReturns/', apiServices.prescriptionReturns.update);
    router.delete('/api/prescriptionReturns/:id', apiServices.prescriptionReturns.delete);

    return router;
};
