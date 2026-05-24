"use client";
import { CartContext } from '@/Context/CartProvider';
import React, { useContext, useState } from 'react';

const AddToCart = ({ food }) => {
    const [isAdded, setIsAdded] = useState(false);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        const itemToAdd = {
            id: food.id,
            title: food.title,
            price: food.price,
            foodImg: food.foodImg,
            catId: food.catId,
            category: food.category,
            quantity: 1 
        }

        console.log("Adding to cart:", itemToAdd);
        addToCart(itemToAdd);
        setIsAdded(true);
    }
    
    return (
        <button onClick={handleAddToCart} disabled={isAdded} className="disabled:bg-gray-500 disabled:cursor-not-allowed flex-1 bg-amber-500 hover:bg-amber-600 active:scale-[0.97] text-zinc-950 text-sm font-bold py-2 rounded-xl transition-all duration-300 shadow-md shadow-amber-500/5 hover:shadow-amber-500/10">
            {
                isAdded ? "Added To Cart" : "Add to Cart"
            }
        </button>
    );
};

export default AddToCart;   