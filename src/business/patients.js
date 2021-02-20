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
    },
    readAll : async (id,author)=>{

        var patient = await patientsService.readById(id, author);

        var result1={
            id: patient.id,
            nombre: patient.first_name,
            curp: patient.curp,
            edad: patient.birthdate, // To do: cambiar a edad
            sexo: patient.sex,
            domicilio: patient.address,
        }
        return  result1;
    }



});