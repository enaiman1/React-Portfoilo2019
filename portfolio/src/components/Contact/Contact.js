import React from 'react'
import './Contact.css'
import Contactpic from '../../media/contact2.jpg';

function Contact(props) {
    return (
        <React.Fragment>
            <div className="contact">

                {/* image */}
                <div className="w3-row w3-center">
                    <img src={Contactpic} className="contactPic" alt="contact pic" />
                </div>

                <div className="w3-row">
                <h2 className=" w3-center">Contact</h2>
                    <div className="w3-container">
                        <p className="w3-opacity w3-center"><i>Fan? Drop a note!</i></p>
                        <div className="w3-row">
                            <div className="w3-col w3-padding w3-margin-bottom">
                                <i className="fa fa-map-marker"></i> Orlando, US < br ></br>
                                <a href="mailto:Enaiman1@gmail.com">
                                <i className="fa fa-envelope"> </i> Email: enaiman1@gmail.com<br></br>
                                </a>
                                <a href="https://github.com/enaiman1" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> GitHub<br></br>
                                </a>
                                <a href="https://www.linkedin.com/in/enaiman1" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin w3-hover-opacity"></i> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w3-row w3-center w3-padding contactBtn s1">
                    <div className="w3-content">
                        <button className="w3-button w3-border w3-round" data-page="about" onClick={props.changePage}>About</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Contact;