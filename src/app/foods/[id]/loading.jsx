import React from 'react';

const Loading = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Side Image Skeleton */}
                <div className="w-full h-[500px] bg-gray-300 rounded-3xl"></div>

                {/* Right Side Content */}
                <div>

                    {/* Category & Area */}
                    <div className="flex gap-3 mb-6">
                        <div className="h-8 w-24 bg-gray-300 rounded-full"></div>
                        <div className="h-8 w-24 bg-gray-300 rounded-full"></div>
                    </div>

                    {/* Title */}
                    <div className="h-12 w-3/4 bg-gray-300 rounded mb-6"></div>

                    {/* Price */}
                    <div className="h-10 w-32 bg-gray-300 rounded mb-8"></div>

                    {/* Buttons */}
                    <div className="flex gap-4 mb-10">
                        <div className="h-11 w-36 bg-gray-300 rounded-md"></div>
                        <div className="h-11 w-40 bg-gray-300 rounded-md"></div>
                    </div>

                    {/* Extra Info */}
                    <div className="border-t pt-6 space-y-4">

                        <div className="h-5 w-48 bg-gray-300 rounded"></div>

                        <div className="h-5 w-56 bg-gray-300 rounded"></div>

                        <div className="h-5 w-44 bg-gray-300 rounded"></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;