import React from 'react';
import './TechUsed.css';

function TechUsed(props) {
    return (
      <React.Fragment>
    <div className="techUsed w3-col">
    <h2 className="w3-padding-16 w3-center" >Technologies Used</h2>
    
    {/* <!-- row one(techused) --> */}
    <div className="w3-row w3-margin-top w3-padding ">
      {/* <!-- Html icon --> */}
      <div className="w3-col w3-center w3-quarter">
        <i className="devicon-html5-plain-wordmark colored fa-4x"></i>
      </div>

      {/* <!-- Css icon --> */}
      <div className="w3-col w3-center w3-quarter">
        <i className="devicon-css3-plain-wordmark colored fa-4x"></i>
      </div>
      {/* <!-- JS icon--> */}
      <div className="w3-col w3-center w3-quarter">
        <i className="devicon-javascript-plain colored fa-4x"></i>
      </div>

      {/* <!-- node icon --> */}
      <div className="w3-col w3-center w3-quarter ">
        <i className="devicon-jquery-plain-wordmark colored fa-4x"></i>
      </div>

    </div>
    {/* <!-- end row one (tech used)--> */}

    {/* <!-- row two(techused) --> */}
    <div className="w3-row w3-margin-top w3-padding">
      {/* <!-- mongo icon --> */}
      <div className="w3-col w3-center w3-quarter">
        <i className="devicon-mongodb-plain-wordmark colored fa-4x"></i>
      </div>

      {/* <!-- express icon --> */}
      <div className="w3-col w3-center w3-quarter">
        <i className="devicon-express-original colored fa-4x"></i>
      </div>
      {/* <!-- react icon--> */}
      <div className="w3-col w3-center w3-quarter">
        <i className="devicon-react-original-wordmark colored fa-4x"></i>
      </div>

      {/* <!-- node icon --> */}
      <div className="w3-col w3-center w3-quarter ">
        <i className="devicon-nodejs-plain-wordmark colored fa-4x"></i>
      </div>
    </div>
    {/* <!-- end row two (techUsed) --> */}

    {/* <!-- row three (techused) --> */}
    <div className="w3-row w3-margin-top w3-padding">
      {/* <!--php icon --> */}
      <div className="w3-col w3-center w3-quarter">
        <i className="devicon-php-plain colored fa-4x"></i>
      </div>
      {/* <!-- mySql icon--> */}
      <div className="w3-col w3-center w3-quarter">
        <i className="devicon-mysql-plain-wordmark colored fa-4x"></i>
      </div>
      {/* <!-- Sequilize icon --> */}
      <div className="w3-col w3-center w3-quarter ">
          <i className="devicon-sequelize-plain-wordmark colored fa-6x"></i>
      </div>

      {/* <!-- WordPress icon --> */}
      <div className="w3-col w3-center w3-quarter">
        <i className="devicon-wordpress-plain-wordmark colored fa-4x"></i>
      </div>
    </div>
    {/* <!-- end row three(techUsed) --> */}

    {/* <!-- row four (tech used) --> */}
    <div className="w3-row w3-margin-top w3-padding">
        {/* <!--visual studo icon --> */}
        <div className="w3-col w3-center w3-quarter">
            <i className="devicon-visualstudio-plain-wordmark colored fa-5x"></i>
        </div>
        {/* <!-- Heroku icon--> */}
        <div className="w3-col w3-center w3-quarter">
            <i className="devicon-heroku-plain-wordmark colored fa-4x"></i>
        </div>
        {/* <!-- WordPress icon --> */}
        <div className="w3-col w3-center w3-quarter">
            <i className="devicon-github-plain-wordmark colored fa-4x"></i>
        </div>

        {/* <!-- BootStrap icon --> */}
        <div className="w3-col w3-center w3-quarter ">
            <i className="devicon-bootstrap-plain-wordmark colored fa-4x"></i>
        </div>
      </div>
      {/* <!-- //end row four (techUsed)\\ --> */}
      
      {/* buttons */}
     <div className="w3-row techBtn">
  <div className="w3-col w3-half">
                        <button className="w3-button w3-border w3-round aboutBtn" data-page="contact" onClick={props.changePage}>Contact</button>
                    </div> 

                    <div className="w3-content w3-half ">
                        <button className="w3-button w3-border w3-round aboutBtn" data-page="about" onClick={props.changePage}>About</button>
                    </div>
                </div>
  </div>
  
</React.Fragment>
//   <!-- //end tech used\\ -->
);
}

export default TechUsed;