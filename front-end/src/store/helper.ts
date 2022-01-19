import AuthService from "../services/AuthService";
import axios from 'axios'
import {AuthResponse} from "../models/response/AuthResponse";
import UserService from "../services/UserService";
import {makeAutoObservable} from "mobx";
import { toJS } from 'mobx'

export default class Helper {

    private currentUser = {};

    constructor() {
        makeAutoObservable(this)
    }

    getCurrentUser (): Object {
        return toJS(this.currentUser)
    }

    setCurrentUser (user: {}) {
        this.currentUser = user
    }


    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            if (response.data.errors === true) {
                return {status: "error", messages: response.data.error.messages};
            }
            localStorage.setItem('token', response.data.accessToken);
            return {status: "ok", data: response.data}
        } catch (e) {
            console.log(e.message)
        }
    }

    async registration(username: string, email: string, password: string) {
        try {
            const response = await AuthService.registration(username, email, password);
            if (response.data.errors === true) {
                return {status: "error", messages: response.data.error.messages};
            }
            return {status: "ok"}
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }


    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
            return {status: "ok"};
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }


    async getUserPosts(id: number) {
        try {
            let result = await UserService.getUserPosts(id);
            return result.data ? result.data : []
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }


    async checkAuth() {
        try {
            const response = await axios.get<AuthResponse>(`${process.env.REACT_APP_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return response.data;
        } catch (e) {
            return e.response?.data?.status
        }
    }


    async getRequests(id:number, senderId:number) {
        try {
            let result = await UserService.getRequests(id,senderId);
            return result.data ? result.data : []
        } catch (e) {
            return {data:[e],status:500}
        }
    }
}