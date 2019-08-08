import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import SignUp from './SignUp';
import SignIn from './SignIn';

class Authentication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opened: true,
            signup: false,
        };
        this.onClose = this.onClose.bind(this);
        this.switchMode = this.switchMode.bind(this);
    }

    onClose() {

    }

    switchMode() {
        this.setState(prevState => ({
            signup: !prevState.signup 
        }));
    }

    render() {
        const title = this.state.signup? "Sign up" : "Sign In";
        const signUpOrSignIn = this.state.signup? 
                (<SignUp switchMode={this.switchMode}/>) : (<SignIn switchMode={this.switchMode}/>);
        return (
            <Modal
            aria-labelledby="authentication"
            aria-describedby="authentication"
            open={this.state.opened}
            onClose={this.onClose}>
                <Grid container alignItems="center" justify="center">
                    <Grid item xs={4} style={{marginTop: 100}}>
                    <Paper elevation={10}>
                        <Box p={2}>
                            <Typography variant="h5" style={{textAlign: "center", marginBottom: 20}}>
                            {title}
                            </Typography>
                            {signUpOrSignIn}
                        </Box>
                    </Paper>
                    </Grid>
                </Grid>
            </Modal>
        );
    }
}

export default Authentication;
