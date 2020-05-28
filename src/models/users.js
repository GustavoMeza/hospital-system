/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    username: {
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
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shift: {
      type: DataTypes.ENUM('matutino','vespertino','nocturno','jornada_acumulada'),
      allowNull: true
    }
  }, {
    tableName: 'users',
    timestamps: false
  });
};
