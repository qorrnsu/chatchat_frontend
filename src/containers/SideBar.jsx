import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FriendsList from '../components/FriendsList';

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
                    <Box borderBottom={1} height="30vh">
                        profile
                    </Box>
                </Grid>
                <Grid item>
                    <Box height="70vh">
                        <FriendsList friendsList={["Chuanyui", "Woohyun"]}/>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default SideBar
