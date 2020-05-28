/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('permissions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    resource: {
      type: DataTypes.ENUM('user_roles','users','patientes','certificates','prescriptions','prescription_fills','prescription_returns','prescription_drugs','drugs','batches','inputs','outputs','purchase_details','transfer_details'),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'permissions',
    timestamps: false
  });
};
