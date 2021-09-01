const {Post} = require("../models/post");


class PostController {
    async create(req, res, next) {
        const {userId, title, content} = req.body
        let post = await Post.create({userId: userId, title: title, content: content})
        return res.status(200).json({status: "ok", message: "Post created successfully!",id:post.id})
    }

    async delete(req, res, next) {
        const {postId} = req.body
        let post = await Post.destroy({where: {id: postId}})
        if(post){
            return res.status(200).json({status: "ok", message: "Post deleted successfully!"})
        }

    }
}

module.exports = new PostController()