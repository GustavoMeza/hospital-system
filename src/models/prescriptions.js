/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prescriptions', {
    code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    patient: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'patients',
        key: 'file'
      }
    },
    doctor: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'certificates',
        key: 'code'
      }
    },
    issue_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'prescriptions',
    timestamps: false
  });
};
