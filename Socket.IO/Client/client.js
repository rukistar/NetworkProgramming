var socket = require('socket.io-client')('http://localhost:3000');
socket.on('connected', function (message) {
   
    socket.emit('echo', 'HELLO', (data) => {
        console.log(data); 
    });

    
});
socket.on('news', function (data) {
    console.log(data);
});

socket.on('disconnect', function () {
    console.log('disconnect')
});


socket.emit('echo', 'callback', (data) => {
    console.log(data); 
});

socket.emit('news','non-callback');