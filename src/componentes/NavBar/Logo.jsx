import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css"
/* EN PROCESO, MI LOGO ES COMPLICADO PERO QUIERO HACERLO CON CSS */



function Logo() {
    return (
        <Link to="/">
        <div className="logo">
            <div className="logoA"></div>
            <div className="logoAGreenAfter"></div>
            <div className="logoAGreenBefore"></div>
            <div className="logoAGrey"></div>
            
            <div className="logoB"></div>
            <div className="logoBGreenAfter"></div>
            <div className="logoBGreenBefore"></div>
            <div className="logoBGrey"></div>
            
            <div className="logoC"></div>
            <div className="logoCGreenAfter"></div>
            <div className="logoCGreenBefore"></div>
            <div className="logoCGrey"></div>
        </div>
        </Link>
    )
}

export default Logo;