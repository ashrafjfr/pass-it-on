"use client";

import Image from "next/image";
import React from "react";
import Dropdown from "@/components/dropdowns";
import SearchBar from "@/components/searchBar";
import Category from "@/components/category";
import SearchButton from "@/components/searchButton";
import ResetButton from "@/components/resetButton";
import PageNav from "@/components/pageNav";
import ProductCard from "@/components/productCard";
import ProductCardStaggered from "@/components/productCardStaggered";
import MasonryLayout from "@/components/masonryLayout";
import { ShoppingCartIcon } from '@heroicons/react/20/solid';
import productData from "@/public/script/scraped_data.json";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const staggeredWidths = ['240px', '230px', '250px'];

export default function ItemList() {
  return (
    <main className="flex flex-col bg-white text-stone-900">
      <div className="flex flex-row justify-center items-start width:990px">
        <div style={{ float: "left", paddingTop: 5 }}>
          <a href="https://www.passiton.org.sg/">
            <Image 
              className="ive_eobj_left ive_clickable" 
              src="/logo.png" 
              alt="Passiton Logo"
              width={150}
              height={80}
            />
          </a>
        </div>
        <div className="flex flex-col justify-end pl-20">
          <div className="flex justify-end">
            <Image
              src = "/login_bar.png"
              alt = "Login Bar"
              width = {608}
              height = {35}
            />
          </div>
          <div
            className="flex flex-row items-center justify-end pt-3">
            <a href="/..">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/home.png"
                alt="Home"
                width={73}
                height={61}
              />
            </a>{" "}
            <a href="https://www.passiton.org.sg/about-us">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/about_us.png"
                alt="About Us"
                width={73}
                height={61}
              />
            </a>{" "}
            <a href="https://www.passiton.org.sg/grant-a-wish">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/grant_wish.png"
                alt="Grant a Wish"
                width={73}
                height={61}
              />
            </a>{" "}
            <a href="https://www.passiton.org.sg/vwo-list">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/vwo_list.png"
                alt="VWO List"
                width={73}
                height={61}
              />
            </a>{" "}
            <a href="/items">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/item_list.png"
                alt="Item List"
                width={73}
                height={61}
              />
            </a>{" "}
            <a href="https://www.passiton.org.sg/faq">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/faq.png"
                alt="FAQ"
                width={73}
                height={61}
              />
            </a>{" "}
            <a href="https://www.passiton.org.sg/contact-us">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/contact.png"
                alt="Contact Us"
                width={73}
                height={61}
              />
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
      <div className="flex flex-row justify-center items-center mt-10">
        <Dropdown />
        <SearchBar />
        <Category />
        <SearchButton />
        <ResetButton />
      </div>
      <div className="flex flex-row justify-center items-center mt-7">
        <div className="flex flex-row items-center mr-52 ml-4"> 
          <div className="text-[#2BA41D] font-semibold pr-2">My Cart</div>
          <ShoppingCartIcon className="h-5 w-5" fill="#2BA41D" aria-hidden="true" />
        </div>
        <div className="ml-56 pl-10">
          <PageNav />
        </div>
      </div>
      
      {/* <div className="flex justify-center items-center mt-7 grid-cols-4 gap-2 mx-px"> */}
        {/*Modular ProductCard  */}
        {/* <div className="grid grid-cols-3 gap-8">
          {productData.map(product => (
             <ProductCard product={product} />
          ))}
        </div> */}

        {/* <div className="mt-7"> */}
          
            {/* <div className="grid grid-cols-4 gap-2"> */}
            {/* {productData.map((product, index) => (
              <div key={product.id} className="justify-center">
                  <ProductCardStaggered product={product} width={staggeredWidths[index % staggeredWidths.length]} />
              </div>
            ))} */}
          {/* <div className="flex justify-center items-center mt-7">
            {productData.map((product, index) => (
              <ProductCardStaggered
                key={product.id}
                product={product}
                width={staggeredWidths[index % staggeredWidths.length]}
              />
            ))}
          </div> */}

          {/* <div className="flex flex-wrap justify-center items-center mt-7 gap-6">
            <ProductCardStaggered productData={productData} />
          </div> */}

          {/* <div className="flex flex-wrap justify-center items-center mt-7 gap-6">
            {productData.map((product, index) => (
              <div key={product.id} className="px-2" style={{ width: staggeredWidths[index % staggeredWidths.length] }}>
                <ProductCardStaggered product={product} width={staggeredWidths[index % staggeredWidths.length]} />
              </div>
            ))}
          </div> */}

          {/* <div className="flex flex-wrap justify-center items-center mt-7 gap-6">
            {Array.from({ length: Math.ceil(productData.length / 4) }).map((_, rowIndex) => (
              <div key={rowIndex} className="flex justify-center items-center gap-6">
                {productData.slice(rowIndex * 4, (rowIndex + 1) * 4).map((product, index) => (
                  <div key={product.id} className="px-2" style={{ width: staggeredWidths[index % staggeredWidths.length] }}>
                    <ProductCardStaggered product={product} width={staggeredWidths[index % staggeredWidths.length]} />
                  </div>
                ))}
              </div>
            ))}
          </div> */}

<div className="flex flex-wrap justify-center items-center mt-7 gap-6">
  {Array.from({ length: Math.ceil(productData.length / 3) }).map((_, rowIndex) => (
    <div key={rowIndex} className="flex justify-center items-center gap-10">
      {productData.slice(rowIndex * 3, (rowIndex + 1) * 3).map((product, index) => (
        <div key={product.id} className="px-2" style={{ width: staggeredWidths[index % staggeredWidths.length] }}>
          <ProductCardStaggered product={product} width={staggeredWidths[index % staggeredWidths.length]} />
        </div>
      ))}
    </div>
  ))}
</div>


        {/* <div className="mt-10">
          <MasonryLayout productData={productData} />
        </div> */}

        {/* </div> */}
      {/* </div> */}
    </main>
  );
}

// grid-cols-4 gap-2