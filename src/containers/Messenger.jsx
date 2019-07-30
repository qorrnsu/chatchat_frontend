import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Messages from '../components/Messages';
import InputBar from '../components/InputBar';

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
                <Grid item>
                    <Box borderBottom={1} height="94vh">
                        <Messages messages={[]}/>
                    </Box>
                </Grid>
                <Grid item>
                    <Box height="6vh">
                        <InputBar/>
                    </Box>
                </Grid>
            </Grid>
        );
    }
}

export default Messenger;
