import React, { Fragment } from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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
import NavTutor from './Components/Teacher/NavBar'
import MyDetail from './Components/Teacher/TeacherDetail'
import Tutor_Editmyprofile from './Components/Teacher/EditMyProfile'
const styles = {

  root: {
    marginTop: 0,
  }
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

const ProtectedRoute = (props) => {
  const { component, path } = props;
  const token = localStorage.getItem("token");
  if (!token) return <Redirect to="login" />
  return <Route path={path} component={component} {...props} />
}


class App extends React.Component {
  state = {
    color: "primary",
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
  updateRole = (role) => {
    this.setState({
      role: role
    })
  }
  render() {
    let display;
    let navbar;
    if (this.state.role !== 'student' && this.state.role !== 'tutor'){
      navbar = (
        <NavBar color={this.state.color} colors={this.state.colors} />
      )
    }
    if (this.state.role === "student") {
      navbar = (
        <NavStd />
      )
      display = (
        <Fragment>
          <Route path='/filter' component={Filter} />
          <Route path='/editmyprofile' component={Editmyprofile} />
          <Route path='/student/allclasses' component={StdCalendar} />
          <Route path='/student/book_class' render={() => <Calendar role="student" tutor_id="5ce6cee1138b461508163e1c" />} />
          <Route path='/user' render={props => {
            return <TuitionDetail {...props}
            />
          }} />
          <Route path='/tutor/detail' render={() => <TeacherDetail tutor_id = "5ce6001cd7133c301cf2f428" />} />
          <Route path = '/preference' component = {TuitionPreference} />
        </Fragment>
      )
    }
    if (this.state.role === "tutor") {
      navbar = (
        <NavTutor/>
      )
      display = (
        <Fragment>
          <Route path = '/teacher/tuitionpreference' render = {props => {
          return <TuitionPreference />
          }}/>
          <Route path='/teacher/editmyprofile' component = {Tutor_Editmyprofile}/>
          <Route path = '/tutor/update_freetime' render ={() => <Calendar role={this.state.role}/>} />
          <Route path = '/tutor/my_profile' component = {MyDetail}/>
        </Fragment>
      )
    }
    return (
      <BrowserRouter>
        <div style={styles.root}>
          <MuiThemeProvider theme={THEME}>
            {navbar}
            <Switch>
              <Route path='/signup' render = {propsRoute => {
                return <Signup {...propsRoute}
              />}}/>
              <Route exact path='/' render = {props => {
                return <LandingPage {...props}
              />}} />
              <Route path='/login' render = {props => {
                return <Signin {...props} updateRole = {this.updateRole}
              />}}/>
              {display}
            </Switch>
          </MuiThemeProvider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
