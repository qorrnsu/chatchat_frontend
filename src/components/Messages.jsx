import React, { Component } from 'react'

import '../styles/Messages.css';

export class Messages extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <ul className="messages-list">
                {this.props.messages.map((each, index) => {
                    return (<li key={index}>{each}</li>);
                })}
            </ul>
        )
    }
}

export default Messages
