module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO prescription_returns (prescription, batch, quantity) VALUES (?, ?, ?);";
        var escapedValues = [obj.prescription, obj.batch, obj.quantity];
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
        var sql = "UPDATE prescription_returns SET prescription = ?, batch = ?, quantity = ? WHERE id = ?";
        var escapedValues = [obj.prescription, obj.batch, obj.quantity, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE prescription_returns SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
