import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { withFormik, Form } from 'formik'
import Button from '@material-ui/core/Button'

const FilterColumn = ({values, handleChange}) => {
    return(
        <Grid container xs={12} style={{ marginTop: 10, marginLeft: 80 }}justify='center' direction="column">
            <Grid item xs={2}>
                <Form>
                    <FormControl fullWidth margin='normal'>
                        <InputLabel>Language</InputLabel>
                        <Select
                            displayEmpty
                            name='language'
                            value={values.language}
                            onChange={handleChange}
                        >
                            <MenuItem value={'english'}>English</MenuItem>
                            <MenuItem value={'german'}>German</MenuItem>
                            <MenuItem value={'vietnamese'}>Vietnamese</MenuItem>
                            <MenuItem value={'mandarin'}>Mandarin</MenuItem>
                        </Select>
                    </FormControl>
                </Form>
            </Grid>

            <Grid item xs={2}>
                <Form>
                    <FormControl fullWidth margin='normal'>
                        <InputLabel>Education</InputLabel>
                        <Select
                            displayEmpty
                            name='education'
                            value={values.education}
                            onChange={handleChange}
                        >
                            <MenuItem value={'highschool'}>High School</MenuItem>
                            <MenuItem value={'kindergarten'}>Kindergarten</MenuItem>
                            <MenuItem value={'University'}>University</MenuItem>
                        </Select>
                    </FormControl>
                </Form>
            </Grid>
            <Grid item xs= {2}>
                <Form>
                    <FormControl fullWidth margin='normal'>
                        <InputLabel>Gender</InputLabel>
                        <Select
                            displayEmpty
                            name='gender'
                            value={values.gender}
                            onChange={handleChange}
                        >
                            <MenuItem value={'male'}>Male</MenuItem>
                            <MenuItem value={'female'}>Female</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth margin='normal'>
                        <Button
                            variant='extendedFab'
                            color='primary'
                            type='submit'
                            style={{ backgroundColor: '#52C1C8', color: "#FFFFFF", paddingLeft : 60, paddingRight: 60, marginTop : 10}}
                        >
                            Filter
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
            language: '',
            education: '',
            gender: ''
        }
    },
    handleSubmit(values) {
        console.log(values)
    }
})(FilterColumn)
    

export default FormikForm