const renderRegister = require('./../modules/render/render');
const ValidateRegister = require('./../models/Validate/ValidateRegister');

module.exports = (app) => {

    app.get('/register', (req, res) => {

        renderRegister.render('cadastro', req, res);

    });

    app.post('/register', (req, res) => {

        let validateRegister = new ValidateRegister(req.body);

        validateRegister.validate().then(registerData => {

            res.send({info: registerData});

        }, reject => {

            renderRegister.render('cadastro', req, res, reject);

        });

    });

};