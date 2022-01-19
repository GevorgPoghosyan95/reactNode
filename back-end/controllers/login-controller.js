const userService = require('../services/user-service')

class LoginController {

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            console.log(refreshToken);
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.status(200).json({status: "ok"})
        } catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return userData;
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new LoginController();