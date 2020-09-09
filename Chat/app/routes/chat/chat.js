module.exports = (app) => {

    app.get('/chat', (req, res, next) => {

        app.get('io').emit('userConnected', req.query.user);

        app.get('io').emit('userList', req.query.user);

        res.render('chat', {
            user: req.query.user
        });

    });

}