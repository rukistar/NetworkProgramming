// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
$(function () {
    var socket = require('socket.io-client')('http://localhost:3000');
    // var socket = io();
    $('form').submit(function () {
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
    socket.on('chat message', function (msg) {
      $('#messages').append($('<li>').text(msg));
      window.scrollTo(0, document.body.scrollHeight);
    });

    // socket.on('connected', function (message) {
   
    //     socket.emit('echo', 'HELLO', (data) => {
    //         console.log(data); 
    //     });        
    // });
    // socket.on('news', function (data) {
    //     console.log(data);
    // });
    
    // socket.on('disconnect', function () {
    //     console.log('disconnect')
    // });   
    
    // socket.emit('echo', 'callback', (data) => {
    //     console.log(data); 
    // });
    
    // socket.emit('news','non-callback');
  });

