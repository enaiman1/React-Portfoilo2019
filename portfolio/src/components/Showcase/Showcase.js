import React from 'react'
import './Showcase.css'
import Logo from '../../media/logoWhite_shadow.png';

function Showcase() {
    return (
        <div class="showcase w3-twothird">

            {/* logo image */}
            <div className="w3-row">
                
                <div className="content">
                    <img src={Logo} className="logo" alt="Eric Naiman logo"></img>
                    <div className="title">
                        <h1>Eric Naiman</h1>
                    </div>
                </div>

                <div className="w3-row showcaseBtn">
                    <div className="w3-col m6">
                        <button className="w3-button w3-white w3-border w3-round" >Portfolio</button>
                    </div>
                    <div className=" w3-col m6">
                        <button className="w3-button w3-white w3-border w3-round" >Website</button>
                    </div>
                </div>
                
            </div>



        </div>
    )
}

export default Showcase;