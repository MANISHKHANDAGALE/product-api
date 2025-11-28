const express = require('express');
const cors = require('cors');
const products = require('./products');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce API! Access products at /products');
});

// Get All Products
app.get('/products', (req, res) => {
  res.json(products);
});

// Get Single Product by ID
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});