module.exports = (connector) => ({
    create: (obj) => {
        var sql = "INSERT INTO prescription_fills (prescription, receiver_type, receiver_name, receiver_id_type, receiver_id_number, status, original_id, created_at, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
        var escapedValues = [obj.prescription, obj.receiverType, obj.receiverName, obj.receiverIdType, obj.receiverIdNumber, obj.status, obj.originalId, obj.createdAt, obj.createdBy];
        return connector.execute(sql, escapedValues);
    },
    readAll: () => {
        var sql = "SELECT * FROM prescription_fills;";
        var escapedValues = []
        return connector.execute(sql, escapedValues);
    },
    readById: (id) => {
        var sql = "SELECT * FROM prescription_fills WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
    update: (obj) => {
        var sql = "UPDATE prescription_fills SET prescription = ?, receiver_type = ?, receiver_name = ?, receiver_id_type = ?, receiver_id_number = ?, status = ?, original_id = ?, created_at = ?, created_by = ? WHERE id = ?";
        var escapedValues = [obj.prescription, obj.receiverType, obj.receiverName, obj.receiverIdType, obj.receiverIdNumber, obj.status, obj.originalId, obj.createdAt, obj.createdBy, obj.id];
        return connector.execute(sql, escapedValues);
    },
    delete: (id) => {
        var sql = "DELETE FROM prescription_fills WHERE id=?";
        var escapedValues = [id];
        return connector.execute(sql, escapedValues);
    },
});
