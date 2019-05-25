import React from 'react';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import { Button, FormControl } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FormHelperText from '@material-ui/core/FormHelperText'
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';

const TeachingExperience = ({ values, handleChange, errors, handleBlur, touched }) => {
    return (
        <Form>
            <Grid container xs={12} direction="column" style={{ marginTop: 150, marginLeft: 80 }} alignItems='flex-start' >
                <Typography variant='h5'>Teaching Experience</Typography>
                <Grid container direction='row' xs={8} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                    <Grid item xs={2}>
                        <Typography style={{ fontSize: 20 }}>Year</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{ fontSize: 20 }}>Experience</Typography>
                    </Grid>
                    <Grid container direction='row' xs={12} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                        <Grid item xs={2}>
                            <FormControl error={!!touched.year && errors.year}>
                                <Input placeholder='Year' name='year' value={values.year} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                <FormHelperText>{touched.year && errors.year}</FormHelperText>
                            </FormControl>

                        </Grid>
                        <Grid item xs={8}>
                            <FormControl error={!!touched.experience && errors.experience}>
                                <Input placeholder='Experience'name='experience' value={values.experience} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                <FormHelperText>{touched.experience && errors.experience}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton aria-label="Delete">
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <FormControl>
                        <Button type='submit' variant='extendedFab' style={{ backgroundColor: '#52C1C8', color: "#FFFFFF", paddingLeft: 60, paddingRight: 60 }}>Add Record</Button>
                    </FormControl>
                </Grid>
            </Grid>
        </Form>

    )
}

const FormikForm = withFormik({
    mapPropsToValues({ }){
        return{
            year: '',
            experience: ''
        }
    },
    validationSchema: Yup.object().shape({
        year: Yup.string()
        .required("Year is required"),
        experience: Yup.string()
        .required("Experience is required")
    }),
    handleSubmit(values){
        console.log(values)
    }

})(TeachingExperience)

export default FormikForm
