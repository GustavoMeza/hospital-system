/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('drugs', {
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    presentation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    units: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'drugs',
    timestamps: false
  });
};
