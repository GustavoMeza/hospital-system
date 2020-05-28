/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('specialty_detail', {
    certificate: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'certificates',
        key: 'code'
      }
    },
    specialty: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'specialty_detail',
    timestamps: false
  });
};
