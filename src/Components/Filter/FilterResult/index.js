import React from 'react';
import Typography from '@material-ui/core/Typography'
import TeacherCard from './TeacherCard'
import axios from '../../../axios'


class FilterResult extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            academic_level: '',
            tutors: []
        }
    }
    componentDidMount(){
        axios ({
            method: 'post',
            url: '/api/user/tutor/filter',
            data: {
                academic_level : this.state.academic_level,
            },
            headers: {'X-Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoYW9ucDA0MTA5OUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU1ODMyOTI1NX0.lkqx-o-14-saMoKmbEJQKWqIUSyTgyMZtdv5QLjQ-1c'}
        }).then((data) => {
            this.setState ({
                tutors : data.data
            }, ()=>{
                console.log(this.state.tutors)
            })
        }
        )
    }
    
    render(){

        return(
            <div>
                <Typography variant='h4' style = {{marginLeft : 80}}>FIND A TUTOR</Typography>
                {this.state.tutors.map(tutor => {
                    return ( <TeacherCard 
                name = {tutor.userInfo.profile.first_name + tutor.userInfo.profile.last_name}
                subject = {tutor.userInfo.teaching_subject}
                phone = {tutor.userInfo.profile.phone_number}
                />)
            })}
            </div>
        )
    }
}

export default FilterResult;