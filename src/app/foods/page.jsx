import Link from 'next/link';
import React from 'react';

const getFoods = async () => {
    const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random");
    const data = await res.json()

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return data.foods || []
}

const FoodCards = (food) => {
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300">

            <img
                src={food.foodImg}
                alt={food.title}
                className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-5">
                <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {food.category}
                </span>

                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {food.title}
                </h2>

                <p className="text-lg font-semibold text-green-600 mb-4">
                    ৳ {food.price}
                </p>

                <div className="flex gap-2.5 *:cursor-pointer">
                    <button className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-700 transition">
                        Add to Cart
                    </button>
                    <Link href={`/foods/${food.id}`} className="w-full flex justify-center items-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

const FoodsPage = async () => {
    const foods = await getFoods()
    console.log(foods)
    return (
        <div className='max-w-[1330px] mx-auto'>
            <div className="">
                <h2>Total {foods.length} Foods Found</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
                {foods.map((food, index) => <FoodCards key={index} {...food} />)}
            </div>
        </div>
    );
};

export default FoodsPage;