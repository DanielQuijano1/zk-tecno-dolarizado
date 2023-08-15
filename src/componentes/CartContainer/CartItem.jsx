import React from "react";
import Button from "../Button/Button";
import "./CartItem.css"


function CartItem({ itemInCart, removeItem }) {
    return (
        <div className="targetaCart">
            <div className="textoCartItem">{itemInCart.detalle}</div>
            <div className="espaciadoCart">
                <div className="textoCartItem">{itemInCart.precio}</div>
                <div className="textoCartItem">{itemInCart.count}</div>
                <Button onClick={() => removeItem(itemInCart)} className="buttonRemove" text="X" />
            </div>
        </div>
    )
}

export default CartItem;
