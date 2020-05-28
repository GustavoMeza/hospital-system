/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('purchase_details', {
    input: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'inputs',
        key: 'id'
      }
    },
    invoice: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sanitary_license: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'purchase_details',
    timestamps: false
  });
};
