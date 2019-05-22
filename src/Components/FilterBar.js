import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from './Menu'
import Grid from '@material-ui/core/Grid';

const FilterBar = () => {
    return (
        <div style = {{margin : '0px 80px'}}>
        <Grid container xs = {12} style = {{marginTop : 100, marginLeft: 80}}>
            <Grid item xs = {3}>
            <Menu name = 'Select Country'/>
            </Grid>
            <Grid item xs = {2}>
            <Menu name = 'Academic Level'/>
            </Grid>
            <Grid item xs = {2}>
            <Menu name = 'Your Grade'/>
            </Grid>
            <Grid item xs = {2}>
            <Menu name = 'Course'/>
            </Grid>
            <Grid container xs = {3} alignContent = 'center'>
            <Button style={{ backgroundColor: '#52C1C8', color: "#FFFFFF", paddingLeft : 60, paddingRight: 60}} >Go</Button>
            </Grid>
        </Grid>
        </div>
    );
}
export default FilterBar;