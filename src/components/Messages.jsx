import React, { Component } from 'react';
import MessageBlock from './MessageBlock';
import PropTypes from 'prop-types';

import '../styles/Messages.css';

class Messages extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        const me = this.props.user.name;
        let prevMessageUser = null;
        const listOfMessageBlocks = this.props.messages.map((obj, index) => {
            let isNewBlock = false;
            let isLastBlock = false;
            let isMyself = false;
            if (obj.user === me) {
                isMyself = true;
            }
            if (index === this.props.messages.length-1 || this.props.messages[index+1].user !== obj.user) {
                isLastBlock = true;
            }
            if (prevMessageUser !== obj.user) {
                isNewBlock = true;
            }
            prevMessageUser = obj.user;
            return (
                <li key={index}>
                    <MessageBlock 
                    text={obj.text} 
                    image={this.props.user.image}
                    isMyself={isMyself} 
                    isLastBlock={isLastBlock}
                    isNewBlock={isNewBlock}/>
                </li>
            );
        })

        return (
            <ul className="messages-list">
                {listOfMessageBlocks}
            </ul>
        )
    }
}

export default Messages

Messages.propTypes = {
    user: PropTypes.object,
    messages: PropTypes.array,
};
