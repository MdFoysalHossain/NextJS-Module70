import { convertSegmentPathToStaticExportFilename } from 'next/dist/shared/lib/segment-cache/segment-value-encoding';
import React from 'react';

const getFoodDetails = async (id) => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
    const data = await res.json();

    return data.details && data.details.id
        ? data.details
        : null;
}

export const metadata = {
  title: "Gustov - Food Details",
  description: "Gustove is a culinary haven where passion meets flavor. Our restaurant is dedicated to crafting unforgettable dining experiences, blending exquisite dishes with warm hospitality. From farm-fresh ingredients to innovative recipes, we invite you to savor the art of gastronomy in every bite. Join us at Gustov and embark on a journey of taste that will delight your senses and create lasting memories.",
};


const FoodDetails = ({ food }) => {

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 text-zinc-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                <div className="overflow-hidden rounded-3xl shadow-2xl shadow-black/50 border border-zinc-800 group">
                    <img src={food.foodImg} alt={food.title} className="w-full h-[450px] md:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"/>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="flex flex-col h-full justify-between">
                    <div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                                🍽️ {food.category}
                            </span>
                            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                                📍 {food.area}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight tracking-wide">
                            {food.title}
                        </h1>

                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-4xl font-extrabold text-amber-500">
                                ৳ {food.price}
                            </span>
                            <span className="text-zinc-500 text-sm tracking-wide">VAT Inclusive</span>
                        </div>

                        <p className="text-zinc-400 leading-relaxed mb-8 text-base">
                            Experience the authentic, rich flavors crafted meticulously by our master chefs.
                            Made with fresh, locally-sourced premium ingredients and traditional spices to perfect every single bite.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-[0.98] tracking-wide text-center">
                                Add to Cart
                            </button>

                            <a
                                href={food.video} target="_blank" rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-200 hover:text-white px-8 py-3.5 rounded-xl bg-zinc-900/50 hover:bg-zinc-800 transition-all duration-300 active:scale-[0.98]"
                            >
                                <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                Watch Recipe
                            </a>
                        </div>
                    </div>

                    {/* Metadata Card */}
                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 space-y-3.5 shadow-inner">
                        <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest border-b border-zinc-800 pb-2">
                            Dish Overview
                        </h3>
                        <div className="grid grid-cols-2 gap-y-3 text-sm">
                            <span className="text-zinc-500 font-medium">Food ID:</span>
                            <span className="text-zinc-300 text-right font-mono">{food.id}</span>

                            <span className="text-zinc-500 font-medium">Category ID:</span>
                            <span className="text-zinc-300 text-right font-mono">{food.catId}</span>

                            <span className="text-zinc-500 font-medium">Cuisine Style:</span>
                            <span className="text-zinc-300 text-right font-medium">{food.area}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};



const FoodDetailsPage = async ({ params }) => {
    const { id } = await params
    const food = await getFoodDetails(id);
    console.log(food)
    console.log(!food ? "Food not found" : "Food found")
    return (
        <div>
            {!food ? <div className="">
                <title>Gusto - Food Not Found!</title>
                <div className="flex justify-center mt-20 items-center text-4xl font-bold">
                    <p className='capitalize'> <span className='text-amber-500'>Food </span> not found</p>
                </div>
            </div> : <FoodDetails food={food} />}
        </div>
    );
};

export default FoodDetailsPage;