import React from 'react';
import Typography from '@material-ui/core/Typography'
import TeacherCard from './TeacherCard'
import axios from '../../../axios'
import _ from "lodash";

class FilterResult extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            academic_level: '',
            tutors: []
        }
    }
    
    
    render(){
        const { tutors } = this.props;
        console.log(tutors)
        if (_.isEmpty(tutors)) {
            return null
        }
        return(
            <div>
                <Typography variant='h4' style = {{marginLeft : 80}}>FIND A TUTOR</Typography>
                {this.props.tutors.map(tutor => {
                    return ( <TeacherCard 
                name = {tutor.userInfo.profile.first_name + tutor.userInfo.profile.last_name}
                subject = {tutor.userInfo.teaching_subject}
                phone = {tutor.userInfo.profile.phone_number}
                id = {tutor.userInfo._id}
                />)
            })}
            </div>
        )
    }
}

export default FilterResult;