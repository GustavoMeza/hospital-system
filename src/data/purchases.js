module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO purchases (input, invoice, sanitary_license, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.input, obj.invoice, obj.sanitary_license, obj.status, obj.original_id, obj.created_at, obj.created_by];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM purchases;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM purchases WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE purchases SET input = ?, invoice = ?, sanitary_license = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.input, obj.invoice, obj.sanitary_license, obj.status, obj.original_id, obj.created_at, obj.created_by, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM purchases WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
