import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


const BookingButton = () => {
    return (
        <Grid item xs={3}>
            <Button color='primary' style={{ background: 'black',marginLeft: 80, marginTop: 31, paddingTop: 17, paddingBottom: 17, paddingLeft: 45, paddingRight: 45 }}>BOOK YOUR TUTOR -></Button>
        </Grid>
    );
}
export default BookingButton;