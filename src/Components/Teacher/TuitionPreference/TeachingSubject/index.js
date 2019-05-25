import React from 'react';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import { Button, FormControl } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FormHelperText from '@material-ui/core/FormHelperText'
import Menu from '../../../Menu'
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';

const TeachingSubject = ({ values, handleChange, errors, handleBlur, touched }) => {
    return (
        <Form>
            <Grid container xs={12} direction="column" style={{ marginTop: 50, marginLeft: 80 }} alignItems='flex-start' >
                <Typography variant='h5'>Teaching Subject</Typography>
                <Menu name='Based In' />
                <Grid container direction='row' xs={12} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                    <Grid item xs={2}>
                        <Typography style={{ fontSize: 20 }}>Subject</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography style={{ fontSize: 20 }}>Academic Level</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography style={{ fontSize: 20 }}>Grade</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography style={{ fontSize: 20 }}>Hourly Rate</Typography>
                    </Grid>
                    <Grid container direction='row' xs={12} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                        <Grid item xs={3}>
                            <FormControl error={!!touched.subject && errors.subject}>
                            <Input placeholder='Subject' name='subject' value={values.subject} onChange={handleChange} onBlur={handleBlur} fullWidth />
                            <FormHelperText>{touched.subject && errors.subject}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl error={!!touched.level && errors.level}>
                            <Input placeholder='Academic Level' name='level' value={values.level} onChange={handleChange} onBlur={handleBlur} fullWidth />
                            <FormHelperText>{touched.level && errors.level}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl error={!!touched.grade && errors.grade}>
                            <Input placeholder='Grade' name='grade' value={values.grade} onChange={handleChange} onBlur={handleBlur} fullWidth />
                            <FormHelperText>{touched.grade && errors.grade}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl error={!!touched.rate && errors.rate}>
                            <Input placeholder='Hourly Rate' name='rate' value={values.rate} onChange={handleChange} fullWidth />
                            <FormHelperText>{touched.rate && errors.rate}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton aria-label="Delete">
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Button type="submit" style={{ backgroundColor: '#52C1C8', color: "#FFFFFF", paddingLeft: 60, paddingRight: 60 }}>Add Record</Button>
                </Grid>
            </Grid>
        </Form>
    )
}

const FormikDefault = withFormik({
    mapPropsToValues({ }) {
        return ({
            subject: '',
            level: '',
            rate: '',
            grade: ''
        })
    },
    validationSchema: Yup.object().shape({
        subject: Yup.string()
        .required('Subject is required'),
        level: Yup.string()
        .required('Level ís required'),
        grade: Yup.string()
        .required('Grade is required'),
        rate: Yup.string(),
    }),
    handleSubmit(values){
        console.log(values)
    }
})(TeachingSubject)

export default FormikDefault