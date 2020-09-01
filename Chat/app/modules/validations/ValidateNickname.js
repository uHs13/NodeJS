const Validate = require("./Validate");

class ValidateNews extends Validate {

    constructor(data) {

        super([
            ['nickname', 'Nome/Apelido', 1, 30]
        ], data);

    }
    // .constructor

}
// .ValidateNews

module.exports = ValidateNews;