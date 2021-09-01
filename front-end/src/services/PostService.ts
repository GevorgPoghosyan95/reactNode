import $api from '../http'
import UserService from "./UserService";

class PostService {
    async create(userId:number,title:string,content:string){
            return $api.post('/post/create',{userId:userId,title:title,content:content})
    }

    async delete(postId:number){
        return $api.post('/post/delete',{postId:postId})
    }
}

export default new PostService();