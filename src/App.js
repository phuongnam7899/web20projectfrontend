import React, { Fragment } from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import grey from '@material-ui/core/colors/grey';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LandingPage from './Components/LandingPage';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import TuitionDetail from './Components/Std/TuitionDetail';
import Filter from './Components/Filter';
import Editmyprofile from './Components/Std/EditMyProfile';
import StdCalendar from './Components/Calendar/calendar_std';
import Calendar from './Components/Calendar';
import TeacherDetail from './Components/Std/TeacherDetail';
import TuitionPreference from './Components/Teacher/TuitionPreference';
import NavStd from './Components/Std/NavBar'


const styles = {

  root: {
    marginTop: 0,
  },
}
const THEME = createMuiTheme({
  typography: {
    fontFamily: '"Oswald", sans-serif',
  },
  palette: {
    primary: { main: grey[50] },
    secondary: { main: grey[900] },
  },
  shadows: ["none"]
});


class App extends React.Component {
  state = {
    color : "primary",
    colors: 'white',
    role: localStorage.getItem('role')
  }
  
  changeLogin = (status) => {
    const { color, colors } = status
    this.setState({
      color: color,
      colors: colors
    })
  }
  render() {
    let display;
    let navbar;
    if (this.state.role != 'student' && this.state.role != 'tutor'){
      navbar = (
        <NavBar color = {this.state.color} colors = {this.state.colors}/>
      )
    }
    if(this.state.role === "student"){
      navbar = (
        <NavStd />
      )
      display = (
        <Fragment>
          <Route path = '/filter' component = {Filter}/>
          <Route path = '/editmyprofile' component = {Editmyprofile}/>
          <Route path = '/student/allclasses' component = { StdCalendar } />  
          <Route path = '/student/book_class' render ={() => <Calendar role="student"/>} /> 
          <Route path = '/user'  render = {props => {
              return <TuitionDetail {... props}
          />}}/> 
          <Route path = '/preference' component = {TuitionPreference} />
        </Fragment>  
      )
    }
    if(this.state.role === "tutor"){
      display = (
        <Route path = '/tutor/update_freetime' render ={() => <Calendar role={this.state.role}/>} />
      )
    }
    return (
      <BrowserRouter>
        <div style={styles.root}>
          <MuiThemeProvider theme={THEME}>
            {navbar}
            <Route path='/signup' render = {props => {
              return <Signup {... props}
            />}}/>
            <Route exact path='/' render = {props => {
              return <LandingPage {... props}
            />}} />
            <Route path='/login' render = {props => {
              return <Signin {... props} handleLogin = {this.handleLogin}
            />}}/>
            {display}
          </MuiThemeProvider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
