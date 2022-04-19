import React from "react";
import "./Messages.css";
import Message from "../message/Message";

const Messages = ({ allMessages }) => {
  const messageList = allMessages.map((message, index) => (
    <Message key={index} message={message} />
  ));

  return (
    <div className="messages-container">
      <ul className="message-list">{messageList}</ul>
    </div>
  );
};

export default Messages;
