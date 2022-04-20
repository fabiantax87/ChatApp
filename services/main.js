const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.get("/", (req, res) => {
  res.json("Hallo");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("newMessage", (msg, userId) => {
    userId = socket.id;
    console.log("message from " + socket.id);
    io.emit("newMessageIO", msg, userId);
  });
});

server.listen(8080, () => {
  console.log("listening on *:8080");
});
