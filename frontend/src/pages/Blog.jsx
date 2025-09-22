import React from "react";
import { Search } from "lucide-react";
import FeaturesBar from "../components/Features";

const BlogPage = () => {
  return (
    <div className="w-full font-['Poppins','Montserrat',sans-serif]">
      {/* Hero Section */}
      <div
        className="relative w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/img/Rectangle 1.png')" }}
      >
        <div className="text-center">
          <img src="/img/Meubel House_Logos-05.png" alt="icon" className="mx-auto mb-2" />
          <h1 className="text-4xl font-bold text-gray-800">Blog</h1>
          <p className="text-sm text-gray-500 mt-2">Home &gt; Blog</p>
        </div>
      </div>

      {/* Main Blog Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 py-16">
        {/* Left Section (Blog Posts) */}
        <div className="lg:col-span-2 space-y-16">
          {/* Blog Post 1 */}
          <div className="space-y-4">
            <img
              src="/img/Rectangle 68.png"
              alt="blog1"
              className="rounded-lg w-full"
            />
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>👤 Admin</span>
              <span>📅 14 Oct 2022</span>
              <span>📂 Wood</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Going all-in with millennial design
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc…
            </p>
            <button className="text-gray-800 font-medium border-b border-gray-800 hover:text-yellow-600 hover:border-yellow-600 transition">
              Read more
            </button>
          </div>

          {/* Blog Post 2 */}
          <div className="space-y-4">
            <img
              src="/img/Rectangle 68 (1).png"
              alt="blog2"
              className="rounded-lg w-full"
            />
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>👤 Admin</span>
              <span>📅 14 Oct 2022</span>
              <span>📂 Handmade</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Exploring new ways of decorating
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua…
            </p>
            <button className="text-gray-800 font-medium border-b border-gray-800 hover:text-yellow-600 hover:border-yellow-600 transition">
              Read more
            </button>
          </div>

          {/* Blog Post 3 */}
          <div className="space-y-4">
            <img
              src="/img/Rectangle 68 (2).png"
              alt="blog3"
              className="rounded-lg w-full"
            />
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>👤 Admin</span>
              <span>📅 14 Oct 2022</span>
              <span>📂 Wood</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Handmade pieces that took time to make
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua…
            </p>
            <button className="text-gray-800 font-medium border-b border-gray-800 hover:text-yellow-600 hover:border-yellow-600 transition">
              Read more
            </button>
          </div>

          {/* Pagination */}
          <div className="flex space-x-4 pt-6">
            <button className="px-4 py-2 rounded bg-yellow-600 text-white">
              1
            </button>
            <button className="px-4 py-2 rounded bg-gray-100">2</button>
            <button className="px-4 py-2 rounded bg-gray-100">3</button>
            <button className="px-4 py-2 rounded bg-gray-100">Next</button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-10">
          {/* Search */}
          <div className="flex border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 py-2 outline-none text-sm"
            />
            <button className="px-3 flex items-center justify-center bg-gray-100">
              <Search className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Crafts (2)</li>
              <li>Design (8)</li>
              <li>Handmade (7)</li>
              <li>Interior (1)</li>
              <li>Wood (5)</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-5">
              {[
                {
                  img: "/img/Rectangle 69.png",
                  title: "Going all-in with millennial design",
                },
                {
                  img: "/img/Rectangle 69 (1).png",
                  title: "Exploring new ways of decorating",
                },
                {
                  img: "/img/Rectangle 69 (2).png",
                  title: "Handmade pieces that took time to make",
                },
                {
                  img: "/img/Rectangle 69 (3).png",
                  title: "Modern home in Milan",
                },
                {
                  img: "/img/Rectangle 69 (4).png",
                  title: "Colorful office redesign",
                },
              ].map((post, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <img
                    src={post.img}
                    className="w-14 h-14 rounded object-cover"
                    alt={post.title}
                  />
                  <div>
                    <p className="text-sm">{post.title}</p>
                    <span className="text-xs text-gray-500">03 Aug 2022</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <FeaturesBar />

    </div>
  );
};

export default BlogPage;
