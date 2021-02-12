// Api controller for prescriptions
// Dependencies:
// - prescriptionsService: The persistent data access service for prescriptions
// - patientsBusinessLogic: Business logic to manage patients
// - doctorsBusinessLogic: Business logic to manage doctors
module.exports = (prescriptionService, patientsBusinessLogic, doctorsBusinessLogic) => ({
    readById : async (id,author) => {
        var prescription = await prescriptionService.readById(id, author);
        
        var result={
            id:prescription.id,
            folio:prescription.internal_code,
            fecha:prescription.created_at,
            paciente: await patientsBusinessLogic.readById(prescription.patient),
            medico: await doctorsBusinessLogic.readById(prescription.doctor),
            diagnostico: "",
            medicamentos: [],
            indicaciones: "",
        }

        return result;
    },
   
});