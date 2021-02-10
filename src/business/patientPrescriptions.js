// Business logic for patient prescriptions
// Dependencies:
// - prescriptionsService: The persistent data access service for prescriptions
// - usersService: The persistent data access service for users
// - patientsService: The persistend data access service for patients
module.exports = (prescriptionsService,usersService,patientsService) => ({
    readAll : async (author) => {
        var prescriptions = await prescriptionsService.readAll(author);
        var patientPrescriptions = await Promise.all(prescriptions.map(async (prescription) => {
            doctor = await usersService.readById(prescription.doctor,author);
            patient = await patientsService.readById(prescription.patient,author);
            return {
                id: prescription.id,
                folio: prescription.internal_code,
                fecha: prescription.created_at,
                medico: `${doctor.first_name} ${doctor.last_name}`,
                paciente: `${patient.first_name} ${patient.last_name}`,
            };
        }));
        return patientPrescriptions;
    },
});