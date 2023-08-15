import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

function Categories(props) {
    return (
        <div className="estiloCategorias">
            <nav className="estiloCategorias_nav">
                <div className="estiloCategorias_link espaciadoDerecho">Categorias:</div>
                <ul className="estiloCategorias_ul" >
                    <Link to="/" className="estiloCategorias_link"> MOSTRAR TODOS</Link>
                    <Link to="/categorias/Cables" className="estiloCategorias_link">Cables</Link>
                    <Link to="/categorias/Cargadores" className="estiloCategorias_link">Cargadores</Link>
                    <Link to="/categorias/Auriculares" className="estiloCategorias_link">Auriculares</Link>
                    <Link to="/categorias/Adaptadores" className="estiloCategorias_link">Adaptadores</Link>
                    <Link to="/categorias/Accesorios PC" className="estiloCategorias_link">Accesorios PC</Link>
                    <Link to="/categorias/Accesorios Celulares" className="estiloCategorias_link">Accesorios Celulares</Link>
                    <Link to="/categorias/OTROS" className="estiloCategorias_link">Otros</Link>
                </ul>
            </nav>
        </div>
    )
}



export default Categories;


/*
cables
cargadores
auriculares
adaptadores
accesorios pc
accesorios celulares
otros
*/