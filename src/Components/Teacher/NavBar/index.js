import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Menu from './Menu'
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
                <Typography color={this.props.color} noWrap style = {{fontSize: 40, marginLeft : 80}}>
                  X TUTOR
                </Typography>
              </Grid>

              <Grid item xs={1}>
              <Typography color = {this.props.color} style = {{fontSize: 18}}>
                <NavLink to = '/filter'  style={{ textDecoration: 'none', color: 'black'}}>My Calendar</NavLink>
              </Typography>
              </Grid>

              <Grid item xs={1}>
              <Typography color = {this.props.color} style = {{fontSize: 18}}>
                <NavLink to = '/student/tuitiondetail' style ={{ textDecoration: 'none', color: 'black'}} >MY TUITION</NavLink>
              </Typography>
              </Grid>

              <Grid item xs={1}>
              <Typography color = {this.props.color} style = {{fontSize: 18}} noWrap>
                STUDENT'S NAME
              </Typography>
              </Grid>

              <Grid item xs={1} justify = 'center' alignContent = 'center' >
                <Menu/>
              </Grid>
              </Grid>
          </ToolBar>

        </AppBar>
      </div>
    );
    
  }
}


export default NavBar;
