const {DataTypes} = require("sequelize");
const UserSchema = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        modelName: 'User',
    });

    // User.associate = (models) => {
    //     models.Post.belongsTo(models.User,{foreignKey:"userId"})
    //     User.hasMany(models.Post,{foreignKey:"userId"})
    //     // User.hasMany(models.RequestList, {foreignKey: "senderId"})
    //     // models.RequestList.belongsToMany(User, {foreignKey: "senderId",through:"users"})
    // }
    return User;
};

module.exports.User = UserSchema(sequelize, DataTypes)