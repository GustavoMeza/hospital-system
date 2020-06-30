module.exports = () => ({
    create: async (obj, dataService, author) => {
        obj.status = 'active';
        obj.original_id = null;
        obj.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
        obj.created_by = author;
        var rows, fields;
        [rows, fields] = await dataService.create(obj);
        obj.id = rows.insertId;
        obj.original_id = rows.insertId;
        [rows, fields] = await dataService.update(obj);
        var result = rows[0];
        return result;
    },
    readAll: async (dataService, author) => {
        var rows, fields;
        [rows, fields] = await dataService.readAll();
        var result = rows.filter((row) => row.status == 'active');
        return result;
    },
    readById: async (id, dataService, author) => {
        var rows, fields;
        [rows, fields] = await dataService.readById(id);
        var result = rows.length>0 && rows[0].status == 'active' ? rows[0] : null;
        return result;
    },
    update: async(obj, dataService, author) => {
        var rows, fields;
        [rows, fields] = await dataService.readById(obj.id);
        var originalObj = rows.length>0 && rows[0].status == 'active' ? rows[0] : null;
        if(originalObj == null) throw `No object with id=${obj.id} found for update`;

        originalObj.status='history';
        await dataService.create(originalObj);
        
        obj.status='active';
        obj.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
        obj.created_by = author;
        obj.original_id = obj.id;
        var [rows, fields] = await dataService.update(obj);
        
        var result = rows[0];
        return result;
    },
    delete: async(id, dataService, author) => {
        var rows, fields;
        [rows, fields] = await dataService.readById(id);
        var obj = rows.length>0 && rows[0].status == 'active' ? rows[0] : null;
        if(obj == null) throw `No object with id=${id} found for deletion`;
        
        obj.status='history';
        await dataService.create(obj);
        
        obj.status='history';
        obj.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
        obj.created_by = author;
        obj.original_id = id;
        var [rows, fields] = await dataService.update(obj);
        
        var result = rows[0];
        return result;
    },
});
