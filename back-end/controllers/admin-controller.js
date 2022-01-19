

const sessionStorage = require('sessionstorage')
const Sequelize = require('sequelize');
const {DataTypes} = require("sequelize");
const Op = Sequelize.Op;
const {User} = require('../models/user')
const {Post} = require('../models/post')
const {Request} = require('../models/request')
require('../relations/user')
const bcrypt = require("bcrypt");

class AdminController {


    async getRequests(req,res){
        const {id,senderId} = req.body
        let request = await Request.findOne({where: {senderId: senderId, receiverId: id}})
        return res.status(200).json(request)
    }

    async sendRequest(req, res) {
        console.log(req.body);
        const {id, currentUserId} = req.body;
        let request = await Request.findOne({where: {senderId: currentUserId, receiverId: id}})
        if (!request) {
            await Request.create({
                senderId: currentUserId,
                receiverId: id,
                status: 'waiting'
            })
            return res.status(200).json({message: 'Request sent!'})
        } else {
            return res.status(200).json({error: 'You already followed current user!'})
        }

    }


    async get_users(req, res) {
        let users = await User.findAll({
            // where: {username: {[Op.like]: `%${req.query.search}%`}},
            attributes: ['username', 'id']
        })
        return res.json(users)
    }



    async getPostsById(req, res) {
        let {id} = req.body
        let user = await User.findOne({
            where: {id: id},
            include: [
                {
                    model: Post
                }
            ]
        })
        return res.json(user)
    }


    async editUserById(req, res) {
        let {id, username, email, password} = req.body
        let updateData = {username: username, email: email}
        if (password) {
            updateData.password = await bcrypt.hash(password, 3)
        }
        console.log(updateData);
        await User.update(updateData, {where: {id: id}})
        return res.status(200).json({status: 'ok'})
    }

}

module.exports = new AdminController();

