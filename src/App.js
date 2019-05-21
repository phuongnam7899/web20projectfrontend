import React from 'react';
import NavBar from './Components/NavBar'
import { BrowserRouter, Route } from 'react-router-dom'
import grey from '@material-ui/core/colors/grey'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import LandingPage from './Components/LandingPage'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import User from './Components/TuitionDetail'
import Calendar from './Components/Calendar'
import Filter from './Components/Filter'



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
});


class App extends React.Component {
  state = {
    color : "primary",
    colors: 'white'

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
              <NavBar/>
              <Route exact path='/' component={LandingPage} />
              <Route path='/login' component={Signin} />
              <Route path = '/signup' component = {Signup}/>
              <Route path = '/user' component = {Calendar}/>
              {/* <Route path = '/schedule' component = {}> */}
              <Route path = '/filter' component = {Filter}/>
            </MuiThemeProvider>
          </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
