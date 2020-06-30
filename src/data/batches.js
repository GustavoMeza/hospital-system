module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO batches (internal_code, input, drug, expires_on, quantity, lab, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.internal_code, obj.input, obj.drug, obj.expires_on, obj.quantity, obj.lab, obj.status, obj.original_id, obj.created_at, obj.created_by];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM batches;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM batches WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE batches SET internal_code = ?, input = ?, drug = ?, expires_on = ?, quantity = ?, lab = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.internal_code, obj.input, obj.drug, obj.expires_on, obj.quantity, obj.lab, obj.status, obj.original_id, obj.created_at, obj.created_by, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM batches WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
