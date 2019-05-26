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
        this.handleSubChange = this.handleSubChange.bind(this);
    };
    componentDidMount(){
        axios.get(`api/user/tutor/${localStorage.id}?token=${localStorage.token}`)  
            .then(data => {
                console.log(data)
                console.log(data.data.teaching_subject)
            })
            .catch(err => console.error(err))
    }
    handleSubChange(e){
        console.log('adfds')
        console.log(e.target.name)
    }
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