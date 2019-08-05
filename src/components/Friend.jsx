import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class Friend extends Component {

    constructor(props) {
        super(props);
        this.changeConversation = this.changeConversation.bind(this);
    }

    changeConversation() {
        this.props.changeConversation(this.props.messages);
    }

    render() {
        const name = this.props.name;
        return (
            <Box key={name}>
                <Button fullWidth={true} onClick={this.changeConversation}>
                    {name} 
                </Button>
            </Box>
        )
    }
}

export default Friend

Friend.propTypes = {
    name: PropTypes.string,
    changeConversation: PropTypes.func,
    messages: PropTypes.array
};
