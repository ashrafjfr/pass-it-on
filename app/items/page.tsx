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
import { ShoppingCartIcon } from '@heroicons/react/20/solid';
import productData from "@/public/script/scraped_data.json";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubCategories from "@/components/subCategories";
import AddToCartButton from "@/components/addToCart";

export default function ItemList() {
  return (
    <main className="flex flex-col bg-white text-stone-900">
      <div className="flex flex-row justify-center items-start width:990px">
        <div style={{ float: "left", paddingTop: 5 }}>
          <a href="">
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
            <a href="">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/about_us.png"
                alt="About Us"
                width={73}
                height={61}
              />
            </a>{" "}
            <a href="">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/grant_wish.png"
                alt="Grant a Wish"
                width={73}
                height={61}
              />
            </a>{" "}
            <a href="">
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
            <a href="">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/faq.png"
                alt="FAQ"
                width={73}
                height={61}
              />
            </a>{" "}
            <a href="">
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
        {/* <Category /> */}
        <SubCategories />
        <SearchButton />
        <ResetButton />
      </div>
      <div className="flex flex-row justify-center items-center mt-7">
        <div className="flex flex-row items-center mr-52 ml-4"> 
          <div className="text-[#2BA41D] font-semibold pr-2">My Cart</div>
          <ShoppingCartIcon className="h-5 w-5" fill="#2BA41D"/>
        </div>
        <div className="ml-56 pl-10">
          <PageNav />
        </div>
      </div>
      {/* Row Layout */}
      {/* <div className="flex flex-row gap-8 justify-center mt-7 mb-2 mr-32 relative">
        <div className="text-black font-bold mr-16">ID</div>
        <div className="text-black font-bold mr-16 ml-5 pr-12">Picture</div>
        <div className="flex flex-col justify-left mr-16 pr-12">
          <div className="text-black font-bold">Description</div>
          <div className="text-black font-normal text-[0.6em]">Name, Description, Location (Collection/Delivery)</div>
        </div>  
      </div> */}
      {/* <div className="flex flex-row gap-8 justify-center mt-7 mb-2 mr-32 relative">
        <div className="text-black font-bold mr-10 ml-20">ID</div>
        <div className="text-black font-bold mr-16 ml-10 pr-12">Picture</div>
        <div className="flex flex-col justify-left mr-16 pr-12">
          <div className="text-black font-bold">Description</div>
          <div className="text-black font-normal text-[0.6em]">Name, Description, Location (Collection/Delivery)</div>
        </div>  
  </div>*/}

      <div className="flex flex-row gap-8 justify-center mt-7 relative">
        <div className="text-black font-bold mr-12">ID</div>
        <div className="text-black font-bold mr-16 ml-10 pr-12">Picture</div>
        <div className="flex flex-col justify-left mr-16 pr-12">
          <div className="text-black font-bold">Description</div>
          <div className="text-black font-normal text-[0.6em]">Name, Description, Location (Collection/Delivery)</div>
        </div>  
      </div>

      <div className="flex flex-row justify-center items-center mt-7">
        <div className="grid grid-row gap-8">
          {productData.map((product, index) => (
            <React.Fragment key={index}>
              <ProductCard product={product} />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Modular Layout */}
      {/* <div className="flex flex-row justify-center items-center mt-7">
        <div className="grid grid-cols-3 gap-8">
          {productData.map((product, index) => (
            <React.Fragment key={index}>
              <ProductCard product={product} />
            </React.Fragment>
          ))}
        </div>
      </div> */}
    </main>
  );
}
