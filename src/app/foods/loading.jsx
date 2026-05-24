
import FoodCardSkeleton from '@/Components/Skeleton/FoodCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='max-w-[1330px] mx-auto'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                    <FoodCardSkeleton key={index} />
                ))}
            </div>
        </div>
    );
};

export default loading;