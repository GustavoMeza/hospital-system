/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transfer_details', {
    input: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'inputs',
        key: 'id'
      }
    },
    document: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'transfer_details',
    timestamps: false
  });
};
