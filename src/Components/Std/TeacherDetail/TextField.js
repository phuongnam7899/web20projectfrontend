import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import Tag from './Tag'
import Content from './Content'

const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginTop : 30
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 800,
    },
});


class TextFields extends React.Component {
    state = {
        
    };

    render() {
        const { classes } = this.props;

        return (
            <div className = {classes.container}>
                <Tag content = 'Speak/Language'/>
                <Content content =  'English'/>
            </div>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);