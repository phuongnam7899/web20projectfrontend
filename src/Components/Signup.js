import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Link from '@material-ui/core/Link'
import Input from '@material-ui/core/Input';
import axios from '../axios';
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'



const Login = ({ values, handleChange, errors, touched, handleBlur }) => {
    return (
        <Form>
            <Grid container direction='column' xs={12} style={{ marginTop: 80 }} alignContent = 'center'>
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
                        <FormControl fullWidth error={!!touched.firstname && errors.firstname}>
                        <Input placeholder='First Name' name='firstname' value={values.firstname} onChange = {handleChange} fullWidth onBlur={handleBlur}/>
                        <FormHelperText>{touched.firstname && errors.firstname}</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} style = {{marginTop : 20}}>
                        <FormControl fullWidth error={!!touched.lastname && errors.lastname}>
                        <Input placeholder='Last Name'  name='lastname' value={values.lastname} onChange = {handleChange} fullWidth onBlur={handleBlur}/>
                        <FormHelperText>{touched.lastname && errors.lastname}</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} style = {{marginTop : 20}}>
                        <FormControl fullWidth error={!!touched.email && errors.email}>
                        <Input placeholder='Email Address' name='email' value={values.email} onChange = {handleChange} fullWidth onBlur={handleBlur}/>
                        <FormHelperText>{touched.email && errors.email}</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} style = {{marginTop : 20}}>
                        <FormControl fullWidth error={!!touched.password && errors.password}>
                        <Input placeholder='Password' type='password' name='password' value={values.password} onChange = {handleChange} fullWidth onBlur={handleBlur}/>
                        <FormHelperText>{touched.password && errors.password}</FormHelperText>
                        </FormControl>

                    </Grid>
                    <Grid item xs={4} style = {{marginTop : 20}}>
                        <InputLabel>Gender</InputLabel>
                        <FormControl fullWidth error={!!touched.gender && errors.gender}>
                        <Select
                            displayEmpty
                            name='gender'
                            value={values.gender}
                            onChange={handleChange}
                            required
                        >
                            <MenuItem value='male'>Male</MenuItem>
                            <MenuItem value='female'>Female</MenuItem>
                        </Select>
                        <FormHelperText>{touched.gender && errors.gender}</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} style = {{marginTop : 20}}>
                        <FormControl fullWidth error={!!touched.phonenumber && errors.phonenumber}>
                        <Input placeholder='Phone number'  name='phonenumber' value={values.phonenumber} onChange = {handleChange} fullWidth onBlur={handleBlur}/>
                        <FormHelperText>{touched.phonenumber && errors.phonenumber}</FormHelperText>                            
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} style = {{marginTop : 20}}>
                        <InputLabel>You are?</InputLabel>
                        <FormControl fullWidth error={!!touched.role && errors.role}>
                        <Select
                            displayEmpty
                            name='role'
                            value={values.role}
                            onChange={handleChange}
                            required
                        >
                            <MenuItem value='student'>Student</MenuItem>
                            <MenuItem value='tutor'>Tutor</MenuItem>
                        </Select>
                        <FormHelperText>{touched.role && errors.role}</FormHelperText>                            
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} style = {{marginTop : 20}}>

                        <Typography style={{ fontSize: 17 }} align = 'center' >

                            By creating an account, you agree to our Terms of Service and have read and understood the Privacy Policy
    
                        </Typography>

                    </Grid>
                    <Button type='submit' style={{ backgroundColor: '#E9E9E9', color: "#A7A7A7", marginTop : 20}}>Create Account</Button>
                </Grid>
        </Form>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({ }) {
        return {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            gender: '',
            phonenumber: '',
            role: ''
        }
    },
    validationSchema: Yup.object().shape({
        firstname: Yup.string()
            .required('First name is required')
            .min(3, 'First name must have min 3 characters'),
        lastname: Yup.string()
            .required('Last name is required')
            .min(3, 'Last name must have min 3 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must have min 8 characters'),
        phonenumber: Yup.number()
            .required('Phone Number is required')
            .min(10, 'Phone Number must have min 10 characters'),
        role: Yup.string()
            .required('Role is required')

    }),
    handleSubmit(values, { props }) {
        axios({
            url: '/api/auth/register',
            method: 'post',
            data: {
                first_name: values.firstname,
                last_name: values.lastname,
                email: values.email,
                password: values.password,
                gender_name: values.gender,
                phone_num: values.phonenumber,
                role: values.role
            }}).then((sent_data) => {
                let status = sent_data.data.success;
                console.log(sent_data.data.success)
                if(status === 1){
                    props.history.push("/login")
                }}).catch(err => console.error(err))
        }
})(Login)

export default FormikForm;