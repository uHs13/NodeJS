let app = require('./config/server');

app.listen(8000, () => {

    console.log('\x1b[32m%s\x1b[0m', 'Server running');

});