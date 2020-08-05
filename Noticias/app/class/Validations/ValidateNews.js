const Validate = require("./Validate");

class ValidateNews extends Validate {

    constructor(data) {

        super([
            ['title', 'Titulo', 1, 100],
            ['author', 'Autor', 1, 50],
            ['news', 'Notícia', 1, 500]
        ], data);

    }
    // .constructor

}
// .ValidateNews

module.exports = ValidateNews;