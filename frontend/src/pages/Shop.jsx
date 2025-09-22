import React from "react";
import { ArrowsLeftRight, Heart } from "@phosphor-icons/react";
import { FiShare2 } from "react-icons/fi";

import FeaturesBar from "../components/Features";

const products = [
  {
    id: 1,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    oldPrice: "Rp 3.500.000",
    price: "Rp 2.500.000",
    discount: "-30%",
    image: "/img/image 1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/public/img/images (3).png",
  },
  {
    id: 3,
    name: "Lolito",
    desc: "Luxury big sofa",
    oldPrice: "Rp 14.000.000",
    price: "Rp 7.000.000",
    discount: "-50%",
    image: "/public/img/images (1).png",
  },
  {
    id: 4,
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
    image: "/public/img/images (2).png",
  },

  {
    id: 1,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    oldPrice: "Rp 3.500.000",
    price: "Rp 2.500.000",
    discount: "-30%",
    image: "/img/image 1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/public/img/images (3).png",
  },
  {
    id: 3,
    name: "Lolito",
    desc: "Luxury big sofa",
    oldPrice: "Rp 14.000.000",
    price: "Rp 7.000.000",
    discount: "-50%",
    image: "/public/img/images (1).png",
  },
  {
    id: 4,
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
    image: "/public/img/images (2).png",
  },

  {
    id: 1,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    oldPrice: "Rp 3.500.000",
    price: "Rp 2.500.000",
    discount: "-30%",
    image: "/img/image 1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/public/img/images (3).png",
  },
  {
    id: 3,
    name: "Lolito",
    desc: "Luxury big sofa",
    oldPrice: "Rp 14.000.000",
    price: "Rp 7.000.000",
    discount: "-50%",
    image: "/public/img/images (1).png",
  },
  {
    id: 4,
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
    image: "/public/img/images (2).png",
  },
];

export default function ShopPage() {
  return (
    <div className="bg-white text-[#393737] font-['Montserrat',sans-serif]">
      {/* Header Section */}
      <section
        className="relative h-[300px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/Rectangle 1.png')" }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative w-full flex flex-col items-center pb-8">
          <img
            src="/img/Meubel House_Logos-05.png"
            alt="icon"
            className="h-14 mb-2"
          />
          <h1 className="text-4xl text-[#222222] font-bold mb-2">Shop</h1>
          <div className="text-sm text-[#393737] flex items-center gap-2">
            <span className="font-bold">Home</span>
            <span className="font-bold text-[#222222]">&gt;</span>
            <span>Shop</span>
          </div>
        </div>
      </section>

      {/* Filter Section - matches image */}
      <div className="bg-[#FFF3E3] border-0 border-b border-[#F4F4F4] px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4 ml-7">
          <img
            src="/img/system-uicons_filtering.png"
            alt="Filter"
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
          />

          {/* <FiFilter className="text-2xl mr-1" /> */}
          <span className="font-medium text-lg">Filter</span>

          <img
            src="/img/ci_grid-big-round.png"
            alt="Grid View"
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
          />
          <img
            src="/img/bi_view-list.png"
            alt="List View"
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
          />

          {/* <FiGrid className="text-2xl mx-3" />
          <FiList className="text-2xl" /> */}


          <span className="h-7 w-[1.5px] bg-[#D8D8D8] mx-3" />
          <span className="text-[15px] font-medium">
            Showing <span className="font-bold">1–16</span> of 32
            <span className="font-normal text-xs ml-1">results</span>
          </span>
        </div>
        {/* Show and Sort by fields */}
        <div className="flex items-center gap-4 mr-6">
          <span className="font-semibold text-lg">Show</span>
          <span className="inline-block bg-white text-[#A5A5A5] px-4 py-2 text-lg ml-[-6px] rounded shadow border border-[#F4F4F4]">
            16
          </span>
          <span className="font-semibold text-lg">Short by</span>
          <input
            type="text"
            value="Default"
            disabled
            className="inline-block bg-white text-[#B0B0B0] px-4 py-2 rounded border border-[#F4F4F4] shadow w-32 font-normal text-lg focus:outline-none"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="relative group border border-gray-200 overflow-hidden"
          >
            {/* Product Image */}
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Discount / New Tag */}
            {p.discount && (
              <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold rounded-full w-10 h-10 flex items-center justify-center">
                {p.discount}
              </span>
            )}
            {p.tag && (
              <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold rounded-full w-10 h-10 flex items-center justify-center">
                {p.tag}
              </span>
            )}


            <div className="absolute inset-0 flex flex-col items-center justify-center pb-7 opacity-0 group-hover:opacity-100 bg-[#222]/50 transition duration-300">

              {/* Add to Cart Button */}
              <button className="bg-white px-14 py-2 shadow text-[#B88E2F] font-bold text-xl mb-6">
                Add to cart
              </button>

              {/* Action Icons */}
              <div className="flex gap-3 text-white font-semibold">
                <span className="fill-white flex items-center gap-2"><FiShare2 /> Share</span>
                <span className="flex items-center gap-2"><ArrowsLeftRight /> Compare</span>
                <span className="flex items-center gap-2"><Heart /> Like</span>
              </div>
            </div>


            {/* Product Info */}
            <div className="p-6 pt-3 bg-[#FFF]">
              <h3 className="text-xl font-bold text-[#222] mb-1">{p.name}</h3>
              <p className="text-base text-[#898989] mb-2">{p.desc}</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-[#222]">{p.price}</span>
                {p.oldPrice && (
                  <span className="line-through text-[#B0B0B0] text-base font-medium">
                    {p.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 py-10 ">
        <button className="px-5 py-2 rounded bg-[#FFF3E3] border border-gray-300 font-semibold hover:bg-yellow-600 hover:text-white transition">
          1
        </button>
        <button className="px-5 py-2 rounded bg-[#FFF3E3] border border-gray-300 font-semibold hover:bg-yellow-600 hover:text-white transition">
          2
        </button>
        <button className="px-5 py-2 rounded bg-[#FFF3E3] border border-gray-300 font-semibold hover:bg-yellow-600 hover:text-white transition">
          3
        </button>
        <button className="px-5 py-2 rounded bg-[#FFF3E3] border border-gray-300 font-semibold hover:bg-yellow-600 hover:text-white transition">
          Next
        </button>
      </div>

      <FeaturesBar />
    </div>
  );
}
