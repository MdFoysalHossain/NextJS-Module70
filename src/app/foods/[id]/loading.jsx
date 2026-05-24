import React from 'react';

const Loading = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left Side: Image Placeholder */}
                <div className="rounded-3xl bg-zinc-800 border border-zinc-700/50 w-full h-[450px] md:h-[550px]" />

                {/* Right Side: Content Placeholders */}
                <div className="flex flex-col h-full justify-between space-y-8 lg:space-y-0">
                    <div>
                        {/* Tags / Badges Skeleton */}
                        <div className="flex gap-2 mb-6">
                            <div className="h-7 w-24 bg-zinc-800 rounded-full" />
                            <div className="h-7 w-20 bg-zinc-800 rounded-full" />
                        </div>

                        {/* Title Skeleton */}
                        <div className="space-y-3 mb-6">
                            <div className="h-10 w-3/4 bg-zinc-800 rounded-xl" />
                            <div className="h-10 w-1/2 bg-zinc-800 rounded-xl lg:hidden" /> {/* Extra line for smaller screens */}
                        </div>

                        {/* Price Skeleton */}
                        <div className="h-10 w-32 bg-zinc-800 rounded-xl mb-8" />

                        {/* Description Paragraph Skeleton */}
                        <div className="space-y-2.5 mb-10">
                            <div className="h-4 w-full bg-zinc-800 rounded" />
                            <div className="h-4 w-full bg-zinc-800 rounded" />
                            <div className="h-4 w-2/3 bg-zinc-800 rounded" />
                        </div>

                        {/* Action Buttons Skeleton */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <div className="flex-1 h-14 bg-zinc-800 rounded-xl" />
                            <div className="flex-1 h-14 bg-zinc-800 rounded-xl" />
                        </div>
                    </div>

                    {/* Metadata Card Skeleton */}
                    <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 space-y-4">
                        <div className="h-4 w-28 bg-zinc-800 rounded mb-2" />
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <div className="h-4 w-16 bg-zinc-800 rounded" />
                                <div className="h-4 w-24 bg-zinc-800 rounded" />
                            </div>
                            <div className="flex justify-between">
                                <div className="h-4 w-24 bg-zinc-800 rounded" />
                                <div className="h-4 w-20 bg-zinc-800 rounded" />
                            </div>
                            <div className="flex justify-between">
                                <div className="h-4 w-20 bg-zinc-800 rounded" />
                                <div className="h-4 w-28 bg-zinc-800 rounded" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Loading;