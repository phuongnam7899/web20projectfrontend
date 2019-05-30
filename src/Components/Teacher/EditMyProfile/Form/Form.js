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

const Wrapper = (Component) => {
    return class extends React.Component {
        state = {
            user_info: null
        }
        componentDidMount() {
            axios.get(`api/user/tutor/${localStorage.id}?token=${localStorage.token}`)
                .then(data => {
                    console.log(data)
                    console.log("user_info", data.data.user_id.profile)
                    this.setState({ user_info: data.data.user_id.profile })
                })
                .catch(err => console.error(err))
        }
    
        render() {
            const { user_info } = this.state; 
            if (!user_info) return null;
            return <Component {...this.props} user_info={user_info} /> 
        }
    }
}
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
                                    <Input name='first_name' value={values.first_name} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                    <FormHelperText>{touched.firstname && errors.firstname}</FormHelperText>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.lastname && errors.lastname}>
                                    <InputLabel>Last Name</InputLabel>
                                    <Input name='last_name' value={values.last_name} onChange={handleChange} fullWidth />
                                    <FormHelperText>{touched.lastname && errors.lastname}</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container direction='row' xs={24} justify='center' spacing={16} style={{ marginTop: 30 }}>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.dob && errors.dob}>
                                    <InputLabel>Date Of Birth</InputLabel>
                                    <Input name='date_of_birth' value={values.date_of_birth} onChange={handleChange} fullWidth />
                                    <FormHelperText>{touched.dob && errors.dob}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.phonenumber && errors.phonenumber}>
                                    <InputLabel>Phone Number</InputLabel>
                                    <Input name='phone_number' value={values.phone_number} onChange={handleChange} fullWidth />
                                    <FormHelperText>{touched.phonenumber && errors.phonenumber}</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container direction='row' xs={24} justify='center' spacing={16} style={{ marginTop: 30 }}>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.payment && errors.payment}>
                                    <InputLabel>Payment Method</InputLabel>
                                    <Input name='payment_method' value={values.payment_method} onChange={handleChange} fullWidth />
                                    <FormHelperText>{touched.payment && errors.payment}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.paypal && errors.paypal}>
                                    <InputLabel>PayPal Email</InputLabel>
                                    <Input name='paypal_email' value={values.paypal_email} onChange={handleChange} fullWidth />
                                    <FormHelperText>{touched.paypal && errors.paypal}</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container direction='row' xs={24} justify='center' spacing={16} style={{ marginTop: 30 }}>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.address && errors.address}>
                                    <InputLabel>Address</InputLabel>
                                    <Input name='address' value={values.address} onChange={handleChange} fullWidth />
                                    <FormHelperText>{touched.address && errors.address}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.postal && errors.postal}>
                                    <InputLabel>Postal Code</InputLabel>
                                    <Input name='postal_code' value={values.postal_code} onChange={handleChange} fullWidth />
                                    <FormHelperText>{touched.postal && errors.postal}</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container direction='row' xs={24} justify='center' spacing={16} margin='normal'>
                     
                            <Grid margin='normal' xs={2}>
                                <FormControl styles={{ mindWidth: 120 }} margin='normal'>
                                    <InputLabel>Gender</InputLabel>
                                    <Select
                                        displayEmpty
                                        name='gender_name'
                                        value={values.gender_name}
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
                                        name='nationality_name'
                                        value={values.nationality_name}
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
                                        name='academic_level_name'
                                        value={values.academic_level_name}
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
    mapPropsToValues(props) {
        const { user_info } = props;
        let initial_info = {}
        if(user_info.first_name){
            initial_info.first_name = user_info.first_name
        }else{
            initial_info.first_name = ''
        }
        if(user_info.last_name){
            initial_info.last_name = user_info.last_name
        }else{
            initial_info.last_name = ''
        }
        if(user_info.date_of_birth){
            initial_info.date_of_birth = user_info.date_of_birth
        }else{
            initial_info.date_of_birth = ''
        }
        if(user_info.phone_number){
            initial_info.phone_number = user_info.phone_number
        }else{
            initial_info.phone_number = ''
        }
        if(user_info.payment_method){
            initial_info.payment_method = user_info.payment_method
        }else{
            initial_info.payment_method = ''
        }
        if(user_info.paypal_email){
            initial_info.paypal_email = user_info.paypal_email
        }else{
            initial_info.paypal_email = ''
        }
        if(user_info.address){
            initial_info.address = user_info.address
        }else{
            initial_info.address = ''
        }
        if(user_info.postal_code){
            initial_info.postal_code = user_info.postal_code
        }else{
            initial_info.postal_code = ''
        }
        if(user_info.gender_name){
            initial_info.gender_name = user_info.gender_name
        }else{
            initial_info.gender_name = ''
        }
        if(user_info.nationality_name){
            initial_info.nationality_name = user_info.nationality_name
        }else{
            initial_info.nationality_name = ''
        }
        if(user_info.academic_level_name){
            initial_info.academic_level_name = user_info.academic_level_name
        }else{
            initial_info.academic_level_name = ''
        }
        console.log('profile',props);
        console.log('initial info', initial_info)
        return (initial_info);
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
            .min(10, 'Phone Number must have min 10 characters'),
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
        const id = localStorage.getItem('user_id');
        axios({
            url: `/api/user?token=${localStorage.getItem('token')}`,
            method: 'put',
            data: {
                id: id,
                first_name: values.firstname,
                last_name: values.lastname,
                date_of_birth: values.dob,
                phone_number: values.phonenumber,
                postal_code: values.postal,
                payment_method: values.payment,
                paypal_email: values.paypal,
                gender_name: values.gender,
                address: values.address,
                nationality_name: values.nation,
            }
        })
        .then((updated) => {
           console.log(updated);
           document.location.href = '/';
        })
        .catch(err => console.error(err))
    }

})(FormDefault)

export default Wrapper(FormikForm)