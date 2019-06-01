import React from 'react';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import { Button, FormControl } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FormHelperText from '@material-ui/core/FormHelperText'
import { withFormik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import _ from "lodash";
import Circle from '../../../Circle'
import axios from '../../../../axios'
import AddIcon from '@material-ui/icons/Add';




const Wrapper = (Component) => {
    return class extends React.Component {
        state = {
            working_experience: null
        }
        componentDidMount() {
            axios.get(`api/user/tutor/${localStorage.id}?token=${localStorage.token}`)
                .then(data => {
                    console.log(data)
                    console.log("experience", data.data.working_experience)
                    this.setState({ working_experience: data.data.working_experience })
                })
                .catch(err => console.error(err))
        }
        render() {
            const { working_experience } = this.state; 
            if (!working_experience) return null;
            return <Component {...this.props} working_experience = {working_experience} /> 
        }
    }
}
class TeachingExperience extends React.Component {
    render() {
        const { values, handleChange, errors, handleBlur, touched } = this.props;
        console.log('experience values', values)
        if (_.isEmpty(values)) {
            return <Circle />
        }
        return (
            <Form>
                <Grid container direction="column" xs = {12} style={{ marginTop: 80, marginLeft: 80 }} alignItems='flex-start' >
                    <Typography variant='h3'>Teaching Experience</Typography>
                    <Grid container direction='row' xs = {6} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                        <Grid item xs={2}>
                            <Typography variant='h5'>Year</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='h5'>Experience</Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs = {12}>
                        <FieldArray
                            style = {{width:'100%'}}
                            name="working_experience"
                            render={({ push, remove }) => (
                                <Form>
                                    {values.working_experience.map((sub, index) => (
                                        <Grid container direction='row' xs={12} justify='flex-start' spacing={16} style={{ marginTop: 20, width:'100%' }} >
                                            <Grid item xs={3}>
                                                <FormControl error={!!touched.year && errors.year}>
                                                    <Field
                                                        name={`working_experience[${index}].year`}
                                                        render={({ field, form: { touched, errors } }) => (
                                                            <div>
                                                                <Input {...field} type="number" placeholder="Year" style = {{width:100}}/>
                                                                {touched[field.name] &&
                                                                    errors[field.name] && <div className="error">{errors[field.name]}</div>}
                                                            </div>
                                                        )}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <FormControl error={!!touched.year && errors.year}>
                                                    <Field
                                                        name={`working_experience[${index}].experience`}
                                                        render={({ field, form: { touched, errors } }) => (
                                                            <div>
                                                                <Input {...field} type="text" placeholder="Experience" style = {{width:300, marginLeft: 20}} onChange={handleChange} />
                                                                {/* <FormHelperText>{touched && errors} </FormHelperText> */}
                                                            </div>
                                                            
                                                        )}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={1}>
                                                <FormControl>
                                                    <Button
                                                        style={{ backgroundColor: '#c85452', color: "#FFFFFF",}}
                                                        variant='extendedFab'
                                                        type="button"
                                                        onClick={() => remove(index)}
                                                    >
                                                        <DeleteIcon/>
                                                    </Button>
                                                </FormControl>
                                            </Grid>
                                        </Grid>))
                                    }
                                    <Grid container direction='row' xs={12} justify='flex-start' alignItem = "center" spacing={16} style={{ marginTop: 20 }} >
                                        <Grid item xs={3}>
                                            <FormControl>
                                                <Button
                                                    style={{ backgroundColor: '#52C1C8', color: "#FFFFFF"}}
                                                    variant='extendedFab'
                                                    type="button"
                                                    onClick={() => push({ year: "", experience: "" })}
                                                >
                                                    <AddIcon/>
                                                </Button>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <FormControl>
                                                <Button
                                                    style={{ backgroundColor: '#52C1C8', color: "#FFFFFF", paddingLeft: 60, paddingRight: 60}}
                                                    variant='extendedFab'
                                                    color='primary'
                                                    type='submit'
                                                    onClick={() =>{
                                                        console.log('gui ne')
                                                        axios({
                                                            url: `/api/user/tutor/update_experience?token=${localStorage.getItem('token')}`,
                                                            method: 'put',
                                                            data: {
                                                                id: localStorage.getItem('id'),
                                                                experiences: values.working_experience
                                                            }
                                                        })
                                                            .then((updated) => {
                                                                console.log(updated);
                                                                document.location.href = '/';
                                                            })
                                                            .catch(err => console.error(err))
                                                    }}
                                                >
                                                    Update Exp.
                                                </Button>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Form>
                            )}
                        />
                    </Grid>
                </Grid>
            </Form>

        )
    }
}

const FormikForm = withFormik({
    mapPropsToValues(props) {
        console.log('initial ex',props)
        return (props)
    },
    validationSchema: Yup.object().shape({
        year: Yup.string()
            .required("Year is required"),
        experience: Yup.string()
            .required("Experience is required")
    }),
    handleSubmit(values) {
        console.log(values)
    }

})(TeachingExperience)

export default Wrapper(FormikForm);