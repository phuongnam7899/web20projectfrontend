import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


const BookingButton = () => {
    return (
        <Grid item xs={3}>
            <Button noWrap color='primary' style={{ background: '#52c1c8',marginLeft: 80, marginTop: 31, paddingTop: 17, paddingBottom: 17, paddingLeft: 45, paddingRight: 45, fontSize:18 }}>BOOK YOUR TUTOR</Button>
        </Grid>
    );
}
export default BookingButton;