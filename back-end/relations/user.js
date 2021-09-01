const {Post} = require('../models/post')
const {User} = require('../models/user')
const {RequestList} = require('../models/requestlist')

User.hasMany(Post, {foreignKey: "userId"})
Post.belongsTo(User, {foreignKey: "userId"})

User.hasMany(RequestList, {foreignKey: "senderId"})
RequestList.belongsTo(User, {foreignKey: "senderId"})