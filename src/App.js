import React from 'react';
import { Component } from 'react';
import './App.css';
import Messages from "./Messages";
import Input from "./Input"
import io from 'socket.io-client';

function askForName() {
    const name = prompt("Please Enter Your Name", "");
    return name;
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class App extends Component {

    constructor(props) {
        super(props);
        this.socket = io('http://localhost:3000');
        this.addMessage = this.addMessage.bind(this);
        this.state = {
            messages: [],
            member: {
                username: askForName(), 
                color: randomColor()
            }
        };
    }

    componentDidMount() {
        this.socket.on('chat message', this.addMessage);
    }   
    
    addMessage(message) {
        this.setState((prevState, props) => 
            ({messages: [...prevState.messages, message]})
        );
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Woojungsay Chat-Chat</h1>
                </div>
                <Messages
                    messages={this.state.messages}
                    currentMember={this.state.member}
                />
                <Input onSendMessage={this.onSendMessage}
                />
            </div>
        );
    }

    onSendMessage = (text) => {
        const message = {
            text: text,
            member: this.state.member
        };
        this.socket.emit('chat message', message);
    }
}

export default App;
