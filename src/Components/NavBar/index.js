import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom'

class NavBar extends React.Component {
  state = {
    color : 'secondary',
    colors: 'black'
  }
  handleClick = (e) => {  
    this.props.changeLogin(this.state);
  }
  
  render () {
    return (
      <div style = {{marginLeft : 80}}>
        <AppBar position='absolute' style={{ background: 'transparent', boxShadow: 'none', paddingTop : 30}}>
          <ToolBar>
          <Grid container xs={12} >
              <Grid item xs={7}>
                <Typography color='black' noWrap style = {{fontSize: 40, marginLeft : 80}}>
                  X TUTOR
                </Typography>
              </Grid>

              <Grid item xs={1}>
              <Typography color = 'black' style = {{fontSize: 18}}>
                <NavLink to = '/'  style={{ textDecoration: 'none', color: 'black'}}>HOME</NavLink>
              </Typography>
              </Grid>

              <Grid item xs={1}>
              <Typography color = 'black' style = {{fontSize: 18}}>
                <NavLink color= {this.props.colors} style ={{ textDecoration: 'none', color: 'black'}} to = '/about'>ABOUT</NavLink>
              </Typography>
              </Grid>

              <Grid item xs={1}>
              <Typography color = 'black' style = {{fontSize: 18}}>
              <NavLink style={{ textDecoration: 'none', color: 'black'}} to = '/blog'>BLOG</NavLink>
              </Typography>
              </Grid>

              <Grid item xs={1}>
              <Typography color = 'black' style = {{fontSize: 18}}>
              <NavLink style={{ textDecoration: 'none', color: 'black'}} to = '/login' onClick = {this.handleClick}>LOG IN</NavLink>
              </Typography>
              </Grid>

              <Grid item xs={1} justify = 'center' alignContent = 'center' >
              <Typography  color = 'black' style = {{fontSize: 18 }} >

              <NavLink style={{ textDecoration: 'none', color: 'black'}} to = '/signup'>SIGN UP</NavLink>
              </Typography>

              </Grid>
              </Grid>
          </ToolBar>

        </AppBar>
      </div>
    );
    
  }
}


export default NavBar;
