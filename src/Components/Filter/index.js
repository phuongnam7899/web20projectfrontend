import React from 'react';
import Grid from '@material-ui/core/Grid';
import FilterBar from './FilterBar';
import FilterColumn from './FilterColumn';
import FilterResult from './FilterResult';
import axios from '../../axios';

class Filter extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            tutors: [],
            tutor_info: {},
            std_info: {}
        }
        this.changeTutors = this.changeTutors.bind(this);
        this.filter_std_info = this.filter_std_info.bind(this);
        this.filter_tutor_info = this.filter_tutor_info.bind(this);
    }

    changeTutors(tutors) {
        console.log(tutors)
        this.setState ({
            tutors : tutors
        })
    }
    filter_tutor_info(info){
        console.log('tutor info', info)
        this.setState({
            tutor_info: info
        }, () => {
            const all_info = Object.assign(this.state.std_info, this.state.tutor_info)
            console.log('all info', all_info)
            axios({
                method : 'post',
                url: `/api/user/tutor/filter?token=${localStorage.getItem('token')}`,
                data: all_info
            }).then((data) => {
                console.log(data.data)
                this.setState({
                    tutors: data.data
                })
            })
        })
    }
    filter_std_info(info){
        console.log('std info', info)
        this.setState({
            std_info: info
        })
    }
    render(){
        return (
            <div>
                <FilterBar filter_std_info={this.filter_std_info} />
                <Grid container xs={12} direction='row'>
                    <Grid item xs={3}>
                        <FilterColumn  filter_tutor_info = {this.filter_tutor_info}/>
                    </Grid>
                    <Grid xs={6} style ={{marginTop : 60}}>
                        <FilterResult tutors = {this.state.tutors}/>
                    </Grid>
                </Grid>
            </div>
        );
    } 
}
export default Filter;