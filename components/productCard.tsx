import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  location: string[];
  delivery: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const truncatedDescription =
    product.description.length > 200
      ? `${product.description.slice(0, 200)}...`
      : product.description;

  const formattedLocation = product.location.join(', ');

  const [isClicked, setIsClicked] = useState(false);

  const handleAddToCartClick = () => {
    setIsClicked(true);
    toast.success('Item added to cart!', {
      position: 'top-right',
      autoClose: 2000,
    });

    // Reset the button state after 2 seconds
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };

  // Row Product Card
  return (
    <div className="flex flex-row items-center gap-8 relative w-110 border border-gray-200 rounded-lg shadow-sm p-4">
      <p className="text-sm text-gray-600 mb-2 font-semibold">{product.id}</p>
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover mb-2 rounded-2xl"
          style={{ width: '210px', height: '150px' }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="w-36 text-sm font-semibold mb-1">{product.title}</h2>
        <p className="w-80 text-[0.7em] text-gray-600 mb-2">{truncatedDescription}</p>
        <div className="max-w-30 w-3/4">
          <p className="text-[0.6em] text-gray-600">{formattedLocation}</p>
        </div>
        <div className="w-1/4">
          <p className="text-[0.6em] text-green-400">
            {product.delivery ? 'Delivery Covered' : 'Delivery Not Covered'}
          </p>
        </div>
      </div>
      <style jsx>{`
        .clicked {
          transform: translateY(2px);
        }
      `}</style>
      <div className='items-center'>
        <button
          className={`absolute top-3 right-3 focus:outline-none ${
            isClicked ? 'clicked' : ''
          }`}
          onClick={handleAddToCartClick}
          >
          <img src="/addButton.png" alt="Add to Cart" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );

  // Modular Product Card
  /*
  return (
    <div className="relative w-60 border border-gray-200 rounded-lg shadow-sm p-4">
      <p className="text-sm text-gray-600 mb-2 font-semibold">{product.id}</p>
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover mb-2 rounded-2xl"
          style={{ maxWidth: '205px', maxHeight: '205px' }}
        />
        <button
          className={`absolute top-3 right-3 focus:outline-none ${
            isClicked ? 'clicked' : ''
          }`}
          onClick={handleAddToCartClick}
        >
          <img src="/addButton.png" alt="Add to Cart" className="w-8 h-8" />
        </button>
      </div>
      <h2 className="text-sm font-semibold mb-1">{product.title}</h2>
      <p className="text-[0.7em] text-gray-600 mb-2">{truncatedDescription}</p>
      <div className="flex flex-wrap">
        <div className="w-3/4 pr-2 border-r border-gray-200">
          <p className="text-[0.6em] text-gray-600">{formattedLocation}</p>
        </div>
        <div className="w-1/4">
          <p className="text-[0.6em] text-green-400 ml-2">
            {product.delivery ? 'Delivery Covered' : 'Delivery Not Covered'}
          </p>
        </div>
      </div>
      <style jsx>{`
        .clicked {
          transform: translateY(2px);
        }
      `}</style>
    </div>
  );
  */
};

export default ProductCard;