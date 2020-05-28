/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('batches', {
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    input: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'inputs',
        key: 'id'
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
    expires: {
      type: DataTypes.DATE,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    lab: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'batches',
    timestamps: false
  });
};
