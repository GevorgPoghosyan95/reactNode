'use strict';
const {DataTypes} = require("sequelize");
const {
    Model
} = require('sequelize');
const RequestListSchema = (sequelize, DataTypes) => {
    class RequestList extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // static associate(models) {
        //     models.User.hasMany(RequestList, {foreignKey: "senderId"})
        //     RequestList.belongsToMany(models.User, {foreignKey: "senderId",through:"users"})
        // }
    };
    RequestList.init({
        senderId: DataTypes.INTEGER,
        receiverId: DataTypes.INTEGER,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'RequestList',
    });
    return RequestList;
};

module.exports.RequestList = RequestListSchema(sequelize, DataTypes)