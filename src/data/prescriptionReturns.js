module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO prescription_returns (prescription, batch, quantity, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.prescription, obj.batch, obj.quantity, obj.status, obj.originalId, obj.createdAt, obj.createdBy];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM prescription_returns;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM prescription_returns WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE prescription_returns SET prescription = ?, batch = ?, quantity = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.prescription, obj.batch, obj.quantity, obj.status, obj.originalId, obj.createdAt, obj.createdBy, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM prescription_returns WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
