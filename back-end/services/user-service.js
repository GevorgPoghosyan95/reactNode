const bcrypt = require('bcrypt')
const {User} = require("../models/user")
const UserDto = require('../dtos/user-dto')
const tokenService = require('../services/token-service')
const ApiError = require('../exceptions/api-error')


class UserService {
    async registration(username, email, password) {
        let user = await User.findOne({where: {email: email}})
        if (user) {
            return {errors: true, error: {messages: `User with this ${email} email already exist`}}
        }
        const hashPassword = await bcrypt.hash(password, 3)
        let newUser = await User.create({username: username, email: email, password: hashPassword})
        return {errors: false, message: "User created successfully!"}
    }

    async login(email, password) {
        const user = await User.findOne({where: {email: email}})
        if (!user) {
            return {errors: true, error: {messages: "User dont found!"}}
        }

        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            return {errors: true, error: {messages: "password incorrect!"}}
        }
        return this.generateToken(user)
    }

    async generateToken(user) {
        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.id,tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken)
        return token;
    }

    async refresh(refreshToken){
        if(!refreshToken){
            throw ApiError.UnauthorizedError();
        }
        const userData = await tokenService.validateRefreshToken(refreshToken)
        const tokenData = await tokenService.findToken(refreshToken)
        if(!userData || !tokenData){
            throw ApiError.UnauthorizedError();
        }
        const user = await User.findOne({where:{id:userData.id}})
        const userDto = new UserDto(user)
        const tokens = await tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.id,tokens.refreshToken)
        return {
            ...tokens,
            user: userDto
        }
    }
}


module.exports = new UserService();