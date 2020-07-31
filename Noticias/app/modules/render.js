module.exports = {

    render (page, req, res, error = null, success = null) {

        res.render(page, {
            body: req.body,
            error,
            success
        });

    }
    // .render

};