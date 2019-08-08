import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

// const emailRegex = RegExp(
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        };
    }

    signUp(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        onChange={e => {this.setState({firstName: e.target.value})}} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        onChange={e => {this.setState({lastName: e.target.value})}} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={e => {this.setState({email: e.target.value})}} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => {this.setState({password: e.target.value})}} />
                    </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{marginTop: 40, marginBottom: 10}}
                onClick={this.signUp} >
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="#" onClick={this.props.switchMode}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </form>
        )
    }
}
export default SignUp;

SignUp.propTypes = {
    switchMode: PropTypes.func
}
