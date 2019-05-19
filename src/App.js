import React from 'react';
import NavBar from './Components/NavBar'
import Calendar from './Components/Calendar';
import Selectable from './Components/Selectable'

class App extends React.Component {
  // constructor(props);


  
 render() {
  return (
    <div>
      <NavBar/>
      <Calendar/>
    </div>
  );
 }
}

export default App;
