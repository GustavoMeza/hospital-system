/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roles', {
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'roles',
    timestamps: false
  });
};
