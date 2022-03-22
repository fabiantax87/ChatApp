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

  socket.on('newMessage', (msg) => {
    console.log("message");
    io.emit('newMessageIO', msg);
  });
});


server.listen(8080, () => {
  console.log('listening on *:8080');
});