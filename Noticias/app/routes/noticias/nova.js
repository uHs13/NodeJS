const renderNews = require('./../../modules/render');
const ValidateNews = require('./../../class/Validations/ValidateNews');
const NewsDAO = require('./../../class/DAO/NewsDAO/NewsDAO');

module.exports = (app) => {

    app.get('/noticias/nova', (req, res, next) => {

        renderNews.render('admin/nova', req, res);

    });

    app.post('/noticias/nova', (req, res, next) => {

        let validate = new ValidateNews(req.body);

        validate.validate().then(newsData => {

            NewsDAO.save(newsData).then(response => {

                req.body = {};

                renderNews.render('admin/nova', req, res, null, 'Notícia salva com sucesso!');

            });

        }, reject => {

            renderNews.render('admin/nova', req, res, reject);

        });

    });

};