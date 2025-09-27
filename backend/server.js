const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;


// Storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname); // get original extension
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + ext;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage });



async function seedProducts() {
  const count = await Product.countDocuments();
  if (count === 0) {
    const products = [
      {
        "id": 1,
        "name": "Syltherine",
        "desc": "Stylish cafe chair",
        "oldPrice": "Rp 3.500.000",
        "price": "Rp 2.500.000",
        "priceNum": 2500000,
        "discount": "-30%",
        "image": "/img/image 1.png",
        "brand": "Syltherine",
        "category": "furniture"
      },
      {
        "id": 2,
        "name": "Leviosa",
        "desc": "Stylish cafe chair",
        "oldPrice": "",
        "price": "Rp 2.500.000",
        "priceNum": 2500000,
        "discount": "",
        "image": "/img/images (3).png",
        "brand": "Leviosa",
        "category": "furniture"
      },
      {
        "id": 3,
        "name": "Lolito",
        "desc": "Luxury big sofa",
        "oldPrice": "Rp 14.000.000",
        "price": "Rp 7.000.000",
        "priceNum": 7000000,
        "discount": "-50%",
        "image": "/img/images (1).png",
        "brand": "Lolito",
        "category": "furniture"
      },
      {
        "id": 4,
        "name": "Respira",
        "desc": "Outdoor bar table and stool",
        "oldPrice": "",
        "price": "Rp 500.000",
        "priceNum": 500000,
        "discount": "",
        "image": "/img/images (2).png",
        "brand": "Respira",
        "category": "furniture"
      },
      {
        "id": 5,
        "name": "Grifo",
        "desc": "Night lamp",
        "oldPrice": "",
        "price": "Rp 1.500.000",
        "priceNum": 1500000,
        "discount": "",
        "image": "/img/images (4).png",
        "brand": "Grifo",
        "category": "furniture"
      },
      {
        "id": 6,
        "name": "Muggo",
        "desc": "Small mug",
        "oldPrice": "",
        "price": "Rp 150.000",
        "priceNum": 150000,
        "discount": "",
        "image": "/img/images (5).png",
        "brand": "Muggo",
        "category": "furniture"
      },
      {
        "id": 7,
        "name": "Pingky",
        "desc": "Cute bed set",
        "oldPrice": "Rp 14.000.000",
        "price": "Rp 7.000.000",
        "priceNum": 7000000,
        "discount": "-50%",
        "image": "/img/images (6).png",
        "brand": "Pingky",
        "category": "furniture"
      },
      {
        "id": 8,
        "name": "Potty",
        "desc": "Minimalist flower pot",
        "oldPrice": "",
        "price": "Rp 500.000",
        "priceNum": 500000,
        "discount": "",
        "image": "img/images.png",
        "brand": "Potty",
        "category": "furniture"
      }
    ];

    await Product.insertMany(products);
    console.log("✅ Products Seeded Successfully!");
  } else {
    console.log("⚡ Products already exist, skipping seeding.");
  }
}



//This is my friend's database, my free sever is not running....
mongoose.connect('mongodb+srv://satpalsingh:satpal12@shopDB.ickdeey.mongodb.net/?retryWrites=true&w=majority&appName=shopDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('MongoDB connected');

  // ✅ Seed Data
  await seedProducts();

}).catch(err => console.log(err));


const productSchema = new mongoose.Schema({
  name: String,
  desc: String,
  price: String,
  priceNum: Number,
  oldPrice: String,
  discount: String,
  brand: String,
  category: String,
  image: String
});

const Product = mongoose.model('Product', productSchema);

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.get('/', (req, res) => res.send('Welcome to Home Page'));

// GET products with pagination, filter, sort
app.get('/api/products', async (req, res) => {
  try {
    let { page = 1, limit = 8, sortBy, sortOrder = 'asc', brand, category, minPrice, maxPrice, search } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const filter = {};

    if (brand) filter.brand = brand;
    if (category) filter.category = category;
    if (minPrice) filter.priceNum = { ...filter.priceNum, $gte: parseInt(minPrice) };
    if (maxPrice) filter.priceNum = { ...filter.priceNum, $lte: parseInt(maxPrice) };
    if (search) filter.$or = [
      { name: { $regex: search, $options: 'i' } },
      { desc: { $regex: search, $options: 'i' } }
    ];

    const total = await Product.countDocuments(filter);

    let query = Product.find(filter)
      .skip((page - 1) * limit)
      .limit(limit);

    if (sortBy) {
      const sortObj = {};
      sortObj[sortBy === 'price' ? 'priceNum' : sortBy] = sortOrder === 'asc' ? 1 : -1;
      query = query.sort(sortObj);
    }

    const products = await query.exec();
    res.json({ data: products, page, limit, total, totalPages: Math.ceil(total / limit) });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single product
app.get('/api/products/:id', async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ error: 'Not found' });
    res.json(p);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE product with image
app.post('/api/products', upload.single('image'), async (req, res) => {
  try {
    const body = req.body;
    const newP = new Product({
      name: body.name || 'Unnamed',
      desc: body.desc || '',
      price: body.price || 'Rp 0',
      priceNum: parseInt((body.priceNum || body.price || '0').toString().replace(/[^\d]/g, '')) || 0,
      oldPrice: body.oldPrice || '',
      discount: body.discount || '',
      brand: body.brand || 'Generic',
      category: body.category || 'furniture',
      image: req.file ? `/uploads/${req.file.filename}` : '/img/image 1.png'
    });

    await newP.save();
    res.status(201).json(newP);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE product with optional new image
app.put('/api/products/:id', upload.single('image'), async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ error: 'Not found' });

    const body = req.body;
    p.name = body.name || p.name;
    p.desc = body.desc || p.desc;
    p.price = body.price || p.price;
    p.priceNum = parseInt((body.priceNum || body.price || p.price || '0').toString().replace(/[^\d]/g, '')) || p.priceNum;
    p.brand = body.brand || p.brand;
    p.category = body.category || p.category;
    p.oldPrice = body.oldPrice || p.oldPrice;
    p.discount = body.discount || p.discount;

    if (req.file) p.image = `/uploads/${req.file.filename}`;

    await p.save();
    res.json(p);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE product
app.delete('/api/products/:id', async (req, res) => {
  try {
    const removed = await Product.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ error: 'Not found' });
    res.json({ removed });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// backend/server.js ya index.js me
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });
    console.log("New subscriber:", email);

    res.json({ message: "Thank you for subscribing! 🎉" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
