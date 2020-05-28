/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prescription_returns', {
    prescription: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'prescriptions',
        key: 'code'
      }
    },
    batch: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'batches',
        key: 'code'
      }
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'prescription_returns',
    timestamps: false
  });
};
