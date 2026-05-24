const FoodCardSkeleton = () => {
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white animate-pulse">

            {/* Image Skeleton */}
            <div className="w-full h-56 bg-gray-300"></div>

            {/* Content */}
            <div className="p-5">

                {/* Category */}
                <div className="h-6 w-24 bg-gray-300 rounded-full mb-4"></div>

                {/* Title */}
                <div className="h-7 w-3/4 bg-gray-300 rounded mb-3"></div>

                {/* Price */}
                <div className="h-6 w-20 bg-gray-300 rounded mb-5"></div>

                {/* Button */}
                <div className="h-11 w-full bg-gray-300 rounded-xl"></div>

            </div>
        </div>
    );
};

export default FoodCardSkeleton;