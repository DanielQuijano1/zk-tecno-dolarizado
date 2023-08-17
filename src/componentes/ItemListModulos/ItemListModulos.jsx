import React, { useState, useEffect } from "react";
import { obtenerModulo } from "../../services/MockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loeader";

function ItemDetailContainer() {
    const [modulo, setModulo] = useState({ title: "Cargando", precio: "-" });
    const [isLoading, setIsLoading] = useState(true);

    let params = useParams();

    useEffect(() => {
        obtenerModulo(params.itemid)
            .then((respuesta) => {
                setModulo(respuesta)
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
                    <ItemDetail title={modulo.title} img={modulo.img} detalle={modulo.detalle} precio={modulo.precio} stock={modulo.stock} />
                )
            }
        </>
    )

}

export default ItemDetailContainer;