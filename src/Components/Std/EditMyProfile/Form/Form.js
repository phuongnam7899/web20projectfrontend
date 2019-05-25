import React from 'react'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';
import axios from '../../../../axios'

const FormDefault = ({ values, handleChange, errors, touched, handleBlur }) => {
    return (
        <Form>
            <Grid container justify='center' alignContent='center'>
                <Grid item xs={6} md={4}>
                    <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '150px' }}>
                        <Typography variant="h5" gutterBottom>
                            Edit My Profile
                        </Typography>
                        <Grid container direction='row' xs={24} justify='center' spacing={16} style={{ marginTop: 30 }}>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={!!touched.firstname && errors.firstname}>
                                    <InputLabel>First Name</InputLabel>
                                    <Input name='firstname' value={values.firstname} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                    <FormHelperText>{touched.firstname && errors.firstname}</FormHelperText>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={!!touched.lastname && errors.lastname}>
                                    <InputLabel>Last Name</InputLabel>
                                    <Input name='lastname' value={values.lastname} onChange={handleChange} onBlur={handleBlur}  fullWidth />
                                    <FormHelperText>{touched.lastname && errors.lastname}</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container direction='row' xs={24} justify='center' spacing={16} style={{ marginTop: 30 }}>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.dob && errors.dob}>
                                    <InputLabel>Date Of Birth</InputLabel>
                                    <Input name='dob' value={values.dob} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                    <FormHelperText>{errors.dob}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.phonenumber && errors.phonenumber}>
                                    <InputLabel>Phone Number</InputLabel>
                                    <Input name='phonenumber' value={values.phonenumber} onChange={handleChange} onBlur={handleBlur}  fullWidth />
                                    <FormHelperText>{errors.phonenumber}</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container direction='row' xs={24} justify='center' spacing={16} style={{ marginTop: 30 }}>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.payment && errors.payment}>
                                    <InputLabel>Payment Method</InputLabel>
                                    <Input name='payment' value={values.payment} onChange={handleChange} onBlur={handleBlur}fullWidth />
                                    <FormHelperText>{errors.payment}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.paypal && errors.paypal}>
                                    <InputLabel>PayPal Email</InputLabel>
                                    <Input name='paypal' value={values.paypal} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                    <FormHelperText>{errors.paypal}</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container direction='row' xs={24} justify='center' spacing={16} style={{ marginTop: 30 }}>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.address && errors.address}>
                                    <InputLabel>Address</InputLabel>
                                    <Input name='address' value={values.address} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                    <FormHelperText>{errors.address}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.postal && errors.postal}>
                                    <InputLabel>Postal Code</InputLabel>
                                    <Input name='postal' value={values.postal} onChange={handleChange} fullWidth />
                                    <FormHelperText>{errors.postal}</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid>
                            <FormControl fullWidth margin='normal' error={touched.email && errors.email}>
                                <InputLabel>Email</InputLabel>
                                <Input name='email' value={values.email} onChange={handleChange} fullWidth />
                                <FormHelperText>{errors.email}</FormHelperText>
                            </FormControl>
                            <FormControl fullWidth margin='normal' error={touched.password && errors.password}>
                                <InputLabel>Password</InputLabel>
                                <Input fullWidth name='password' type='password' value={values.password} onChange={handleChange} />
                                <FormHelperText>{errors.password}</FormHelperText>
                            </FormControl>
                        </Grid>

                        <Grid container direction='row' xs={24} justify='center' spacing={16} margin='normal'>
                     
                            <Grid margin='normal' xs={2}>
                                <FormControl styles={{ mindWidth: 120 }} margin='normal'>
                                    <InputLabel>Gender</InputLabel>
                                    <Select
                                        displayEmpty
                                        name='gender'
                                        value={values.gender}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value='male'>Male</MenuItem>
                                        <MenuItem value='female'>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid margin='normal' xs={2}>
                                <FormControl styles={{ mindWidth: 120 }} margin='normal'>
                                    <InputLabel>Nationality</InputLabel>
                                    <Select
                                        displayEmpty
                                        name='nation'
                                        value={values.nation}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value='usa'>USA</MenuItem>
                                        <MenuItem value='vietnam'>Vietnam</MenuItem>
                                        <MenuItem value='aus'>Australia</MenuItem>
                                        <MenuItem value='eng'>England</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid margin='normal' xs={2}>
                                <FormControl styles={{ mindWidth: 120 }} margin='normal'>
                                    <InputLabel>Education Level</InputLabel>
                                    <Select
                                        displayEmpty
                                        name='education'
                                        value={values.education}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value='highschool'>High School</MenuItem>
                                        <MenuItem value='uni'>University</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <FormControl fullWidth margin='normal'>
                            <Button
                                variant='extendedFab'
                                color='primary'
                                type='submit'
                            >
                                Update Profile
                                </Button>
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </Form>

    )
}


const FormikForm = withFormik({
    mapPropsToValues({ }) {
        return {
            firstname: '',
            lastname: '',
            dob: '',
            phonenumber: '',
            payment: '',
            paypal: '',
            postal: '',
            address: '',
            email: '',
            password: '',
            plan: '',
            gender: '',
            nation: '',
            education: ''
        };
    },
    validationSchema: Yup.object().shape({
        firstname: Yup.string()
            .required('Username is required')
            .min(3, 'Username must have min 3 characters'),
        lastname: Yup.string()
            .required('Username is required')
            .min(3, 'Username must have min 3 characters'),
        dob: Yup.date(),
        phonenumber: Yup.number()
            .required('Phone Number is required')
            .min(10, 'Phone Number must have min 5 characters'),
        postal: Yup.number()
            .min(9, 'Postal must have min 9 characters'),
        address: Yup.string()
            .required('Address is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must have min 8 characters')
    }),
    handleSubmit(values) {
        const id = localStorage.getItem('user_id')
        axios({
            method:'put',
            url : `/api/user?token=${localStorage.getItem('token')}`,
            data : {
                id:id,
                address: values.address,
                date_of_birth: values.dob,
                first_name : values.firstname,
                gender_name: values.gender,
                last_name: values.lastname,
                nationality_name: values.nation,
                postal_code: values.payment,
                paypal_email: values.paypal,
                phone_number:values.phonenumber,
            },
            headers: { 'X-Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoYW9ucDA0MTA5OUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU1ODMyOTI1NX0.lkqx-o-14-saMoKmbEJQKWqIUSyTgyMZtdv5QLjQ-1c' }
        }).then((updated) => {
            console.log(updated)
        })
        .catch(err => console.log(err))
    }

})(FormDefault)

export default FormikForm