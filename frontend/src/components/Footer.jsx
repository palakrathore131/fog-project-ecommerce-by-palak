import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email!");

    fetch("https://fog-project-ecommerce-by-palak.onrender.com/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((r) => r.json())
      .then((res) => {
        alert(res.message || "Thank you for subscribing! Welcome to our community 🎉");
        setEmail("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <footer className="bg-gray-50 py-9 px-6 sm:px-12 md:px-20 border-t-2 border-gray-200 font-['Poppins','Montserrat',sans-serif]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-gray-400 text-lg">
        <div>
          <h2 className="text-lg font-bold text-black">Funiro.</h2>
          <p className="mt-8 text-gray-400">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
        </div>

        <div>
          <h3 className="text-gray-400">Links</h3>
          <ul className="mt-8 space-y-4 text-black">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/shop" className="hover:underline">Shop</Link></li>
            <li><Link to="/" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-400">Help</h3>
          <ul className="mt-8 space-y-4 text-black">
            <li><Link to="/payment" className="hover:underline">Payment Options</Link></li>
            <li><Link to="/returns" className="hover:underline">Returns</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policies</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-400">Newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 mt-8">
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              className="border-b-2 border-black px-3 text-sm w-full focus:outline-none"
            />
            <button type="submit" className="text-black border-b-2 border-black">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <p className="text-black text-sm mt-10 pt-8 border-t-2 border-gray-200">
        © 2025 Furino. All rights reserved
      </p>
    </footer>
  );
}
