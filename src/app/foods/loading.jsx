import FoodCardSkeleton from '@/Components/Skeleton/FoodCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='max-w-[1330px] mx-auto grid grid-cols-3'>
            <FoodCardSkeleton/>
            <FoodCardSkeleton/>
            <FoodCardSkeleton/>
        </div>
    );
};

export default loading;