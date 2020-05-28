/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inputs', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    supplier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('purchase','transfer','other'),
      allowNull: true
    }
  }, {
    tableName: 'inputs',
    timestamps: false
  });
};
