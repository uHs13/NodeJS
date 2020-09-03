let app = require('./config/server');

let port = app.listen(8000, () => {

    console.log('\x1b[32m%s\x1b[0m', 'Server running');

});

let io = require('socket.io').listen(port);

io.on('connection', (socket) => {

    console.log('User connected');

    socket.on('disconnect', () => {

        console.log('\x1b[36m', 'Good bye user');

    });

});