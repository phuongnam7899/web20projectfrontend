import React from 'react';
import NavBar from './Components/NavBar'
// import {BrowserRouter , Route} from 'react-router-dom'
import LText from './Components/LText'
import grey from '@material-ui/core/colors/grey'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import BookingButton from './Components/BookingButton'


const styles = {
  paperContainer : {
    height: 1356,
    backgroundImage : `url(${"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1082&q=80"})`,
    backgroundRepeat : 'no-repeat',
    backgroundSize : "cover"
  },
  root :{
    margin: 80,
    marginTop: 0,
  },
}
const THEME = createMuiTheme({
  typography: {
    fontFamily: '"Oswald", sans-serif',
  },
  palette: {
    primary: {main : grey[50]},
    secondary: {main : grey[900]},
  },
});


class App extends React.Component {
  
 render() {
  return (
    <div style = {styles.paperContainer}>
      <div style = {styles.root}>
      <MuiThemeProvider theme = {THEME}>
      <NavBar/>
      <LText/>
      <BookingButton/>
      </MuiThemeProvider>
      </div>
    </div>
  );
 }
}

export default App;
