import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import NavBtn from './NavBarButton'

const NavBar = () => {
  return (
    <div>
      <AppBar position='static' style={{ background: 'transparent', boxShadow: 'none', paddingTop : 30}}>
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
    </div>
  );
}

export default NavBar;
