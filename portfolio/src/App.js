import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';

// page left
import Leftside from './Frames/Leftside'
// import About from './components/About';
// import TechUsed from './components/TechUsed';

// page right
import Rightside from "./Frames/Rightside"
// import Showcase from './components/Showcase';





class App extends Component {
render() {
  return (
    <div className="App">
      
    <div className="w3-row">
<Nav/>
    </div>
<div className="w3-row">
<Leftside/>
<Rightside/>
</div>
    
   
      
    </div>
  );
}
}
export default App;
