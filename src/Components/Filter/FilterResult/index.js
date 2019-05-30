import React from 'react';
import Typography from '@material-ui/core/Typography'
import TeacherCard from './TeacherCard'
import axios from '../../../axios'
import _ from "lodash";

class FilterResult extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            tutors: []
        }
    }
    
    
    render(){
        const { tutors } = this.props;

        if (_.isEmpty(tutors)) {
            return <Typography variant='h4' style = {{marginLeft : 80}}>NO RESULT HERE</Typography>
        }
        console.log(tutors)
        return(
            <div>
                <Typography variant='h4' style = {{marginLeft : 80}}>YOUR RESULT</Typography>
                {tutors.map(tutor => {
                    return (
                <TeacherCard 
                    key={tutor._id}
                    name = {tutor.userInfo.profile.first_name + tutor.userInfo.profile.last_name}
                    subject = {tutor.userInfo.teaching_subject}
                    phone = {tutor.userInfo.profile.phone_number}
                    id = {tutor._id}
                />)
            })}
            </div>
        )
    }
}

export default FilterResult;