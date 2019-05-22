import React from 'react';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Menu from '../../Menu'
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'

class EditMyProfile extends React.Component {
    state = {

    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });  
    };
    render() {
        return (
            <div>
                <Grid container xs={12} direction="column" alignItems='center' style={{ marginTop: 150 }} >
                    <Typography variant = 'h5'>EDIT MY PROFILE</Typography>
                    <Grid container direction='row' xs={8} justify='center' spacing={16} style={{ marginTop: 30 }} >
                        <Grid item xs={4}>
                            <Input placeholder='First Name' fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                            <Input placeholder='Last Name' fullWidth />
                        </Grid>
                    </Grid>
                    <Grid container direction='row' xs={8} justify='center' spacing={16} style={{ marginTop: 30 }}>
                        <Grid item xs={4}>
                            <Input placeholder='Date Of Birth' fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                            <Input placeholder='PhoneNumber' fullWidth />
                        </Grid>
                    </Grid>
                    <Grid container direction='row' xs={8} justify='center' spacing={16} style={{ marginTop: 30 }}>
                        <Grid item xs={4}>
                            <Input placeholder='Payment Method' fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                            <Input placeholder='PayPal Email' fullWidth />
                        </Grid>
                    </Grid>
                    <Grid container direction='row' xs={8} justify='center' spacing={16} style={{ marginTop: 30 }}>
                        <Grid item xs={4}>
                            <Input placeholder='Speaking Language' fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                            <Input placeholder='Address' fullWidth />
                        </Grid>
                    </Grid>
                    <Grid container direction='row' xs={8} justify='center' spacing={16} style={{ marginTop: 30 }}>
                        <Grid item xs={4}>
                            <Input placeholder='Profile Picture' fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                            <Input placeholder='Postal Code' fullWidth />
                        </Grid>
                    </Grid>
                    <Grid container direction='row' xs={8} justify='center' spacing={16} style={{ marginTop: 30 }}>
                        <Grid item xs={4}>
                            <Menu name='Nationality' />
                        </Grid>
                        <Grid item xs={4}>
                            <Menu name='Gender' />
                        </Grid>
                    </Grid>
                    <Grid container direction='row' xs={8} justify='center' spacing={16} style={{ marginTop: 30 }}>
                        <Grid item xs={4}>
                            <Menu name='Religion' />
                        </Grid>
                        <Grid item xs={4}>
                            <Menu name='Current education level' />
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid container xs = {8} justify="flex-end" style={{ marginTop: 30, marginLeft : 110 }}>
                        <Button variant = 'outlined' style={{ backgroundColor: '#FFFFFF', color: "#52C1C8", paddingLeft : 60, paddingRight: 60, marginRight : 30}} >Reset</Button>
                        <Button style={{ backgroundColor: '#52C1C8', color: "#FFFFFF", paddingLeft : 60, paddingRight: 60}}>Update Profile</Button>
                    </Grid>
            </div>
        );
    }
}

export default EditMyProfile