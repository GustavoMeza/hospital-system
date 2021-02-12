// Business logic for doctors
// Dependencies:
// - usersService: The persistent data access service for users
// - licensesBusinessLogic: Business logic to manage licenses
// - specialtiesBusinessLogic: Business logic to manage specialties
module.exports = (patientsService) => ({
    readById : async (id,author) => {
       
        var patient = await patientsService.readById(id, author);
        
        //console.log(Prescription);
        var result={
            
            id: patient.id,
            curp: patient.curp,
            nombre: patient.first_name,
            domicilio: patient.address,
            edad: patient.birthdate,//cambiar a edad
            sexo: patient.sex,
            piso: patient.floor,
            cama: patient.bed,
            diagnostico: patient.diagnostic,
            status: patient.status,
            id_original: patient.original_id,
            fecha_creacion: patient.created_at,
            creado_por: patient.created_by,
            

        }
        return result;
    }
});