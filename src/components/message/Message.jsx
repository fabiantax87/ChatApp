import React from 'react';
import './Message.css';

function Message( {message} ) {
  return (
    <div className='message'>
      <p>{message}</p>
    </div>
  )
}

export default Message;