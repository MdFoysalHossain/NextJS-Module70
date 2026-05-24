import Link from 'next/link';
import React, { useContext } from 'react';
import AddToCart from './_components/AddToCart';
import SearchInput from './_components/SearchInput';

const getFoods = async (search) => {
    console.log("Fetching foods with search query:", search);
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`);
    const data = await res.json()

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return data.foods || []
}

const FoodCards = (food) => {
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-zinc-900 hover:shadow-2xl transition duration-300">
            <div className="relative h-52 w-full overflow-hidden">
                <img
                    src={food.foodImg}
                    alt={food.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />

                {/* Floating Category Badge */}
                <span className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-amber-400 border border-amber-500/20 text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-md shadow-md">
                    🍽️ {food.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-[180px]">
                <div>
                    {/* Food Title */}
                    <h2 className="text-xl font-serif font-bold text-white mb-2 line-clamp-1 group-hover:text-amber-400 transition-colors duration-300">
                        {food.title}
                    </h2>

                    {/* Price & Rating Row (Added dynamic value for better realism) */}
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-2xl font-extrabold text-amber-500">
                            ৳ {food.price}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-amber-500  px-2 py-1 rounded-md border border-amber-500">
                            <span className="text-amber-500">★</span> 4.8
                        </div>
                    </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex gap-3 mt-auto">
                    {/* Add to Cart - Primary CTA */}
                    <AddToCart food={food} />

                    {/* View Details - Secondary Outlined CTA */}
                    <Link
                        href={`/foods/${food.id}`}
                        className="flex-1 flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-200 hover:text-white px-auto py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 transition-all duration-300 active:scale-[0.98] text-sm"
                    >
                        Details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export const metadata = {
    title: "Gustov - Menu",
    description: "Gustove is a culinary haven where passion meets flavor. Our restaurant is dedicated to crafting unforgettable dining experiences, blending exquisite dishes with warm hospitality. From farm-fresh ingredients to innovative recipes, we invite you to savor the art of gastronomy in every bite. Join us at Gustov and embark on a journey of taste that will delight your senses and create lasting memories.",
};



const FoodsPage = async ({ searchParams }) => {
    const { search = "" } = await searchParams;
    const foods = await getFoods(search)
    console.log("Search Query:", search);

    console.log(foods)
    return (
        <div className='max-w-[1330px] mx-auto'>
            <title>Gusto - Menu</title>

            <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
                <div className="flex-1">
                    <h2 className='flex gap-1 text-3xl'>Total <p className='text-amber-500 font-semibold'>{foods.length}</p> Foods Found</h2>
                </div>
                <SearchInput />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
                {foods.map((food, index) => <FoodCards key={index} {...food} />)}
            </div>
        </div>
    );
};

export default FoodsPage;