import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';


import BookingButton from './BookingButton'
import LText from './LText'
import NavBtn from './NavBarButton'

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
              <Typography color='primary' noWrap style = {{fontSize: 40}}>
                X TUTOR
              </Typography>
            </Grid>
            <NavBtn name = "HOME" link = '/'/>
            <NavBtn name = "ABOUT"/>
            <NavBtn name = "BLOG"/>
            <NavBtn name = "LOGIN" link = '/user'/>
            <NavBtn name = "SIGN UP"/>
          </Grid>
        </ToolBar>
      </AppBar>
      
    </MuiThemeProvider>
    </div>
  );
}

export default NavBar;
