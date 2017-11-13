var socket = io();
socket.on('connect', () => {
    console.log('connected to Server');
})
socket.on('disconnect', () => {
    console.log('disconnected to Server');
})
socket.on('newEmail', (callback) => {
    console.log('New Email', callback);
})