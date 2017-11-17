var socket = io();
socket.on('connect', () => {
    console.log('connected to Server');

    socket.emit('createMessage',{
        from:'manoz',
        text:'This is manoz'
    })

});
socket.on('disconnect', () => {
    console.log('disconnected to Server');
})
socket.on('newMessage', (msg) => {
    console.log('new message',msg);
})