// Api controller for users
// Dependencies:
// - usersService: The persistent data access service for users
module.exports = (prescriptionService, patientsBusinessLogic, doctorsBusinessLogic) => ({
    readById : async (id,author) => {
        var Prescription = await prescriptionService.readById(id, author);
        
        console.log(Prescription);
        var result={
            id:Prescription.id,
            folio:Prescription.internal_code,
            fecha:Prescription.created_at,
            paciente: await patientsBusinessLogic.readById(Prescription.patient),
            medico: await doctorsBusinessLogic.readById(Prescription.doctor),
            diagnostico: "",
            medicamentos: [],
            indicaciones: "",


        }
        return result;


        
    },
   
});