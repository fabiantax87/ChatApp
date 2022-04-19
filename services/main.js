const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('newMessage', (msg, userId) => {
    userId = socket.id
    console.log("message from " + socket.id);
    io.emit('newMessageIO', msg, userId);
  });
});


server.listen(8080, () => {
  console.log('listening on *:8080');
});