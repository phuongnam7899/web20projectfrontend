import React from 'react';
import Grid from '@material-ui/core/Grid';
import FilterBar from './FilterBar';
import FilterColumn from './FilterColumn';
import FilterResult from './FilterResult';


class Filter extends React.Component {
    render(){
        return (
            <div>
                <FilterBar />
                <Grid container xs={12} direction='row'>
                    <Grid item xs={3}>
                        <FilterColumn />
                    </Grid>
                    <Grid xs={6} style ={{marginTop : 60}}>
                        <FilterResult/>
                    </Grid>
    
                </Grid>
            </div>
        );
    } 
}
export default Filter;