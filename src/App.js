import React from 'react';
import NavBar from './Components/NavBar'
import { BrowserRouter, Route } from 'react-router-dom'
import grey from '@material-ui/core/colors/grey'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import LandingPage from './Components/LandingPage'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import TuitionDetail from './Components/Std/TuitionDetail'
import Filter from './Components/Filter'  
import Editmyprofile from './Components/Std/EditMyProfile'
import StdCalendar from './Components/Calendar/calendar_std';
import Calendar from './Components/Calendar'
import TeacherDetail from './Components/Std/TeacherDetail';
import TuitionPreference from './Components/Teacher/TuitionPreference'



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
    atHome: true
  }
  changeLogin = (status) => {
    const {color,colors} = status
    this.setState ({
      color : color,
      colors : colors
    })
  }
  render() {
    return (
      <BrowserRouter>
          <div style={styles.root}>
            <MuiThemeProvider theme={THEME}>
              <NavBar changeLogin = {this.changeLogin} color = {this.state.color} colors = {this.state.colors}/>
              <Route exact path='/' component={LandingPage} />
              <Route path='/login' component={Signin} />
              <Route path = '/signup' component = {Signup}/>
              <Route path = '/user' component = {TuitionDetail}/>
              <Route path = '/teacher/tuitionpreference' component = {TuitionPreference}/>
              <Route path = '/filter' component = {Filter}/>
              <Route path = '/student/allclasses' component = { StdCalendar } />
              <Route path = '/editmyprofile' component = {Editmyprofile}/>
              <Route path = '/student/book_class' render ={() => <Calendar role="student"/>} />
              <Route path = '/teacherdetail' component = {TeacherDetail}/>
            </MuiThemeProvider>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
