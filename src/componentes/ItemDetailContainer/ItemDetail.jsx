import React from "react";
import "./../Button/Button.css"
import "./ItemDetail.css"
/*
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
*/
function ItemDetail({ title, img, detalle, precio }) {

    function precioDolar() {
        return precio * 2
    }

    function precioArs() {
        return Math.ceil(precioDolar() * 850)
    }

    return (
        <div className="estiloCard__flex">
            <div className="estiloCard__detail">
                <div className="estiloCard__detailContent">
                    <div className="estiloCard__imgDetail">
                        <img className="estiloImagen__detail" height="200px" src={img} alt={title} />
                    </div>
                    <div className="estiloCard__desc paddBottom30px">
                        <small>{detalle}</small>
                    </div>
                    <h3 className="estiloCard__precio textCenter">U$D  {precioDolar()}</h3>
                    <h3 className="estiloCard__precio textCenter">AR$  {precioArs()}</h3>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
