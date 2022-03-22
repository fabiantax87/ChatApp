import React, { useState } from 'react'
import './Form.css';

const Form = ({sendMessage}) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(message !== ''){
            sendMessage(message);
            setMessage('');
        }
    }

  return (
    <div className='chat-form'>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Send</button> 
        </form>
    </div>
  )
}

export default Form;