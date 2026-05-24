import { convertSegmentPathToStaticExportFilename } from 'next/dist/shared/lib/segment-cache/segment-value-encoding';
import React from 'react';

const getFoodDetails = async (id) => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
    const data = await res.json();

    return data.details && data.details.id
        ? data.details
        : null;
}


const FoodDetails = ({ food }) => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 ">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Side Image */}
                <div className="overflow-hidden rounded-3xl shadow-xl">
                    <img
                        src={food.foodImg}
                        alt={food.title}
                        className="w-full h-[500px] object-cover hover:scale-105 transition duration-500"
                    />
                </div>

                {/* Right Side Content */}
                <div>

                    {/* Category & Area */}
                    <div className="flex gap-3 mb-4">
                        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                            {food.category}
                        </span>

                        <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
                            {food.area}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
                        {food.title}
                    </h1>

                    {/* Price */}
                    <h2 className="text-3xl font-bold text-green-600 mb-6">
                        ৳ {food.price}
                    </h2>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">

                        <button className="bg-indigo-500 text-white px-6 py-1.5 rounded-md hover:bg-indigo-700 transition">
                            Add to Cart
                        </button>

                        <a
                            href={food.video}
                            target="_blank"
                            rel="noreferrer"
                            className="border border-black px-8 py-1.5 rounded-md hover:bg-black hover:text-white transition"
                        >
                            Watch Recipe
                        </a>
                    </div>

                    {/* Extra Info */}
                    <div className="mt-10 border-t pt-6 space-y-3 text-white/70">

                        <p>
                            <span className="font-semibold">Food ID:</span>{" "}
                            {food.id}
                        </p>

                        <p>
                            <span className="font-semibold">Category ID:</span>{" "}
                            {food.catId}
                        </p>

                        <p>
                            <span className="font-semibold">Cuisine:</span>{" "}
                            {food.area}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}




const FoodDetailsPage = async ({ params }) => {
    const { id } = await params
    const food = await getFoodDetails(id);
    console.log(food)
    console.log(!food ? "Food not found" : "Food found")
    return (
        <div>
            {!food ? <p>Food not found</p> : <FoodDetails food={food} />}
        </div>
    );
};

export default FoodDetailsPage;