import React from 'react';
import './Messages.css';

const Messages = ({allMessages}) => {
    const messageList = allMessages.map((message, index) => 
        <p key={index} className='message'>{message}</p>
    );

    return (
        <div className="messages-container">
            <ul className='message-list'>
                {messageList}
            </ul>
        </div>
    )
}

export default Messages;