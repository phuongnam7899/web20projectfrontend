import React from 'react';
import TeachingExperience from './TeachingExperience'
import TeachingSubject from './TeachingSubject'
import axios from '../../../axios'
class EditMyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: []
        };
        // this.handleSubChange = this.handleSubChange.bind(this);
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