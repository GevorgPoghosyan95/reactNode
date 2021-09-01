const userService = require('../services/user-service')

class RegisterController {
    create_account(req, res) {
        return res.render("create_account", {csrfToken: req.csrfToken()});
    }

    async registration(req, res) {
        let {email, username, password} = req.body;
        let registrationResponse = await userService.registration(username, email, password)
        return res.json(registrationResponse)
    }
}

module.exports = new RegisterController();