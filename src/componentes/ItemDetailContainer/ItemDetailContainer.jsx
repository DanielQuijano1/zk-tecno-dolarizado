import React, { useState, useEffect } from "react";
import { obtenerProducto } from "../../services/MockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loeader";

function ItemDetailContainer() {
    const [producto, setProducto] = useState({ title: "Cargando", precio: "-" });
    const [isLoading, setIsLoading] = useState(true);

    let params = useParams();

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
                    <ItemDetail title={producto.title} img={producto.img} detalle={producto.detalle} precio={producto.precio} stock={producto.stock} />
                )
            }
        </>
    )

}

export default ItemDetailContainer;