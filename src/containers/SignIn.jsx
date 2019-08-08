import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.state = {
            email: "",
            password: "",
        };
    }

    signIn(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form noValidate>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={e => {this.setState({email: e.target.value})}} />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => {this.setState({password: e.target.value})}} />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"/>
                        {/* TODO: Needs to cache user logins */}
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{marginBottom: 10}}
                        onClick={this.signIn} >
                            Sign In
                        </Button>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" onClick={() => {/*TODO*/}}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" onClick={this.props.switchMode}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        )
    }
}
export default SignIn;

SignIn.propTypes = {
    switchMode: PropTypes.func
}
