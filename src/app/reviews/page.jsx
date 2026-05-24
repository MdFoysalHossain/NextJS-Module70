import React from 'react';

const allReview = async () => {
    const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews");
    const data = await res.json();
    const reviews = data.reviews || [];

    return reviews;
}


const ReviewCard = ({ reviewData }) => {
    // Format the ISO date into a clean readable string
    const formattedDate = new Date(reviewData.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <div className="max-w-xl w-full rounded-2xl bg-zinc-900 border border-zinc-800 p-6 shadow-xl hover:shadow-2xl hover:border-zinc-700/60 transition-all duration-300 flex flex-col justify-between group">

            <div>
                {/* Top Header: User Profile Info & Rating */}
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                        {/* User Avatar */}
                        <div className="relative h-12 w-12 rounded-full overflow-hidden border border-zinc-700 ring-2 ring-amber-500/10 group-hover:ring-amber-500/30 transition-all duration-300">
                            <img
                                src={reviewData.photo}
                                alt={reviewData.user}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Name and Date */}
                        <div>
                            <h4 className="font-semibold text-white tracking-wide text-base group-hover:text-amber-400 transition-colors duration-300">
                                {reviewData.user}
                            </h4>
                            <p className="text-xs text-zinc-500 font-medium">
                                {formattedDate}
                            </p>
                        </div>
                    </div>

                    {/* Dynamic Star Ratings */}
                    <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg">
                        {Array.from({ length: reviewData.rating }).map((_, i) => (
                            <span key={i} className="text-amber-400 text-sm">★</span>
                        ))}
                    </div>
                </div>

                {/* The Review Text Block */}
                <div className="text-zinc-300 leading-relaxed text-sm md:text-base font-normal tracking-wide pl-1">
                    {/* Handles mixed script text layout beautifully */}
                    <p className="whitespace-pre-line antialiased">
                        {reviewData.review}
                    </p>
                </div>
            </div>

            {/* Bottom Row: Likes & Social Interaction Panel */}
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">

                {/* Like Button Interactivity */}
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-800/40 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 hover:text-rose-400 transition-all duration-200 active:scale-95 group/btn">
                    <svg
                        className="w-4 h-4 text-zinc-500 group-hover/btn:text-rose-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="font-semibold tracking-wide">
                        Helpful ({reviewData.likes.length})
                    </span>
                </button>

                {/* Verified Purchase Flag */}
                <div className="flex items-center gap-1.5 text-emerald-400 font-medium bg-emerald-500/5 px-2.5 py-1 rounded-md border border-emerald-500/10">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Verified Guest
                </div>

            </div>

        </div>
    );
};

const ReviewsPage = async () => {
    const reviews = await allReview();

    console.log(reviews)

    return (
        <div className='max-w-[1330px] mx-auto'>
            <div className="">
                <h2 className='flex gap-1 text-3xl'>Customer Reviews <p className='text-amber-500 font-semibold'>({reviews.length})</p></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} reviewData={review} />
                ))}
            </div>

        </div>
    );
};

export default ReviewsPage;