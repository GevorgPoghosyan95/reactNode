import {AxiosResponse} from "axios";
import $api from '../http'
import {AuthResponse} from "../models/response/AuthResponse";

class UserService {

    static async getUserPosts(id: number) {
        return $api.post('/getPostsById',{id:id})
    }

    static async getAllUsers(){
        return $api.post('/getUsers')
    }
}


export default UserService