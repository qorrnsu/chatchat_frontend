import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import amber from '@material-ui/core/colors/amber';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Messenger from './Messenger';
import SideBar from './SideBar';
import io from 'socket.io-client';
import Authentication from './Authentication';

import 'typeface-roboto';
import '../styles/App.css';

const theme = createMuiTheme({
    palette: {
        primary: { main: amber[600], contrastText: 'white' }, 
        secondary: {main: amber[400], contrastText: 'white' }
    },
    spacing: 16
});

const me = {
    // name: prompt("Please Enter Your Name", ""),
    name: "bella",
    image: "https://pbs.twimg.com/profile_images/1069218313043996672/ss1k-fm5_400x400.jpg",
    friends: ["friend1", "friend2", "friend3"]
};

class App extends Component {
    constructor(props) {
        super(props);
        this.socket = io('http://192.168.0.2:8000');
        this.state = {
            user: me,
            target: me.friends[0], // Not used yet
            currentMessages: []
        };
        this.changeConversation = this.changeConversation.bind(this);
    }

    changeConversation(messages) {
        this.setState({
            currentMessages: messages 
        });
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Grid container
                justify="center"
                alignItems="stretch">
                    <Grid item xs={3}>
                        <Box borderRight={1} borderBottom={1} height="100vh">
                            <SideBar 
                            friends={this.state.user.friends} 
                            image={this.state.user.image} 
                            changeConversation={this.changeConversation}/>
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Box height="100vh">
                            <Messenger
                            conversation={this.state.currentMessages}
                            user={this.state.user}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Authentication/>
            </MuiThemeProvider>
        );
    }
}

export default App;
