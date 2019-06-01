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
import Dialog from '../../../Dialog'

const Wrapper = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                user_info: null,
                open: false
            }
            this.openDialog = this.openDialog.bind(this);
            this.closeDialog = this.closeDialog.bind(this);
        }
        openDialog() {
            this.setState({
                open: true
            })
        }
        closeDialog() {
            this.setState({
                open: false
            })
        }
        componentDidMount() {
            axios.get(`api/user/student/${localStorage.id}?token=${localStorage.token}`)
                .then(data => {
                    console.log(data)
                    console.log("user_info", data.data.user_id.profile)
                    this.setState({ user_info: data.data.user_id.profile })
                })
                .catch(err => console.error(err))
        }

        render() {
            const { user_info } = this.state;
            const { open } = this.state;
            if (!user_info) return null;
            return <Component {...this.props} user_info={user_info} open={open} openDialog={this.openDialog} closeDialog={this.closeDialog} />
        }
    }
}

const FormDefault = ({ values, handleChange, errors, touched, handleBlur, open, closeDialog }) => {
    return (
        <Form>
            <Grid container justify='center' alignContent='center'>
                <Grid item xs={6} md={4}>
                    <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '40px' }}>
                        <Typography variant="h5" gutterBottom>
                            Edit My Profile
                        </Typography>
                        <Grid container direction='row' xs={24} justify='center' spacing={16} style={{ marginTop: 30 }}>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={!!touched.first_name && errors.first_name}>
                                    <InputLabel>First Name</InputLabel>
                                    <Input name='first_name' value={values.first_name} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                    <FormHelperText>{touched.first_name && errors.first_name}</FormHelperText>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={!!touched.last_name && errors.last_name}>
                                    <InputLabel>Last Name</InputLabel>
                                    <Input name='last_name' value={values.last_name} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                    <FormHelperText>{touched.last_name && errors.last_name}</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container direction='row' xs={24} justify='center' spacing={16} style={{ marginTop: 30 }}>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.date_of_birth && errors.date_of_birth}>
                                    <InputLabel>Date Of Birth</InputLabel>
                                    <Input name='date_of_birth' value={values.date_of_birth} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                    <FormHelperText>{errors.date_of_birth}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.phone_number && errors.phone_number}>
                                    <InputLabel>Phone Number</InputLabel>
                                    <Input name='phone_number' value={values.phone_number} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                    <FormHelperText>{errors.phone_number}</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container direction='row' xs={24} justify='center' spacing={16} style={{ marginTop: 30 }}>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.payment_method && errors.payment_method}>
                                    <InputLabel>Payment Method</InputLabel>
                                    <Input name='payment_method' value={values.payment_method} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                    <FormHelperText>{errors.payment_method}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} margin='normal'>
                                <FormControl fullWidth error={touched.paypal_email && errors.paypal_email}>
                                    <InputLabel>PayPal Email</InputLabel>
                                    <Input name='paypal_email' value={values.paypal_email} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                    <FormHelperText>{errors.paypal_email}</FormHelperText>
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
                                <FormControl fullWidth error={touched.postal_code && errors.postal_code}>
                                    <InputLabel>Postal Code</InputLabel>
                                    <Input name='postal_code' value={values.postal_code} onChange={handleChange} fullWidth />
                                    <FormHelperText>{errors.postal_code}</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction='row' justify='space-around'>
                            <Grid margin='normal' xs={4}>
                                <FormControl style={{ width: 150 }} margin='normal'>
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

                            <Grid margin='normal' xs={4}>
                                <FormControl style={{ width: 150 }} margin='normal'>
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

                            <Grid margin='normal' xs={4}>
                                <FormControl style={{ width: 150 }} margin='normal'>
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
                                style={{ backgroundColor: '#52C1C8', color: "#FFFFFF" }}
                                type='submit'
                            >
                                Update Profile
                            </Button>
                            <Dialog
                                open={open}
                                handleClose={() => closeDialog()}
                                textContent="You have successfully update your profile"
                                title='SUCCESSFUL'
                            />
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
        if (user_info.first_name) {
            initial_info.first_name = user_info.first_name
        } else {
            initial_info.first_name = ''
        }
        if (user_info.last_name) {
            initial_info.last_name = user_info.last_name
        } else {
            initial_info.last_name = ''
        }
        if (user_info.date_of_birth) {
            initial_info.date_of_birth = user_info.date_of_birth
        } else {
            initial_info.date_of_birth = ''
        }
        if (user_info.phone_number) {
            initial_info.phone_number = user_info.phone_number
        } else {
            initial_info.phone_number = ''
        }
        if (user_info.payment_method) {
            initial_info.payment_method = user_info.payment_method
        } else {
            initial_info.payment_method = ''
        }
        if (user_info.paypal_email) {
            initial_info.paypal_email = user_info.paypal_email
        } else {
            initial_info.paypal_email = ''
        }
        if (user_info.address) {
            initial_info.address = user_info.address
        } else {
            initial_info.address = ''
        }
        if (user_info.postal_code) {
            initial_info.postal_code = user_info.postal_code
        } else {
            initial_info.postal_code = ''
        }
        if (user_info.gender_name) {
            initial_info.gender_name = user_info.gender_name
        } else {
            initial_info.gender_name = ''
        }
        if (user_info.nationality_name) {
            initial_info.nationality_name = user_info.nationality_name
        } else {
            initial_info.nationality_name = ''
        }
        if (user_info.academic_level_name) {
            initial_info.academic_level_name = user_info.academic_level_name
        } else {
            initial_info.academic_level_name = ''
        }
        console.log('profile', props);
        console.log('initial info', initial_info)
        return (initial_info);
    },
    validationSchema: Yup.object().shape({
        first_name: Yup.string()
            .required('Username is required')
            .min(3, 'Username must have min 3 characters'),
        last_name: Yup.string()
            .required('Username is required')
            .min(3, 'Username must have min 3 characters'),
        date_of_birth: Yup.date(),
        phone_number: Yup.number()
            .required('Phone Number is required')
            .min(10, 'Phone Number must have min 5 characters'),
        postal_code: Yup.number()
            .min(9, 'Postal must have min 9 characters'),
        address: Yup.string()
            .required('Address is required'),

    }),
    handleSubmit(values, { props }) {
        const id = localStorage.getItem('user_id')
        console.log(props)
        axios({
            method: 'put',
            url: `/api/user?token=${localStorage.getItem('token')}`,
            data: {
                id: id,
                address: values.address,
                date_of_birth: values.dob,
                first_name: values.firstname,
                gender_name: values.gender,
                last_name: values.lastname,
                nationality_name: values.nation,
                postal_code: values.payment,
                paypal_email: values.paypal,
                phone_number: values.phonenumber,
            },
            headers: { 'X-Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoYW9ucDA0MTA5OUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU1ODMyOTI1NX0.lkqx-o-14-saMoKmbEJQKWqIUSyTgyMZtdv5QLjQ-1c' }
        }).then((updated) => {
            console.log(updated)
            props.openDialog();
        })
            .catch(err => console.log(err))
    }

})(FormDefault)

export default Wrapper(FormikForm)