import React from 'react'
import './Showcase.css'
import Logo from '../../media/logoWhite_shadow.png';
// import Lightbulb from '../../media/Lightbulbs.mp4'

function Showcase(props) {
    return (
        <React.Fragment>
        <div class="showcase w3-center">

       
            {/* logo image */}
            <div className="w3-row">
                
                <div className="content">
                    <img src={Logo} className="logo" alt="Eric Naiman logo"></img>
                    <div className="title">
                        <h1>Eric Naiman</h1>
                    </div>
                </div>
            </div>
            <div className="w3-row w3-center showcaseBtn">
    <div className="w3-col m4 s4">
        <button className="w3-button w3-padding w3-margin w3-border w3-round" data-page="projects" onClick={props.changePage}>Projects</button>
    </div>

    <div className="w3-col m4 s4">
        <button className="w3-button w3-padding w3-margin w3-border w3-round" data-page="website" onClick={props.changePage} >Website</button>
    </div>

    <div className="w3-col m4 s4">
        <button className="w3-button w3-padding w3-margin w3-border w3-round" data-page="technology" onClick={props.changePage}>Tech Used</button>
    </div>
</div>

        </div>
        </React.Fragment>
    )
}

export default Showcase;