module.exports = (persistentServices, dataServices) => ({
@table{    ^name : require('./^name')(persistentServices, dataServices.^name),}
});
