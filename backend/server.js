const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

// serve frontend static (optional)
app.use('/assets', express.static(path.join(__dirname, '..', 'frontend', 'public')));

const DATA_FILE = path.join(__dirname, 'products.json');

function readData(){
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}
function writeData(data){
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

app.get('/', (req, res) => {
  res.send('Welcome to Home Page');
});

app.get('/api/products', (req, res) => {
  let products = readData();
  let { page=1, limit=6, sortBy, sortOrder='asc', brand, category, minPrice, maxPrice, search } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);

  // filtering
  if (brand) {
    products = products.filter(p => (p.brand || '').toLowerCase() === brand.toLowerCase());
  }
  if (category) {
    products = products.filter(p => (p.category || '').toLowerCase() === category.toLowerCase());
  }
  if (minPrice) {
    products = products.filter(p => p.priceNum >= parseInt(minPrice));
  }
  if (maxPrice) {
    products = products.filter(p => p.priceNum <= parseInt(maxPrice));
  }
  if (search) {
    const q = search.toLowerCase();
    products = products.filter(p => (p.name+ ' ' + (p.desc||'')).toLowerCase().includes(q));
  }

  // sorting
  if (sortBy) {
    products.sort((a,b)=>{
      let A = a[sortBy==='price'?'priceNum':sortBy];
      let B = b[sortBy==='price'?'priceNum':sortBy];
      if (typeof A === 'string') A = A.toLowerCase();
      if (typeof B === 'string') B = B.toLowerCase();
      if (A < B) return sortOrder === 'asc' ? -1 : 1;
      if (A > B) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }

  const total = products.length;
  const start = (page-1)*limit;
  const paged = products.slice(start, start+limit);

  res.json({ data: paged, page, limit, total, totalPages: Math.ceil(total/limit) });
});

// GET single
app.get('/api/products/:id', (req, res) => {
  const products = readData();
  const id = parseInt(req.params.id);
  const p = products.find(x=>x.id===id);
  if (!p) return res.status(404).json({error:'Not found'});
  res.json(p);
});

// CREATE
app.post('/api/products', (req, res) => {
  const products = readData();
  const body = req.body;
  const newId = products.reduce((m,x)=> Math.max(m, x.id), 0) + 1;
  const newP = {
    id: newId,
    name: body.name || 'Unnamed',
    desc: body.desc || '',
    price: body.price || 'Rp 0',
    priceNum: parseInt((body.priceNum || body.price || '0').toString().replace(/[^\d]/g,'')) || 0,
    oldPrice: body.oldPrice || '',
    discount: body.discount || '',
    image: body.image || '/img/image 1.png',
    brand: body.brand || 'Generic',
    category: body.category || 'furniture'
  };
  products.push(newP);
  writeData(products);
  res.status(201).json(newP);
});

// UPDATE
app.put('/api/products/:id', (req, res) => {
  const products = readData();
  const id = parseInt(req.params.id);
  const idx = products.findIndex(x=>x.id===id);
  if (idx===-1) return res.status(404).json({error:'Not found'});
  const body = req.body;
  const p = products[idx];
  p.name = body.name || p.name;
  p.desc = body.desc || p.desc;
  p.price = body.price || p.price;
  p.priceNum = parseInt((body.priceNum || body.price || p.price || '0').toString().replace(/[^\d]/g,'')) || p.priceNum;
  p.brand = body.brand || p.brand;
  p.category = body.category || p.category;
  p.image = body.image || p.image;
  writeData(products);
  res.json(p);
});

// DELETE
app.delete('/api/products/:id', (req, res) => {
  let products = readData();
  const id = parseInt(req.params.id);
  const idx = products.findIndex(x=>x.id===id);
  if (idx===-1) return res.status(404).json({error:'Not found'});
  const removed = products.splice(idx,1)[0];
  writeData(products);
  res.json({ removed });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
