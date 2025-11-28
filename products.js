const products = [
  // --- ELECTRONICS ---
  {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones",
    price: 149.99,
    description: "Premium wireless headphones with active noise cancellation and rich bass.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 284,
    inStock: true
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 89.99,
    description: "Lightweight smartwatch with sleep tracking, heart-rate monitoring, and GPS.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    reviewCount: 190,
    inStock: true
  },
  {
    id: 3,
    title: "Portable Bluetooth Speaker",
    price: 59.99,
    description: "Compact, waterproof speaker with powerful bass and 12-hour playback.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop",
    rating: 4.2,
    reviewCount: 132,
    inStock: false
  },
  {
    id: 4,
    title: "4K Ultra HD Monitor",
    price: 299.99,
    description: "27-inch 4K IPS display with vibrant colors and slim bezels.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 97,
    inStock: true
  },
  {
    id: 5,
    title: "Mechanical Gaming Keyboard",
    price: 79.99,
    description: "RGB backlit mechanical keyboard with tactile switches for fast response.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviewCount: 215,
    inStock: true
  },
  {
    id: 6,
    title: "Professional DSLR Camera",
    price: 899.99,
    description: "High-resolution DSLR camera with interchangeable lenses and 4K video.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 160,
    inStock: true
  },
  {
    id: 7,
    title: "Smartphone Gimbal Stabilizer",
    price: 129.99,
    description: "3-axis handheld gimbal for smooth video recording on smartphones.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1596457389025-a8335043a598?q=80&w=1000&auto=format&fit=crop",
    rating: 4.3,
    reviewCount: 45,
    inStock: true
  },
  {
    id: 8,
    title: "Retro Polaroid Camera",
    price: 99.99,
    description: "Classic instant camera with autofocus and double exposure features.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 310,
    inStock: true
  },
  {
    id: 9,
    title: "Drone with 4K Camera",
    price: 499.99,
    description: "Foldable drone with 30-minute flight time and obstacle avoidance.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d450d7?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 88,
    inStock: true
  },
  {
    id: 10,
    title: "Wireless Charging Pad",
    price: 24.99,
    description: "Fast-charging wireless pad compatible with all Qi-enabled devices.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?q=80&w=1000&auto=format&fit=crop",
    rating: 4.1,
    reviewCount: 220,
    inStock: true
  },

  // --- FURNITURE & HOME ---
  {
    id: 11,
    title: "Ergonomic Office Chair",
    price: 129.99,
    description: "Comfortable office chair with lumbar support and breathable mesh.",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 342,
    inStock: true
  },
  {
    id: 12,
    title: "Modern Table Lamp",
    price: 39.99,
    description: "Minimalist LED table lamp with warm adjustable brightness.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473888900-52e1adad54ac?q=80&w=1000&auto=format&fit=crop",
    rating: 4.1,
    reviewCount: 85,
    inStock: true
  },
  {
    id: 13,
    title: "Mid-Century Sofa",
    price: 899.99,
    description: "Velvet 3-seater sofa with wooden legs and classic design.",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 56,
    inStock: false
  },
  {
    id: 14,
    title: "Wooden Coffee Table",
    price: 149.99,
    description: "Solid oak coffee table with a natural finish and lower shelf.",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviewCount: 112,
    inStock: true
  },
  {
    id: 15,
    title: "Ceramic Plant Pot",
    price: 19.99,
    description: "Handcrafted ceramic pot, perfect for indoor succulents.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 401,
    inStock: true
  },
  {
    id: 16,
    title: "Essential Oil Diffuser",
    price: 34.99,
    description: "Ultrasonic aromatherapy diffuser with LED color changing lights.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    reviewCount: 190,
    inStock: true
  },
  {
    id: 17,
    title: "Luxury Bedding Set",
    price: 120.00,
    description: "100% Egyptian cotton sheets with a 600 thread count.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1629079447841-d6d764424601?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 95,
    inStock: true
  },
  {
    id: 18,
    title: "Wall Art Canvas",
    price: 45.00,
    description: "Abstract modern art print on high-quality canvas.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb39279c23?q=80&w=1000&auto=format&fit=crop",
    rating: 4.3,
    reviewCount: 67,
    inStock: true
  },
  {
    id: 19,
    title: "Bamboo Cutting Board",
    price: 22.99,
    description: "Organic bamboo cutting board with juice grooves and non-slip feet.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1624823183488-29431f479d2b?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 230,
    inStock: true
  },
  {
    id: 20,
    title: "Standing Desk",
    price: 350.00,
    description: "Electric adjustable height standing desk with memory settings.",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 80,
    inStock: true
  },

  // --- FASHION ---
  {
    id: 21,
    title: "Classic Denim Jacket",
    price: 69.99,
    description: "Vintage style denim jacket with warm sherpa lining.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviewCount: 150,
    inStock: true
  },
  {
    id: 22,
    title: "Leather Satchel Bag",
    price: 120.00,
    description: "Handmade leather satchel with adjustable strap and laptop compartment.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 90,
    inStock: true
  },
  {
    id: 23,
    title: "Aviator Sunglasses",
    price: 15.99,
    description: "Classic gold-frame aviator sunglasses with UV protection.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop",
    rating: 4.2,
    reviewCount: 300,
    inStock: true
  },
  {
    id: 24,
    title: "Men's Wristwatch",
    price: 199.99,
    description: "Minimalist analog watch with a genuine leather strap.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 110,
    inStock: true
  },
  {
    id: 25,
    title: "Cotton Crew Neck T-Shirt",
    price: 19.99,
    description: "Premium soft cotton t-shirt available in multiple colors.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    reviewCount: 500,
    inStock: true
  },
  {
    id: 26,
    title: "Canvas Sneakers",
    price: 49.99,
    description: "Low-top canvas sneakers with rubber soles.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop",
    rating: 4.3,
    reviewCount: 220,
    inStock: false
  },
  {
    id: 27,
    title: "Silk Scarf",
    price: 29.99,
    description: "Elegant floral print silk scarf.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1586078130702-d208859b6223?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 75,
    inStock: true
  },
  {
    id: 28,
    title: "Winter Wool Beanie",
    price: 14.99,
    description: "Warm knitted beanie with fleece lining.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviewCount: 180,
    inStock: true
  },
  {
    id: 29,
    title: "Leather Wallet",
    price: 39.99,
    description: "Slim bi-fold leather wallet with RFID blocking.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1627123424574-181ce5171c98?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 140,
    inStock: true
  },
  {
    id: 30,
    title: "Hiking Boots",
    price: 110.00,
    description: "Waterproof hiking boots with high-traction soles.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 95,
    inStock: true
  },

  // --- SPORTS & OUTDOORS ---
  {
    id: 31,
    title: "Running Shoes",
    price: 69.99,
    description: "Lightweight shoes with cushioned soles designed for long-distance running.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    rating: 4.3,
    reviewCount: 178,
    inStock: true
  },
  {
    id: 32,
    title: "Stainless Steel Water Bottle",
    price: 24.99,
    description: "Insulated bottle that keeps drinks cold for 24 hours and hot for 12.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1602143407151-01114192003f?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviewCount: 156,
    inStock: true
  },
  {
    id: 33,
    title: "Yoga Mat",
    price: 29.99,
    description: "Non-slip yoga mat with 8mm cushioning for extra comfort.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 203,
    inStock: false
  },
  {
    id: 34,
    title: "Adjustable Dumbbells",
    price: 199.99,
    description: "Set of adjustable dumbbells ranging from 5 to 50 lbs.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 60,
    inStock: true
  },
  {
    id: 35,
    title: "Camping Tent",
    price: 149.99,
    description: "4-person waterproof camping tent with easy setup.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviewCount: 88,
    inStock: true
  },
  {
    id: 36,
    title: "Tennis Racket",
    price: 89.99,
    description: "Carbon fiber tennis racket for professional performance.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1000&auto=format&fit=crop",
    rating: 4.2,
    reviewCount: 45,
    inStock: true
  },
  {
    id: 37,
    title: "Cycling Helmet",
    price: 45.00,
    description: "Aerodynamic cycling helmet with ventilation and safety chin strap.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1557803175-29832262364c?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 120,
    inStock: true
  },
  {
    id: 38,
    title: "Skateboard",
    price: 55.00,
    description: "Pro-grade maple wood skateboard with durable wheels.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1520045864981-8fee18241614?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 210,
    inStock: true
  },
  {
    id: 39,
    title: "Basketball",
    price: 29.99,
    description: "Official size and weight indoor/outdoor basketball.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1519861531473-92002639313a?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 300,
    inStock: true
  },
  {
    id: 40,
    title: "Sleeping Bag",
    price: 59.99,
    description: "All-season sleeping bag suitable for temperatures down to 30°F.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1526725702345-bdda2b97ef73?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    reviewCount: 70,
    inStock: true
  },

  // --- BEAUTY & GROCERY ---
  {
    id: 41,
    title: "Premium Coffee Beans",
    price: 14.99,
    description: "Freshly roasted Arabica beans sourced from Colombian farms.",
    category: "Grocery",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 412,
    inStock: true
  },
  {
    id: 42,
    title: "Organic Green Tea",
    price: 12.99,
    description: "Pack of 50 organic green tea bags rich in antioxidants.",
    category: "Grocery",
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviewCount: 150,
    inStock: true
  },
  {
    id: 43,
    title: "Face Serum",
    price: 25.00,
    description: "Hydrating face serum with Hyaluronic acid and Vitamin C.",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 230,
    inStock: true
  },
  {
    id: 44,
    title: "Handmade Soap Bar",
    price: 8.99,
    description: "Lavender and chamomile handmade soap for sensitive skin.",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 110,
    inStock: true
  },
  {
    id: 45,
    title: "Makeup Brush Set",
    price: 22.50,
    description: "12-piece professional makeup brush set with travel pouch.",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=1000&auto=format&fit=crop",
    rating: 4.3,
    reviewCount: 180,
    inStock: true
  },
  {
    id: 46,
    title: "Scented Candle",
    price: 18.00,
    description: "Vanilla bean scented soy wax candle with 40-hour burn time.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1602825389660-3f566c30a6df?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviewCount: 300,
    inStock: true
  },
  {
    id: 47,
    title: "Dark Chocolate Bar",
    price: 5.99,
    description: "70% cocoa dark chocolate with sea salt and caramel.",
    category: "Grocery",
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 500,
    inStock: true
  },
  {
    id: 48,
    title: "Perfume Bottle",
    price: 65.00,
    description: "Floral scent perfume with notes of jasmine and rose.",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    reviewCount: 90,
    inStock: true
  },
  {
    id: 49,
    title: "Olive Oil",
    price: 16.99,
    description: "Extra virgin cold-pressed olive oil from Italy.",
    category: "Grocery",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 140,
    inStock: true
  },
  {
    id: 50,
    title: "Bath Towel Set",
    price: 35.00,
    description: "Plush organic cotton bath towel set in charcoal grey.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1616627547584-978bc83dccae?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 200,
    inStock: true
  }
];

module.exports = products;