module.exports = (app) => {

    app.get('/noticias/nova', (req, res, next) => {

        res.render('admin/nova');

    });

};