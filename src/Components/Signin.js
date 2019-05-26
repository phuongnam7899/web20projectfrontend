import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Input from '@material-ui/core/Input';
import axios from '../axios';
import TuitionPreference from './Teacher/TuitionPreference';
import MyDetail from '../Components/Teacher/TeacherDetail';
import Circle from './Circle'

class CreateAccount extends React.Component {
    state = {
        email: "",
        password: "",
        role: "",
    }
    handleMailChange = (e) => {
        this.setState({
            email: e.target.value
        })
        console.log(e.target.value)
    }
    handlePassChange = (e) => {
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
                console.log(sent_data);
                localStorage.setItem('token', sent_data.data.token);
                localStorage.setItem('role', sent_data.data.userInfo.user_id.role);
                localStorage.setItem("id", sent_data.data.userInfo._id);
                localStorage.setItem("user_id", sent_data.data.userInfo.user_id._id)
                this.props.updateRole(localStorage.getItem('role'))
                if (localStorage.getItem('role') === "student") {
                    this.props.history.push('/user')
                }
                if (localStorage.getItem('role') === "tutor") {
                    this.props.history.push('/teacher/tuitionpreference');
                }
            })
            .catch(err => console.error(err))
    }
    render() {
        let display = localStorage.getItem('token') ? (
            localStorage.getItem('role') === "tutor" ? (
                <TuitionPreference />
            ) : (
                <MyDetail />
                )
        ) : (   
                <Grid container direction='column' style={{ marginTop: 150}} alignContent='center' spacing={5} >
                    <Grid item xs={3}>
                        <Typography style={{ fontSize: 20 }} align='center'>
                            LOG INTO XTutor
                        </Typography>
                    </Grid>
                    <Grid container xs={3} justify='center'>
                        <Typography style={{ fontSize: 18, color: '#A7A7A7', fontWeight: 200 }} >
                            or
                        </Typography>
                        <Typography style={{ fontSize: 18, }} >
                            <Link to='/signup' style={{ color: '#A7A7A7', fontWeight: 200 }}>
                                Create Account
                                </Link>
                        </Typography>
                    </Grid>

                    <Grid item xs={3} style={{ marginTop: 30 }}>
                        <Input placeholder='Email Address' fullWidth onChange={this.handleMailChange} />
                    </Grid>

                    <Grid item xs={3} style={{ marginTop: 30 }}>
                        <Input placeholder='Password' type='password' fullWidth onChange={this.handlePassChange} />
                    </Grid>

                    <Button style={{ backgroundColor: '#52c1c8', color: "#ffffff", marginTop: 30 }} onClick={this.handleLogin}>Log In</Button>
                </Grid>
            )
        return (
            <div>
                {display}   
            </div>
        );
    }
}


export default CreateAccount;