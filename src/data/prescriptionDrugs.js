// Returns a module to perform CRUD operations on prescription_drugs
// Dependencies:
// - connector: A database connection pool
module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO prescription_drugs (prescription, drug, quantity, days, dose, frequency, administration_route, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.prescription, obj.drug, obj.quantity, obj.days, obj.dose, obj.frequency, obj.administration_route, obj.status, obj.original_id, obj.created_at, obj.created_by];
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
        var sql = "UPDATE prescription_drugs SET prescription = ?, drug = ?, quantity = ?, days = ?, dose = ?, frequency = ?, administration_route = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.prescription, obj.drug, obj.quantity, obj.days, obj.dose, obj.frequency, obj.administration_route, obj.status, obj.original_id, obj.created_at, obj.created_by, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM prescription_drugs WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
