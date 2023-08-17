import React from "react";
import NavItem from "./NavItem";
import Logo from "./Logo";
import "./NavBar.css";


function NavBar(props) {
    const links = [
        { title: "TIENDA", url: "/" },
        { title: "SERVICIO TECNICO", url: "/serviciotecnico" },
        { title: "RECOMENDACIONES", url: "/asdasd" },
        { title: "SOBRE NOSOTROS", url: "/asdasd" },
        { title: "CONTACTANOS", url: "/sadsad" },
    ]

    return (
        <div className="miEstilo css-selector">
            <div className="estiloLogo">
                <Logo/>
            </div>
            <nav>
                <ul className="estiloUl">
                    {links.map((elemento) => (<NavItem key={elemento.title} href={elemento.url} title={elemento.title} />))}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
