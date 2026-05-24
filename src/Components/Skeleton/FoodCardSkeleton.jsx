import React from 'react';

const FoodCardSkeleton = () => {
    return (
        <div className="max-w-sm w-full rounded-2xl overflow-hidden bg-zinc-950/40 border border-zinc-800/80 shadow-lg animate-pulse">
            
            {/* Top Image Placeholder */}
            <div className="relative h-52 w-full bg-zinc-800 border-b border-zinc-800/50">
                {/* Floating Category Badge Skeleton */}
                <div className="absolute top-4 left-4 h-5.5 w-20 bg-zinc-700/60 rounded-md" />
            </div>

            {/* Content Area Placeholder */}
            <div className="p-5 flex flex-col justify-between h-[210px]">
                <div>
                    {/* Food Title Skeleton */}
                    <div className="h-6 w-3/4 bg-zinc-800 rounded-lg mb-4" />

                    {/* Price & Rating Row Skeleton */}
                    <div className="flex justify-between items-center mb-5">
                        {/* Price block */}
                        <div className="h-8 w-24 bg-zinc-800 rounded-lg" />
                        {/* Rating pill block */}
                        <div className="h-6 w-14 bg-zinc-800 rounded-md" />
                    </div>
                </div>

                {/* Call to Action Buttons Skeleton */}
                <div className="flex gap-3 mt-auto">
                    {/* Add to Cart Button block */}
                    <div className="flex-1 h-10 bg-zinc-800 rounded-xl" />
                    {/* Details Button block */}
                    <div className="flex-1 h-10 bg-zinc-800 rounded-xl" />
                </div>
            </div>
        </div>
    );
};

export default FoodCardSkeleton;