'use client';

import Image from 'next/image';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { title, image, price, rating, reviews, sold } = product;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
      
      {/* Fixed Image Container */}
      <figure className="p-4">
        <div className="relative w-full h-48"> 
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body p-4">
        
        <h2 className="card-title text-base font-semibold line-clamp-2 min-h-[48px]">
          {title}
        </h2>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="flex items-center text-yellow-500">
            <FaStar />
            <span className="ml-1 font-medium">{rating}</span>
          </div>
          <span>({reviews} reviews)</span>
        </div>

        <p className="text-xs text-gray-400">
          {sold} sold
        </p>

        <div className="mt-2">
          <span className="text-lg font-bold text-primary">
            ৳{price}
          </span>
        </div>

        <div className="card-actions mt-auto">
          <button className="btn btn-primary w-full flex items-center gap-2">
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;