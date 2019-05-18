import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

  const THEME = createMuiTheme({
    typography: {
      fontFamily: '"Oswald", sans-serif',
    },
    palette: {
      primary: {main : grey[50]},
      secondary: {main : grey[900]},
    },
  });
const styles = theme => ({
  root: {
    margin: 10
  }
})

const NavBar = () => {
  const classes = makeStyles();
  return (
    <div className = {classes.root}>
    <MuiThemeProvider theme={THEME}>
      <AppBar position='static' style={{ background: 'transparent', boxShadow: 'none'}}>
        <ToolBar>
          <Grid container xs={12}>
            <Grid item xs={7}>
              <Typography color='primary' noWrap className = "Logo" style = {{fontSize: 40}}>
                X TUTOR
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Button color='primary' style = {{fontSize: 18}}>HOME</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color='primary' style = {{fontSize: 18}}>ABOUT</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color='primary' style = {{fontSize: 18}}>BLOG</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color='primary' style = {{fontSize: 18}}>LOG IN</Button>
            </Grid>
            <Grid item xs={1}>
              <Button color='primary' style = {{fontSize: 18}}>SIGN UP</Button>
            </Grid> 
          </Grid>
        </ToolBar>
      </AppBar>
      <Grid item xs = {4}>
        <Typography color='primary' className = 'text' style = {{ marginTop: 288, fontSize: 36}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>
      </Grid>
      <Grid item xs={3}>
              <Button color='primary' style = {{background : 'black', marginTop : 31, paddingTop: 17, paddingBottom: 17, paddingLeft: 45, paddingRight: 45}}>BOOK YOUR TUTOR -></Button>
      </Grid> 
    </MuiThemeProvider>
    </div>
  );
}

export default NavBar;
