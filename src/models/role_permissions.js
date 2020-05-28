/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role_permissions', {
    role: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'roles',
        key: 'code'
      }
    },
    permission: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'permissions',
        key: 'id'
      }
    }
  }, {
    tableName: 'role_permissions',
    timestamps: false
  });
};
