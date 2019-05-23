import React from 'react';
import Grid from '@material-ui/core/Grid';
import FilterBar from './FilterBar'
import FilterColumn from './FilterColumn'
import Typography from '@material-ui/core/Typography'
import TeacherCard from './TeacherCard'

const Filter = () => {
    return (
        <div>
            <FilterBar />
            <Grid container xs={12} direction='row'>
                <Grid item xs={3}>
                    <FilterColumn />
                </Grid>
                <Grid xs={6} style ={{marginTop : 60}}>
                    <Typography variant='h4'>FIND A TUTOR</Typography>
                    <TeacherCard/>
                    <TeacherCard/>
                    <TeacherCard/>
                    <TeacherCard/>
                    <TeacherCard/>
                </Grid>

            </Grid>
        </div>
    );
}
export default Filter;