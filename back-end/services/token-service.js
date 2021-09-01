const jwt = require('jsonwebtoken')
const {Token} = require('../models/token')
// const Token = require('../models/token-model')

class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '1d'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})

        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId,refreshToken){
        const tokenData =  await Token.findOne({where:{userId:userId}})

        if(tokenData){
            tokenData.refreshToken = refreshToken;
            return  tokenData.save()
        }
        const token = await Token.create({userId:userId,refreshToken})
        return token;
    }

    async removeToken(refreshToken) {
        const tokenData = await Token.destroy({where:{refreshToken:refreshToken}})
        return tokenData;
    }

    validateAccessToken(token){
        try{
            const userData = jwt.verify(token,process.env.JWT_ACCESS_SECRET)
            return userData;
        }catch (e) {
            return null;
        }
    }


    validateRefreshToken(token){
        try{
            const userData = jwt.verify(token,process.env.JWT_REFRESH_SECRET)
            return userData;
        }catch (e) {
            return null;
        }
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({where:{refreshToken:refreshToken}})
        return tokenData;
    }


}

module.exports = new TokenService();