// Creates business logic controllers
// Dependencies:
// - services: The persistent data access services
module.exports = (services) => {
    var licensesBusinessLogic = require('./licenses')(services.licenses);
    var patientPrescriptionsBusinessLogic = require('./patientPrescriptions')(services.prescriptions,services.users,services.patients);
    var rolesBusinessLogic = require('./roles')(services.userRoles,services.roles);
    var specialtiesBusinessLogic = require('./specialties')(services.specialties,licensesBusinessLogic);
    var doctorsBusinessLogic = require('./doctors')(services.users,licensesBusinessLogic,specialtiesBusinessLogic);
    var doctorUsersBusinessLogic = require('./doctorUsers')(services.users,doctorsBusinessLogic,rolesBusinessLogic);
    var tableUsersBusinessLogic = require('./tableUsers')(services.users,rolesBusinessLogic); 

    return {
        doctors: doctorsBusinessLogic,
        doctorUsers: doctorUsersBusinessLogic,
        licenses: licensesBusinessLogic,
        patientPrescriptions: patientPrescriptionsBusinessLogic,
        roles: rolesBusinessLogic,
        specialties: specialtiesBusinessLogic,
        tableUsers: tableUsersBusinessLogic,
    }
};
