import React from 'react'
import './Freelance.css'
import Construction from '../../media/construction.jpg'

function Freelance(props) {
    return (
        <React.Fragment>
            <div className="freelance w3-center">
                <div className="w3-row flTitle">
                    <h1>Freelance</h1>
                </div>

        {/* content */}
                <div className="w3-row flContent">
                <div className=" w3-container w3-col l4 m6 s12 w3-padding flCard  ">
    <header className="w3-container flCardHeader w3-center">
        <h3>Freelance Work</h3>
    </header>
     <img src={Construction} className="flCardImg" alt="under construction pic" width="100%" />
    <div className="w3-container flCardInfo" >
        <div className="w3-row">
        <div className="w3-container">
        <h3>Coming Soon</h3>
         <p>This section will showcase some of my freelance work</p>
        </div>
        </div>
    </div>
</div>
                </div>
                {/* end of content */}

                {/* button */}
                <div className="w3-row  w3-center freelanceBtn">
                    <div className="w3-col m6 s12">
                        <button className="w3-button w3-margin w3-border w3-round flbtn" data-page="showcase" onClick={props.changePage}>Showcase</button>
                    </div>
                    <div className=" w3-col m6 s12">
                        <button className="w3-button w3-margin w3-border w3-round flbtn" data-page="projects" onClick={props.changePage}>Projects</button>
                    </div>
                    {/* <div className="w3-col m4">
                    <button className="w3-button w3-white w3-border w3-round" data-page="technology" onClick={props.changePage}>Tech Used</button>
                </div> */}
                </div>

            </div>

        </React.Fragment>
    )
}

export default Freelance;