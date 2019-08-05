import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

class Profile extends Component {
    render() {
        return (
            <Grid container
                justify="center"
                alignItems="center"
                direction="column"
                style={{height: "-webkit-fill-available"}}>
                    <Avatar src={this.props.image} style={{height: "64px", width: "64px", marginBottom: "5px"}}/>
                    <Typography>Woojung Paek</Typography>
            </Grid>
        )
    }
}

export default Profile

Profile.propTypes = {
    image: PropTypes.string 
};
