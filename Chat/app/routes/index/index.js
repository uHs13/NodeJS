const ValidateNickname = require('./../../modules/validations/ValidateNickname');
const renderIndex = require('./../../modules/render/render');
const url = require('url');

module.exports = (app) => {

    app.get('/', (req, res, next) => {

        res.render('index');

    });

    app.post('/', (req, res, next) => {

        let validate = new ValidateNickname(req.body);

        validate.validate().then(nicknameData => {

            res.redirect(url.format({
                pathname: '/chat',
                query: {
                    user: nicknameData.nickname
                }
            }));

        }, reject => {

            renderIndex.render('index', req, res, reject);

        });

    });

}