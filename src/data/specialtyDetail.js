module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO specialty_detail (certificate, specialty) VALUES (?, ?);";
        var escapedValues = [obj.certificate, obj.specialty];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM specialty_detail;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM specialty_detail WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE specialty_detail SET certificate = ?, specialty = ? WHERE id = ?";
        var escapedValues = [obj.certificate, obj.specialty, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "UPDATE specialty_detail SET is_deleted = 1 WHERE id = ?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
