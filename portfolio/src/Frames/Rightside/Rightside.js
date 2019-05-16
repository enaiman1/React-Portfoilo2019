import React, { Component } from 'react';
import Contact from '../../components/Contact'
import About from '../../components/About'
import Technology from '../../components/TechUsed'
import './Rightside.css'


class RightSide extends Component{
state = {
    page: "about"
}
showpage(){
    switch(this.state.page){
        case "about": 
        return <About changePage={this.changePage} />
        case "technology": 
        return <Technology changePage={this.changePage}/>
        case "contact": 
        return <Contact changePage={this.changePage}/>
        default:   
    }
}

changePage = (e) => {
    e.preventDefault();
    console.log(e.target.getAttribute("data-page"));
    this.setState({
        page: e.target.getAttribute("data-page")
    })
}

render(){
    return (
        <div className='RightSide-View w3-third' >
        <div className="w3-row">
        {this.showpage()}
        </div>
        </div>
    )
}


}

export default RightSide;


// function Rightside() {
//     return (
        
//         <div className="w3-row">
    
//                     <div className="w3-row">
    
//                     </div>
//                     <div className="w3-row rightSide-btn ">
//                         <div className="w3-col m6">
//                             <button className="w3-button w3-white w3-border w3-round">Projects</button>
//                         </div>
//                         <div className=" w3-col m6">
//                             <button className="w3-button w3-white w3-border w3-round" >Websites</button>
//                         </div>
//                     </div>
                    
//                 </div>
    
//         </div>
//         )
// }

