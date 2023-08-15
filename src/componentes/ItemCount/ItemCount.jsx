import { useState } from "react";
import "./ItemCount.css"
import Button from "../Button/Button";
import React from "react";

function ItemCount({onAddToCart, stock}) {
    const [count, setCount] = useState(0);

    function handleCountAdd() {
        if (stock > count){
            setCount(count + 1);
        }
    }

    function handleCountRemove() {
        if (count > 0){
            setCount(count - 1); 
        }
    }


    return (
        <div className="estiloCard__Contador__detail">
            <div className="itemCount__Container">
                <div className="itemCount__Text">Cantidad</div>
                <div className="itemCount__CountBox">
                    <Button className="itemCount__Button borderLeft" onClick={handleCountRemove} text="-"/>
                    <div className="itemCount__CountDisplay"> {count} </div>
                    <Button className="itemCount__Button borderRight" onClick={handleCountAdd} text="+" />
                </div>
            </div>
            <Button className="boton__detail styleButton" onClick={() => onAddToCart(count)} text="Agregar al carrito" />
        </div>
    )
}

export default ItemCount;