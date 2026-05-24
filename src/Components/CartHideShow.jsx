"use client";

import { useState } from "react";
import CartSidebar from "./CartSidebar";
import { ShoppingCart } from "lucide-react";

export default function CartHideShow() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Kacchi Biryani Delight", price: 450, quantity: 1, foodImg: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=150" },
    { id: 2, title: "Grilled Chicken Chaanp", price: 280, quantity: 2, foodImg: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
    { id: 3, title: "Grilled Chicken Chaanp", price: 280, quantity: 2, foodImg: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" },
    { id: 4, title: "Grilled Chicken Chaanp", price: 280, quantity: 2, foodImg: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=150" }
  ]);

  
  const handleQuantityUpdate = (id, newQuantity) => {
    if (newQuantity <= 0) {
      // Remove item if quantity falls to zero
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      // Update item quantity safely
      setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    }
  };

  return (
    <div className=" text-white">
        
      <button
        onClick={() => setIsCartOpen(true)}
        className="bg-amber-500 flex justify-center items-center gap-2 text-zinc-950 font-bold px-6 py-2 rounded-3xl transition hover:bg-amber-600 shadow-lg"
      >
        <ShoppingCart size={18} /> ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
      </button>


      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleQuantityUpdate}
      />
    </div>
  );
}