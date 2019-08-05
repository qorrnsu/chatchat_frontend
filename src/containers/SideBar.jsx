import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FriendsList from '../components/FriendsList';
import Profile from '../components/Profile';
import PropTypes from 'prop-types';

class SideBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container
                justify="center"
                alignItems="stretch"
                direction="column">
                <Grid item>
                    <Box borderBottom={1} height="120px">
                        <Profile image={this.props.image}/>
                    </Box>
                </Grid>
                <Grid item>
                    <Box height="-webkit-fill-available">
                        <FriendsList friends={this.props.friends} changeConversation={this.props.changeConversation}/>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default SideBar

SideBar.propTypes = {
    image: PropTypes.string,
    friends: PropTypes.array
};
