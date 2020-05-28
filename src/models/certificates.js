/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('certificates', {
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'users',
        key: 'username'
      }
    },
    college: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('professional','specialty'),
      allowNull: true
    }
  }, {
    tableName: 'certificates',
    timestamps: false
  });
};
