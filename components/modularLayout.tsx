import React from 'react';
import productData from "@/public/script/scraped_data.json";
import ProductCard from './productCard';

function ModularLayout() {
    return (
        <div className="flex justify-center items-center mt-7 grid-cols-4 gap-2 mx-px">
            <div className="grid grid-cols-3 gap-8">
            {productData.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
    )
}

export default ModularLayout;