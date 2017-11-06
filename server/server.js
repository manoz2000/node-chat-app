const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const public_path = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
const port = process.env.PORT || 3000;
app.use(express.static(public_path));

io.on('connection', (socket) => {
    console.log('New User Connected');
    socket.on('disconnect',()=>{
        console.log('Disconnected')
    })
});

server.listen(port, () => {
    console.log(`Server is ^up on port ${port}`);
});