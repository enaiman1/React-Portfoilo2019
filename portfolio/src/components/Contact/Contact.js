import React from 'react'
import './Contact.js'

function Contact(props) {
    return (
        <div className="w3-container w3-padding-32" id="contact">
            <h2 className=" w3-padding-16 w3-center" data-aos="flip-down">Contact</h2>
            <p className="w3-opacity w3-center"><i>Fan? Drop a note!</i></p>
            <div className="w3-row w3-padding-32">
                <div className="w3-col m6 w3-large w3-margin-bottom">
                    <i className="fa fa-map-marker"></i> Orlando, US < br ></br>
                    <i className="fa fa-envelope"> </i> Email: enaiman1@gmail.com<br></br>
                    <a href="https://github.com/enaiman1" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>GitHub<br></br>
                    </a>
                    <a href="https://www.linkedin.com/in/enaiman1" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin w3-hover-opacity"></i>LinkedIn
                     </a>
                </div>
            </div>
            <div className="w3-row btnRow">
                <div className="w3-col m6">
                    <button className="w3-button w3-white w3-border w3-round" data-page="about" onClick={props.changePage}>About</button>
                </div>
                <div className=" w3-col m6">
                    <button className="w3-button w3-white w3-border w3-round" data-page="technology" onClick={props.changePage}>technology</button>
                </div>
            </div>
        </div> 
    )

}

export default Contact;