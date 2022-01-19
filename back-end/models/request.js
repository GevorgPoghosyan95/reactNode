const {DataTypes} = require("sequelize");


const RequestSchema = (sequelize, DataTypes) => {
    const Request = sequelize.define('Request', {
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senderId: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        receiverId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        }
    }, {
        modelName: 'Request',
    });

    return Request;
};
module.exports.Request = RequestSchema(sequelize, DataTypes)

