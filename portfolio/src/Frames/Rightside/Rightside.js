import React, { Component } from 'react';
import Showcase from '../../components/Showcase';
import Projects from '../../components/Projects';
import Websites from '../../components/Websites';
import './Rightside.css'


class RightSide extends Component{
state = {
    page: "showcase"
}
showpage(){
    switch(this.state.page){
        case "showcase":
        return <Showcase changePage={this.changePage}/>
        case "projects":
        return <Projects changePage={this.changePage}/>
        case "website":
        return <Websites changePage={this.changePage}/>
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
        <div className='RightSide-View w3-twothird'>
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

