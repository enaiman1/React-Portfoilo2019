import React from 'react'
import './About.css'
import Biopic from '../../media/bioPic.JPG'

function About() {
  return (
    <div className="about w3-third">

  {/* image */}
    <div className="w3-cell-row w3-center w3-margin-top"> 
      <img src={Biopic} className= "bioPic" alt="Eric Naiman logo"></img>
     </div>
      
      {/* about */}
      <div class=" w3-cell-row ">
        <h2 class=" w3-padding-16 w3-center">About</h2>
        <div className="w3-container w3-padding w3-margin">
          <p>
            I am a customer centric, full stack web developer, with an accomplished food & beverage management
            background.
          </p>
          <p>
            I have a passion for integrating emerging technologies to help my clients take on new challenges to achieve
            their personal and professional goals.
          </p>
          <p>
            I have expertise in analyzing, developing and implementing policies to drive an organization towards higher
            levels of achievement. Working with me, you are employing a results oriented strategist and visionary, with
            demonstrated success in leading teams. I bring a comprehensive knowledge of management, organizational
            development, team building, and project execution.
          </p>
        </div>
        {/* end about */}
      </div>
      <div className="w3-row btnRow">
                <div className="w3-col m6">
                    <button className="w3-button w3-white w3-border w3-round" >Technologies</button>
                </div>
                <div className=" w3-col m6">
                    <button className="w3-button w3-white w3-border w3-round" >Contact</button>
                </div>
            </div>

    </div>
  )
}





export default About;