let app = require('./config/server');

let port = app.listen(8000, () => {

    console.log('\x1b[32m%s\x1b[0m', 'Server running');

});

let io = require('socket.io').listen(port);

app.set('io', io);

io.on('connection', (socket) => {

    socket.on('disconnect', () => {

        console.log('\x1b[36m', 'Good bye user');

    });

    socket.on('sendToAll', (msgInfo) => {

        socket.emit('sendToMe', {
            title: msgInfo.user,
            message: msgInfo.message
        });

        socket.broadcast.emit('sendToUsers', {
            title: msgInfo.user,
            message: msgInfo.message
        });

    });

});