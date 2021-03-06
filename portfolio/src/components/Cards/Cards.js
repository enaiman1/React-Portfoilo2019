import React from 'react'
import './Cards.css'
import Link from '../../media/link.png';


const Cards = props => (
    <div className=" w3-container w3-col l4 m6 s12 w3-padding card ">
    <header className="w3-container cardHeader w3-center">
        <h3>{props.card_data.pName}</h3>
    </header>
     <img src={props.card_data.image} className="cardImg" alt="project" width="100%" />
    <div className="w3-container cardInfo" >
    <div className="w3-row">
        <a className="w3-half w3-button w3-padding-large  w3-hover-indigo"
            href={props.card_data.github} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a className="w3-half w3-button w3-padding-large w3-hover-indigo" 
            href= {props.card_data.website} target="_blank" className="w3-half w3-button w3-padding-large w3-hide-small w3-hover-indigo" >
            <img src={Link} alt="github link" width="25px"/>
        </a>
        </div>
        <div className="w3-row">
        <div className="w3-container">
        <p>{props.card_data.description}</p>
        </div>
        </div>
    </div>
</div>



);


{/* <img src={props.card_data.image} alt={props.id} width="100%" /> */}
        


export default Cards;