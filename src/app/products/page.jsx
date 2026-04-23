
import Products from '@/components/home/Products';
import Loading from './loading';
import React, { Suspense } from 'react';

const page = () => {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Products />
            </Suspense>
        </div>
    );
};

export default page;