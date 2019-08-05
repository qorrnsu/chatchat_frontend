import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import '../styles/Textblock.css';

const notNewBlockStyle = {
    margin: "0 56px"
};

class MessageBlock extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let borderRadiusStyle;
        if (this.props.isMyself) {
            if (this.props.isNewBlock) {
                borderRadiusStyle = "20px 20px 0 20px";
            } else if (this.props.isLastBlock) {
                borderRadiusStyle = "20px 0 20px 20px";
            } else {
                borderRadiusStyle = "20px 0 0 20px";
            }
        } else {
            if (this.props.isNewBlock) {
                borderRadiusStyle = "20px 20px 20px 0";
            } else if (this.props.isLastBlock) {
                borderRadiusStyle = "0 20px 20px 20px";
            } else {
                borderRadiusStyle = "0 20px 20px 0";
            }
        }
        const avatarComponent = this.props.isNewBlock?
                <Avatar key={0} src={this.props.image} style={{height: "40px", width: "40px", margin: "0 8px"}}/> :
                null;
        const textComponent = (<Box 
                className="textblock"
                style={this.props.isNewBlock?null:notNewBlockStyle} 
                p="8px"
                borderRadius={borderRadiusStyle}
                key={1}>
                    <Typography>{this.props.text}</Typography>
                </Box>);
        return (
            <Grid container
            justify={this.props.isMyself?"flex-end":"flex-start"}
            alignItems="center"
            style={{width: "-webkit-fill-available", margin: "2px 0"}}>
                {this.props.isMyself?
                    [(textComponent), (avatarComponent)] :
                    [(avatarComponent), (textComponent)]
                }
            </Grid>
        )
    }
}

export default MessageBlock

MessageBlock.propTypes = {
    image: PropTypes.string,
    isLastBlock: PropTypes.bool,
    isNewBlock: PropTypes.bool,
    isMyself: PropTypes.bool,
    text: PropTypes.string
};
