import $api from '../http'

class UserService {

    static async getUserPosts(id: number) {
        return $api.post('/getPostsById',{id:id})
    }

    static async getAllUsers(){
        return $api.post('/getUsers')
    }

    static async editUser(id:number,username:string,email:string,password?:any){
        return $api.post('/editUserById',{id:id,username:username,email:email,password:password})
    }

    static async sendRequest(id: number,currentUserId:number) {
        return $api.post('/sendRequest',{id,currentUserId})
    }

    static async getRequests(id: number,senderId:number) {
        return $api.post('/getRequests',{id,senderId})
    }
}


export default UserService