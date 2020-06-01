module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO transfer_details (input, document) VALUES (?, ?);";
        var escapedValues = [obj.input, obj.document];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM transfer_details;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM transfer_details WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE transfer_details SET input = ?, document = ? WHERE id = ?";
        var escapedValues = [obj.input, obj.document, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE transfer_details SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
