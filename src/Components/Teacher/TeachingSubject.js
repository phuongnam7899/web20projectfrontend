import React from 'react';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Menu from '../Menu'

class EditMyProfile extends React.Component {
    state = {

    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    render() {
        return (
            <div>
                <Grid container xs={12} direction="column" style={{ marginTop: 50, marginLeft : 80 }} alignItems = 'flex-start' >
                    <Typography variant='h5'>Teaching Subject</Typography>
                    <Menu name = 'Based In'/>
                    <Grid container direction='row' xs={12} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                    <Grid item xs={2}>
                        <Typography style ={{fontSize : 20}}>Subject</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography style ={{fontSize : 20}}>Academic Level</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography style ={{fontSize : 20}}>Grade</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography style ={{fontSize : 20}}>Hourly Rate</Typography>
                    </Grid>
                    <Grid container direction='row' xs={12} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                        <Grid item xs={2}>
                            <Input placeholder='Subject' fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <Input placeholder='Academic Level' fullWidth />
                        </Grid >
                        <Grid item xs={3}>
                            <Input placeholder='Grade' fullWidth />
                        </Grid >
                        <Grid item xs={2}>
                            <Input placeholder='Hourly Rate' fullWidth />
                        </Grid >
                        <Grid item xs = {1}>
                        <IconButton aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' xs={12} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                        <Grid item xs={2}>
                            <Input placeholder='Subject' fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <Input placeholder='Academic Level' fullWidth />
                        </Grid >
                        <Grid item xs={3}>
                            <Input placeholder='Grade' fullWidth />
                        </Grid >
                        <Grid item xs={2}>
                            <Input placeholder='Hourly Rate' fullWidth />
                        </Grid >
                        <Grid item xs = {1}>
                        <IconButton aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' xs={12} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                        <Grid item xs={2}>
                            <Input placeholder='Subject' fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <Input placeholder='Academic Level' fullWidth />
                        </Grid >
                        <Grid item xs={3}>
                            <Input placeholder='Grade' fullWidth />
                        </Grid >
                        <Grid item xs={2}>
                            <Input placeholder='Hourly Rate' fullWidth />
                        </Grid >
                        <Grid item xs = {1}>
                        <IconButton aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' xs={12} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                        <Grid item xs={2}>
                            <Input placeholder='Subject' fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <Input placeholder='Academic Level' fullWidth />
                        </Grid >
                        <Grid item xs={3}>
                            <Input placeholder='Grade' fullWidth />
                        </Grid >
                        <Grid item xs={2}>
                            <Input placeholder='Hourly Rate' fullWidth />
                        </Grid >
                        <Grid item xs = {1}>
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