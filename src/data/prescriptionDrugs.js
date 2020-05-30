module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO prescription_drugs (prescription, drug, quantity, dose, administration_route) VALUES (?, ?, ?, ?, ?);";
        var escapedValues = [obj.prescription, obj.drug, obj.quantity, obj.dose, obj.administrationRoute];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM prescription_drugs;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM prescription_drugs WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE prescription_drugs SET prescription = ?, drug = ?, quantity = ?, dose = ?, administration_route = ? WHERE id = ?";
        var escapedValues = [obj.prescription, obj.drug, obj.quantity, obj.dose, obj.administrationRoute, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE prescription_drugs SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
