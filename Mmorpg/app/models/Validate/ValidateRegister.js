const Validate = require("./Validate");

class ValidateRegister extends Validate {

    constructor(data) {

        super([
            ['name', 'Nome', 1, 30],
            ['user', 'Usuario', 1, 30],
            ['password', 'Senha', 1, 30],
            ['casa', 'Casa', 1, 30],
        ], data);

    }
    // .constructor

}
// .ValidateRegister

module.exports = ValidateRegister;