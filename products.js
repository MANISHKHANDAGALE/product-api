const products = [
  // ============================
  // 1. men's clothing (10 items)
  // ============================
  {
    id: 1,
    title: "Classic Cotton Crew Neck T-Shirt",
    price: 19.99,
    description: "Premium soft cotton t-shirt in navy blue, breathable and durable.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 120,
    inStock: true
  },
  {
    id: 2,
    title: "Vintage Denim Trucker Jacket",
    price: 79.99,
    description: "Classic trucker style denim jacket with warm sherpa lining.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 85,
    inStock: true
  },
  {
    id: 3,
    title: "Slim Fit Chino Pants",
    price: 45.00,
    description: "Versatile beige chinos suitable for casual or office wear.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviewCount: 200,
    inStock: true
  },
  {
    id: 4,
    title: "Heavyweight Hoodie",
    price: 55.00,
    description: "Thick fleece hoodie in charcoal grey, perfect for winter.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 310,
    inStock: true
  },
  {
    id: 5,
    title: "Formal Oxford Shirt",
    price: 39.99,
    description: "Crisp white button-down shirt, wrinkle-resistant.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 150,
    inStock: true
  },
  {
    id: 6,
    title: "Athletic Joggers",
    price: 35.00,
    description: "Tapered fit joggers with zippered pockets for gym or lounge.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1552160753-117159d453fc?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 95,
    inStock: true
  },
  {
    id: 7,
    title: "Leather Biker Jacket",
    price: 180.00,
    description: "Genuine leather jacket with asymmetrical zipper and silver hardware.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 60,
    inStock: false
  },
  {
    id: 8,
    title: "Wool Blend Peacoat",
    price: 120.00,
    description: "Double-breasted wool coat for a sophisticated winter look.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 45,
    inStock: true
  },
  {
    id: 9,
    title: "Casual Plaid Flannel",
    price: 29.99,
    description: "Soft brushed flannel shirt in red and black buffalo check.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1629795079441-2b0124806257?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 180,
    inStock: true
  },
  {
    id: 10,
    title: "Linen Summer Shorts",
    price: 24.99,
    description: "Breathable linen shorts with a drawstring waist.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    reviewCount: 75,
    inStock: true
  },

  // ============================
  // 2. Women (10 items)
  // ============================
  {
    id: 11,
    title: "Summer Floral Maxi Dress",
    price: 59.99,
    description: "Lightweight and flowy dress with a vibrant floral print.",
    category: "Women",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 150,
    inStock: true
  },
  {
    id: 12,
    title: "Professional Beige Blazer",
    price: 89.99,
    description: "Tailored blazer perfect for business casual looks.",
    category: "Women",
    image: "https://images.unsplash.com/photo-1548624149-f3ca1f43628d?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 92,
    inStock: true
  },
  {
    id: 13,
    title: "High-Waist Mom Jeans",
    price: 49.99,
    description: "Vintage-inspired denim with a comfortable high waist fit.",
    category: "Women",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 310,
    inStock: false
  },
  {
    id: 14,
    title: "Silk Satin Blouse",
    price: 65.00,
    description: "Elegant emerald green blouse suitable for evening wear.",
    category: "Women",
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 88,
    inStock: true
  },
  {
    id: 15,
    title: "Cozy Knit Sweater",
    price: 45.00,
    description: "Oversized chunky knit sweater in cream.",
    category: "Women",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 400,
    inStock: true
  },
  {
    id: 16,
    title: "Pencil Skirt",
    price: 35.00,
    description: "Black midi pencil skirt, stretchy and comfortable.",
    category: "Women",
    image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviewCount: 60,
    inStock: true
  },
  {
    id: 17,
    title: "Bohemian Wrap Dress",
    price: 55.00,
    description: "Red wrap dress with ruffled sleeves.",
    category: "Women",
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 120,
    inStock: true
  },
  {
    id: 18,
    title: "Faux Leather Leggings",
    price: 29.99,
    description: "High-shine leggings that add edge to any outfit.",
    category: "Women",
    image: "https://images.unsplash.com/photo-1548545814-7e889d13db79?auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    reviewCount: 200,
    inStock: true
  },
  {
    id: 19,
    title: "Trench Coat",
    price: 110.00,
    description: "Classic double-breasted trench coat with belt.",
    category: "Women",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 150,
    inStock: true
  },
  {
    id: 20,
    title: "Activewear Leggings Set",
    price: 60.00,
    description: "Matching sports bra and leggings in pastel pink.",
    category: "Women",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 300,
    inStock: true
  },

  // ============================
  // 3. Jewelry (10 items)
  // ============================
  {
    id: 21,
    title: "Minimalist Gold Necklace",
    price: 120.00,
    description: "14k gold plated chain with a delicate pendant.",
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 55,
    inStock: true
  },
  {
    id: 22,
    title: "Diamond Stud Earrings",
    price: 299.99,
    description: "Sparkling lab-grown diamond studs set in silver.",
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 40,
    inStock: true
  },
  {
    id: 23,
    title: "Silver Engagement Ring",
    price: 450.00,
    description: "Classic solitaire cut ring with a platinum band.",
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    reviewCount: 20,
    inStock: true
  },
  {
    id: 24,
    title: "Pearl Bracelet",
    price: 80.00,
    description: "Freshwater pearls strung on a silk cord.",
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 70,
    inStock: true
  },
  {
    id: 25,
    title: "Rose Gold Hoop Earrings",
    price: 45.00,
    description: "Large lightweight hoops with a rose gold finish.",
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a51?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 110,
    inStock: true
  },
  {
    id: 26,
    title: "Men's Chain Bracelet",
    price: 60.00,
    description: "Stainless steel cuban link bracelet.",
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 85,
    inStock: true
  },
  {
    id: 27,
    title: "Turquoise Boho Ring",
    price: 25.00,
    description: "Statement ring featuring a large turquoise stone.",
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1602752250055-567f4a7631f4?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviewCount: 45,
    inStock: true
  },
  {
    id: 28,
    title: "Layered Choker Necklace",
    price: 35.00,
    description: "Trendy multi-layer choker set.",
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    reviewCount: 90,
    inStock: true
  },
  {
    id: 29,
    title: "Vintage Brooch",
    price: 40.00,
    description: "Antique style brooch with crystal embellishments.",
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 30,
    inStock: true
  },
  {
    id: 30,
    title: "Crystal Pendant",
    price: 55.00,
    description: "Healing amethyst crystal on a silver chain.",
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 130,
    inStock: true
  },

  // ============================
  // 4. Electronics (10 items)
  // ============================
  {
    id: 31,
    title: "4K Drone with Camera",
    price: 499.99,
    description: "High-performance drone with stabilization and auto-return.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d450d7?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 112,
    inStock: true
  },
  {
    id: 32,
    title: "Smart Home Assistant Hub",
    price: 99.99,
    description: "Voice-controlled hub to manage your smart home devices.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 340,
    inStock: true
  },
  {
    id: 33,
    title: "Professional DSLR Camera",
    price: 899.99,
    description: "24MP camera with interchangeable lenses for pro photography.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 88,
    inStock: true
  },
  {
    id: 34,
    title: "4K Computer Monitor",
    price: 299.00,
    description: "27-inch IPS display with ultra-thin bezels.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 105,
    inStock: true
  },
  {
    id: 35,
    title: "VR Headset",
    price: 350.00,
    description: "Immersive virtual reality headset with controllers.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 210,
    inStock: true
  },
  {
    id: 36,
    title: "Action Camera",
    price: 150.00,
    description: "Waterproof action camera for sports and vlogging.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1563297007-0686b7003af7?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 180,
    inStock: true
  },
  {
    id: 37,
    title: "Smart Thermostat",
    price: 129.99,
    description: "Wifi enabled thermostat to control home temperature remotely.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1563396983906-b3795482a59a?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 95,
    inStock: true
  },
  {
    id: 38,
    title: "Tablet Pro 11-inch",
    price: 799.00,
    description: "Powerful tablet for creatives and professionals.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 400,
    inStock: true
  },
  {
    id: 39,
    title: "Mini Projector",
    price: 89.99,
    description: "Portable 1080p projector for movie nights.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1535007813616-6c5897148d40?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviewCount: 70,
    inStock: true
  },
  {
    id: 40,
    title: "E-Reader",
    price: 119.00,
    description: "Glare-free display e-reader holding thousands of books.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1555230972-246e7f86d8b9?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 600,
    inStock: true
  },

  // ============================
  // 5. Bags (10 items)
  // ============================
  {
    id: 41,
    title: "Leather Laptop Backpack",
    price: 110.00,
    description: "Durable genuine leather backpack with a dedicated laptop sleeve.",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 130,
    inStock: true
  },
  {
    id: 42,
    title: "Canvas Travel Tote",
    price: 35.00,
    description: "Spacious tote bag perfect for beach trips or grocery shopping.",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 200,
    inStock: true
  },
  {
    id: 43,
    title: "Hardshell Rolling Suitcase",
    price: 149.99,
    description: "Lightweight carry-on with 360-degree spinner wheels.",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1565026057447-bc072a89f53b?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 95,
    inStock: true
  },
  {
    id: 44,
    title: "Crossbody Messenger Bag",
    price: 55.00,
    description: "Urban style messenger bag with adjustable strap.",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 80,
    inStock: true
  },
  {
    id: 45,
    title: "Luxury Clutch Purse",
    price: 85.00,
    description: "Evening clutch with gold detailing.",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1566150905458-1bf17061d41d?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 40,
    inStock: true
  },
  {
    id: 46,
    title: "Hiking Backpack",
    price: 120.00,
    description: "Water-resistant 40L backpack for trekking.",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 150,
    inStock: true
  },
  {
    id: 47,
    title: "Duffel Gym Bag",
    price: 45.00,
    description: "Spacious duffel with shoe compartment.",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviewCount: 110,
    inStock: true
  },
  {
    id: 48,
    title: "Fanny Pack / Belt Bag",
    price: 25.00,
    description: "Trendy street style waist bag.",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1574365760882-a059c3a3c200?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 220,
    inStock: true
  },
  {
    id: 49,
    title: "Straw Beach Bag",
    price: 30.00,
    description: "Woven straw bag perfect for summer vacations.",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 90,
    inStock: true
  },
  {
    id: 50,
    title: "Laptop Sleeve Case",
    price: 20.00,
    description: "Padded protective sleeve for 13-inch laptops.",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 300,
    inStock: true
  },

  // ============================
  // 6. Accessories (10 items)
  // ============================
  {
    id: 51,
    title: "Aviator Sunglasses",
    price: 25.99,
    description: "Classic metal frame sunglasses with UV protection.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 220,
    inStock: true
  },
  {
    id: 52,
    title: "Leather Bi-Fold Wallet",
    price: 45.00,
    description: "Slim minimalist wallet made from full-grain leather.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-181ce5171c98?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 180,
    inStock: true
  },
  {
    id: 53,
    title: "Luxury Analog Watch",
    price: 199.99,
    description: "Elegant timepiece with a stainless steel strap.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 75,
    inStock: true
  },
  {
    id: 54,
    title: "Leather Belt",
    price: 35.00,
    description: "Brown leather belt with a brass buckle.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 140,
    inStock: true
  },
  {
    id: 55,
    title: "Silk Scarf",
    price: 28.00,
    description: "Patterned silk scarf for neck or hair.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1586078130702-d208859b6223?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 60,
    inStock: true
  },
  {
    id: 56,
    title: "Wool Fedora Hat",
    price: 50.00,
    description: "Wide-brimmed felt hat in olive green.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 95,
    inStock: true
  },
  {
    id: 57,
    title: "Knitted Beanie",
    price: 18.00,
    description: "Warm winter beanie with a cuff.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 300,
    inStock: true
  },
  {
    id: 58,
    title: "Silk Necktie",
    price: 25.00,
    description: "Formal navy blue tie with subtle texture.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1589756823695-278bc35669b2?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 50,
    inStock: true
  },
  {
    id: 59,
    title: "Blue Light Blocking Glasses",
    price: 22.00,
    description: "Protect your eyes from screen strain.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 400,
    inStock: true
  },
  {
    id: 60,
    title: "Leather Gloves",
    price: 40.00,
    description: "Lined leather gloves for winter warmth.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 80,
    inStock: true
  },

  // ============================
  // 7. Home (10 items)
  // ============================
  {
    id: 61,
    title: "Mid-Century Modern Sofa",
    price: 850.00,
    description: "Velvet 3-seater couch with wooden tapered legs.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 45,
    inStock: true
  },
  {
    id: 62,
    title: "Ceramic Table Lamp",
    price: 55.00,
    description: "Handcrafted ceramic lamp with a linen shade.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473888900-52e1adad54ac?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 110,
    inStock: true
  },
  {
    id: 63,
    title: "Indoor Potted Plant",
    price: 29.99,
    description: "Live Snake Plant in a modern white pot, low maintenance.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 300,
    inStock: true
  },
  {
    id: 64,
    title: "Wooden Coffee Table",
    price: 150.00,
    description: "Rustic oak wood coffee table with storage shelf.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 80,
    inStock: true
  },
  {
    id: 65,
    title: "Essential Oil Diffuser",
    price: 35.00,
    description: "Aromatherapy diffuser with LED lights.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 220,
    inStock: true
  },
  {
    id: 66,
    title: "Cotton Bed Sheets Set",
    price: 60.00,
    description: "400 thread count organic cotton sheets in grey.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1629079447841-d6d764424601?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 150,
    inStock: true
  },
  {
    id: 67,
    title: "Wall Art Canvas",
    price: 45.00,
    description: "Abstract modern art print.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb39279c23?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviewCount: 70,
    inStock: true
  },
  {
    id: 68,
    title: "Decorative Throw Pillow",
    price: 25.00,
    description: "Geometric pattern throw pillow for couch.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 180,
    inStock: true
  },
  {
    id: 69,
    title: "Scented Soy Candle",
    price: 20.00,
    description: "Vanilla and Sandalwood scented candle.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1602825389660-3f566c30a6df?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 400,
    inStock: true
  },
  {
    id: 70,
    title: "Kitchen Knife Set",
    price: 89.99,
    description: "Stainless steel chef knife set with block.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 120,
    inStock: true
  },

  // ============================
  // 8. Gaming (10 items)
  // ============================
  {
    id: 71,
    title: "Mechanical Gaming Keyboard",
    price: 89.99,
    description: "RGB backlit mechanical keyboard with blue switches.",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 250,
    inStock: true
  },
  {
    id: 72,
    title: "Wireless Gaming Controller",
    price: 59.99,
    description: "Ergonomic controller compatible with PC and consoles.",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 190,
    inStock: true
  },
  {
    id: 73,
    title: "Gaming Headset",
    price: 75.00,
    description: "Surround sound headset with noise-canceling microphone.",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1610041321420-a595562b771e?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 140,
    inStock: true
  },
  {
    id: 74,
    title: "Ergonomic Gaming Chair",
    price: 220.00,
    description: "Reclining gaming chair with lumbar support.",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1616627988031-f912e383a2bf?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 100,
    inStock: true
  },
  {
    id: 75,
    title: "Gaming Mouse",
    price: 49.99,
    description: "High DPI optical mouse with programmable buttons.",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 300,
    inStock: true
  },
  {
    id: 76,
    title: "RGB Mouse Pad",
    price: 25.00,
    description: "Extended mouse pad with LED lighting edges.",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 150,
    inStock: true
  },
  {
    id: 77,
    title: "Curved Gaming Monitor",
    price: 350.00,
    description: "144Hz curved monitor for immersive gameplay.",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 80,
    inStock: true
  },
  {
    id: 78,
    title: "Next-Gen Console",
    price: 499.00,
    description: "Latest gaming console with 8K support.",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 1000,
    inStock: false
  },
  {
    id: 79,
    title: "Gaming Laptop",
    price: 1200.00,
    description: "Powerful laptop with RTX graphics card.",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 90,
    inStock: true
  },
  {
    id: 80,
    title: "Streaming Microphone",
    price: 120.00,
    description: "USB condenser microphone for streaming and podcasting.",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 200,
    inStock: true
  },

  // ============================
  // 9. Mobiles (10 items)
  // ============================
  {
    id: 81,
    title: "Smartphone Pro Max",
    price: 1099.00,
    description: "Latest generation smartphone with triple lens camera.",
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 500,
    inStock: true
  },
  {
    id: 82,
    title: "Android Flagship Phone",
    price: 899.00,
    description: "High refresh rate screen and all-day battery life.",
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 320,
    inStock: true
  },
  {
    id: 83,
    title: "Portable Power Bank",
    price: 39.99,
    description: "20,000mAh fast-charging power bank for all devices.",
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 450,
    inStock: true
  },
  {
    id: 84,
    title: "Wireless Charging Stand",
    price: 29.99,
    description: "Fast wireless charger stand for desk use.",
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1586772002130-b0f3fda62b3d?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 180,
    inStock: true
  },
  {
    id: 85,
    title: "Rugged Phone Case",
    price: 19.99,
    description: "Shockproof case with kickstand.",
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1588661730048-c7e6c989d2c1?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 600,
    inStock: true
  },
  {
    id: 86,
    title: "Smartphone Gimbal",
    price: 110.00,
    description: "3-axis stabilizer for smooth video recording.",
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1596457389025-a8335043a598?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviewCount: 90,
    inStock: true
  },
  {
    id: 87,
    title: "Screen Protector Pack",
    price: 12.00,
    description: "Tempered glass screen protectors (Pack of 3).",
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1592839217316-5e580e0676f5?auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    reviewCount: 1000,
    inStock: true
  },
  {
    id: 88,
    title: "USB-C Fast Charger",
    price: 25.00,
    description: "30W power adapter with cable.",
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 300,
    inStock: true
  },
  {
    id: 89,
    title: "Car Phone Mount",
    price: 15.00,
    description: "Magnetic dashboard car mount.",
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1616423664074-907f8851ea83?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 400,
    inStock: true
  },
  {
    id: 90,
    title: "Selfie Stick Tripod",
    price: 20.00,
    description: "Bluetooth selfie stick with integrated tripod legs.",
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1531693251400-38df35776dc7?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviewCount: 150,
    inStock: true
  },

  // ============================
  // 10. Audio (10 items)
  // ============================
  {
    id: 91,
    title: "Noise-Cancelling Headphones",
    price: 249.99,
    description: "Over-ear wireless headphones with industry-leading ANC.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 600,
    inStock: true
  },
  {
    id: 92,
    title: "Bluetooth Speaker",
    price: 59.99,
    description: "Waterproof portable speaker with 12-hour battery.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 210,
    inStock: true
  },
  {
    id: 93,
    title: "True Wireless Earbuds",
    price: 129.00,
    description: "Compact earbuds with charging case and deep bass.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 150,
    inStock: true
  },
  {
    id: 94,
    title: "Vintage Record Player",
    price: 150.00,
    description: "Belt-drive turntable with built-in speakers.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1563330232-5711c1c65361?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 80,
    inStock: true
  },
  {
    id: 95,
    title: "Home Studio Monitor",
    price: 199.00,
    description: "Professional grade active studio monitor speaker.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1541604193435-22287d32c212?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 45,
    inStock: true
  },
  {
    id: 96,
    title: "Soundbar with Subwoofer",
    price: 250.00,
    description: "2.1 channel soundbar for home theater.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1595202686708-8e6d30d1d279?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 120,
    inStock: true
  },
  {
    id: 97,
    title: "Wired In-Ear Monitors",
    price: 99.00,
    description: "High fidelity IEMs for audiophiles.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1628151016004-e300843d5fb6?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 60,
    inStock: true
  },
  {
    id: 98,
    title: "Podcast Microphone Kit",
    price: 85.00,
    description: "Condenser mic with boom arm and pop filter.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 100,
    inStock: true
  },
  {
    id: 99,
    title: "Shower Speaker",
    price: 20.00,
    description: "Waterproof suction cup speaker.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    reviewCount: 250,
    inStock: true
  },
  {
    id: 100,
    title: "Headphone Stand",
    price: 15.00,
    description: "Aluminum stand to display headphones.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1601648764658-ad309e0535c5?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 90,
    inStock: true
  },

  // ============================
  // 11. Automotive (10 items)
  // ============================
  {
    id: 101,
    title: "Car Cleaning Kit",
    price: 34.99,
    description: "Complete microfiber cleaning set for interior and exterior.",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 120,
    inStock: true
  },
  {
    id: 102,
    title: "Digital Dash Cam",
    price: 89.99,
    description: "1080p HD dash camera with night vision and loop recording.",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 90,
    inStock: true
  },
  {
    id: 103,
    title: "Car Interior LED Lights",
    price: 24.99,
    description: "App-controlled RGB LED strips for car dashboard.",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviewCount: 80,
    inStock: true
  },
  {
    id: 104,
    title: "Portable Air Compressor",
    price: 45.00,
    description: "Digital tire inflator for cars and bikes.",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 150,
    inStock: true
  },
  {
    id: 105,
    title: "Car Vacuum Cleaner",
    price: 30.00,
    description: "Handheld high-power vacuum for car interiors.",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1552650272-b8a6b25aa643?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 200,
    inStock: true
  },
  {
    id: 106,
    title: "Trunk Organizer",
    price: 25.00,
    description: "Collapsible organizer to keep your trunk tidy.",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1590502160462-2d1265882e34?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 110,
    inStock: true
  },
  {
    id: 107,
    title: "Microfiber Towels Pack",
    price: 15.00,
    description: "Pack of 12 ultra-soft car wash towels.",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 300,
    inStock: true
  },
  {
    id: 108,
    title: "Car Seat Covers",
    price: 50.00,
    description: "Universal fit front seat covers.",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    reviewCount: 75,
    inStock: true
  },
  {
    id: 109,
    title: "Windshield Sun Shade",
    price: 12.99,
    description: "Foldable sun shade to keep car cool.",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1617195920950-1145bf9a9c78?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 180,
    inStock: true
  },
  {
    id: 110,
    title: "First Aid Kit Auto",
    price: 29.99,
    description: "Compact emergency first aid kit for vehicles.",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 100,
    inStock: true
  },

  // ============================
  // 12. Pet Supplies (10 items)
  // ============================
  {
    id: 111,
    title: "Orthopedic Dog Bed",
    price: 65.00,
    description: "Memory foam bed to support your pet's joints.",
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 220,
    inStock: true
  },
  {
    id: 112,
    title: "Interactive Cat Toy",
    price: 15.99,
    description: "Laser pointer and feather toy combo for endless fun.",
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1615486511484-92e172cc416d?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 150,
    inStock: true
  },
  {
    id: 113,
    title: "Stainless Steel Pet Bowl",
    price: 12.99,
    description: "Non-slip food and water bowl, dishwasher safe.",
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 300,
    inStock: true
  },
  {
    id: 114,
    title: "Retractable Dog Leash",
    price: 20.00,
    description: "16ft heavy duty retractable leash.",
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 180,
    inStock: true
  },
  {
    id: 115,
    title: "Cat Scratching Post",
    price: 35.00,
    description: "Sisal rope scratching post with hanging ball.",
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 120,
    inStock: true
  },
  {
    id: 116,
    title: "Pet Carrier Bag",
    price: 45.00,
    description: "Airline approved soft-sided pet carrier.",
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1608408891486-f5c8b98ef6e1?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 90,
    inStock: true
  },
  {
    id: 117,
    title: "Dog Chew Toys Pack",
    price: 18.00,
    description: "Durable rope toys for aggressive chewers.",
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 200,
    inStock: true
  },
  {
    id: 118,
    title: "Pet Grooming Glove",
    price: 10.00,
    description: "Silicone glove for shedding and grooming.",
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviewCount: 400,
    inStock: true
  },
  {
    id: 119,
    title: "Automatic Pet Feeder",
    price: 60.00,
    description: "Programmable feeder for timed meals.",
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1585837575652-267c041d77d4?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 80,
    inStock: true
  },
  {
    id: 120,
    title: "Dog Winter Coat",
    price: 25.00,
    description: "Warm waterproof vest for dogs.",
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 110,
    inStock: true
  },

  // ============================
  // 13. Food (10 items)
  // ============================
  {
    id: 121,
    title: "Arabica Coffee Beans",
    price: 18.99,
    description: "1lb bag of freshly roasted dark roast coffee beans.",
    category: "Food",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 400,
    inStock: true
  },
  {
    id: 122,
    title: "Organic Extra Virgin Olive Oil",
    price: 24.00,
    description: "Cold-pressed premium olive oil imported from Italy.",
    category: "Food",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 130,
    inStock: true
  },
  {
    id: 123,
    title: "Artisan Dark Chocolate",
    price: 8.50,
    description: "70% cocoa dark chocolate bar with sea salt.",
    category: "Food",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 250,
    inStock: true
  },
  {
    id: 124,
    title: "Raw Honey",
    price: 15.00,
    description: "Organic raw wildflower honey jar.",
    category: "Food",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 100,
    inStock: true
  },
  {
    id: 125,
    title: "Green Tea Bags",
    price: 10.00,
    description: "Box of 50 organic green tea bags.",
    category: "Food",
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 300,
    inStock: true
  },
  {
    id: 126,
    title: "Mixed Nuts Pack",
    price: 12.00,
    description: "Roasted and salted almonds, cashews, and walnuts.",
    category: "Food",
    image: "https://images.unsplash.com/photo-1536591375315-196000ea0979?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 150,
    inStock: true
  },
  {
    id: 127,
    title: "Pasta Variety Pack",
    price: 14.00,
    description: "Assorted artisanal pasta shapes.",
    category: "Food",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 90,
    inStock: true
  },
  {
    id: 128,
    title: "Hot Sauce Trio",
    price: 22.00,
    description: "Set of mild, medium, and hot artisan sauces.",
    category: "Food",
    image: "https://images.unsplash.com/photo-1529312266912-b33cf6227e2f?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 110,
    inStock: true
  },
  {
    id: 129,
    title: "Granola Bag",
    price: 9.00,
    description: "Honey almond granola with dried fruit.",
    category: "Food",
    image: "https://images.unsplash.com/photo-1517093725432-a9ac7dd6d09d?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 80,
    inStock: true
  },
  {
    id: 130,
    title: "Fruit Jam Set",
    price: 16.00,
    description: "Strawberry, blueberry, and apricot preserves.",
    category: "Food",
    image: "https://images.unsplash.com/photo-1589112702787-c6b24056289b?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 65,
    inStock: true
  },

  // ============================
  // 14. Art & Crafts (10 items)
  // ============================
  {
    id: 131,
    title: "Watercolor Paint Set",
    price: 35.00,
    description: "Professional grade watercolor pan set with brush.",
    category: "Art & Crafts",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 110,
    inStock: true
  },
  {
    id: 132,
    title: "Sketchbook",
    price: 14.99,
    description: "Hardcover sketchbook with thick acid-free paper.",
    category: "Art & Crafts",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 180,
    inStock: true
  },
  {
    id: 133,
    title: "Knitting Yarn Bundle",
    price: 22.00,
    description: "Soft Merino wool yarn in assorted colors.",
    category: "Art & Crafts",
    image: "https://images.unsplash.com/photo-1605256585681-455837661b18?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 95,
    inStock: true
  },
  {
    id: 134,
    title: "Acrylic Paint Set",
    price: 25.00,
    description: "24 colors of heavy body acrylic paints.",
    category: "Art & Crafts",
    image: "https://images.unsplash.com/photo-1501472312651-726efe1188c1?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 200,
    inStock: true
  },
  {
    id: 135,
    title: "Paint Brushes Set",
    price: 18.00,
    description: "Variety pack of brushes for oil and acrylic.",
    category: "Art & Crafts",
    image: "https://images.unsplash.com/photo-1581850106571-066cb5d911b6?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 150,
    inStock: true
  },
  {
    id: 136,
    title: "Easel Stand",
    price: 45.00,
    description: "Adjustable wooden easel for canvas painting.",
    category: "Art & Crafts",
    image: "https://images.unsplash.com/photo-1572429828552-320af633a653?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 80,
    inStock: true
  },
  {
    id: 137,
    title: "Calligraphy Pen Set",
    price: 30.00,
    description: "Fountain pen set with interchangeable nibs.",
    category: "Art & Crafts",
    image: "https://images.unsplash.com/photo-1589255734243-7b7522d7d6f5?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 60,
    inStock: true
  },
  {
    id: 138,
    title: "Colored Pencils Box",
    price: 20.00,
    description: "48 wax-based colored pencils for shading.",
    category: "Art & Crafts",
    image: "https://images.unsplash.com/photo-1518131398240-c732b2170c32?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 220,
    inStock: true
  },
  {
    id: 139,
    title: "Origami Paper Pack",
    price: 10.00,
    description: "500 sheets of colorful square origami paper.",
    category: "Art & Crafts",
    image: "https://images.unsplash.com/photo-1502479532588-e9cc50da55b7?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 90,
    inStock: true
  },
  {
    id: 140,
    title: "Sewing Kit",
    price: 15.00,
    description: "Portable sewing kit with threads and needles.",
    category: "Art & Crafts",
    image: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 130,
    inStock: true
  },

  // ============================
  // 15. Sports (5 items) & 16. Kids & Baby (5 items)
  // ============================
  {
    id: 141,
    title: "Professional Basketball",
    price: 39.99,
    description: "Indoor/Outdoor leather composite basketball.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1519861531473-92002639313a?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 310,
    inStock: true
  },
  {
    id: 142,
    title: "Non-Slip Yoga Mat",
    price: 25.00,
    description: "Eco-friendly yoga mat with alignment lines.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 200,
    inStock: true
  },
  {
    id: 143,
    title: "Adjustable Dumbbell Set",
    price: 150.00,
    description: "Space-saving adjustable weights from 5 to 50 lbs.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 120,
    inStock: false
  },
  {
    id: 144,
    title: "Performance Running Shoes",
    price: 110.00,
    description: "Lightweight sneakers designed for marathon running.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 280,
    inStock: true
  },
  {
    id: 145,
    title: "Tennis Racket",
    price: 89.99,
    description: "Graphite tennis racket for intermediate players.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1617083934555-563d1412fa24?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviewCount: 50,
    inStock: true
  },
  // Kids & Baby
  {
    id: 146,
    title: "Plush Teddy Bear",
    price: 19.99,
    description: "Ultra-soft stuffed animal safe for all ages.",
    category: "Kids & Baby",
    image: "https://images.unsplash.com/photo-1559454403-b8fb87521bc7?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 500,
    inStock: true
  },
  {
    id: 147,
    title: "Baby Stroller",
    price: 199.99,
    description: "Compact foldable stroller with sun canopy.",
    category: "Kids & Baby",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 130,
    inStock: true
  },
  {
    id: 148,
    title: "Wooden Building Blocks",
    price: 29.99,
    description: "Natural wood educational building blocks for toddlers.",
    category: "Kids & Baby",
    image: "https://images.unsplash.com/photo-1587654780291-39c940483713?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 160,
    inStock: true
  },
  {
    id: 149,
    title: "Cotton Baby Onesie",
    price: 12.99,
    description: "100% organic cotton bodysuit, hypoallergenic.",
    category: "Kids & Baby",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 210,
    inStock: true
  },
  {
    id: 150,
    title: "Baby Monitor Camera",
    price: 80.00,
    description: "Video baby monitor with night vision and two-way audio.",
    category: "Kids & Baby",
    image: "https://images.unsplash.com/photo-1519727026362-7a76057dc63d?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviewCount: 95,
    inStock: true
  }
];

module.exports = products;