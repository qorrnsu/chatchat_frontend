import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Messages from '../components/Messages';
import InputBar from '../components/InputBar';
import PropTypes from 'prop-types';

class Messenger extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container
            justify="center"
            alignItems="stretch"
            direction="column">
                <Box borderBottom={1} height="calc(100vh - 50px)">
                    <Messages
                    user={this.props.user}
                    messages={this.props.conversation}/>
                </Box>
                <Box height="50px">
                    <InputBar/>
                </Box>
            </Grid>
        );
    }
}

export default Messenger;

Messenger.propTypes = {
    user: PropTypes.object 
};