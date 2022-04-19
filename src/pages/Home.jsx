import React from "react";
import Form from "../components/form/Form";
import Messages from "../components/messages/Messages";
import ContactList from "../components/contact-list/ContactList";

const Home = ({ allMessages, sendMessage }) => {
  return (
    <div className="content">
      <div className="contacts-sidebar">
        <ContactList />
      </div>
      <div className="chat-area">
        <Messages allMessages={allMessages} />
        <Form sendMessage={(message) => sendMessage(message)} />
      </div>
    </div>
  );
};

export default Home;
