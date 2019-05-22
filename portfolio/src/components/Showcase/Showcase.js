import React from 'react'
import './Showcase.css'
import Logo from '../../media/logoWhite_shadow.png';


function Showcase(props) {
    return (
        <React.Fragment>
            <div className="showcase w3-center">


                {/* logo image */}
                <div className="w3-row">

                    <div className="content">
                        <img src={Logo} className="logo" alt="Eric Naiman logo"></img>
                        <div className="mainName">
                            <h1>Eric Naiman</h1>
                        </div>
                        <div className="title">
                        <p>Full Stack Web Developer</p>
                        </div>
                    </div>
                </div>
                {/* buttons */}
                <div className="w3-row w3-center showcaseBtn">
                    <div className="w3-col m6 s12">
                        <button className="w3-button w3-margin w3-border w3-round sbtn" data-page="projects" onClick={props.changePage}>Projects</button>
                    </div>

                    <div className="w3-col m6 s12">
                        <button className="w3-button w3-margin w3-border w3-round sbtn" data-page="freelance" onClick={props.changePage} >Freelance</button>
                    </div>

                    {/* <div className="w3-col m4 s4">
                        <button className="w3-button w3-padding w3-margin w3-border w3-round sbtn" data-page="technology" onClick={props.changePage}>Tech Used</button>
                    </div> */}
                </div>

            </div>
        </React.Fragment>
    )
}

export default Showcase;