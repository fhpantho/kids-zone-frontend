import { getSingleProduct } from "@/Action/server/product"; // adjust path if needed
import Image from "next/image";

const ProductDetails = async (props) => {
  const params = await props.params;
  const id = params.id;
  console.log("ID:", id);

  const product = await getSingleProduct(id);

  if (!product || !product._id) {
    return <div className="text-center py-10">{id}</div>;
  }

  const {
    title,
    bangla,
    image,
    price,
    discount,
    description,
    ratings,
    reviews,
    sold,
    info,
    qna,
  } = product;

  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="max-w-6xl mx-auto p-5 relative">
      
      {/* Main Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Image Section */}
        <div>
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-500">{bangla}</p>

          {/* Price */}
          <div className="my-3">
            <span className="text-xl font-semibold text-green-600">
              ৳{discountedPrice}
            </span>
            <span className="line-through ml-3 text-gray-400">
              ৳{price}
            </span>
            <span className="ml-2 text-red-500">
              -{discount}%
            </span>
          </div>

          {/* Rating */}
          <p className="text-sm text-gray-600">
            ⭐ {ratings} ({reviews} reviews) | Sold: {sold}
          </p>

          {/* Description */}
          <p className="mt-4 whitespace-pre-line">{description}</p>

          {/* Info List */}
          <ul className="mt-4 list-disc pl-5 space-y-1">
            {info?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* Q&A */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Q&A</h2>
            {qna?.map((q, i) => (
              <div key={i} className="mt-2">
                <p className="font-medium">Q: {q.question}</p>
                <p className="text-gray-600">A: {q.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 Sticky Add to Cart Button (Bottom Left) */}
      <div className=" flex w-full bottom-5 left-5 z-50">
        <button
          
          className="btn btn-primary px-6 shadow-xl flex w-full"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductDetails;