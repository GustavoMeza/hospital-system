/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patients', {
    file: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    curp: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sex: {
      type: DataTypes.ENUM('male','female','other'),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    floor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bed: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    diagnostic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    arrival_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    departure_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'patients',
    timestamps: false
  });
};
