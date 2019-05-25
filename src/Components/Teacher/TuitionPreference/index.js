import React from 'react';
import TeachingExperience from './TeachingExperience'
import TeachingSubject from './TeachingSubject'

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