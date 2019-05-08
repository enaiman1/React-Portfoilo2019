import React from 'react'
import './Projects.css'

function Projects (props){
    return (
    <React.Fragment>
        <div className="project">
    <h1>Projects</h1>
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </p>
    </div>
    <div className="w3-row projectBtn">
                <div className="w3-col m6">
                    <button className="w3-button w3-white w3-border w3-round" data-page="showcase" onClick={props.changePage}>Main</button>
                </div>
                <div className=" w3-col m6">
                    <button className="w3-button w3-white w3-border w3-round" data-page="website" onClick={props.changePage}>Websites</button>
                </div>
            </div>
    </React.Fragment>
    
    )
    }

export default Projects;