import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function AddToCartButton() {
    return (
        <button className="flex flex-row  gap-3 items-center bg-neutral-300 hover:bg-neutral-400 text-gray-50 text-[0.8em] font-semibold py-2 px-4 rounded-full ml-3 h-10">
            <ShoppingCartIcon className='h-4 w-4' fill='#f9fafb'/>
            Add To Cart
        </button>
    )
}