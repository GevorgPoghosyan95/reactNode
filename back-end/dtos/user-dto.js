module.exports = class UserDto {
    id;
    email;
    username;

    constructor(model) {
        this.email = model.email;
        this.id = model.id;
        this.username = model.username
    }
}