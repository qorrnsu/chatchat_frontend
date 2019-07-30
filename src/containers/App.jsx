import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import amber from '@material-ui/core/colors/amber';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Messenger from './Messenger';

import 'typeface-roboto';

const theme = createMuiTheme({
    palette: {
        primary: { main: amber[600], contrastText: 'white' }, 
        secondary: {main: amber[400], contrastText: 'white' }
    },
    spacing: 16
});

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Grid container
                justify="center"
                alignItems="stretch">
                    <Grid item xs={3}>
                        <Box borderRight={1} height="-webkit-fill-available">
                            FriendList
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Box height="-webkit-fill-available">
                            <Messenger/>
                        </Box>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;
