import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./../Button/Button.css"
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function ItemDetail({ title, img, detalle, precio, stock, onAddToCart, isInCart }) {

    return (
        <div className="estiloCard__flex">
            <div className="estiloCard__detail">
                <div className="estiloCard__detailContent">
                    <div className="estiloCard__imgDetail">
                        <img className="estiloImagen__detail" height="200px" src={img} alt={title} />
                    </div>
                    <div className="estiloCard__PrecioYDescripcion margenLeft paddingBottom">
                        <div className="estiloCard__desc">
                            <small>{detalle}</small>
                        </div>
                        <h3 className="estiloCard__precio">${precio}</h3>
                    </div>
                    <div>
                        {isInCart ?
                            <Link to="/cart" >
                                <Button className="styleButton" text="Ir Al Carrito"></Button>
                            </Link>
                            :
                            <ItemCount className="boton__detail" stock={stock} onAddToCart={onAddToCart} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;