import React from 'react';
import '../App.css';

class MessageInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          msg: "",
        }
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({msg: event.target.value});
    }

    render(){
        return (
        <div className="message-input">
            <header className="App-header">
            <p>
                {this.state.msg}
            </p>
            </header>
            <input type="text" value={this.state.msg} onChange={this.handleChange} placeholder='Type your message here..' />
        </div>
        );
    }
}

export default MessageInput;