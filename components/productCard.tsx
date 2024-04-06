import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PlusCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

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
    product.description.length > 170
      ? `${product.description.slice(0, 170)}...`
      : product.description;

  const formattedLocation = product.location.join(', ');

  const [isClicked, setIsClicked] = useState(false);
  const [isIconPlus, setIsIconPlus] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCartClick = () => {
    setIsClicked(!isClicked);
    setIsIconPlus(!isIconPlus);
    if (!isClicked) {
      toast.success('Item added to cart!', {
        position: 'top-right',
        autoClose: 2000,
      });
    }
    setIsAdded(!isAdded);
  };

  return (
    <div className="flex flex-row items-center gap-8 relative w-110 border border-gray-200 rounded-lg shadow-sm p-4"
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    >
      
      <p className="text-sm text-gray-600 mb-2 font-semibold">{product.id}</p>
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover mb-2 rounded-2xl"
          style={{ width: '210px', height: '150px' }}
        />
      </div>
      <div className="flex flex-col gap-2 w-80 mr-5">
        <h2 className="text-md font-bold mb-1">{product.title}</h2>
        <p className="text-[0.8em] text-gray-600 mb-2">{truncatedDescription}</p>
        <div className="w-3/4">
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
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row justify-center items-center w-full h-full ${isAdded ? '' : 'bg-neutral-200 bg-opacity-50'} ${isHovering || isAdded ? '' : 'hidden'}`}>
        <button
          className={`absolute bottom-3 right-3 flex flex-row gap-2 justify-center items-center w-30
          ${isClicked ? 'bg-[#2BA41D] hover:bg-[#217318] text-gray-50' : 'bg-neutral-300 hover:bg-neutral-400 text-gray-50'} text-[0.8em] font-semibold py-2 px-4 rounded-full ml-3 h-10 focus:outline-none ${isHovering || isAdded ? '' : 'hidden'}`}
          onClick={handleAddToCartClick}
          >
          {isClicked ? (
            <CheckCircleIcon className='h-3 w-3' fill='#f9fafb'/>
          ) : (
            <ShoppingCartIcon className='h-3 w-3' fill='#f9fafb'/>
          )}
          {isClicked ? 'Added to Cart' : 'Add To Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;