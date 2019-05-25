import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { withFormik, Form } from 'formik'
import Button from '@material-ui/core/Button'
import axios from '../../../axios'

const FilterBar = ({ values, handleChange }) => {
    return (
        <Grid container style={{ marginTop: 150 }}justify='center' direction="row">
            <Grid item xs={2}>
                <Form>
                    <FormControl fullWidth margin='normal'>
                        <InputLabel>Academic Level</InputLabel>
                        <Select
                            displayEmpty
                            name='level'
                            value={values.level}
                            onChange={handleChange}
                        >
                            <MenuItem value={'highschool'}>High School</MenuItem>
                            <MenuItem value={'uni'}>University</MenuItem>
                        </Select>
                    </FormControl>
                </Form>
            </Grid>

            <Grid item xs={2}>
                <Form>
                    <FormControl fullWidth margin='normal'>
                        <InputLabel>Grade</InputLabel>
                        <Select
                            displayEmpty
                            name='grade'
                            value={values.grade}
                            onChange={handleChange}
                        >
                            <MenuItem value={'grade1'}>Grade 1</MenuItem>
                            <MenuItem value={'grade2'}>Grade 2</MenuItem>
                            <MenuItem value={'grade3'}>Grade 3</MenuItem>

                        </Select>
                    </FormControl>
                </Form>
            </Grid>

            <Grid item xs={2}>
                <Form>
                    <FormControl fullWidth margin='normal'>
                        <InputLabel>Course</InputLabel>
                        <Select
                            displayEmpty
                            name='course'
                            value={values.course}
                            onChange={handleChange}
                        >
                            <MenuItem value={'beginner'}>Beginner</MenuItem>
                            <MenuItem value={'intermediate'}>Intermadiate</MenuItem>
                            <MenuItem value={'advance'}>Advance</MenuItem>

                        </Select>
                    </FormControl>
                </Form>
            </Grid>

            <Grid item xs= {2}>
                <Form>
                    <FormControl fullWidth margin='normal'>
                        <InputLabel>Select Country</InputLabel>
                        <Select
                            displayEmpty
                            name='country'
                            value={values.country}
                            onChange={handleChange}
                        >
                            <MenuItem value={'usa'}>USA</MenuItem>
                            <MenuItem value={'aus'}>Australia</MenuItem>
                            <MenuItem value={'eng'}>England</MenuItem>
                            <MenuItem value={'vn'}>Vietnam</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth margin='normal'>
                        <Button
                            variant='extendedFab'
                            color='primary'
                            type='submit'
                            style={{backgroundColor: '#52C1C8', color: "#FFFFFF"}}
                        >
                            Go
                        </Button>
                    </FormControl>
                </Form>
            </Grid>
        </Grid>

    )
} 

const FormikForm = withFormik({
    mapPropsToValues({ }) {
        return {
            level: '',
            country: '',
            grade: '',
            course: ''
        }
    },
    handleSubmit(values, { props }) {
        const { changeTutors } = props;
        axios({
            method : 'post',
            url: '/api/user/tutor/filter',
            data: {
                country_name: values.country,
                academic_level: values.level,
            },
            headers: { 'X-Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoYW9ucDA0MTA5OUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTU1ODMyOTI1NX0.lkqx-o-14-saMoKmbEJQKWqIUSyTgyMZtdv5QLjQ-1c' } 
        }).then((data) => {
            changeTutors(data.data)})
    }
})(FilterBar)

export default FormikForm; 