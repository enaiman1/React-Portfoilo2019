import React, { Component } from 'react';
import Showcase from '../../components/Showcase';
import Projects from '../../components/Projects';
import Freelance from '../../components/Freelance';
import './Leftside.css'


class LeftSide extends Component {
    state = {
        page: "showcase"
    }
    showpage(){
        switch(this.state.page){
            case "showcase":
            return <Showcase changePage={this.changePage}/>
            case "projects":
            return <Projects changePage={this.changePage}/>
            case "freelance":
            return <Freelance changePage={this.changePage}/>
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
    <div className='LeftSide-View w3-twothird'>
    

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