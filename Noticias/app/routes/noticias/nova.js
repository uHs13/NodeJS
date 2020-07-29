module.exports = (app) => {

    app.get('/noticias/nova', (req, res, next) => {

        res.render('admin/nova');

    });

    app.post('/noticias/nova', (req, res, next) => {

        res.send(req.body);

    });

};