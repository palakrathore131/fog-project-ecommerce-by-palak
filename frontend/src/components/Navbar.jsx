import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "@remixicon/react";
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
    img: "/img/Group 146 (1).png",
    name: "Casaliving Wood",
    qty: 1,
    price: 270000,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const subtotal = cartItems.reduce((sum, c) => sum + c.price * c.qty, 0);

  return (
    <header className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 shadow-sm bg-white relative font-['Poppins','Montserrat',sans-serif]">
      {/* Logo */}
      <img src="/img/logo.png" alt="Logo" className="w-20 sm:w-28" />

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 lg:gap-12 text-gray-700 font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>

      {/* Desktop Icons */}
      <div className="hidden md:flex gap-6 lg:gap-10 items-center text-gray-700 text-xl">
        {["mdi_account-alert-outline","akar-icons_search","akar-icons_heart"].map((icon, idx) => (
          <img
            key={idx}
            src={`/img/${icon}.png`}
            alt="icon"
            className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform cursor-pointer"
          />
        ))}
        <img
          src="/img/ant-design_shopping-cart-outlined.png"
          alt="Cart"
          className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* Cart Drawer */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30"
            onClick={() => setOpen(false)}
          />
          <aside className="fixed top-0 right-0 w-full sm:w-[400px] max-w-[450px] h-full bg-white shadow-lg z-40 flex flex-col transition-all duration-300">
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 border-b">
              <h2 className="font-bold text-lg sm:text-xl">Shopping Cart</h2>
              <button onClick={() => setOpen(false)}>
                <img src="/img/Group.png" className="w-3 sm:w-4" alt="close" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-auto">
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 border-b last:border-none"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover bg-[#F6F5F2]"
                  />
                  <div className="flex-1 text-sm sm:text-base">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-gray-500">
                      {item.qty} x{" "}
                      <span className="font-bold text-yellow-700">
                        Rs. {item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 text-lg sm:text-xl">
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>

            {/* Subtotal & Buttons */}
            <div className="px-4 sm:px-6 py-4 sm:py-6 border-t mt-auto text-sm sm:text-base">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold">Subtotal</span>
                <span className="text-yellow-700 font-bold text-base sm:text-lg">
                  Rs. {subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 border rounded px-4 py-2 bg-gray-100 hover:bg-gray-200">
                  Cart
                </button>
                <button className="flex-1 border rounded px-4 py-2 bg-yellow-700 text-white hover:bg-yellow-800">
                  Checkout
                </button>
                <button className="flex-1 border rounded px-4 py-2 bg-gray-100 hover:bg-gray-200">
                  Comparison
                </button>
              </div>
            </div>
          </aside>
        </>
      )}

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl sm:text-3xl text-gray-700"
        onClick={() => setOpen(!open)}
      >
        {open ? <RiCloseLine /> : <RiMenu3Line />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-5 py-6 md:hidden z-50 text-sm sm:text-base">
          <Link to="/" onClick={() => setOpen(false)} className="hover:underline">Home</Link>
          <Link to="/shop" onClick={() => setOpen(false)} className="hover:underline">Shop</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="hover:underline">About</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:underline">Contact</Link>

          {/* Mobile Icons */}
          <div className="flex gap-4 sm:gap-6 items-center">
            {["mdi_account-alert-outline","akar-icons_search","akar-icons_heart","ant-design_shopping-cart-outlined"].map((icon, idx) => (
              <img
                key={idx}
                src={`/img/${icon}.png`}
                alt="icon"
                className="w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform cursor-pointer"
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
