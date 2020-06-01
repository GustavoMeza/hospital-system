module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO purchase_details (input, invoice, sanitary_license) VALUES (?, ?, ?);";
        var escapedValues = [obj.input, obj.invoice, obj.sanitaryLicense];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM purchase_details;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM purchase_details WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE purchase_details SET input = ?, invoice = ?, sanitary_license = ? WHERE id = ?";
        var escapedValues = [obj.input, obj.invoice, obj.sanitaryLicense, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE purchase_details SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
