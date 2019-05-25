import React, { Component } from 'react';
import FormDefault from './Form/Form';

class EditMyProfile extends Component {
    render() {
        return (
            <FormDefault editProfile = {this.editProfile()}/>
        )
    }
}




export default EditMyProfile