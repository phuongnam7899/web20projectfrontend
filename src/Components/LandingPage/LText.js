import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

const LText = (props) => {
    return (
        <div>
            <Grid item xs={4}>
                <Typography color='black' className='text' style={{ marginTop: 288, fontSize: 36 , marginLeft : 80}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>
            </Grid>
        </div>
    );
}
export default LText;