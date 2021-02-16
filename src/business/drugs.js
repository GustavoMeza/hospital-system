// Api controller for prescriptions
// Dependencies:
// - prescriptionDrugsService: The persistent data access service for prescriptions drugs
// - drugsService: The persistent data access service for drugs
module.exports = (prescriptionDrugsService, drugsService) => ({
    readByPrescriptionId : async (id,author) => {
        var prescriptionDrugs = await prescriptionDrugsService.readAll(author);
        
        var drugs = Promise.all(prescriptionDrugs
            .filter(prescriptionDrug => prescriptionDrug.prescription==id)
            .map(async (prescriptionDrug) => {
                drug = await drugsService.readById(prescriptionDrug.drug, author);
                return {
                    index:drug.id,
                    nombre:drug.name,
                    clave:drug.internal_code,
                    presentacion:drug.presentation,
                    empaque:'',
                    cantidad:prescriptionDrug.quantity,
                    dias:prescriptionDrug.days,
                    dosificacion:prescriptionDrug.dose,
                    viaAdministracion:prescriptionDrug.administration_route,
                };
            })
        );
        return drugs;
    },
   
});