import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { ArrowsLeftRight, Heart } from "@phosphor-icons/react";
import { FiShare2 } from "react-icons/fi";

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
]

export default function SingleProductPage() {
  return (
    <div className="font-['Poppins','Montserrat',sans-serif] text-gray-800">
      {/* 🔹 Navbar */}
      <section className="min-h-screen py-4">
        {/* Breadcrumb */}
        <nav className="px-20 py-4 text-gray-400 text-sm flex items-center gap-2 bg-[#F6F5F2]">
          Home <span className="mx-2">›</span> Shop <span className="mx-2">›</span>
          <span className="text-gray-800 font-medium">Asgaard sofa</span>
        </nav>
        {/* Product Section */}
        <div className="max-w-7xl mx-auto bg-white rounded-xl p-8 flex gap-12 mt-6">
          {/* Images grid */}
          <div className="flex gap-8">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              <img src="/img/Mask group (1).png" alt="" className="w-16 h-16 p-1 rounded-lg bg-[#F6F5F2] object-contain border hover:border-yellow-500 cursor-pointer" />
              <img src="/img/Mask group.png" alt="" className="w-16 h-16 p-1 rounded-lg bg-[#F6F5F2] object-contain border hover:border-yellow-500 cursor-pointer" />
              <img src="/img/Group 97.png" alt="" className="w-16 h-16 p-1 rounded-lg bg-[#F6F5F2] object-contain border hover:border-yellow-500 cursor-pointer" />
              <img src="/img/Group 96.png" alt="" className="w-16 h-16 p-1 rounded-lg bg-[#F6F5F2] object-contain border hover:border-yellow-500 cursor-pointer" />
            </div>
            {/* Main large image */}
            <div className=" flex items-center justify-center rounded-xl w-[400px] h-[400px]">
              <img src="/img/Group 146.png" alt="Asgaard sofa" className="object-contain h-[380px]" />
            </div>
          </div>
          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold">Asgaard sofa</h1>
            <div className="mt-3 text-2xl text-gray-500 font-semibold">
              Rs. 250,000.00
            </div>
            {/* Stars and reviews */}
            <div className="flex items-center gap-2 mt-2 mb-4">
              <span className="text-yellow-400 text-xl">★★★★☆</span>
              <span className="ml-2 text-sm text-gray-500">5 Customer Review</span>
            </div>
            {/* Description */}
            <p className="text-gray-700 max-w-lg mb-6">
              Setting the bar as one of the loudest speakers in its class,
              the Kilburn is a compact, stout-hearted hero with a well-balanced audio
              which boasts a clear midrange and extended highs for a sound.
            </p>
            {/* Size options */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex gap-3">
                <button className="border rounded px-3 py-1 bg-yellow-100 font-bold text-yellow-900">L</button>
                <button className="border rounded px-3 py-1 bg-gray-100">XL</button>
                <button className="border rounded px-3 py-1 bg-gray-100">XS</button>
              </div>
            </div>
            {/* Color options */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex gap-4">
                <span className="w-7 h-7 rounded-full inline-block" style={{ background: "#816DFA" }} />
                <span className="w-7 h-7 rounded-full inline-block" style={{ background: "#000" }} />
                <span className="w-7 h-7 rounded-full inline-block" style={{ background: "#B88E2F" }} />
              </div>
            </div>
            {/* Quantity, Cart, Compare */}
            <div className="flex gap-4 items-center mb-6">
              <div className="flex border rounded">
                <button className="px-3 py-1 text-xl">-</button>
                <span className="px-3 py-1">1</span>
                <button className="px-3 py-1 text-xl">+</button>
              </div>
              <button className="px-8 py-2 border rounded text-lg font-medium">Add To Cart</button>
              <button className="px-8 py-2 border rounded text-lg font-medium">+ Compare</button>
            </div>
            {/* Meta Info */}
            <div className="border-t pt-6 space-y-1 text-sm text-gray-600">
              <div>SKU : SS001</div>
              <div>Category : Sofas</div>
              <div>Tags : Sofa, Chair, Home, Shop</div>
              <div className="flex gap-4 text-gray-700">
                Share :

                <FaFacebookF className="cursor-pointer" />
                <FaLinkedinIn className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 🔹 Tabs Section */}
     <section className="max-w-6xl mx-auto px-6 mt-12 mb-5">
  {/* Tabs/heading */}
  <div className="flex gap-10 border-b pb-2 justify-center">
    <button className="font-semibold text-xl pb-2">Description</button>
    <button className="font-medium text-xl text-gray-500 pb-2 hover:text-black">Additional Information</button>
    <button className="font-medium text-xl text-gray-500 pb-2 hover:text-black">Reviews [5]</button>
  </div>
  {/* Short description text */}
  <div className="mt-8 mb-4 text-gray-500 text-base max-w-4xl mx-auto">
    <p>
      Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.<br /><br />
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar–influenced leather strap enables easy and stylish travel.
    </p>
  </div>
  {/* Images side by side on soft box backgrounds */}
  <div className="flex justify-center gap-10 mt-8">
    <div className="bg-[#F6F5F2] rounded-xl p-6 flex items-center justify-center">
      <img src="/img/Group 107.png" alt="Asgaard sofa" className="object-contain h-[190px] w-[420px]" />
    </div>
    <div className="bg-[#F6F5F2] rounded-xl p-6 flex items-center justify-center">
      <img src="/img/Mask group (2).png" alt="Asgaard sofa" className="object-contain h-[190px] w-[420px]" />
    </div>
  </div>
</section>


      {/* 🔹 Related Products */}


      {/* <section className="max-w-6xl mx-auto px-6 py-12"> */}
      <div className="border border-t-2 border-gray-400 px-2 py-2">
        <h3 className="text-2xl font-bold mt-10 text-center">Related Products</h3>
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



        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 border rounded hover:bg-gray-100">
            Show More
          </button>
        </div>
</div>

      {/* </section> */}

    </div>
  );
}
