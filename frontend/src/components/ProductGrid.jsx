import React, { useEffect, useState } from "react";
import { ArrowsLeftRight, Heart } from "@phosphor-icons/react";
import { FiShare2 } from "react-icons/fi";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [brandFilter, setBrandFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [brands, setBrands] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", desc: "", price: "", brand: "", category: "", image: null });

  const fetchProducts = () => {
    const params = new URLSearchParams();
    params.append("page", page);
    params.append("limit", limit);
    if (sortBy) params.append("sortBy", sortBy);
    if (sortOrder) params.append("sortOrder", sortOrder);
    if (brandFilter) params.append("brand", brandFilter);
    if (categoryFilter) params.append("category", categoryFilter);
    if (minPrice) params.append("minPrice", minPrice);
    if (maxPrice) params.append("maxPrice", maxPrice);

    fetch("/api/products?" + params.toString())
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data || []);
        setTotalPages(data.totalPages || 1);
        const b = Array.from(new Set((data.data || []).map(p => p.brand || "Generic")));
        setBrands(b);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchProducts();
  }, [page, limit, sortBy, sortOrder, brandFilter, categoryFilter, minPrice, maxPrice]);

  const openAdd = () => {
    setEditing(null);
    setForm({ name: "", desc: "", price: "", brand: "", category: "", image: null });
    setShowModal(true);
  };

  const openEdit = (p) => {
    setEditing(p);
    setForm({
      name: p.name,
      desc: p.desc,
      price: p.price,
      brand: p.brand,
      category: p.category,
      image: null
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (!confirm("Are you sure to delete this product?")) return;
    fetch(`/api/products/${id}`, { method: "DELETE" })
      .then(() => fetchProducts())
      .catch(console.error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (form[key] !== null) formData.append(key, form[key]);
    });

    if (editing) {
      fetch(`/api/products/${editing._id}`, {
        method: "PUT",
        body: formData
      }).then(() => {
        setShowModal(false);
        fetchProducts();
      }).catch(console.error);
    } else {
      fetch("/api/products", {
        method: "POST",
        body: formData
      }).then(() => {
        setShowModal(false);
        setPage(1);
        fetchProducts();
      }).catch(console.error);
    }
  };

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Products</h2>
        <button onClick={openAdd} className="px-4 py-2 rounded bg-yellow-600 text-white">Add Product</button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label className="block text-sm">Brand</label>
          <select value={brandFilter} onChange={e => { setBrandFilter(e.target.value); setPage(1); }} className="border p-2 rounded">
            <option value="">All</option>
            {brands.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm">Category</label>
          <input value={categoryFilter} onChange={e => { setCategoryFilter(e.target.value); setPage(1); }} placeholder="e.g. furniture" className="border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm">Min Price</label>
          <input value={minPrice} onChange={e => setMinPrice(e.target.value)} placeholder="100000" className="border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm">Max Price</label>
          <input value={maxPrice} onChange={e => setMaxPrice(e.target.value)} placeholder="500000" className="border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm">Sort</label>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="border p-2 rounded">
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="priceNum">Price</option>
          </select>
        </div>

        <div>
          <label className="block text-sm">Order</label>
          <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="border p-2 rounded">
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>

        <div>
          <label className="block text-sm">Per page</label>
          <select value={limit} onChange={e => { setLimit(parseInt(e.target.value)); setPage(1); }} className="border p-2 rounded">
            <option value={4}>4</option>
            <option value={6}>6</option>
            <option value={12}>12</option>
          </select>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-1 py-8 sm:py-12 
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8">

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
                e.currentTarget.onerror = null; // infinite loop prevent
                e.currentTarget.src = p.image || "/img/image 1.png";
              }}
            />

            {/* Discount / New Tag */}
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

            {/* Hover Overlay (Add to Cart + Actions + Edit/Delete) */}
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
                <span className=" font-semibold text-[#222]">
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
      <div className="flex items-center justify-center gap-3 mt-6">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)} className="px-3 py-1 border rounded disabled:opacity-50">Prev</button>
        <span>Page {page} / {totalPages}</span>
        <button disabled={page >= totalPages} onClick={() => setPage(page + 1)} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded p-6 w-full max-w-lg">
            <h3 className="text-xl font-semibold mb-4">{editing ? "Update Product" : "Add Product"}</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input className="border p-2 rounded w-full" placeholder="Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              <input className="border p-2 rounded w-full" placeholder="Description" value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} />
              <input className="border p-2 rounded w-full" placeholder="Price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
              <input className="border p-2 rounded w-full" placeholder="Brand" value={form.brand} onChange={e => setForm({ ...form, brand: e.target.value })} />
              <input className="border p-2 rounded w-full" placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
              <input type="file" accept="image/*" onChange={e => setForm({ ...form, image: e.target.files[0] })} className="border p-2 rounded w-full" />
              <div className="flex justify-end gap-3 mt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-yellow-600 text-white rounded">{editing ? "Update" : "Add"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
