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
import _ from "lodash";

class TeachingExperience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            experiences: [{
                // year: "1999 - 2000",
                // experience: "Giáo viên trường maamd non Bách Khoa"
            },
            {
                // year: "1999 - 2000",
                // experience: "Giáo viên trường maamd non Bách Khoa"
            }]
        };
        this.addRecord = this.addRecord.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
    }
    addRecord() {
        this.setState({
            experiences: this.state.experiences.concat([{
                // year: "1999 - 2000",
                // experience: "Giáo viên trường maamd non Bách Khoa"
            }])
        });
        // console.log(this.state.experiences)
    }
    deleteRecord(index){
        console.log("deleted");
        let experiences = this.state.experiences;
        experiences.splice(index,1);
        this.setState({
            experiences : experiences
        })
    }
    render() {
        const { values, handleChange, errors, handleBlur, touched } = this.props;
        const { experiences } = this.state;
        console.log(experiences);
        if (_.isEmpty(experiences)) {
            return "loading"
        }
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
                        {
                            experiences.map((experience,index) => {
                                return (
                                    <Grid container direction='row' xs={12} justify='flex-start' spacing={16} style={{ marginTop: 20 }} >
                                        <Grid item xs={2}>
                                            <FormControl error={!!touched.year && errors.year}>
                                                <Input placeholder='Year' name='year' value={values.year} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                                <FormHelperText>{touched.year && errors.year}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <FormControl error={!!touched.experience && errors.experience}>
                                                <Input placeholder='Experience' name='experience' value={values.experience} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                                <FormHelperText>{touched.experience && errors.experience}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <IconButton onClick={() => this.deleteRecord(index)}  aria-label="Delete">
                                                <DeleteIcon/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                )
                            })

                        }
                        <FormControl>
                            <Button onClick={this.addRecord} type='submit' variant='extendedFab' style={{ backgroundColor: '#52C1C8', color: "#FFFFFF", paddingLeft: 60, paddingRight: 60 }}>Add Record</Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </Form>

        )
    }
}

const FormikForm = withFormik({
    mapPropsToValues({ }) {
        return {
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
    handleSubmit(values) {
        console.log(values)
    }

})(TeachingExperience)

export default FormikForm
