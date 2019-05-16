import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
    <div className="container w3-padding">
        <div className="wrapper">
            {props.children}
        </div>
    </div>
);

export default Wrapper;