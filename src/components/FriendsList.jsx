import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Friends from './Friends';

class FriendsList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Box>
                {this.props.friendsList.map((each) => <Friends id={each}/>)}
            </Box>
        )
    }
}

export default FriendsList

FriendsList.propTypes = {
    friendsList: PropTypes.array
};