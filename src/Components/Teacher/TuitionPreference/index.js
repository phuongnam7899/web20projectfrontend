import React from 'react';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Menu from '../../Menu'
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import TeachingExperience from '../TeachingExperience'
import TeachingSubject from '../TeachingSubject'

class EditMyProfile extends React.Component {
    state = {

    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });  
    };
    render() {
        return (
            <div>
                <TeachingExperience />
                <TeachingSubject/>
            </div>
        );
    }
}

export default EditMyProfile