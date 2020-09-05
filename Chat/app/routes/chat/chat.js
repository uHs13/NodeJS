module.exports = (app) => {

    app.get('/chat', (req, res, next) => {

        console.log(req.query.user);

        res.render('chat');

    });

}