import './App.css';
import React, { useEffect, useState } from "react"
import socketIOClient from 'socket.io-client';
import Form from './components/form/Form';
import Messages from './components/messages/Messages';
import Navigation from './components/navigation/Navigation';
import ContactList from './components/contact-list/ContactList';

const socket = socketIOClient('http://localhost:8080');

function App() {
  const [allMessages, setAllMessages] = useState([]);

  const sendMessage = (message) => {
    socket.emit('newMessage', message);
  }

  useEffect(() => {
    socket.on('newMessageIO', (msg) => {
      setAllMessages([...allMessages, msg])
    });
    return () => {
      socket.off('newMessageIO');
    }
  }, [allMessages]);

  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <div className="contacts-sidebar">
          <ContactList />
        </div>
        <div className="chat-area">
          <Messages allMessages={allMessages} />
          <Form sendMessage={(message) => sendMessage(message)} />
        </div>
      </div>
    </div>
  );
}

export default App;