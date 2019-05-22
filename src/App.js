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
<<<<<<< HEAD
import Calendar from './Components/Calendar';
import { resolve } from 'url';
=======
import Calendar from './Components/Calendar'
import TeacherDetail from './Components/Std/TeacherDetail';
import TuitionPreference from './Components/Teacher/TuitionPreference'

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
    const { color, colors } = status
    this.setState({
      color: color,
      colors: colors
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
<<<<<<< HEAD
        <div style={styles.root}>
          <MuiThemeProvider theme={THEME}>
            <NavBar />
            <Route exact path='/' component={LandingPage} />
            <Route path='/login' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route path='/user' render={() => <User student_id="5ce11e792ace3f3d4c9b49e8"/>} />
            {/* <Route path = '/schedule' component = {}> */}
            <Route path='/filter' component={Filter} />
            <Route path='/student/allclasses' component={StdCalendar} />
            <Route path='/student/book_class' render={() => <Calendar role="student" />} />
          </MuiThemeProvider>
        </div>
=======
          <div style={styles.root}>
            <MuiThemeProvider theme={THEME}>
<<<<<<< HEAD
              <NavBar changeLogin = {this.changeLogin} color = {this.state.color} colors = {this.state.colors}/>
              <Route exact path='/' component={LandingPage} />
              <Route path='/login' component={Signin} />
              <Route path = '/signup' component = {Signup}/>
              <Route path = '/user' component = {TuitionDetail}/>
              <Route path = '/teacher/tuitionpreference' component = {TuitionPreference}/>
=======
              {/* <NavBar/>
              <NavBar changeLogin = {this.changeLogin} color = {this.state.color}/>
              <Route exact path='/' component={LandingPage} />
              <Route path='/login' component={Signin} />
              <Route path = '/signup' component = {Signup}/>
              <Route path = '/user' component = {User}/>
>>>>>>> 09da16eab3c18d545a92facbf454cf714ba32cad
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
>>>>>>> 68b522a35c391b68d4248a0e70e0582c4b506360
      </BrowserRouter>
    );
  }
}

export default App;
