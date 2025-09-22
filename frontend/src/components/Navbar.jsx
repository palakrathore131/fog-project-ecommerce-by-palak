import { useState } from "react";
import {
  RiMenu3Line,
  RiCloseLine,
} from "@remixicon/react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const cartItems = [
  {
    img: "/img/Group 146.png",
    name: "Asgaard sofa",
    qty: 1,
    price: 250000,
  },
  {
    img: "/public/img/Group 146 (1).png",
    name: "Casaliving Wood",
    qty: 1,
    price: 270000,
  },
];

export default function Navbar() {
  const [open, isOpen] = useState(false);

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, c) => sum + c.price * c.qty, 0);

  return (
    <header className="flex justify-between items-center px-6 md:px-10 py-5 shadow-sm bg-white relative font-['Poppins','Montserrat',sans-serif]">
      {/* Logo */}
      <img src="/img/logo.png" alt="Logo" className="w-28" />

      <nav className="hidden md:flex gap-12 text-gray-700 font-medium">
        {/* <a href="/">Home</a> */}
        {/* <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a> */}
        <Link to="/" className="hover:underline">
        Home
      </Link>

      <Link to="/shop" className="hover:underline">
        Shop
      </Link>

      <Link to="/" className="hover:underline">
        About
      </Link>

      <Link to="/contact" className="hover:underline">
        Contact
      </Link>
      </nav>

      <div className="hidden md:flex gap-10 items-center text-gray-700 text-xl">
        <img
          src="/img/mdi_account-alert-outline.png"
          alt="Account"
          className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
        />
        <img
          src="/img/akar-icons_search.png"
          alt="Search"
          className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
        />
        <img
          src="/img/akar-icons_heart.png"
          alt="Favorites"
          className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
        />
        <img
          src="/img/ant-design_shopping-cart-outlined.png"
          alt="Cart"
          className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"

          onClick={() => isOpen(true)}

        />
        {open && (
          <div>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-30 z-30"
              onClick={() => isOpen(false)}
            />

            {/* Cart Drawer */}
            <aside className="fixed top-0 right-0 w-[450px] h-full bg-white shadow-lg z-40 flex flex-col transition-all duration-300">
              <div className="flex items-center justify-between px-6 py-6 border-b">
                <h2 className="font-bold text-xl">Shopping Cart</h2>
                <button onClick={() => setOpen(false)}>
                  {/* <FaTimes className="text-2xl text-gray-500 hover:text-gray-800" /> */}
                  <img src="/img/Group.png" className="w-4"></img>
                </button>
              </div>
              <div className="flex-1 overflow-auto">
                {cartItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 px-6 py-4 border-b last:border-none"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover bg-[#F6F5F2]"
                    />
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-gray-500 text-sm">
                        {item.qty} x <span className="font-bold text-yellow-700">Rs. {item.price.toLocaleString()}</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 text-xl">
                      <FaTimes />
                    </button>
                  </div>
                ))}
              </div>
              {/* Subtotal and Buttons */}
              <div className="px-6 py-6 border-t mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">Subtotal</span>
                  <span className="text-yellow-700 font-bold text-lg">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex gap-3">
                  <button className="border rounded px-5 py-2 bg-gray-100 hover:bg-gray-200">
                    Cart
                  </button>
                  <button className="border rounded px-5 py-2 bg-yellow-700 text-white hover:bg-yellow-800">
                    Checkout
                  </button>
                  <button className="border rounded px-5 py-2 bg-gray-100 hover:bg-gray-200">
                    Comparison
                  </button>
                </div>
              </div>
            </aside>
          </div>
        )}



      </div>


      <button
        className="md:hidden text-3xl text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" onClick={() => setIsOpen(false)}>Shop</a>
          <a href="#" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" onClick={() => setIsOpen(false)}>Contact</a>

          <div className="flex gap-6 text-2xl text-gray-700">
            {/* <RiUserLine />
            <RiSearchLine />
            <RiHeartLine />
            <RiShoppingCartLine /> */}

            <div className="flex gap-6 items-center text-gray-700 text-xl">
              <img
                src="/img/mdi_account-alert-outline.png"
                alt="Account"
                className="w-10 h-10 hover:scale-110 transition-transform cursor-pointer"
              />
              <img
                src="/img/akar-icons_search.png"
                alt="Search"
                className="w-10 h-10 hover:scale-110 transition-transform cursor-pointer"
              />
              <img
                src="/img/akar-icons_heart.png"
                alt="Favorites"
                className="w-10 h-10 hover:scale-110 transition-transform cursor-pointer"
              />
              <img
                src="/img/ant-design_shopping-cart-outlined.png"
                alt="Cart"
                className="w-10 h-10 hover:scale-110 transition-transform cursor-pointer"
              />
            </div>


          </div>
        </div>
      )}
    </header>
  );
}
