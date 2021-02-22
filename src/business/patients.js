// Business logic for patients
// Dependencies:
// - patientsService: The persistent data access service for patients
module.exports = (patientsService) => ({
    readById : async (id,author) => {
       
        var patient = await patientsService.readById(id, author);
        
        var result={
            id: patient.id,
            curp: patient.curp,
            nombre: patient.first_name,
            domicilio: patient.address,
            edad: patient.birthdate, // To do: cambiar a edad
            sexo: patient.sex,
        }

        return result;
    }
});