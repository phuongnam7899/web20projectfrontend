import React from 'react';
import NavBar from './Components/NavBar'
import { BrowserRouter, Route } from 'react-router-dom'
import grey from '@material-ui/core/colors/grey'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import LandingPage from './Components/LandingPage'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import User from './Components/TuitionDetail'
import Filter from './Components/Filter'  
import Editmyprofile from './Components/EditMyProfile'
import StdCalendar from './Components/Calendar/calendar_std';
<<<<<<< HEAD
import Calendar from './Components/Calendar';
import { resolve } from 'url';
=======
import Calendar from './Components/Calendar'
import TeacherDetail from './Components/TeacherDetail';

>>>>>>> 0d383f2e958a43f8b31e40296f0e8ecb81fec054


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
    const {color,colors} = status
    this.setState ({
      color : color,
      colors : colors
    })
  }
  render() {
    let display;
    if(this.state.role === "student"){
      display = <Route path = '/filter' component = {Filter}/>
    }
    if(this.state.role === "tutor"){
      display = <Route path = '/user' component = {User}/>
    }
    return (
      <BrowserRouter>
          <div style={styles.root}>
            <MuiThemeProvider theme={THEME}>
              {/* <NavBar/>
              <NavBar changeLogin = {this.changeLogin} color = {this.state.color}/>
              <Route exact path='/' component={LandingPage} />
              <Route path='/login' component={Signin} />
              <Route path = '/signup' component = {Signup}/>
              <Route path = '/user' component = {User}/>
              <Route path = '/filter' component = {Filter}/>
              <Route path = '/student/allclasses' component = { StdCalendar } />
              <Route path = '/editmyprofile' component = {Editmyprofile}/>
              <Route path = '/student/book_class' render ={() => <Calendar role="student"/>} /> */}
              <Route exact path='/' component={LandingPage} />
              <Route path='/login' render = {props => {
              return <Signin {... props} handleLogin = {this.handleLogin}
              />}}/>
              {display}
              {/* <Route path = '/student/book_class' render ={() => <Calendar role="student"/>} />
              <Route path = '/teacherdetail' component = {TeacherDetail}/> */}
            </MuiThemeProvider>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
