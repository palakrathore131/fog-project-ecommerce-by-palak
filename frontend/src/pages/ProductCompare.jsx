import React from "react";
import FeaturesBar from "../components/Features";
import { FaStar } from "react-icons/fa";

const ProductComparison = () => {
  return (
    <div className="w-full font-['Poppins','Montserrat',sans-serif]">
      {/* 🔹 Header Section */}
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
          <h1 className="text-4xl text-[#222] font-bold mb-2 tracking-tight">Product Comparison</h1>
          <div className="text-sm text-[#393737] flex items-center gap-2">
            <span className="font-bold text-[#222]">Home</span>
            <span className="font-bold text-[#222]">&gt;</span>
            <span>Comparison</span>
          </div>
        </div>
      </section>


      {/* 🔹 Products Header */}
       <div className="max-w-7xl mx-auto px-5 py-10 w-full">
      <div className="flex justify-between items-center w-full gap-6">
        {/* Left: Go to Product */}
        <div className="flex flex-col justify-center" style={{ minWidth: 260 }}>
          <span className="text-[2rem] md:text-[2rem] text-[#222] leading-tight block mb-2" style={{ lineHeight: "1.1" }}>
            Go to Product<br />page for more<br />Products
          </span>
          <a href="#" className="mt-2 text-[#898989] text-lg font-semibold underline underline-offset-[6px] hover:text-[#B88E2F] w-fit">
            View More
          </a>
        </div>

        {/* Center: Product Cards */}
        <div className="flex flex-1 justify-center gap-10">
          {/* Card 1 */}
          <div className="flex flex-col">
            <div className="rounded-xl bg-[#F9F1E7] flex items-center justify-center w-[220px] h-[160px] mb-3">
              <img src="/img/Group_146-removebg-preview.png" alt="Asgaard sofa" className="object-contain h-[140px]" />
            </div>
            <div className="font-bold text-xl text-[#222] mb-1">Asgaard Sofa</div>
            <div className="font-bold text-md mb-1">Rs. 250,000.00</div>
            <div className="flex items-center font-bold  gap-1">
              4.7
              <FaStar className="text-[#FFC700]" />
              <FaStar className="text-[#FFC700]" />
              <FaStar className="text-[#FFC700]" />
              <FaStar className="text-[#FFC700]" />
              <FaStar className="text-[#FFC700]" />
              <span className="text-[#898989] font-normal ml-2 px-4 text-base border-l-2 border-gray-400">204 Review</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col">
            <div className="rounded-xl bg-[#F9F1E7] flex items-center justify-center w-[220px] h-[160px] mb-3">
              <img src="/img/Outdoor sofa set 1.png" alt="Outdoor Sofa Set" className="object-contain h-[140px]" />
            </div>
            <div className="font-bold text-xl text-[#222] mb-1">Outdoor Sofa Set</div>
            <div className="font-bold text-md mb-1">Rs. 224,000.00</div>
            <div className="flex items-center font-bold gap-1">
              4.2
              <FaStar className="text-[#FFC700]" />
              <FaStar className="text-[#FFC700]" />
              <FaStar className="text-[#FFC700]" />
              <FaStar className="text-[#FFC700]" />
              <FaStar className="text-[#ECECEC]" />
              <span className="text-[#898989] font-normal ml-2 px-4 text-base border-l-2 border-gray-400">145 Review</span>
            </div>
          </div>
        </div>

        {/* Right: Add A Product */}
        <div className="flex flex-col items-left justify-between" style={{ minWidth: 260 }}>
          <span className="font-bold text-2xl text-[#222] mb-4">Add A Product</span>
          <button
            className="bg-[#B88E2F] text-white font-semibold px-8 py-3 rounded-md text-[17px] shadow flex items-center gap-2"
            style={{ minWidth: 210 }}
          >
            Choose a Product
            <svg width="20" height="20" fill="currentColor" className="ml-2 inline" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.584l3.72-3.354a.75.75 0 0 1 1.04 1.08l-4.25 3.833a.75.75 0 0 1-1.04 0l-4.25-3.833a.75.75 0 0 1 .01-1.08z" clipRule="evenodd"></path></svg>
          </button>
        </div>
      </div>
    {/* </div> */}






        {/* 🔹 Product Comparison Table */}
        <div className="overflow-x-auto w-full bg-white pt-10 pb-4">
  <table className="min-w-full border-separate border-spacing-0 text-left text-[#222]">
    <tbody>
      {/* General Section */}
      <tr>
        <td
          className="py-5 px- font-bold text-[20px] align-top bg-white border-t border-[#E3E3E3] border-b border-[#E3E3E3]"
          colSpan={4}
        >
          
          General
        </td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Sales Package</td>
        <td className="p-4 border-r border-[#E3E3E3]">1 sectional sofa</td>
        <td className="p-4 border-r border-[#E3E3E3]">1 Three Seater, 2 Single Seater</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Model Number</td>
        <td className="p-4 border-r border-[#E3E3E3]">TFCBLIGRBL6SRHS</td>
        <td className="p-4 border-r border-[#E3E3E3]">DTUBLIGRBL568</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Secondary Material</td>
        <td className="p-4 border-r border-[#E3E3E3]">Solid Wood</td>
        <td className="p-4 border-r border-[#E3E3E3]">Solid Wood</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Configuration</td>
        <td className="p-4 border-r border-[#E3E3E3]">L-shaped</td>
        <td className="p-4 border-r border-[#E3E3E3]">L-shaped</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Upholstery Material</td>
        <td className="p-4 border-r border-[#E3E3E3]">Fabric + Cotton</td>
        <td className="p-4 border-r border-[#E3E3E3]">Fabric + Cotton</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Upholstery Color</td>
        <td className="p-4 border-r border-[#E3E3E3]">Bright Grey & Lion</td>
        <td className="p-4 border-r border-[#E3E3E3]">Bright Grey & Lion</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      {/* Product Section */}
      <tr >
        <td
          className=" py-5 px-7 font-bold text-[20px] align-top bg-white border-t border-[#E3E3E3] border-b border-[#E3E3E3]"
          colSpan={4}
        >
          Product
        </td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Filling Material</td>
        <td className="p-4 border-r border-[#E3E3E3]">Foam</td>
        <td className="p-4 border-r border-[#E3E3E3]">Matte</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Finish Type</td>
        <td className="p-4 border-r border-[#E3E3E3]">Bright Grey & Lion</td>
        <td className="p-4 border-r border-[#E3E3E3]">Bright Grey & Lion</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Adjustable Headrest</td>
        <td className="p-4 border-r border-[#E3E3E3]">No</td>
        <td className="p-4 border-r border-[#E3E3E3]">Yes</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Maximum Load Capacity</td>
        <td className="p-4 border-r border-[#E3E3E3]">280 KG</td>
        <td className="p-4 border-r border-[#E3E3E3]">300 KG</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Origin of Manufacture</td>
        <td className="p-4 border-r border-[#E3E3E3]">India</td>
        <td className="p-4 border-r border-[#E3E3E3]">India</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      {/* Dimensions Section */}
      <tr>
        <td
          className="py-5 px-7 font-bold text-[20px] align-top bg-white border-t border-[#E3E3E3] border-b border-[#E3E3E3]"
          colSpan={4}
        >
          Dimensions
        </td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Width</td>
        <td className="p-4 border-r border-[#E3E3E3]">265.32 cm</td>
        <td className="p-4 border-r border-[#E3E3E3]">265.32 cm</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Height</td>
        <td className="p-4 border-r border-[#E3E3E3]">76 cm</td>
        <td className="p-4 border-r border-[#E3E3E3]">76 cm</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Depth</td>
        <td className="p-4 border-r border-[#E3E3E3]">167.76 cm</td>
        <td className="p-4 border-r border-[#E3E3E3]">167.76 cm</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Weight</td>
        <td className="p-4 border-r border-[#E3E3E3]">45 KG</td>
        <td className="p-4 border-r border-[#E3E3E3]">65 KG</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Seat Height</td>
        <td className="p-4 border-r border-[#E3E3E3]">41.52 cm</td>
        <td className="p-4 border-r border-[#E3E3E3]">41.52 cm</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Leg Height</td>
        <td className="p-4 border-r border-[#E3E3E3]">5.46 cm</td>
        <td className="p-4 border-r border-[#E3E3E3]">5.46 cm</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      {/* Warranty Section */}
      <tr>
        <td
          className="py-5 px-7 font-bold text-[20px] align-top bg-white border-t border-[#E3E3E3] border-b border-[#E3E3E3]"
          colSpan={4}
        >
          Warranty
        </td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Warranty Summary</td>
        <td className="p-4 border-r border-[#E3E3E3]">1 Year Manufacturing Warranty</td>
        <td className="p-4 border-r border-[#E3E3E3]">1.2 Year Manufacturing Warranty</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Warranty Service Type</td>
        <td className="p-4 border-r border-[#E3E3E3]">
          For Warranty Claims  <br/>or Any Product Related Issues<br/> Please Email at operations@trevifurniture.com
        </td>
        <td className="p-4 border-r border-[#E3E3E3]">
          For Warranty Claims or Any<br/> Product Related Issues Please<br/> Email at support@xyz.com
        </td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Covered in Warranty</td>
        <td className="p-4 border-r border-[#E3E3E3]">Warranty Against Manufacturing Defect</td>
        <td className="p-4 border-r border-[#E3E3E3]">Warranty of the product is limited to<br/> manufacturing defects only.</td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Not Covered in Warranty</td>
        <td className="p-4 border-r border-[#E3E3E3]">
          The Warranty Does Not Cover <br/>Damages Due To Usage Of<br/> The Product Beyond Its Intended Use<br/> And Wear & Tear In The Natural<br/> Course Of Product Usage.
        </td>
        <td className="p-4 border-r border-[#E3E3E3]">
          The Warranty Does Not Cover<br/> Damages Due To Usage Of The Product <br/>Beyond Its Intended Use And Wear <br/>& Tear In The Natural Course Of Product Usage.
        </td>
        <td className="p-4">&nbsp;</td>
      </tr>

      <tr className="border-t border-[#E3E3E3]">
        <td className="p-4 font-semibold border-r border-[#E3E3E3]">Domestic Warranty</td>
        <td className="p-4 border-r border-[#E3E3E3]">
          1 Year
          <div className="mt-5">
            <button className="w-full px-2 py-3 bg-[#B88E2F] text-white font-semibold rounded">
              Add To Cart
            </button>
          </div>
        </td>
        <td className="p-4 border-r border-[#E3E3E3]">
          3 Months
          <div className="mt-5">
            <button className="w-full px-2 py-3 bg-[#B88E2F] text-white font-semibold rounded">
              Add To Cart
            </button>
          </div>
        </td>
        <td className="p-4">&nbsp;</td>
      </tr>
    </tbody>
  </table>
</div>



      </div>

<FeaturesBar />
    
    </div>
  );
};

export default ProductComparison;
