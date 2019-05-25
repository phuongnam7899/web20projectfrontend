import React from 'react';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class EditMyProfile extends React.Component {
    state = {
        
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    render() {
        return (
            <div>
                <Grid container xs={12} direction="column" style={{ marginTop: 150, marginLeft : 80 }} alignItems = 'flex-start' >
                    <Typography variant='h5'>Teaching Experience</Typography>
                    <Grid container direction='row' xs={8} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                    <Grid item xs={2}>
                        <Typography style ={{fontSize : 20}}>Year</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style ={{fontSize : 20}}>Experience</Typography>
                    </Grid>
                    <Grid container direction='row' xs={12} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                        <Grid item xs={2}>
                            <Input placeholder='Year' fullWidth />
                        </Grid>
                        <Grid item xs={8}>
                            <Input placeholder='Experience' fullWidth />
                        </Grid >
                        <Grid item xs = {2}>
                        <IconButton aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' xs={12} justify='flex-start' spacing={16} style={{ marginTop: 10     }} >
                        <Grid item xs={2}>
                            <Input placeholder='Year' fullWidth />
                        </Grid>
                        <Grid item xs={8}>
                            <Input placeholder='Experience' fullWidth />
                        </Grid >
                        <Grid item xs = {2}>
                        <IconButton aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                        </Grid>
                    </Grid>
                    <Button style={{ backgroundColor: '#52C1C8', color: "#FFFFFF", paddingLeft : 60, paddingRight: 60}}>Add Record</Button>
                </Grid>
                </Grid>
            </div >
        );
    }
}

export default EditMyProfile