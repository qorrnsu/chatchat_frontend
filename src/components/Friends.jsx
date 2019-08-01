import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class Friends extends Component {
    render() {
        const id = this.props.id;
        return (
            <Box key={id}>
                <Button fullWidth={true}>
                    {id} 
                </Button>
            </Box>
        )
    }
}

export default Friends

Friends.propTypes = {
    id: PropTypes.string
};
