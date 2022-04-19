import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import socketIOClient from "socket.io-client";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const socket = socketIOClient("http://localhost:8080");

function App() {
  const [allMessages, setAllMessages] = useState([]);

  const sendMessage = (message) => {
    socket.emit("newMessage", message);
  };

  useEffect(() => {
    socket.on("newMessageIO", (msg) => {
      setAllMessages([...allMessages, msg]);
    });

    return () => {
      socket.off("newMessageIO");
    };
  }, [allMessages]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home allMessages={allMessages} sendMessage={sendMessage} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
