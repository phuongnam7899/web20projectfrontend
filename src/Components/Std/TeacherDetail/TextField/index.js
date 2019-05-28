import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import Tag from './Tag'
import Content from './Content'
import _ from "lodash"

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
    render() {
        const { classes , tag , content } = this.props;
        let contentList = [];
        contentList = contentList.concat(content)
        return (
            <div className = {classes.container}>
                <Tag content = {tag}/>
                {
                    contentList.map((item) => {
                        if(_.isObject(item)){
                            const year_experirnce = item.year + "   " + item.experience;
                            return <Content content = {year_experirnce}/>;
                        }
                        else{
                            return <Content content = {item}/>
                        }
                    })
                }
            </div>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);