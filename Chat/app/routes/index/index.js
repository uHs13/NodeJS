const ValidateNickname = require('./../../modules/validations/ValidateNickname');
const renderIndex = require('./../../modules/render/render');

module.exports = (app) => {

    app.get('/', (req, res, next) => {

        res.render('index');

    });

    app.post('/', (req, res, next) => {

        let validate = new ValidateNickname(req.body);

        validate.validate().then(nicknameData => {

            res.redirect('/chat');

        }, reject => {

            renderIndex.render('index', req, res, reject);

        });

    });

}