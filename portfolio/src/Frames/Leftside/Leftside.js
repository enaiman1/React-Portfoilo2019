import React, { Component } from 'react';
import About from '../../components/About'
import Technology from '../../components/TechUsed'
import Contact from '../../components/Contact'
import './Leftside.css'




class LeftSide extends Component {
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

render (){
    return (
    <div className='leftSide-View w3-third'>
    

                <div className="w3-row">
                {this.showpage()}
                </div>
               
    </div>
    )

}
}
export default LeftSide;

 {/* <div className="w3-row leftSide-btn ">
                <div className="w3-col m6">
                        <button className="w3-button w3-white w3-border w3-round" data-page="about" onClick={this.changePage} >About</button>
                    </div>
                    <div className="w3-col m6">
                        <button className="w3-button w3-white w3-border w3-round" data-page="technology" onClick={this.changePage} >Technology</button>
                    </div>
                    <div className=" w3-col m6">
                        <button className="w3-button w3-white w3-border w3-round" data-page="contact" onClick={this.changePage}>Contact</button>
                    </div>
                </div> */}