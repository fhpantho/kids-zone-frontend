import ProductCard from './ProductCard';
import { getProducts } from '@/Action/server/product';

const Products = async () => {
  const products = await getProducts(); // fetch data

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Products
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;