import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Link from '@material-ui/core/Link'
import Input from '@material-ui/core/Input';
import axios from '../axios';

class Login extends React.Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone_num: "",
        gender_name:"",
        role: ""
    }
    handleStNameChange = (e) => {
        this.setState(
            {
                first_name: e.target.value
            },() => {
                console.log(this.state.first_name)
            }
        )
    }
    handleLastNameChange = (e) => {
        this.setState(
            {
                last_name: e.target.value
            }
        )
    }
    handleEmailChange = (e) => {
        this.setState(
            {
                email: e.target.value
            }
        )
    }
    handlePassChange = (e) => {
        this.setState(
            {
                password: e.target.value
            }
        )
    }
    handleRoleChange = (e) => {
        this.setState(
            {
                role: e.target.value
            }
        )
    }
    handlePhoneChange = (e) => {
        this.setState(
            {
                phone_num: e.target.value
            }
        )
    }
    handleGenderChange = (e) => {
        this.setState(
            {
                gender_name: e.target.value
            }
        )
    }
    handleSignup = () => {
        axios({
            url: '/api/auth/register',
            method: 'post',
            data: {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password,
                gender_name: this.state.gender_name,
                phone_num: this.state.phone_num,
                role: this.state.role
            }
        })
        .then((sent_data) => {
            let status = sent_data.data.success;
            console.log(sent_data.data.success)
            if(status === 1){
                this.props.history.push("/login")
            }
        })
        .catch(err => console.error(err))
    }
    render() {
        return (
            <div>
                <Grid container direction='column' xs={12} style={{ marginTop: 200 }} alignContent = 'center'>
                    <Grid item xs={4}>
                        <Typography style={{ fontSize: 18 }} align = 'center'>
                            Create Accout
                        </Typography>
                    </Grid>
                    <Grid container xs={4} justify = 'center'>
                        <Typography style={{ fontSize: 18 }} >
                            or
                        </Typography>
                        <Link to = '/login'>
                            <Typography style={{ fontSize: 18 }} >
                                Log In
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={4} style = {{marginTop : 20}}>
                        <Input placeholder='First Name' onChange = {this.handleStNameChange} fullWidth/>
                    </Grid>
                    <Grid item xs={4} style = {{marginTop : 20}}>
                        <Input placeholder='Last Name' onChange = {this.handleLastNameChange} fullWidth/>
                    </Grid>
                    <Grid item xs={4} style = {{marginTop : 20}}>
                        <Input placeholder='Email Address' onChange = {this.handleEmailChange} fullWidth/>
                    </Grid>
                    <Grid item xs={4} style = {{marginTop : 20}}>
                        <Input placeholder='Password'  onChange = {this.handlePassChange} fullWidth/>
                    </Grid>
                    <Grid item xs={4} style = {{marginTop : 20}}>
                        <Input placeholder='Gender'  onChange = {this.handleGenderChange} fullWidth/>
                    </Grid>
                    <Grid item xs={4} style = {{marginTop : 20}}>
                        <Input placeholder='Phone number'  onChange = {this.handlePhoneChange} fullWidth/>
                    </Grid>
                    <Grid item xs={4} style = {{marginTop : 20}}>
                        <Input placeholder='Role'  onChange = {this.handleRoleChange} fullWidth/>
                    </Grid>
                    <Grid item xs={4} style = {{marginTop : 20}}>

                        <Typography style={{ fontSize: 17 }} align = 'center' >

                            By creating an account, you agree to our Terms of Service and have read and understood the Privacy Policy
    
                        </Typography>

                    </Grid>
                    <Button style={{ backgroundColor: '#E9E9E9', color: "#A7A7A7", marginTop : 20}} onClick = {this.handleSignup}>Create Account</Button>
                </Grid>
            </div>
        );
    }
}


export default Login;