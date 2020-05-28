/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prescription_fills', {
    prescription: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'prescriptions',
        key: 'code'
      }
    },
    output: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'outputs',
        key: 'id'
      }
    }
  }, {
    tableName: 'prescription_fills',
    timestamps: false
  });
};
