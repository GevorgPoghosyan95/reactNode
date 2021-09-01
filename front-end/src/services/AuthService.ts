import $api from '../http'
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async login(email:string,password:string): Promise<AxiosResponse> {
        return $api.post<AuthResponse>('/login',{email,password})
    }

    static async registration(username:string,email:string,password:string): Promise<AxiosResponse> {
        return $api.post<AuthResponse>('/registration',{username,email,password})
    }

    static async logout(): Promise<AxiosResponse> {
        return $api.post('/logout')
    }
}