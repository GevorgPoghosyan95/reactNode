const sessionStorage = require('sessionstorage')
const Sequelize = require('sequelize');
const {DataTypes} = require("sequelize");
const Op = Sequelize.Op;
const {User} = require('../models/user')
const {Post} = require('../models/post')
const {RequestList} = require('../models/requestlist')
require('../relations/user')

class AdminController {

    async personal_page(req, res, next) {
        try {
            let user = await User.findOne({
                where: {id: 1},
                include: [{
                    model: Post,
                }]
            });
            return res.json(user)
        } catch (e) {
            next(e)
        }


    }


    async get_users(req, res) {
        let users = await User.findAll({
            // where: {username: {[Op.like]: `%${req.query.search}%`}},
            attributes: ['username', 'id']
        })
        return res.json(users)
    }

    async friendRequest(req, res) {
        return res.json(req.query.authUserId)
    }


    async getPostsById(req, res) {
        let {id} = req.body
        let user = await User.findOne({
            where: {id: id},
            include: [{
                model: Post
            }]
        })
        return res.json(user.Posts)
    }
}

module.exports = new AdminController();

