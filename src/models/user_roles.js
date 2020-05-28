/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_roles', {
    user: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'users',
        key: 'username'
      }
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'roles',
        key: 'code'
      }
    }
  }, {
    tableName: 'user_roles',
    timestamps: false
  });
};
