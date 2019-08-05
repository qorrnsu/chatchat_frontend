import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class InputBar extends Component {
    render() {
        return (
            <Grid container
            justify="space-between"
            alignItems="center"
            style={{height: "100%"}}>
                <Grid item xs={11}>
                    <Input fullWidth={true}/>
                </Grid>
                <Grid item xs={1}>
                    <Button fullWidth={true}>Send</Button>
                </Grid>
            </Grid>
        )
    }
}

export default InputBar

// InputBar.PropTypes = {
    
// }
