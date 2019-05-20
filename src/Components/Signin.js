import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Link from '@material-ui/core/Link'
import Input from '@material-ui/core/Input';

class CreateAccount extends React.Component {
    render() {
        return (
            <div>
                <Grid container direction='column' xs={12} style={{ marginTop: 63 }} alignContent = 'center'>
                    <Grid item xs={4}>
                        <Typography style={{ fontSize: 18 }} align = 'center'>
                            LOG IN
                        </Typography>
                    </Grid>
                    <Grid container xs={4} justify = 'center'>
                        <Typography style={{ fontSize: 18 }} >
                            or
                        </Typography>
                        <Link>
                            <Typography style={{ fontSize: 18 }} >
                                Create Account
                                </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Input placeholder='Email Address' fullWidth/>
                    </Grid>
                    <Grid item xs={4}>
                        <Input placeholder='Password' fullWidth/>
                    </Grid>
                    <Grid item xs={4}>

                        <Typography style={{ fontSize: 17 }} align = 'center' >

                            By creating an account, you agree to our Terms of Service and have read and understood the Privacy Policy
    
                        </Typography>

                    </Grid>
                    <Button style={{ backgroundColor: '#E9E9E9', color: "#A7A7A7"}} href = '/user'>Create Account</Button>
                </Grid>
            </div>
        );
    }
}


export default CreateAccount;