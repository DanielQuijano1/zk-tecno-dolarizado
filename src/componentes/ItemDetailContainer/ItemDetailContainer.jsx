import React, { useState, useEffect, useContext } from "react";
import { obtenerProducto } from "../../services/MockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import Loader from "../Loader/Loeader";

function ItemDetailContainer() {
    const [producto, setProducto] = useState({ title: "Cargando", precio: "-" });
    const [isLoading, setIsLoading] = useState(true);
    const [isInCart, setIsInCart] = useState(false)

    let params = useParams();
    const { addToCart } = useContext(cartContext);

    function handleAddToCart(count) {
        setIsInCart(true)
        addToCart({ ...producto, count: count });
    }

    useEffect(() => {
        obtenerProducto(params.itemid)
            .then((respuesta) => {
                setProducto(respuesta)
                setIsLoading(false)
            })
            .catch((error) => alert(error))
            .finally(() => setIsLoading(false))
    }, []);


    return (
        <>
            {
                isLoading ? (
                    <Loader></Loader>
                ) : (
                    <ItemDetail isInCart={isInCart} onAddToCart={handleAddToCart} title={producto.title} img={producto.img} detalle={producto.detalle} precio={producto.precio} stock={producto.stock} />
                )
            }
        </>
    )

}

export default ItemDetailContainer;