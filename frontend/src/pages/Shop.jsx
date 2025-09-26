// import React from "react";
// import { ArrowsLeftRight, Heart } from "@phosphor-icons/react";
// import { FiShare2 } from "react-icons/fi";

// import FeaturesBar from "../components/Features";

// const products = [
//   {
//     id: 1,
//     name: "Syltherine",
//     desc: "Stylish cafe chair",
//     oldPrice: "Rp 3.500.000",
//     price: "Rp 2.500.000",
//     discount: "-30%",
//     image: "/img/image 1.png",
//   },
//   {
//     id: 2,
//     name: "Leviosa",
//     desc: "Stylish cafe chair",
//     price: "Rp 2.500.000",
//     image: "/public/img/images (3).png",
//   },
//   {
//     id: 3,
//     name: "Lolito",
//     desc: "Luxury big sofa",
//     oldPrice: "Rp 14.000.000",
//     price: "Rp 7.000.000",
//     discount: "-50%",
//     image: "/public/img/images (1).png",
//   },
//   {
//     id: 4,
//     name: "Respira",
//     desc: "Outdoor bar table and stool",
//     price: "Rp 500.000",
//     tag: "New",
//     image: "/public/img/images (2).png",
//   },

//   {
//     id: 1,
//     name: "Syltherine",
//     desc: "Stylish cafe chair",
//     oldPrice: "Rp 3.500.000",
//     price: "Rp 2.500.000",
//     discount: "-30%",
//     image: "/img/image 1.png",
//   },
//   {
//     id: 2,
//     name: "Leviosa",
//     desc: "Stylish cafe chair",
//     price: "Rp 2.500.000",
//     image: "/public/img/images (3).png",
//   },
//   {
//     id: 3,
//     name: "Lolito",
//     desc: "Luxury big sofa",
//     oldPrice: "Rp 14.000.000",
//     price: "Rp 7.000.000",
//     discount: "-50%",
//     image: "/public/img/images (1).png",
//   },
//   {
//     id: 4,
//     name: "Respira",
//     desc: "Outdoor bar table and stool",
//     price: "Rp 500.000",
//     tag: "New",
//     image: "/public/img/images (2).png",
//   },

//   {
//     id: 1,
//     name: "Syltherine",
//     desc: "Stylish cafe chair",
//     oldPrice: "Rp 3.500.000",
//     price: "Rp 2.500.000",
//     discount: "-30%",
//     image: "/img/image 1.png",
//   },
//   {
//     id: 2,
//     name: "Leviosa",
//     desc: "Stylish cafe chair",
//     price: "Rp 2.500.000",
//     image: "/public/img/images (3).png",
//   },
//   {
//     id: 3,
//     name: "Lolito",
//     desc: "Luxury big sofa",
//     oldPrice: "Rp 14.000.000",
//     price: "Rp 7.000.000",
//     discount: "-50%",
//     image: "/public/img/images (1).png",
//   },
//   {
//     id: 4,
//     name: "Respira",
//     desc: "Outdoor bar table and stool",
//     price: "Rp 500.000",
//     tag: "New",
//     image: "/public/img/images (2).png",
//   },
// ];


// export default function ShopPage() {
//   return (
//     <div className="bg-white text-[#393737] font-['Montserrat',sans-serif]">
//       {/* Header Section */}
//       <section
//         className="relative h-[200px] sm:h-[250px] lg:h-[300px] flex items-center bg-cover bg-center"
//         style={{ backgroundImage: "url('/img/Rectangle 1.png')" }}
//       >
//         <div className="absolute inset-0 bg-white/10"></div>
//         <div className="relative w-full flex flex-col items-center px-4 sm:px-8 pb-6">
//           <img
//             src="/img/Meubel House_Logos-05.png"
//             alt="icon"
//             className="h-10 sm:h-12 lg:h-14 mb-2"
//           />
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#222222] font-bold mb-2">
//             Shop
//           </h1>
//           <div className="text-xs sm:text-sm text-[#393737] flex items-center gap-1 sm:gap-2">
//             <span className="font-bold">Home</span>
//             <span className="font-bold text-[#222222]">&gt;</span>
//             <span>Shop</span>
//           </div>
//         </div>
//       </section>

//       {/* Filter Section */}
//       <div className="bg-[#FFF3E3] border-b border-[#F4F4F4] px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div className="flex items-center gap-3 flex-wrap">
//           <img
//             src="/img/system-uicons_filtering.png"
//             alt="Filter"
//             className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 cursor-pointer hover:scale-110 transition-transform"
//           />
//           <span className="font-medium text-base sm:text-lg">Filter</span>
//           <img
//             src="/img/ci_grid-big-round.png"
//             alt="Grid View"
//             className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 cursor-pointer hover:scale-110 transition-transform"
//           />
//           <img
//             src="/img/bi_view-list.png"
//             alt="List View"
//             className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 cursor-pointer hover:scale-110 transition-transform"
//           />
//           <span className="hidden sm:block h-6 w-[1px] bg-[#D8D8D8] mx-2" />
//           <span className="text-sm sm:text-base font-medium">
//             Showing <span className="font-bold">1–16</span> of 32
//             <span className="font-normal text-xs ml-1">results</span>
//           </span>
//         </div>
//         {/* Show and Sort by fields */}
//         <div className="flex items-center gap-2 sm:gap-4">
//           <span className="font-semibold text-sm sm:text-lg">Show</span>
//           <span className="inline-block bg-white text-[#A5A5A5] px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg rounded shadow border border-[#F4F4F4]">
//             16
//           </span>
//           <span className="font-semibold text-sm sm:text-lg">Sort by</span>
//           <input
//             type="text"
//             value="Default"
//             disabled
//             className="inline-block bg-white text-[#B0B0B0] px-3 sm:px-4 py-1 sm:py-2 rounded border border-[#F4F4F4] shadow w-24 sm:w-32 text-sm sm:text-lg"
//           />
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
//         {products.map((p) => (
//           <div
//             key={p.id}
//             className="relative group border border-gray-200 rounded overflow-hidden"
//           >
//             {/* Product Image */}
//             <img
//               src={p.image}
//               alt={p.name}
//               className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//             {/* Discount / New Tag */}
//             {p.discount && (
//               <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-red-600 text-white text-xs font-semibold rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center">
//                 {p.discount}
//               </span>
//             )}
//             {p.tag && (
//               <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-green-600 text-white text-xs font-semibold rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center">
//                 {p.tag}
//               </span>
//             )}

//             <div className="absolute inset-0 flex flex-col items-center justify-center pb-6 opacity-0 group-hover:opacity-100 bg-[#222]/50 transition duration-300">
//               {/* Add to Cart Button */}
//               <button className="bg-white px-8 sm:px-10 lg:px-14 py-2 shadow text-[#B88E2F] font-bold text-base sm:text-lg mb-4 sm:mb-6">
//                 Add to cart
//               </button>
//               {/* Action Icons */}
//               <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 text-white font-semibold text-sm sm:text-base">
//                 <span className="flex items-center gap-1 sm:gap-2">
//                   <FiShare2 /> Share
//                 </span>
//                 <span className="flex items-center gap-1 sm:gap-2">
//                   <ArrowsLeftRight /> Compare
//                 </span>
//                 <span className="flex items-center gap-1 sm:gap-2">
//                   <Heart /> Like
//                 </span>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="p-4 sm:p-6 pt-3 bg-[#FFF]">
//               <h3 className="text-lg sm:text-xl font-bold text-[#222] mb-1">
//                 {p.name}
//               </h3>
//               <p className="text-sm sm:text-base text-[#898989] mb-2">
//                 {p.desc}
//               </p>
//               <div className="flex items-center gap-2">
//                 <span className="text-base sm:text-lg font-semibold text-[#222]">
//                   {p.price}
//                 </span>
//                 {p.oldPrice && (
//                   <span className="line-through text-[#B0B0B0] text-sm sm:text-base font-medium">
//                     {p.oldPrice}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center gap-2 sm:gap-4 py-6 sm:py-10 flex-wrap">
//         <button className="px-4 sm:px-5 py-2 rounded bg-[#FFF3E3] border border-gray-300 font-medium sm:font-semibold hover:bg-yellow-600 hover:text-white transition">
//           1
//         </button>
//         <button className="px-4 sm:px-5 py-2 rounded bg-[#FFF3E3] border border-gray-300 font-medium sm:font-semibold hover:bg-yellow-600 hover:text-white transition">
//           2
//         </button>
//         <button className="px-4 sm:px-5 py-2 rounded bg-[#FFF3E3] border border-gray-300 font-medium sm:font-semibold hover:bg-yellow-600 hover:text-white transition">
//           3
//         </button>
//         <button className="px-4 sm:px-5 py-2 rounded bg-[#FFF3E3] border border-gray-300 font-medium sm:font-semibold hover:bg-yellow-600 hover:text-white transition">
//           Next
//         </button>
//       </div>

//       <FeaturesBar />
//     </div>
//   );
// }






// -----------------


// import React, { useEffect, useState } from "react";
// import { ArrowsLeftRight, Heart } from "@phosphor-icons/react";
// import { FiShare2 } from "react-icons/fi";
// import FeaturesBar from "../components/Features";

// export default function ShopPage() {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(16); // default show 16
//   const [totalPages, setTotalPages] = useState(1);
//   const [sortBy, setSortBy] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");

//   // Fetch products from API
//   const fetchProducts = () => {
//     const params = new URLSearchParams();
//     params.append("page", page);
//     params.append("limit", limit);
//     if (sortBy) params.append("sortBy", sortBy);
//     if (sortOrder) params.append("sortOrder", sortOrder);

//     fetch("/api/products?" + params.toString())
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.data || []);
//         setTotalPages(data.totalPages || 1);
//       })
//       .catch(console.error);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [page, limit, sortBy, sortOrder]);

//   return (
//     <div className="bg-white text-[#393737] font-['Montserrat',sans-serif]">
//       {/* Header Section */}
//       <section
//         className="relative h-[200px] sm:h-[250px] lg:h-[300px] flex items-center bg-cover bg-center"
//         style={{ backgroundImage: "url('/img/Rectangle 1.png')" }}
//       >
//         <div className="absolute inset-0 bg-white/10"></div>
//         <div className="relative w-full flex flex-col items-center px-4 sm:px-8 pb-6">
//           <img
//             src="/img/Meubel House_Logos-05.png"
//             alt="icon"
//             className="h-10 sm:h-12 lg:h-14 mb-2"
//           />
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#222222] font-bold mb-2">
//             Shop
//           </h1>
//           <div className="text-xs sm:text-sm text-[#393737] flex items-center gap-1 sm:gap-2">
//             <span className="font-bold">Home</span>
//             <span className="font-bold text-[#222222]">&gt;</span>
//             <span>Shop</span>
//           </div>
//         </div>
//       </section>

//       {/* Filter Section */}
//       <div className="bg-[#FFF3E3] border-b border-[#F4F4F4] px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div className="flex items-center gap-3 flex-wrap">
//           <img
//             src="/img/system-uicons_filtering.png"
//             alt="Filter"
//             className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 cursor-pointer hover:scale-110 transition-transform"
//           />
//           <span className="font-medium text-base sm:text-lg">Filter</span>
//           <img
//             src="/img/ci_grid-big-round.png"
//             alt="Grid View"
//             className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 cursor-pointer hover:scale-110 transition-transform"
//           />
//           <img
//             src="/img/bi_view-list.png"
//             alt="List View"
//             className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 cursor-pointer hover:scale-110 transition-transform"
//           />
//           <span className="hidden sm:block h-6 w-[1px] bg-[#D8D8D8] mx-2" />
//           <span className="text-sm sm:text-base font-medium">
//             Showing <span className="font-bold">{products.length}</span> of{" "}
//             {totalPages * limit}
//             <span className="font-normal text-xs ml-1">results</span>
//           </span>
//         </div>

//         {/* Show and Sort by fields */}
//         <div className="flex items-center gap-2 sm:gap-4">
//           <span className="font-semibold text-sm sm:text-lg">Show</span>
//           <span className="inline-block bg-white text-[#A5A5A5] px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg rounded shadow border border-[#F4F4F4]">
//             {limit}
//           </span>
//           <span className="font-semibold text-sm sm:text-lg">Sort by</span>
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="inline-block bg-white text-[#B0B0B0] px-3 sm:px-4 py-1 sm:py-2 rounded border border-[#F4F4F4] shadow w-24 sm:w-32 text-sm sm:text-lg"
//           >
//             <option value="">Default</option>
//             <option value="name">Name</option>
//             <option value="priceNum">Price</option>
//           </select>
//           <select
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//             className="inline-block bg-white text-[#B0B0B0] px-3 sm:px-4 py-1 sm:py-2 rounded border border-[#F4F4F4] shadow w-24 sm:w-32 text-sm sm:text-lg ml-2"
//           >
//             <option value="asc">Asc</option>
//             <option value="desc">Desc</option>
//           </select>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
//         {products.map((p) => (
//           <div
//             key={p._id}
//             className="relative group border border-gray-200 rounded overflow-hidden"
//           >
//             {/* Product Image */}
//             <img
//               src={p.image || "/img/image 1.png"}
//               alt={p.name}
//               className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
//             />

//             {/* Discount / New Tag */}
//             {p.discount && (
//               <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-red-600 text-white text-xs font-semibold rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center">
//                 {p.discount}
//               </span>
//             )}
//             {p.tag && (
//               <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-green-600 text-white text-xs font-semibold rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center">
//                 {p.tag}
//               </span>
//             )}

//             {/* Hover Buttons */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center pb-6 opacity-0 group-hover:opacity-100 bg-[#222]/50 transition duration-300">
//               <button className="bg-white px-8 sm:px-10 lg:px-14 py-2 shadow text-[#B88E2F] font-bold text-base sm:text-lg mb-4 sm:mb-6">
//                 Add to cart
//               </button>
//               <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 text-white font-semibold text-sm sm:text-base">
//                 <span className="flex items-center gap-1 sm:gap-2">
//                   <FiShare2 /> Share
//                 </span>
//                 <span className="flex items-center gap-1 sm:gap-2">
//                   <ArrowsLeftRight /> Compare
//                 </span>
//                 <span className="flex items-center gap-1 sm:gap-2">
//                   <Heart /> Like
//                 </span>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="p-4 sm:p-6 pt-3 bg-[#FFF]">
//               <h3 className="text-lg sm:text-xl font-bold text-[#222] mb-1">
//                 {p.name}
//               </h3>
//               <p className="text-sm sm:text-base text-[#898989] mb-2">
//                 {p.desc}
//               </p>
//               <div className="flex items-center gap-2">
//                 <span className="text-base sm:text-lg font-semibold text-[#222]">
//                   {p.price}
//                 </span>
//                 {p.oldPrice && (
//                   <span className="line-through text-[#B0B0B0] text-sm sm:text-base font-medium">
//                     {p.oldPrice}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center gap-2 sm:gap-4 py-6 sm:py-10 flex-wrap">
//         {[...Array(totalPages)].map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setPage(i + 1)}
//             className={`px-4 sm:px-5 py-2 rounded border border-gray-300 font-medium sm:font-semibold transition ${
//               page === i + 1 ? "bg-yellow-600 text-white" : "bg-[#FFF3E3]"
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}
//         {page < totalPages && (
//           <button
//             onClick={() => setPage(page + 1)}
//             className="px-4 sm:px-5 py-2 rounded bg-[#FFF3E3] border border-gray-300 font-medium sm:font-semibold hover:bg-yellow-600 hover:text-white transition"
//           >
//             Next
//           </button>
//         )}
//       </div>

//       <FeaturesBar />
//     </div>
//   );
// }






// ------------


// import React, { useEffect, useState } from "react";
// import { ArrowsLeftRight, Heart } from "@phosphor-icons/react";
// import { FiShare2 } from "react-icons/fi";
// import FeaturesBar from "../components/Features";

// export default function ShopPage() {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(16); // default show 16
//   const [totalPages, setTotalPages] = useState(1);
//   const [sortBy, setSortBy] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");

//   // Fetch products from API
//   const fetchProducts = () => {
//     const params = new URLSearchParams();
//     params.append("page", page);
//     params.append("limit", limit);
//     if (sortBy) params.append("sortBy", sortBy);
//     if (sortOrder) params.append("sortOrder", sortOrder);

//     fetch("/api/products?" + params.toString())
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.data || []);
//         setTotalPages(data.totalPages || 1);
//       })
//       .catch(console.error);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [page, limit, sortBy, sortOrder]);



//   const [brandFilter, setBrandFilter] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [brands, setBrands] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [editing, setEditing] = useState(null);
//   const [form, setForm] = useState({ name: "", desc: "", price: "", brand: "", category: "", image: null });
  
//   const openAdd = () => {
//     setEditing(null);
//     setForm({ name: "", desc: "", price: "", brand: "", category: "", image: null });
//     setShowModal(true);
//   };



// const openEdit = (p) => {
//     setEditing(p);
//     setForm({
//       name: p.name,
//       desc: p.desc,
//       price: p.price,
//       brand: p.brand,
//       category: p.category,
//       image: null
//     });
//     setShowModal(true);
//   };

//   const handleDelete = (id) => {
//     if (!confirm("Are you sure to delete this product?")) return;
//     fetch(`/api/products/${id}`, { method: "DELETE" })
//       .then(() => fetchProducts())
//       .catch(console.error)
//   }


//   return (
//     <div className="bg-white text-[#393737] font-['Montserrat',sans-serif]">
//       {/* Header Section */}
//       <section
//         className="relative h-[200px] sm:h-[250px] lg:h-[300px] flex items-center bg-cover bg-center"
//         style={{ backgroundImage: "url('/img/Rectangle 1.png')" }}
//       >
//         <div className="absolute inset-0 bg-white/10"></div>
//         <div className="relative w-full flex flex-col items-center px-4 sm:px-8 pb-6">
//           <img
//             src="/img/Meubel House_Logos-05.png"
//             alt="icon"
//             className="h-10 sm:h-12 lg:h-14 mb-2"
//           />
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#222222] font-bold mb-2">
//             Shop
//           </h1>
//           <div className="text-xs sm:text-sm text-[#393737] flex items-center gap-1 sm:gap-2">
//             <span className="font-bold">Home</span>
//             <span className="font-bold text-[#222222]">&gt;</span>
//             <span>Shop</span>
//           </div>
//         </div>
//       </section>

//       {/* Filter Section */}
//       <div className="bg-[#FFF3E3] border-b border-[#F4F4F4] px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div className="flex items-center gap-3 flex-wrap">
//           <img
//             src="/img/system-uicons_filtering.png"
//             alt="Filter"
//             className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 cursor-pointer hover:scale-110 transition-transform"
//           />
//           <span className="font-medium text-base sm:text-lg">Filter</span>
//           <img
//             src="/img/ci_grid-big-round.png"
//             alt="Grid View"
//             className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 cursor-pointer hover:scale-110 transition-transform"
//           />
//           <img
//             src="/img/bi_view-list.png"
//             alt="List View"
//             className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 cursor-pointer hover:scale-110 transition-transform"
//           />
//           <span className="hidden sm:block h-6 w-[1px] bg-[#D8D8D8] mx-2" />
//           <span className="text-sm sm:text-base font-medium">
//             Showing <span className="font-bold">{products.length}</span> of{" "}
//             {totalPages * limit}
//             <span className="font-normal text-xs ml-1">results</span>
//           </span>
//         </div>

//         {/* Show and Sort by fields */}
//         <div className="flex items-center gap-2 sm:gap-4">
//           <span className="font-semibold text-sm sm:text-lg">Show</span>
//           <span className="inline-block bg-white text-[#A5A5A5] px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg rounded shadow border border-[#F4F4F4]">
//             {limit}
//           </span>
//           <span className="font-semibold text-sm sm:text-lg">Sort by</span>
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="inline-block bg-white text-[#B0B0B0] px-3 sm:px-4 py-1 sm:py-2 rounded border border-[#F4F4F4] shadow w-24 sm:w-32 text-sm sm:text-lg"
//           >
//             <option value="">Default</option>
//             <option value="name">Name</option>
//             <option value="priceNum">Price</option>
//           </select>
//           <select
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//             className="inline-block bg-white text-[#B0B0B0] px-3 sm:px-4 py-1 sm:py-2 rounded border border-[#F4F4F4] shadow w-24 sm:w-32 text-sm sm:text-lg ml-2"
//           >
//             <option value="asc">Asc</option>
//             <option value="desc">Desc</option>
//           </select>
//         </div>
//       </div>

//       {/* Product Grid */}
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
//       {products.map((p) => (
//         <div
//           key={p._id}
//           className="relative group border border-gray-200 rounded overflow-hidden"
//         >
//           {/* Product Image */}
//           <img
//             src={`http://localhost:3000${p.image}`}
//             alt={p.name}
//             className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
//             onError={(e) => {
//               e.currentTarget.onerror = null; // infinite loop prevent
//               e.currentTarget.src = p.image || "/img/image 1.png";
//             }}
//           />

//           {/* Discount / New Tag */}
//           {p.discount && (
//             <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-red-600 text-white text-xs font-semibold rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center">
//               {p.discount}
//             </span>
//           )}
//           {p.tag && (
//             <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-green-600 text-white text-xs font-semibold rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center">
//               {p.tag}
//             </span>
//           )}

//           {/* Hover Overlay (Add to Cart + Actions + Edit/Delete) */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center pb-6 opacity-0 group-hover:opacity-100 bg-[#222]/50 transition duration-300">
//             <button className="bg-white px-8 sm:px-10 lg:px-14 py-2 shadow text-[#B88E2F] font-bold text-base sm:text-lg mb-4 sm:mb-6">
//               Add to cart
//             </button>

//             <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 text-white font-semibold text-sm sm:text-base">
//               <span className="flex items-center gap-1 sm:gap-2">
//                 <FiShare2 /> Share
//               </span>
//               <span className="flex items-center gap-1 sm:gap-2">
//                 <ArrowsLeftRight /> Compare
//               </span>
//               <span className="flex items-center gap-1 sm:gap-2">
//                 <Heart /> Like
//               </span>
//             </div>

//             {/* Edit/Delete Buttons */}
//             <div className="flex gap-2 mt-4">
//               <button
//                 onClick={() => openEdit(p)}
//                 className="px-3 py-1 border rounded bg-white text-black"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(p._id)}
//                 className="px-3 py-1 border rounded bg-red-500 text-white"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="p-4 sm:p-6 pt-3 bg-[#FFF]">
//             <h3 className="text-lg sm:text-xl font-bold text-[#222] mb-1">
//               {p.name}
//             </h3>
//             <p className="text-sm sm:text-base text-[#898989] mb-2">
//               {p.desc}
//             </p>
//             <div className="flex items-center gap-2">
//               <span className="text-base sm:text-lg font-semibold text-[#222]">
//                 {p.price}
//               </span>
//               {p.oldPrice && (
//                 <span className="line-through text-[#B0B0B0] text-sm sm:text-base font-medium">
//                   {p.oldPrice}
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center gap-2 sm:gap-4 py-6 sm:py-10 flex-wrap">
//         {[...Array(totalPages)].map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setPage(i + 1)}
//             className={`px-4 sm:px-5 py-2 rounded border border-gray-300 font-medium sm:font-semibold transition ${page === i + 1 ? "bg-yellow-600 text-white" : "bg-[#FFF3E3]"
//               }`}
//           >
//             {i + 1}
//           </button>
//         ))}
//         {page < totalPages && (
//           <button
//             onClick={() => setPage(page + 1)}
//             className="px-4 sm:px-5 py-2 rounded bg-[#FFF3E3] border border-gray-300 font-medium sm:font-semibold hover:bg-yellow-600 hover:text-white transition"
//           >
//             Next
//           </button>
//         )}
//       </div>

//       <FeaturesBar />
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import { ArrowsLeftRight, Heart } from "@phosphor-icons/react";
import { FiShare2 } from "react-icons/fi";
import FeaturesBar from "../components/Features";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(16); // default show 16
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Fetch products from API
  const fetchProducts = () => {
    const params = new URLSearchParams();
    params.append("page", page);
    params.append("limit", limit);
    if (sortBy) params.append("sortBy", sortBy);
    if (sortOrder) params.append("sortOrder", sortOrder);

    fetch("/api/products?" + params.toString())
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data || []);
        setTotalPages(data.totalPages || 1);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchProducts();
  }, [page, limit, sortBy, sortOrder]);

  // Filters states
  const [brandFilter, setBrandFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [brands, setBrands] = useState([]);

  // Edit Modal states
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    name: "",
    desc: "",
    price: "",
    brand: "",
    category: "",
    image: null,
  });

  const openEdit = (p) => {
    setEditing(p);
    setForm({
      name: p.name,
      desc: p.desc,
      price: p.price,
      brand: p.brand,
      category: p.category,
      image: null,
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (!confirm("Are you sure to delete this product?")) return;
    fetch(`/api/products/${id}`, { method: "DELETE" })
      .then(() => fetchProducts())
      .catch(console.error);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!editing) return;

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("desc", form.desc);
    formData.append("price", form.price);
    formData.append("brand", form.brand);
    formData.append("category", form.category);
    if (form.image) formData.append("image", form.image);

    fetch(`/api/products/${editing._id}`, {
      method: "PUT",
      body: formData,
    })
      .then(() => {
        setShowModal(false);
        setEditing(null);
        fetchProducts();
      })
      .catch(console.error);
  };

  return (
    <div className="bg-white text-[#393737] font-['Montserrat',sans-serif]">
      {/* Header Section */}
      <section
        className="relative h-[200px] sm:h-[250px] lg:h-[300px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/Rectangle 1.png')" }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative w-full flex flex-col items-center px-4 sm:px-8 pb-6">
          <img
            src="/img/Meubel House_Logos-05.png"
            alt="icon"
            className="h-10 sm:h-12 lg:h-14 mb-2"
          />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#222222] font-bold mb-2">
            Shop
          </h1>
          <div className="text-xs sm:text-sm text-[#393737] flex items-center gap-1 sm:gap-2">
            <span className="font-bold">Home</span>
            <span className="font-bold text-[#222222]">&gt;</span>
            <span>Shop</span>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <div className="bg-[#FFF3E3] border-b border-[#F4F4F4] px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <img
            src="/img/system-uicons_filtering.png"
            alt="Filter"
            className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 cursor-pointer hover:scale-110 transition-transform"
          />
          <span className="font-medium text-base sm:text-lg">Filter</span>
          <img
            src="/img/ci_grid-big-round.png"
            alt="Grid View"
            className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 cursor-pointer hover:scale-110 transition-transform"
          />
          <img
            src="/img/bi_view-list.png"
            alt="List View"
            className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 cursor-pointer hover:scale-110 transition-transform"
          />
          <span className="hidden sm:block h-6 w-[1px] bg-[#D8D8D8] mx-2" />
          <span className="text-sm sm:text-base font-medium">
            Showing <span className="font-bold">{products.length}</span> of{" "}
            {totalPages * limit}
            <span className="font-normal text-xs ml-1">results</span>
          </span>
        </div>

        {/* Show and Sort by fields */}
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="font-semibold text-sm sm:text-lg">Show</span>
          <span className="inline-block bg-white text-[#A5A5A5] px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg rounded shadow border border-[#F4F4F4]">
            {limit}
          </span>
          <span className="font-semibold text-sm sm:text-lg">Sort by</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="inline-block bg-white text-[#B0B0B0] px-3 sm:px-4 py-1 sm:py-2 rounded border border-[#F4F4F4] shadow w-24 sm:w-32 text-sm sm:text-lg"
          >
            <option value="">Default</option>
            <option value="name">Name</option>
            <option value="priceNum">Price</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="inline-block bg-white text-[#B0B0B0] px-3 sm:px-4 py-1 sm:py-2 rounded border border-[#F4F4F4] shadow w-24 sm:w-32 text-sm sm:text-lg ml-2"
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {products.map((p) => (
          <div
            key={p._id}
            className="relative group border border-gray-200 rounded overflow-hidden"
          >
            {/* Product Image */}
            <img
              src={`http://localhost:3000${p.image}`}
              alt={p.name}
              className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = p.image || "/img/image 1.png";
              }}
            />

            {/* Discount / Tag */}
            {p.discount && (
              <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-red-600 text-white text-xs font-semibold rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center">
                {p.discount}
              </span>
            )}
            {p.tag && (
              <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-green-600 text-white text-xs font-semibold rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center">
                {p.tag}
              </span>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pb-6 opacity-0 group-hover:opacity-100 bg-[#222]/50 transition duration-300">
              <button className="bg-white px-8 sm:px-10 lg:px-14 py-2 shadow text-[#B88E2F] font-bold text-base sm:text-lg mb-4 sm:mb-6">
                Add to cart
              </button>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 text-white font-semibold text-sm sm:text-base">
                <span className="flex items-center gap-1 sm:gap-2">
                  <FiShare2 /> Share
                </span>
                <span className="flex items-center gap-1 sm:gap-2">
                  <ArrowsLeftRight /> Compare
                </span>
                <span className="flex items-center gap-1 sm:gap-2">
                  <Heart /> Like
                </span>
              </div>

              {/* Edit/Delete Buttons */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => openEdit(p)}
                  className="px-3 py-1 border rounded bg-white text-black"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="px-3 py-1 border rounded bg-red-500 text-white"
                >
                  Delete
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 sm:p-6 pt-3 bg-[#FFF]">
              <h3 className="text-lg sm:text-xl font-bold text-[#222] mb-1">
                {p.name}
              </h3>
              <p className="text-sm sm:text-base text-[#898989] mb-2">
                {p.desc}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-semibold text-[#222]">
                  {p.price}
                </span>
                {p.oldPrice && (
                  <span className="line-through text-[#B0B0B0] text-sm sm:text-base font-medium">
                    {p.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 sm:gap-4 py-6 sm:py-10 flex-wrap">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 sm:px-5 py-2 rounded border border-gray-300 font-medium sm:font-semibold transition ${
              page === i + 1
                ? "bg-yellow-600 text-white"
                : "bg-[#FFF3E3]"
            }`}
          >
            {i + 1}
          </button>
        ))}
        {page < totalPages && (
          <button
            onClick={() => setPage(page + 1)}
            className="px-4 sm:px-5 py-2 rounded bg-[#FFF3E3] border border-gray-300 font-medium sm:font-semibold hover:bg-yellow-600 hover:text-white transition"
          >
            Next
          </button>
        )}
      </div>

      <FeaturesBar />

      {/* Edit Modal */}
      {showModal && editing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>

            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                placeholder="Description"
                value={form.desc}
                onChange={(e) => setForm({ ...form, desc: e.target.value })}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Brand"
                value={form.brand}
                onChange={(e) => setForm({ ...form, brand: e.target.value })}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="file"
                onChange={(e) =>
                  setForm({ ...form, image: e.target.files[0] })
                }
                className="w-full border px-3 py-2 rounded"
              />

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-600 text-white rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
