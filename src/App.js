import React from 'react';
import NavBar from './Components/NavBar'
import {BrowserRouter , Route} from 'react-router-dom'
import User from './Components/User'
import LandingPage from './Components/LandingPage'


class App extends React.Component {
  
 render() {
  return (
    <BrowserRouter>
    <div>
      <NavBar/>
      <Route path = '/user' component = {User}/>
      <Route exact path = '/' component = {LandingPage}/>

      
    </div>
    </BrowserRouter>
  );
 }
}

export default App;
