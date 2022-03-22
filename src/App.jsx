import React from 'react';
import './App.css';
import MessageInput from './components/MessageInput';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <MessageInput />
      </div>
    );
  }
}

export default App;
