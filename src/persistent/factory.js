// Wraps a data access module with the audit logic
// Dependencies:
// - dataService: The data access service to be wrapped
module.exports = (dataService) => ({

    // Performs a persistent create operation
    // Returns:
    // - Object inserted
    // Arguments:
    // - obj: The object to be created in the database
    // - author: The id of the user performing the action
    create: async (obj, author) => {

        // Set up audit columns
        obj.status = 'active';
        obj.original_id = null; // We don't know this yet
        obj.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
        obj.created_by = author;
        
        // Create on database
        var rows, fields;
        [rows, fields] = await dataService.create(obj);

        // Set up the original id
        obj.id = rows.insertId;
        obj.original_id = rows.insertId;

        // Update the original id in the object
        [rows, fields] = await dataService.update(obj);

        // Get the inserted object
        var result = rows[0];

        return result;
    },

    // Performs a persistent read all operation
    // Returns:
    // - List of active objects in the database
    // Arguments:
    // - author: The id of the user performing the action
    readAll: async (author) => {

        // Read from database
        var rows, fields;
        [rows, fields] = await dataService.readAll();

        // Keep only the active records
        var result = rows.filter((row) => row.status == 'active');
        
        return result;
    },

    // Performs a persistent read by id operation
    // Returns:
    // - Object with the id
    // Arguments:
    // - id: The id of the object to look for
    // - author: The id of the user performing the action
    readById: async (id, author) => {

        // Read by id from database
        var rows, fields;
        [rows, fields] = await dataService.readById(id);
        
        // Keep only the active one
        var result = rows.length>0 && rows[0].status == 'active' ? rows[0] : null;
        
        return result;
    },

    // Performs a persistent update operation
    // Returns:
    // - Object updated
    // Parameters:
    // - obj: The new object as should be updated in the database
    // - author: The id of the user performing the action
    update: async(obj, author) => {

        // Read the database for the previous object with the same id
        var rows, fields;
        [rows, fields] = await dataService.readById(obj.id);

        // Keep only the active one
        var originalObj = rows.length>0 && rows[0].status == 'active' ? rows[0] : null;
        if(originalObj == null) throw `No object with id=${obj.id} found for update`;

        // Mark this version of the object as history and save it
        originalObj.status='history';
        await dataService.create(originalObj);
        
        // Override the audit columns of the new object
        obj.status='active';
        obj.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
        obj.created_by = author;
        obj.original_id = obj.id;

        // Update in database
        var [rows, fields] = await dataService.update(obj);
        
        // Get the updated object
        var result = rows[0];

        return result;
    },

    // Performs a persistent delete operation
    // Returns:
    // - The deleted object
    // Arguments:
    // - id: The id of the object to be deleted
    // - author: The id of the user performing the action
    delete: async(id, author) => {

        // Read the database for the current version of the object
        var rows, fields;
        [rows, fields] = await dataService.readById(id);

        // Keep only the active one
        var obj = rows.length>0 && rows[0].status == 'active' ? rows[0] : null;
        if(obj == null) throw `No object with id=${id} found for deletion`;
        
        // Mark the current version of the object as history and save it
        obj.status='history';
        await dataService.create(obj);
        
        // Update the audit columns, setting the satus as history is a logical delete
        obj.status='history';
        obj.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
        obj.created_by = author;
        obj.original_id = id;

        // Update the object to logically delete it
        var [rows, fields] = await dataService.update(obj);
        
        // Get the deleted object
        var result = rows[0];

        return result;
    },
});
