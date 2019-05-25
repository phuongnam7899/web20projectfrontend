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
      <div style = {{marginLeft : 0}}>
        <AppBar position='static' style={{ background: '#52C1C8', boxShadow: 'none', paddingTop : 30}}>
          <ToolBar>
          <Grid container xs={12} >
              <Grid item xs={7}>
                <Typography noWrap style = {{fontSize: 40, marginLeft : 80, color: 'white', fontWeight: 700}}>
                  X TUTOR
                </Typography>
              </Grid>

              <Grid item xs={1}>
              <Typography color = {this.props.color} style = {{fontSize: 18}}>
                <NavLink to = '/filter'  style={{ textDecoration: 'none', color: 'black', fontWeight : 500}} margin = 'auto'>FIND A TUTOR</NavLink>
              </Typography>
              </Grid>

              <Grid item xs={1}>
              <Typography color = {this.props.color} style = {{fontSize: 18}}>
                <NavLink to = '/user' style ={{ textDecoration: 'none', color: 'black'}} >MY TUITION</NavLink>
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
