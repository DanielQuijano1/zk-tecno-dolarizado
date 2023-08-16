import { Link } from "react-router-dom";
import Button from "./Button/Button";
import "./Card.css";
import "./Button/Button.css"
import React from "react";

function Card(props) {
    const { title, precio, img, id } = props.item

    function precioDolar() {
        return precio * 2
    }

    function precioArs() {
        return Math.ceil(precioDolar() * 850)
    }

    return (
        <div>
            <div className="estiloCard">

                <div className="estiloCard__img box-dimension">
                    <img className="estiloImagen" src={img} alt={title} />
                </div>

                <div className="estiloCard__desc box-dimension">
                    <small>{id} . {title}</small>
                </div>
                <div className="estiloCard__boxPrecio box-dimension">
                    <h3 className="estiloCard__precio">U$D{precioDolar()}</h3>
                    <h3 className="estiloCard__precio">AR${precioArs()}</h3>
                </div>
                <div className="box-dimension">
                    <Link to={`/detalle/${id}`}>
                        <Button text="Agregar" className="styleButton" />
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Card;
