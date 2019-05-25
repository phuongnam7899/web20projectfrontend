import React from 'react';
import Grid from '@material-ui/core/Grid';
import FilterBar from './FilterBar';
import FilterColumn from './FilterColumn';
import FilterResult from './FilterResult';


class Filter extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            tutors: []
        }
        this.changeTutors = this.changeTutors.bind(this);
    }

    changeTutors(tutors) {
        console.log(tutors)
        this.setState ({
            tutors : tutors
        })
    }

    render(){
        return (
            <div>
                <FilterBar changeTutors={this.changeTutors} />
                <Grid container xs={12} direction='row'>
                    <Grid item xs={3}>
                        <FilterColumn />
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