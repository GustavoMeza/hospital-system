// Api controller for prescriptions
// Dependencies:
// - prescriptionsService: The persistent data access service for prescriptions
module.exports = (prescriptionsService,usersService,patientsService) => ({
    get : async (req, res, next) => {
        var author = res.locals.author;
        var prescriptions = await prescriptionsService.readAll(author);
        var patients = await patientsService.readAll(author);
        var users = await usersService.readAll(author);
        var result=prescriptions.map((prescription)=>{
            doctor=users.find(user => user.id==prescription.doctor);
            patient=patients.find(patient => patient.id==prescription.patient);
            return {
                id: prescription.id,
                folio: prescription.internal_code,
                fecha: prescription.created_at,
                medico: `${doctor.first_name} ${doctor.last_name}`,
                paciente: `${patient.first_name} ${patient.last_name}`,
            };
        });
        res.send(result);
    },
});