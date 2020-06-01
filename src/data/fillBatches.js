module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO fill_batches (prescription_fill, outputs, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.prescriptionFill, obj.outputs, obj.status, obj.originalId, obj.createdAt, obj.createdBy];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM fill_batches;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM fill_batches WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE fill_batches SET prescription_fill = ?, outputs = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.prescriptionFill, obj.outputs, obj.status, obj.originalId, obj.createdAt, obj.createdBy, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM fill_batches WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});