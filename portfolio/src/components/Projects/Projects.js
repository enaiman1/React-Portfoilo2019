import React, { Component } from 'react';
import Cards from '../Cards';
import Wrapper from '../Wrapper';
import Visual from '../../data/visuals';
import Showcase from '../../components/Showcase';
import Technology from '../../components/TechUsed'
import Websites from '../../components/Websites';

import './Projects.css';


class Projects extends Component {
    state = {
        Visual,
        page: "projects"

    }
    showpage(){
        switch(this.state.page){
            case "projects":
            return <Projects changePage={this.changePage}/>
            case "showcase":
            return <Showcase changePage={this.changePage}/>
            case "website":
            return <Websites changePage={this.changePage}/>
            case "technology": 
            return <Technology changePage={this.changePage}/>
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
    render() {
        return (
            <React.Fragment>
                <div className="projects">
                    
                    <div className="w3-row w3-center">
                        <h1>Projects</h1>
                    </div>

                    {/* buttons */}
                <div className="w3-row w3-center projectBtn ">
                    <div className="w3-col m4 s4">
                        <button className="w3-button w3-padding w3-margin w3-border w3-round sbtn" data-page="showcase" onClick={this.changePage}>Showcase</button>
                    </div>

                    <div className="w3-col m4 s4">
                        <button className="w3-button w3-padding w3-margin w3-border w3-round sbtn" data-page="website" onClick={this.changePage} >Website</button>
                    </div>

                    <div className="w3-col m4 s4">
                        <button className="w3-button w3-padding w3-margin w3-border w3-round sbtn" data-page="technology" onClick={this.changePage}>Tech Used</button>
                    </div>
                </div>
                    

                    <div className="w3-row"> 
                    <Wrapper>
                        {this.state.Visual.map(Visual => (
                            <Cards
                                key={Visual.id}
                                card_data={Visual}

                            />
                        ))}
                    </Wrapper>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}



               {/* <div className="w3-row projectBtn">
 <div className="w3-col m4">
    <button className="w3-button w3-white w3-border w3-round" data-page="showcase" onClick={props.changePage}>Main</button>
</div>
<div className=" w3-col m4">
    <button className="w3-button w3-white w3-border w3-round" data-page="website" onClick={props.changePage}>Websites</button>  
</div>
<div className="w3-col m4">
        <button className="w3-button w3-white w3-border w3-round" data-page="technology" onClick={props.changePage}>Tech Used</button>
    </div>
</div> */}
    

export default Projects;



