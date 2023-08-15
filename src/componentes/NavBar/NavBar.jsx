import React from "react";
import NavItem from "./NavItem";
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import { Link } from "react-router-dom";


function NavBar(props) {

    const context = useContext(cartContext);
    context.test();

    const links = [
        { title: "TIENDA", url: "/" },
        { title: "SERVICIO TECNICO", url: "/asd" },
        { title: "RECOMENDACIONES", url: "/asdasd" },
        { title: "SOBRE NOSOTROS", url: "/asdasd" },
        { title: "CONTACTANOS", url: "/sadsad" },
    ]

    return (
        <div className="miEstilo css-selector">
            <div className="estiloLogo">
                <Logo></Logo>
            </div>
            <nav>
                <ul className="estiloUl">
                    {links.map((elemento) => (<NavItem key={elemento.title} href={elemento.url} title={elemento.title} />))}
                </ul>
            </nav>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </div>
    )
}

export default NavBar;


/*
{title:"CABLES", url:"/"}, 
        {title:"CARGADORES", url:"/"}, 
        {title:"ADAPTADORES",url:"/"}, 
        {title:"PARLANTES",url:"/"}, 
        {title:"FUNDAS",url:"/"}, 
        {title:"ACCESORIOS PC", url:"/"}
*/