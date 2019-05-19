import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import {Link, NavLink} from 'react-router-dom'

class NavBar extends React.Component {
  state = {
    color : 'secondary'
  }
  handleClick = (e) => {
    this.props.changeLogin(this.state);
  }
  render () {
    return (
      <div>
        <AppBar position='static' style={{ background: 'transparent', boxShadow: 'none', paddingTop : 30}}>
          <ToolBar>
            <Grid container xs={12}>
              <Grid item xs={7}>
                <Typography color={this.props.color} noWrap style = {{fontSize: 40}}>
                  X TUTOR
                </Typography>
              </Grid>
              <Grid item xs={1}>
              <Typography color={this.props.color} style = {{fontSize: 18}}>
                <Link to = '/'>HOME</Link>
              </Typography>
              
              </Grid>
              <Grid item xs={1}>
              <Link color={this.props.color} style = {{fontSize: 18}} to = '/about'>ABOUT</Link>
              </Grid>
              <Grid item xs={1}>
              <Link color={this.props.color} style = {{fontSize: 18}} to = '/blog'>BLOG</Link>
              </Grid>
              <Grid item xs={1}>
              <Link color={this.props.color} style = {{fontSize: 18}} to = '/login' onClick = {this.handleClick}>LOG IN</Link>
              </Grid>
              <Grid item xs={1}>
              <Link color={this.props.color} style = {{fontSize: 18}} to = '/signup'>SIGN UP</Link>
              </Grid>
            </Grid>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
