//SERVER SIDE
var express = require("express");
var socket = require('socket.io');
//App setup
var app = express();

var server = app.listen(3000,function(){
    console.log("port started");
})
//Static files
app.use(express.static("public"))

//socket setup
var io = socket(server)

io.on('connection',function(socket){
    console.log("made Socket connection",socket.id)

    socket.on('chat',function(data){
        io.sockets.emit('chat',data)
    })

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data)    //this is will broadcast everyone except the socket from where msg is coming
    })
})

