/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('outputs', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sign: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'users',
        key: 'username'
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
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('expiration','prescription_fill','other'),
      allowNull: true
    }
  }, {
    tableName: 'outputs',
    timestamps: false
  });
};
