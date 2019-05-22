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
                <Grid container direction='column' xs={12} style={{ marginTop: 200 }} alignContent='center'>
                    <Grid item xs={4}>
                        <Typography style={{ fontSize: 18 }} align='center'>
                            LOG IN
                        </Typography>
                    </Grid>
                    <Grid container xs={4} justify='center'>
                        <Typography style={{ fontSize: 18 }} >
                            or
                        </Typography>
                        <Link to='/signup'>
                            <Typography style={{ fontSize: 18 }} >
                                Create Account
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={4} style={{ marginTop: 20 }}>
                        <Input placeholder='Email Address' fullWidth />
                    </Grid>
                    <Grid item xs={4} style={{ marginTop: 20 }}>
                        <Input placeholder='Password' fullWidth />
                    </Grid>

                    <Button style={{ backgroundColor: '#E9E9E9', color: "#A7A7A7", marginTop: 20 }} href='/user'>Log In</Button>
                </Grid>
            </div>
        );
    }
}


export default CreateAccount;