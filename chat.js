var socket = io.connect("http://localhost:3000");
// alert("its working")

//Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

//EMIT EVENTS

btn.addEventListener('click', function () {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
})

message.addEventListener('focus', function () {
    socket.emit('typing', handle.value);
})

//Listen for events
socket.on('chat', function (data) {
    feedback.innerHTML = ""
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>'
})

socket.on('typing', function (data) {
    feedback.innerHTML += '<p><em>' + data + ' is typing...</em></p>';
})

