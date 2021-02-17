// Api controller for prescriptions
// Dependencies:
// - prescriptionsService: The persistent data access service for prescriptions
// - patientsBusinessLogic: Business logic to manage patients
// - doctorsBusinessLogic: Business logic to manage doctors
// - drugsBusinessLogic: Business logic to manage doctors
module.exports = (prescriptionService, patientsBusinessLogic, doctorsBusinessLogic, drugsBusinessLogic) => {
    var wrapPresctiption = async (prescription) => ({
        id:prescription.id,
        folio:prescription.internal_code,
        fecha:prescription.created_at,
        paciente: await patientsBusinessLogic.readById(prescription.patient),
        medico: await doctorsBusinessLogic.readById(prescription.doctor),
        diagnostico: "",
        medicamentos: await drugsBusinessLogic.readByPrescriptionId(prescription.id),
        indicaciones: prescription.comments,
    });
    var readById = async (id,author) => {
        var prescription = await prescriptionService.readById(id, author);
        
        var wrappedPrescription = await wrapPresctiption(prescription);
        return wrappedPrescription;
    };
    var readAll = async (author) => {
        var prescriptions = await prescriptionService.readAll(author);

        var wrappedPrescriptions = await Promise.all(prescriptions.map(wrapPresctiption));
        return wrappedPrescriptions;
    }
    var readByUserId = async (id,author) => {
        var prescriptions = await prescriptionService.readAll(author);

        var myPrescriptions = prescriptions
            .filter(prescription => prescription.doctor==id);
        
        var wrappedPrescriptions = await Promise.all(myPrescriptions.map(wrapPresctiption));

        return wrappedPrescriptions;
        
    }
    return {
        readAll: readAll,
        readById: readById,
        readByUserId: readByUserId,
    }
};