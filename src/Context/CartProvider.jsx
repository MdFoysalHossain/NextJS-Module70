"use client";
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [allCartItems, setAllCartItems] = useState([
        { id: 1, title: "Kacchi Biryani Delight", price: 450, quantity: 1, foodImg: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=150" }
    ])


    // const [allCartItems, setCartItems] = useState([
    //     { id: 1, title: "Kacchi Biryani Delight", price: 450, quantity: 1, foodImg: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=150" },
    //     { id: 2, title: "Grilled Chicken Chaanp", price: 280, quantity: 2, foodImg: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
    //     { id: 3, title: "Grilled Chicken Chaanp", price: 280, quantity: 2, foodImg: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
    //     { id: 4, title: "Grilled Chicken Chaanp", price: 280, quantity: 2, foodImg: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" }
    // ])

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