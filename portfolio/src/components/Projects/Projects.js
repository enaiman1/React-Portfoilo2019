import React, { Component } from 'react';
import Cards from '../Cards';
import Wrapper from '../Wrapper';
import Visual from '../../data/visuals';
import './Projects.css';


class Projects extends Component {
    state = {
        Visual,

    };
    render() {
        return (
            <React.Fragment>
                <div className="projects">

                    <div className="w3-row">
                        <h1>technology</h1>
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
                    <div className="w3-col m4">
                        <button className="w3-button w3-white w3-border w3-round" data-page="technology" onClick={props.changePage}>Tech Used</button>
                    </div>
                </div>
            </div>
    </div> */}





export default Projects;



