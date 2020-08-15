var express = require('express');

// Configures the routing flow of the application
// Dependencies:
// - dataApis: The API controllers for performing CRUD operations
// - authApis: The API controllers for performing Auth operations
module.exports = (cors, dataApis, authApis) => {
    app = express();

    // Parse json objects
    app.use(express.json());

    // CORS
    app.use(cors);
    
    //Auth API

    // Log in end point
    app.post('/login/', authApis.login);

    // Require and process authentication 
    app.use('/api/', authApis.middleware);

    // Data API
    
    // users
    app.post('/api/users/', dataApis.users.create);
    app.get('/api/users/', dataApis.users.readAll);
    app.get('/api/users/:id', dataApis.users.readById);
    app.put('/api/users/', dataApis.users.update);
    app.delete('/api/users/:id', dataApis.users.delete);

    // roles
    app.post('/api/roles/', dataApis.roles.create);
    app.get('/api/roles/', dataApis.roles.readAll);
    app.get('/api/roles/:id', dataApis.roles.readById);
    app.put('/api/roles/', dataApis.roles.update);
    app.delete('/api/roles/:id', dataApis.roles.delete);

    // permissions
    app.post('/api/permissions/', dataApis.permissions.create);
    app.get('/api/permissions/', dataApis.permissions.readAll);
    app.get('/api/permissions/:id', dataApis.permissions.readById);
    app.put('/api/permissions/', dataApis.permissions.update);
    app.delete('/api/permissions/:id', dataApis.permissions.delete);

    // rolePermissions
    app.post('/api/rolePermissions/', dataApis.rolePermissions.create);
    app.get('/api/rolePermissions/', dataApis.rolePermissions.readAll);
    app.get('/api/rolePermissions/:id', dataApis.rolePermissions.readById);
    app.put('/api/rolePermissions/', dataApis.rolePermissions.update);
    app.delete('/api/rolePermissions/:id', dataApis.rolePermissions.delete);

    // userRoles
    app.post('/api/userRoles/', dataApis.userRoles.create);
    app.get('/api/userRoles/', dataApis.userRoles.readAll);
    app.get('/api/userRoles/:id', dataApis.userRoles.readById);
    app.put('/api/userRoles/', dataApis.userRoles.update);
    app.delete('/api/userRoles/:id', dataApis.userRoles.delete);

    // licenses
    app.post('/api/licenses/', dataApis.licenses.create);
    app.get('/api/licenses/', dataApis.licenses.readAll);
    app.get('/api/licenses/:id', dataApis.licenses.readById);
    app.put('/api/licenses/', dataApis.licenses.update);
    app.delete('/api/licenses/:id', dataApis.licenses.delete);

    // specialties
    app.post('/api/specialties/', dataApis.specialties.create);
    app.get('/api/specialties/', dataApis.specialties.readAll);
    app.get('/api/specialties/:id', dataApis.specialties.readById);
    app.put('/api/specialties/', dataApis.specialties.update);
    app.delete('/api/specialties/:id', dataApis.specialties.delete);

    // drugs
    app.post('/api/drugs/', dataApis.drugs.create);
    app.get('/api/drugs/', dataApis.drugs.readAll);
    app.get('/api/drugs/:id', dataApis.drugs.readById);
    app.put('/api/drugs/', dataApis.drugs.update);
    app.delete('/api/drugs/:id', dataApis.drugs.delete);

    // inputs
    app.post('/api/inputs/', dataApis.inputs.create);
    app.get('/api/inputs/', dataApis.inputs.readAll);
    app.get('/api/inputs/:id', dataApis.inputs.readById);
    app.put('/api/inputs/', dataApis.inputs.update);
    app.delete('/api/inputs/:id', dataApis.inputs.delete);

    // batches
    app.post('/api/batches/', dataApis.batches.create);
    app.get('/api/batches/', dataApis.batches.readAll);
    app.get('/api/batches/:id', dataApis.batches.readById);
    app.put('/api/batches/', dataApis.batches.update);
    app.delete('/api/batches/:id', dataApis.batches.delete);

    // purchases
    app.post('/api/purchases/', dataApis.purchases.create);
    app.get('/api/purchases/', dataApis.purchases.readAll);
    app.get('/api/purchases/:id', dataApis.purchases.readById);
    app.put('/api/purchases/', dataApis.purchases.update);
    app.delete('/api/purchases/:id', dataApis.purchases.delete);

    // transfers
    app.post('/api/transfers/', dataApis.transfers.create);
    app.get('/api/transfers/', dataApis.transfers.readAll);
    app.get('/api/transfers/:id', dataApis.transfers.readById);
    app.put('/api/transfers/', dataApis.transfers.update);
    app.delete('/api/transfers/:id', dataApis.transfers.delete);

    // outputs
    app.post('/api/outputs/', dataApis.outputs.create);
    app.get('/api/outputs/', dataApis.outputs.readAll);
    app.get('/api/outputs/:id', dataApis.outputs.readById);
    app.put('/api/outputs/', dataApis.outputs.update);
    app.delete('/api/outputs/:id', dataApis.outputs.delete);

    // patients
    app.post('/api/patients/', dataApis.patients.create);
    app.get('/api/patients/', dataApis.patients.readAll);
    app.get('/api/patients/:id', dataApis.patients.readById);
    app.put('/api/patients/', dataApis.patients.update);
    app.delete('/api/patients/:id', dataApis.patients.delete);

    // prescriptions
    app.post('/api/prescriptions/', dataApis.prescriptions.create);
    app.get('/api/prescriptions/', dataApis.prescriptions.readAll);
    app.get('/api/prescriptions/:id', dataApis.prescriptions.readById);
    app.put('/api/prescriptions/', dataApis.prescriptions.update);
    app.delete('/api/prescriptions/:id', dataApis.prescriptions.delete);

    // prescriptionDrugs
    app.post('/api/prescriptionDrugs/', dataApis.prescriptionDrugs.create);
    app.get('/api/prescriptionDrugs/', dataApis.prescriptionDrugs.readAll);
    app.get('/api/prescriptionDrugs/:id', dataApis.prescriptionDrugs.readById);
    app.put('/api/prescriptionDrugs/', dataApis.prescriptionDrugs.update);
    app.delete('/api/prescriptionDrugs/:id', dataApis.prescriptionDrugs.delete);

    // prescriptionFills
    app.post('/api/prescriptionFills/', dataApis.prescriptionFills.create);
    app.get('/api/prescriptionFills/', dataApis.prescriptionFills.readAll);
    app.get('/api/prescriptionFills/:id', dataApis.prescriptionFills.readById);
    app.put('/api/prescriptionFills/', dataApis.prescriptionFills.update);
    app.delete('/api/prescriptionFills/:id', dataApis.prescriptionFills.delete);

    // fillBatches
    app.post('/api/fillBatches/', dataApis.fillBatches.create);
    app.get('/api/fillBatches/', dataApis.fillBatches.readAll);
    app.get('/api/fillBatches/:id', dataApis.fillBatches.readById);
    app.put('/api/fillBatches/', dataApis.fillBatches.update);
    app.delete('/api/fillBatches/:id', dataApis.fillBatches.delete);

    // prescriptionReturns
    app.post('/api/prescriptionReturns/', dataApis.prescriptionReturns.create);
    app.get('/api/prescriptionReturns/', dataApis.prescriptionReturns.readAll);
    app.get('/api/prescriptionReturns/:id', dataApis.prescriptionReturns.readById);
    app.put('/api/prescriptionReturns/', dataApis.prescriptionReturns.update);
    app.delete('/api/prescriptionReturns/:id', dataApis.prescriptionReturns.delete);

    return app;
};
