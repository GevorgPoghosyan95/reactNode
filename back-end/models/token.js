'use strict';
const {DataTypes} = require("sequelize");
const {Model} = require('sequelize');
const TokenSchema = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Token.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    refreshToken: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Token',
  });
  return Token;
};

module.exports.Token = TokenSchema(sequelize, DataTypes)