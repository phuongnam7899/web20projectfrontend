import React from 'react';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import { Button, FormControl } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FormHelperText from '@material-ui/core/FormHelperText'
import Menu from '../../../Menu'
import { withFormik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import _ from "lodash";
import axios from '../../../../axios'
import Circle from '../../../Circle'

const Wrapper = (Component) => {
    return class extends React.Component {
        state = {
            subjects: null
        }
        componentDidMount() {
            axios.get(`api/user/tutor/${localStorage.id}?token=${localStorage.token}`)
                .then(data => {
                    console.log(data)
                    console.log("teaching sub", data.data.teaching_subject)
                    this.setState({ subjects: data.data.teaching_subject })
                })
                .catch(err => console.error(err))
        }
    
        render() {
            const { subjects } = this.state; 
            if (!subjects) return null;
            return <Component {...this.props} subjects={subjects} /> 
        }
    }
}

class TeachingSubject extends React.Component {
    render() {
        const { values, handleChange, errors, handleBlur, touched } = this.props;
        console.log('values', values)
        // const { ;subjects } = this.state

        // console.log("initial", values)
        if (_.isEmpty(values)) {
            return <Circle />
        }
        return (
            <Form>
                <Grid container xs={12} direction="column" style={{ marginTop: 50, marginLeft: 80 }} alignItems='flex-start' >
                    <Typography variant='h5'>Teaching Subject</Typography>
                    <Menu name='Based In' />
                    <Grid container direction='row' xs={8} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                        <Grid item xs={2}>
                            <Typography style={{ fontSize: 20 }}>Subject</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography style={{ fontSize: 20 }}>Academic Level</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography style={{ fontSize: 20 }}>Grade</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography style={{ fontSize: 20 }}>Hourly Rate</Typography>
                        </Grid>
                        <FieldArray
                            name="subjects"
                            render={({ push, remove }) => (
                                <Form>
                                    {values.subjects.map((sub, index) => (
                                        <Grid container direction='row' xs={12} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                                            <Grid item xs={2}>
                                                <FormControl error={!!touched.year && errors.year}>
                                                    <Field
                                                        name={`subjects[${index}].subject`}
                                                        render={({ field, form: { touched, errors } }) => (
                                                            <div>
                                                                <Input {...field} type="text" placeholder="Subject" fullWidth />
                                                                {touched[field.name] &&
                                                                    errors[field.name] && <div className="error">{errors[field.name]}</div>}
                                                            </div>
                                                        )}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <FormControl error={!!touched.year && errors.year}>
                                                    <Field
                                                        name={`subjects[${index}].academic_level`}
                                                        render={({ field, form: { touched, errors } }) => (
                                                            <div>
                                                                <Input {...field} type="text" placeholder="Academic level" fullWidth />
                                                                {touched[field.name] &&
                                                                    errors[field.name] && <div className="error">{errors[field.name]}</div>}
                                                            </div>
                                                        )}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <FormControl error={!!touched.year && errors.year}>
                                                    <Field
                                                        name={`subjects[${index}].academic_grade`}
                                                        render={({ field, form: { touched, errors } }) => (
                                                            <div>
                                                                <Input {...field} type="text" placeholder="Grade" fullWidth />
                                                                {touched[field.name] &&
                                                                    errors[field.name] && <div className="error">{errors[field.name]}</div>}
                                                            </div>
                                                        )}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <FormControl error={!!touched.year && errors.year}>
                                                    <Field
                                                        name={`subjects[${index}].hourly_rate`}
                                                        render={({ field, form: { touched, errors } }) => (
                                                            <div>
                                                                <Input {...field} type="number" placeholder="Hourly rate" />
                                                                {touched[field.name] &&
                                                                    errors[field.name] && <div className="error">{errors[field.name]}</div>}
                                                            </div>
                                                        )}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <FormControl>
                                                    <Button
                                                        style={{ backgroundColor: '#52C1C8', color: "#FFFFFF", paddingLeft: 60, paddingRight: 60, marginTop: 10 }}
                                                        variant='extendedFab'
                                                        type="button"
                                                        className="secondary"
                                                        onClick={() => remove(index)}
                                                    >
                                                        Delete record
                                                    </Button>
                                                </FormControl>
                                            </Grid>
                                        </Grid>))
                                    }
                                    <Grid container direction='row' xs={12} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                                        <Grid item xs={4}>
                                            <FormControl>
                                                <Button
                                                    style={{ backgroundColor: '#52C1C8', color: "#FFFFFF", paddingLeft: 60, paddingRight: 60, marginTop: 10 }}
                                                    variant='extendedFab'
                                                    type="button"
                                                    className="secondary"
                                                    onClick={() => push({ subject: "", academic_level: "", academic_grade: "", hourly_rate: "" })}
                                                >
                                                    Add Record
                                                </Button>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <FormControl>
                                                <Button
                                                    style={{ backgroundColor: '#52C1C8', color: "#FFFFFF", paddingLeft: 60, paddingRight: 60, marginTop: 10 }}
                                                    variant='extendedFab'
                                                    color='primary'
                                                    type='submit'
                                                    onClick={() =>{
                                                        console.log('gui ne')
                                                        axios({
                                                            url: `/api/user/tutor/update_teaching_sub?token=${localStorage.getItem('token')}`,
                                                            method: 'put',
                                                            data: {
                                                                id: localStorage.getItem('id'),
                                                                teaching_subs: values.subjects
                                                            }
                                                        })
                                                            .then((updated) => {
                                                                console.log(updated);
                                                                document.location.href = '/';
                                                            })
                                                            .catch(err => console.error(err))
                                                    }}
                                                >
                                                    Update Subject
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

const FormikDefault = withFormik({
    mapPropsToValues(props) {
        console.log('prop',props)
        const { subjects } = props;
        return (props)
    },
    validationSchema: Yup.object().shape({
        subjects: Yup.array()
            .of(
                Yup.object().shape({
                    subject: Yup.string()
                        .required('Subject name is required'),
                    level: Yup.string()
                        .required('Academic level is required'),
                    grade: Yup.string()
                        .required('Grade is required'),
                    rate: Yup.string()
                        .required('Hourly rate is required')
                })
            )
    }),
    handleSubmit(values) {

    
    }
})(TeachingSubject)

export default Wrapper(FormikDefault);