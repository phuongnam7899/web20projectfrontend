import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import FilterBar from '../FilterBar'
import FilterColumn from '../FilterColumn'
import Typography from '@material-ui/core/Typography'
import SessionCard from '../SessionCard'

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
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                </Grid>

            </Grid>
        </div>
    );
}
export default Filter;