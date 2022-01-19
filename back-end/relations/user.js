const {Post} = require('../models/post')
const {User} = require('../models/user')
const {Request} = require('../models/request')

User.hasMany(Post, {foreignKey: "userId"})
Post.belongsTo(User, {foreignKey: "userId"})

User.hasMany(Request, {foreignKey: "receiverId"})
Request.belongsTo(User, {foreignKey: "receiverId"})