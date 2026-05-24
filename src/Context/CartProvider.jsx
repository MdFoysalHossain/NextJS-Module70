"use client";
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [allCartItems, setAllCartItems] = useState([])

    const addToCart = (item) => {
        setAllCartItems([...allCartItems, item])
    }
    console.log("Cart items in context:", allCartItems);
    const cartValue = {
        allCartItems,
        addToCart,
        setAllCartItems,
    }

    return (
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;