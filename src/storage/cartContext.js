import React from "react";
import { createContext, useState } from "react";

export const cartContext = createContext();

function CartProvider(props) {

    const test = () => console.log("test")

    const [cart, setCart] = useState([])

    function addToCart(item) {
        let newCart = cart.map(item => item);
        newCart.push(item)
        setCart(newCart)
    }

    function removeItem(itemid) {

    }

    function clear() {
        setCart([])
    }

    function getTotalItemsInCart() {
    }

    return (
        <cartContext.Provider value={{ cart, test, addToCart, removeItem, clear, getTotalItemsInCart }}>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartProvider };  