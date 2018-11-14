const port = (process.env.PORT || 3000);

const server = require('http').createServer().listen(port, function () {
    console.log("Socket.io server to server listening on port " + port);
});

var io = require('socket.io').listen(server);

io.sockets.on("connection", function (client) {
    console.log('Server: Incoming connection. : ' + client.id);

    client.emit("connected", "HELLO", function (message) {
        console.log(client.id + '>>>' , message); 
    });

    client.on("disconnect", function () {
        //callback(msg);
        console.log('Server: Closed connection. : ' + client.id);
    });

    client.on("echo", function (msg, callback) {
        try {
            console.log(msg);
            var data = { type: 'echo', data: msg };
            callback(data);
        } catch (err) {
            console.log(err);
        }
    });

    client.on("news", function (msg) {
        try {
            console.log(msg);
        } catch (err) {
            console.log(err);
        }
    });
});