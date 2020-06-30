module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO prescriptions (internal_code, patient, doctor, comments, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.internal_code, obj.patient, obj.doctor, obj.comments, obj.status, obj.original_id, obj.created_at, obj.created_by];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM prescriptions;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM prescriptions WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE prescriptions SET internal_code = ?, patient = ?, doctor = ?, comments = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.internal_code, obj.patient, obj.doctor, obj.comments, obj.status, obj.original_id, obj.created_at, obj.created_by, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM prescriptions WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
