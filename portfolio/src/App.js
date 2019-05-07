import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Showcase from './components/Showcase'
import About from './components/About'




class App extends Component {
render() {
  return (
    <div className="App">
    <div class="w3-row">
<Nav/>
    </div>
<div className="w3-row">
<About/>
<Showcase/>

</div>
    
   
      
    </div>
  );
}
}
export default App;
