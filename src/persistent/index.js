module.exports = () => ({
    create: async (obj, dataService, agentId) => {
        obj.status = 'active';
        obj.orignalId = null;
        obj.createdAt = Date.now();
        obj.createdBy = agentId;
        var rows, fields;
        [rows, fields] = await dataService.create(obj);
        obj.originalId = rows[0].id;
        [rows, fields] = await dataService.update(obj);
        var result = rows[0];
        return result;
    },
    readAll: async (dataService, agentId) => {
        var rows, fields;
        [rows, fields] = await dataService.readAll();
        var result = rows.filter((row) => row.status == 'active');
        return result;
    },
    readById: async (id, dataService, agentId) => {
        var rows, fields;
        [rows, fields] = await dataService.readById(id);
        var result = rows.length>0 && rows[0].status == 'active' ? rows[0] : null;
        return result;
    },
    update: async(obj, dataService, agentId) => {
        var originalObj = await this.readById(obj.id, dataService, agentId);
        if(originalObj == null) throw `No object with id=${obj.id} found for update`;
        originalObj.state='history';
        dataService.create(originalObj);
        obj.createdAt = Date.now();
        obj.createdBy = agentId;
        var [rows, fields] = dataService.update(obj);
        var result = rows[0];
        return result;
    },
    delete: async(id, dataService, agentId) => {
        var obj = await this.readById(id, dataService, agentId);
        if(originalObj == null) throw `No object with id=${id} found for deletion`;
        originalObj.state='history';
        dataService.create(originalObj);
        originalObj.createdAt = Date.now();
        originalObj.createdBy = agentId;
        var [rows, fields] = dataService.update(originalObj);
        var result = rows[0];
        return result;
    },
});
