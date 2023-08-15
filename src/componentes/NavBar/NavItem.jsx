import { Link } from "react-router-dom";
import React from "react";
import "./NavItem.css"

/* CREO QUE CUMPLIRIA LA MISMA FUNCION QUE EL QUE PIDIERON, EL "ITEMLISTCONTAINER"*/


const NavItem = ({ title, href }) => {

    return (
        <li className="fullWidth">
            <Link className="navItemStyle" to={href}>{title}</Link>
        </li>
    )
}
export default NavItem;