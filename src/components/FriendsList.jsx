import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Friend from './Friend';
import friendsTest from '../test/friends.json';

class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conversationMap: friendsTest 
            //TODO: needs to read this from internet using this.props.friends as input
        }
    }
    
    render() {
        return (
            <Box>
                {
                    this.props.friends.map((friend) => {
                        return (
                            <Friend 
                            key={friend} 
                            name={friend}
                            changeConversation={this.props.changeConversation}
                            messages={this.state.conversationMap[friend]}/>
                        );
                    })
                }
            </Box>
        )
    }
}

export default FriendsList

FriendsList.propTypes = {
    friends: PropTypes.array,
    changeConversation: PropTypes.func
};