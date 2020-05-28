/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prescription_drugs', {
    prescription: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'prescriptions',
        key: 'code'
      }
    },
    drug: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'drugs',
        key: 'code'
      }
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dose: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    administration_route: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'prescription_drugs',
    timestamps: false
  });
};
