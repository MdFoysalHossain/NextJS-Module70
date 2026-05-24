"use client";

import { use, useContext, useEffect, useState } from "react";
import CartSidebar from "./CartSidebar";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "@/Context/CartProvider";

export default function CartHideShow() {
    const { allCartItems, setAllCartItems, addToCart } = useContext(CartContext);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const handleQuantityUpdate = (id, newQuantity) => {
        if (newQuantity <= 0) {
            // Remove item if quantity falls to zero
            setAllCartItems(allCartItems.filter(item => item.id !== id));
        } else {
            // Update item quantity safely
            setAllCartItems(allCartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
        }
    };

    return (
        <div className=" text-white">

            <button
                onClick={() => setIsCartOpen(true)}
                className="bg-amber-500 flex justify-center items-center gap-2 text-zinc-950 font-bold px-6 py-2 rounded-3xl transition hover:bg-amber-600 shadow-lg"
            >
                <ShoppingCart size={18} /> ({allCartItems.reduce((sum, item) => sum + item.quantity, 0)})
            </button>





            {
                isCartOpen &&
                <CartSidebar
                    isOpen={isCartOpen}
                    onClose={() => setIsCartOpen(false)}
                    cartItems={allCartItems}
                    onUpdateQuantity={handleQuantityUpdate}
                />
            }
        </div>
    );
}