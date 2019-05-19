import React from 'react';
import NavBar from './Components/NavBar'
import { BrowserRouter, Route } from 'react-router-dom'
import grey from '@material-ui/core/colors/grey'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import LandingPage from './Components/LandingPage'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import User from './Components/User'



const styles = {
  paperContainer: {
    height: 1356,
    backgroundImage: `url(${"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1082&q=80"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover"
  },
  root: {
    margin: 80,
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
        <div style={styles.paperContainer}>
          <div style={styles.root}>
            <MuiThemeProvider theme={THEME}>
              <NavBar color = {this.state.color} colors = {this.state.colors} changeLogin = {this.changeLogin}/>
              <Route exact path='/' component={LandingPage} />
              <Route path='/login' component={Signin} />
              <Route path = '/signup' component = {Signup}/>
              <Route path = '/user' component = {User}/>
            </MuiThemeProvider>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
