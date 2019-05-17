import React from 'react'
import './Nav.css'



function Nav() {
  return (
    <nav className="w3-top">
      <div className="w3-bar w3-card navBar ">
        
          <a href="#" className=" w3-button w3-padding w3-hover-indigo navName w3-mobile "><b>Eric Naiman</b></a>
        
        {/* nav links */}
        <div className="w3-right w3-mobile navLinks">
          {/* <!-- Github --> */}
          <a className="w3-button w3-hover-indigo"
            href="https://github.com/enaiman1" target="_blank">
            <i className="fab fa-github fa-2x"></i>
          </a>
          {/* <!-- linked in --> */}
          <a className="w3-button w3-hover-indigo"
            href="https://www.linkedin.com/in/enaiman1" target="_blank">
            <i className="fa fa-linkedin w3-hover-opacity fa-2x"></i>
          </a>
          {/* <!-- instagram link --> */}
          <a className="w3-button w3-hover-indigo"
            href="https://www.instagram.com/ericcentrik/" target="_blank">
            <i className="fa fa-instagram w3-hover-opacity fa-2x"></i>
          </a>
          {/* <!-- twitter --> */}
          <a className="w3-button w3-hover-indigo"
            href="https://twitter.com/Ericcentrik" target="_blank">
            <i className="fa fa-twitter w3-hover-opacity fa-2x"></i>
          </a>
        </div>
        {/* end of nav links */}
      </div>
    </nav>



  );
}

export default Nav;