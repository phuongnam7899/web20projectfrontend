import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Link from '@material-ui/core/Link'
import Input from '@material-ui/core/Input';
import axios from '../axios';
const jwt_decode = require('jwt-decode');
class CreateAccount extends React.Component {
    state = {
        email: "",
        password: ""
    }
    handleMailChange = (e) => {
        this.setState({
            email: e.target.value
        })
        console.log(e.target.value)
    }
    handlePassChange = (e) =>{
        this.setState({
            password: e.target.value
        })
        console.log(e.target.value)
    }
    handleLogin = () => {
        axios({
            url: '/api/auth/login',
            method: 'post',
            data: {
              email: this.state.email,
              password: this.state.password
            }
        })
        .then((sent_data) => {
            console.log();
            //api login tra ve cai token 
            //save token vao localstorage
            localStorage.setItem('token', sent_data.data.token);
            //lay role va luu vao localStorage
            localStorage.setItem('role', sent_data.data.userInfo.role)
            console.log(sent_data.data.userInfo.role)
        })
        .catch(err => console.error(err))
        setTimeout(() => {
            if(this.state.email === "student"){
                this.props.history.push('/filter');
            }else{
                this.props.history.push('/user');
            }
        }, 5000
        )
    }
    render() {
        return (
            <div>
                <Grid container direction='column' xs={12} style={{ marginTop: 200 }} alignContent='center'>
                    <Grid item xs={4}>
                        <Typography style={{ fontSize: 18 }} align='center'>
                            LOG IN
                        </Typography>
                    </Grid>
                    <Grid container xs={4} justify='center'>
                        <Typography style={{ fontSize: 18 }} >
                            or
                        </Typography>
                        <Link to='/signup'>
                            <Typography style={{ fontSize: 18 }} >
                                Create Account
                            </Typography>
                        </Link>
                    </Grid>
<<<<<<< HEAD
                    <Grid item xs={4} style={{ marginTop: 20 }}>
                        <Input placeholder='Email Address' fullWidth />
                    </Grid>
                    <Grid item xs={4} style={{ marginTop: 20 }}>
                        <Input placeholder='Password' fullWidth />
                    </Grid>

                    <Button style={{ backgroundColor: '#E9E9E9', color: "#A7A7A7", marginTop: 20 }} href='/user'>Log In</Button>
=======
                    <Grid item xs={4}>
                        <Input placeholder='Email Address' fullWidth onChange = {this.handleMailChange}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Input placeholder='Password' fullWidth onChange = {this.handlePassChange}/>
                    </Grid>
                    <Grid item xs={4}>

                        <Typography style={{ fontSize: 17 }} align = 'center' >

                            By creating an account, you agree to our Terms of Service and have read and understood the Privacy Policy
    
                        </Typography>

                    </Grid>
                    <button onClick = {this.handleLogin} >Log In</button>
>>>>>>> 09da16eab3c18d545a92facbf454cf714ba32cad
                </Grid>
            </div>
        );
    }
}


export default CreateAccount;