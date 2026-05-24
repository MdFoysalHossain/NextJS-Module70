"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function CartSidebar({ isOpen, onClose, cartItems = [], onUpdateQuantity }) {
  
  // Calculate Totals dynamically
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 60 : 0; // Standard ৳60 delivery charge
  const totalAmount = subtotal + deliveryFee;
  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Lock body scrolling when sidebar drawer is open
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, [isOpen]);

  return (
    <>
      {/* Backdrop Blur Overlay */}
      <div
        className={`fixed inset-0 z-50 top-0 right-0 h-screen bg-black/60 backdrop-blur-sm transition-opacity overflow-hidden duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sliding Drawer - Sticky Positioning Fixes Applied */}
      <div
        className={`fixed -top-20 md:top-0 right-0 z-50 h-[100dvh] w-full md:max-w-md bg-zinc-950 border-l border-zinc-800/80 shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <h3 className="text-xl font-serif font-bold text-white tracking-wide">
              Your Order
            </h3>
            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold px-2.5 py-0.5 rounded-full">
              {totalItemsCount} items
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition active:scale-95"
            aria-label="Close Cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Items Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3 text-zinc-500">
              <span className="text-4xl">🍳</span>
              <p className="text-sm font-medium tracking-wide">Your culinary basket is empty.</p>
              <Link 
                href="/foods"
                onClick={onClose}
                className="text-xs font-bold uppercase text-amber-500 hover:text-amber-400 tracking-wider underline underline-offset-4"
              >
                Browse Our Menu
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center gap-4 bg-zinc-900/40 border border-zinc-900 p-3 rounded-xl hover:border-zinc-800 transition duration-200"
              >
                <div className="h-16 w-16 rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0 border border-zinc-800">
                  <img src={item.foodImg} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-white tracking-wide truncate">
                    {item.title}
                  </h4>
                  <p className="text-sm font-bold text-amber-500 mt-1">
                    ৳ {item.price}
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-2 py-1 rounded-lg">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="text-zinc-400 hover:text-white text-xs font-bold p-1 transition"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-white w-4 text-center">
                    {item.quantity}
                  </span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="text-zinc-400 hover:text-white text-xs font-bold p-1 transition"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Sticky Summary Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-zinc-800 bg-zinc-950 sticky bottom-0">
            <div className="space-y-2.5 text-sm mb-6">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span className="font-medium text-zinc-200">৳ {subtotal}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Delivery Fee</span>
                <span className="font-medium text-zinc-200">৳ {deliveryFee}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-white pt-2.5 border-t border-zinc-800/60">
                <span>Total Amount</span>
                <span className="text-amber-500">৳ {totalAmount}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full text-center bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-zinc-950 font-bold py-3.5 rounded-xl transition duration-300 shadow-xl shadow-amber-500/10"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}