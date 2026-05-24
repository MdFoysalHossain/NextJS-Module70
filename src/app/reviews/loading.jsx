import React from 'react';

const ReviewSkeleton = () => {
    return (
        <div className="max-w-xl w-full rounded-2xl bg-zinc-900 border border-zinc-800 p-6 shadow-xl animate-pulse flex flex-col justify-between">

            <div>
                {/* Top Header Skeleton */}
                <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                        {/* Avatar Circle */}
                        <div className="h-12 w-12 rounded-full bg-zinc-800 border border-zinc-700/50" />

                        {/* Name and Date Lines */}
                        <div className="space-y-2">
                            <div className="h-4 w-28 bg-zinc-800 rounded-md" />
                            <div className="h-3 w-16 bg-zinc-800 rounded-md" />
                        </div>
                    </div>

                    {/* Star Badge Block */}
                    <div className="h-7 w-20 bg-zinc-800 rounded-lg" />
                </div>

                {/* Review Text Lines Skeleton */}
                <div className="space-y-3 pl-1 mb-2">
                    <div className="h-4 w-full bg-zinc-800 rounded" />
                    <div className="h-4 w-full bg-zinc-800 rounded" />
                    <div className="h-4 w-5/6 bg-zinc-800 rounded" />
                    <div className="h-4 w-2/3 bg-zinc-800 rounded" />
                </div>
            </div>

            {/* Bottom Social Row Skeleton */}
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">

                {/* Helpful Button block */}
                <div className="h-8 w-28 bg-zinc-800 rounded-xl" />

                {/* Verified Badge block */}
                <div className="h-6 w-24 bg-zinc-800 rounded-md" />

            </div>

        </div>
    );
}

const loading = () => {
    return(
        <div className="max-w-[1330px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
                {[...Array(6)].map((_, i) => (
                    <ReviewSkeleton key={i} />
                ))}
            </div>
        </div>
    )
};

export default loading;