// Setup basic express server
const express = require('express');
const app = express();
const path = require('path')
const server = require('http').createServer(app);
const { Server } = require('socket.io')
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});
const port = process.env.PORT || 3001;

server.listen(port, () => console.log(`listening on port ${port}`))

io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('disconnect', (reason) => {
        console.log('a user disconnected')
    })
});