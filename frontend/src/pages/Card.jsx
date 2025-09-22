import React from "react";
import { FiTrash2 } from "react-icons/fi";
import FeaturesBar from "../components/Features";

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-['Poppins','Montserrat',sans-serif] text-[#222]">
      {/* Page Title */}
      <section
        className="relative h-[300px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/Rectangle 1.png')" }}
      >
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="relative w-full flex flex-col items-center pb-2">
          <img
            src="/img/Meubel House_Logos-05.png"
            alt="icon"
            className="h-12 mb-1"
          />
          <h1 className="text-4xl text-[#222] font-bold mb-2 tracking-tight">Cart</h1>
          <div className="text-sm text-[#393737] flex items-center gap-2">
            <span className="font-bold text-[#222]">Home</span>
            <span className="font-bold text-[#222]">&gt;</span>
            <span>Cart</span>
          </div>
        </div>
      </section>

      {/* Cart Table Section */}
      <div className="max-w-[1300px] mx-auto py-12 flex flex-col lg:flex-row gap-6 w-full">
  {/* Product Table */}
  <div className="w-full lg:w-[75%]">
    <table className="w-full border-separate border-spacing-0">
      <thead>
        <tr className="bg-[#F9F1E7] text-[#222]">
          <th className="py-3 px-4 font-semibold text-lg rounded-tl-xl ml-12">Product</th>
          <th className="py-3 px-4 font-semibold text-lg text-left">Price</th>
          <th className="py-3 px-4 font-semibold text-lg text-left">Quantity</th>
          <th className="py-3 px-4 font-semibold text-lg rounded-tr-xl text-left">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white">
          {/* Square image + desc */}
          <td className="py-5 px-0 flex items-center gap-3">
            <img
              src="/img/Group 146.png"
              alt="Asgaard sofa"
              className="w-[75px] h-[75px] object-cover rounded-lg"
              style={{ background: "#F9F1E7" }}
            />
            <span className="text-[15px] font-medium text-[#898989] whitespace-nowrap">
              Asgaard sofa
            </span>
          </td>
          <td className="py-5 px-4 text-base text-[#898989] font-medium whitespace-nowrap">
            Rs. 250,000.00
          </td>
          <td className="py-5 px-4">
            <p className="w-8 border ml-5 border-[#BFBFBF] rounded-[7px] text-center font-semibold text-[#222]">
              1
            </p>
          </td>
          <td className="py-5 px-4 text-base font-semibold text-[#222] whitespace-nowrap">
            <span>Rs. 250,000.00</span>
            <button className="text-[#a67722] hover:text-[#B88E2F] transition text-xl">
              <FiTrash2 className="fill-[#B88E2F] ml-8 mt-1" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
{/* </div> */}


        {/* Cart Totals */}
        <div className="w-full lg:w-[30%] bg-[#F9F1E7] rounded-[10px] px-[45px] py-[45px] flex flex-col shadow-sm" style={{ minWidth: 340 }}>
          <h3 className="font-bold text-2xl mb-7 text-center text-[#222]">Cart Totals</h3>
          <div className="flex justify-between font-bold mb-6 text-[15px]">
            <span>Subtotal</span>
            <span className="text-[#B0B0B0] font-normal">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between font-bold mb-5 mt-1 text-[17px]">
            <span>Total</span>
            <span className="text-[#B88E2F] text-[17px]">Rs. 250,000.00</span>
          </div>
          <button className="w-full mt-6 border-2 border-[#222] py-3 rounded-[8px] text-lg font-bold  hover:bg-[#F4EAD7] transition-all duration-200">
            Check Out
          </button>
        </div>

      </div>
      <FeaturesBar />
    </div>


  );
}
