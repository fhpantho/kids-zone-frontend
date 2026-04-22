'use client';

const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-xl animate-pulse">
      
      {/* Image Skeleton */}
      <figure className="p-4">
        <div className="w-full h-48 skeleton rounded-xl"></div>
      </figure>

      {/* Body */}
      <div className="card-body p-4 space-y-3">
        
        {/* Title */}
        <div className="skeleton h-4 w-3/4"></div>
        <div className="skeleton h-4 w-1/2"></div>

        {/* Rating */}
        <div className="skeleton h-4 w-1/3"></div>

        {/* Sold */}
        <div className="skeleton h-3 w-1/4"></div>

        {/* Price */}
        <div className="skeleton h-5 w-1/3"></div>

        {/* Button */}
        <div className="mt-4">
          <div className="skeleton h-10 w-full rounded-lg"></div>
        </div>

      </div>
    </div>
  );
};

export default ProductCardSkeleton;