import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '../../Menu'
import Grid from '@material-ui/core/Grid';

class FilterColumn extends React.Component {
    render() {
        return (
            <div style={{ margin: '0px 80px' }}>
                <Grid container xs={12} style={{ marginTop: 60, marginLeft: 80 }} direction='column'>
                    <Grid item xs={3}>
                        <Menu name='Language Spoken' />
                    </Grid>
                    <Grid item xs={2}>
                        <Menu name='Gender' />
                    </Grid>
                    <Grid item xs={2}>
                        <Menu name='Nationality' />
                    </Grid>
                    <Grid item xs={2}>
                        <Menu name='Education' />
                    </Grid>
                    <Grid item xs={2}>
                        <Menu name='Age' />
                    </Grid>
                    <Grid container xs={3} alignContent='center'>
                        <Button style={{ backgroundColor: '#52C1C8', color: "#FFFFFF", paddingLeft: 60, paddingRight: 60 }} >Filter</Button>
                    </Grid>
                    <Grid container xs={3} alignContent='center'>
                        <Button variant="outlined" style={{ backgroundColor: '#FFFFFF', color: "#52C1C8", paddingLeft: 60, paddingRight: 60, marginTop: 10 }} >Reset</Button>
                    </Grid>
                </Grid>
            </div>)
    }

}
export default FilterColumn;