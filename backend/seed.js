const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  desc: String,
  oldPrice: String,
  price: String,
  priceNum: Number,
  discount: String,
  image: String,
  brand: String,
  category: String
});

const Product = mongoose.model('Product', productSchema);

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
    "image": "/public/img/images (3).png",
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
    "image": "/public/img/images (1).png",
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
    "image": "/public/img/images (2).png",
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
    "image": "/public/img/images (4).png",
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
    "image": "/public/img/images (5).png",
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
    "image": "/public/img/images (6).png",
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
    "image": "/public/img/images.png",
    "brand": "Potty",
    "category": "furniture"
  }
];

async function seedDB() {
  try {
    await Product.deleteMany({});
    console.log('Old products cleared');

    await Product.insertMany(products);
    console.log('Products inserted successfully');

    mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seedDB();
