const {DataTypes} = require("sequelize");
const PostSchema = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        }
    }, {
        modelName: 'Post',
    });


    return Post;
};
module.exports.Post = PostSchema(sequelize, DataTypes)

