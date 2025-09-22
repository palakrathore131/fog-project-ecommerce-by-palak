
import { ArrowsLeftRight, Heart } from "@phosphor-icons/react";
import { FiShare2 } from "react-icons/fi";
import React, { useEffect, useState } from "react";

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
  const [editing, setEditing] = useState(null); // product being edited
  const [form, setForm] = useState({ name: "", desc: "", price: "", brand: "", category: "" });

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
      .then((r) => r.json())
      .then((j) => {
        setProducts(j.data || []);
        setTotalPages(j.totalPages || 1);
        // derive brands from returned results (or fetch all)
        const b = Array.from(new Set((j.data || []).map(p => p.brand || "Generic")));
        setBrands(b);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetchProducts();
  }, [page, limit, sortBy, sortOrder, brandFilter, categoryFilter, minPrice, maxPrice]);

  // Open Add modal
  const openAdd = () => {
    setEditing(null);
    setForm({ name: "", desc: "", price: "", brand: "", category: "" });
    setShowModal(true);
  };

  const openEdit = (p) => {
    setEditing(p);
    setForm({ name: p.name || "", desc: p.desc || "", price: p.price || "", brand: p.brand || "", category: p.category || "" });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (!confirm("Are you sure to delete this product?")) return;
    fetch(`/api/products/${id}`, { method: "DELETE" })
      .then(r => r.json())
      .then(() => {
        // refresh current page
        fetchProducts();
      })
      .catch(e => console.error(e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      // update
      fetch(`/api/products/${editing.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }).then(r => r.json()).then(() => {
        setShowModal(false);
        fetchProducts();
      }).catch(e => console.error(e));
    } else {
      // create
      fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }).then(r => r.json()).then(() => {
        setShowModal(false);
        // go to last page or refresh
        setPage(1);
        fetchProducts();
      }).catch(e => console.error(e));
    }
  };

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Products</h2>
        <button onClick={openAdd} className="px-4 py-2 rounded bg-yellow-600 text-white">Add Product</button>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label className="block text-sm">Brand</label>
          <select value={brandFilter} onChange={e=>{ setBrandFilter(e.target.value); setPage(1); }} className="border p-2 rounded">
            <option value="">All</option>
            {brands.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm">Category</label>
          <input value={categoryFilter} onChange={e=>{ setCategoryFilter(e.target.value); setPage(1); }} placeholder="e.g. furniture" className="border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm">Min Price</label>
          <input value={minPrice} onChange={e=>setMinPrice(e.target.value)} placeholder="e.g. 100000" className="border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm">Max Price</label>
          <input value={maxPrice} onChange={e=>setMaxPrice(e.target.value)} placeholder="e.g. 500000" className="border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm">Sort</label>
          <select value={sortBy} onChange={e=>setSortBy(e.target.value)} className="border p-2 rounded">
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>

        <div>
          <label className="block text-sm">Order</label>
          <select value={sortOrder} onChange={e=>setSortOrder(e.target.value)} className="border p-2 rounded">
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>

        <div>
          <label className="block text-sm">Per page</label>
          <select value={limit} onChange={e=>{ setLimit(parseInt(e.target.value)); setPage(1); }} className="border p-2 rounded">
            <option value={4}>4</option>
            <option value={6}>6</option>
            <option value={12}>12</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded overflow-hidden relative group">
            <img src={p.image || '/img/image 1.png'} alt={p.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.desc}</p>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <div className="text-xl font-bold">{p.price}</div>
                  {p.oldPrice && <div className="text-sm line-through">{p.oldPrice}</div>}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition flex gap-2">
                  <button onClick={()=>openEdit(p)} className="px-2 py-1 border rounded">Edit</button>
                  <button onClick={()=>handleDelete(p.id)} className="px-2 py-1 border rounded">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <button disabled={page<=1} onClick={()=>setPage(page-1)} className="px-3 py-1 border rounded disabled:opacity-50">Prev</button>
        <span>Page {page} / {totalPages}</span>
        <button disabled={page>=totalPages} onClick={()=>setPage(page+1)} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded p-6 w-full max-w-lg">
            <h3 className="text-xl font-semibold mb-4">{editing ? "Update Product" : "Add Product"}</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm">Name</label>
                <input required value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="border p-2 rounded w-full" />
              </div>
              <div>
                <label className="block text-sm">Description</label>
                <input value={form.desc} onChange={e=>setForm({...form, desc: e.target.value})} className="border p-2 rounded w-full" />
              </div>
              <div>
                <label className="block text-sm">Price (use digits only or include currency)</label>
                <input value={form.price} onChange={e=>setForm({...form, price: e.target.value})} className="border p-2 rounded w-full" />
              </div>
              <div>
                <label className="block text-sm">Brand</label>
                <input value={form.brand} onChange={e=>setForm({...form, brand: e.target.value})} className="border p-2 rounded w-full" />
              </div>
              <div>
                <label className="block text-sm">Category</label>
                <input value={form.category} onChange={e=>setForm({...form, category: e.target.value})} className="border p-2 rounded w-full" />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button type="button" onClick={()=>setShowModal(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-yellow-600 text-white rounded">{editing ? "Update" : "Add"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
