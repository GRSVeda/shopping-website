const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "High-quality wireless headphones with clear sound, comfortable ear cushions, and long battery life.",
    category: "Electronics",
    rating: 4.5,
    reviews: 128,
    originalPrice: 2499,
    salePrice: 1999,
    discount: 20,
    stock: 25,
    popularity: 95,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    createdAt: "2026-09-15"
  },

  {
    id: 2,
    name: "Smart Watch",
    description:
      "Smart watch with fitness tracking, notifications, heart rate monitoring, and a stylish display.",
    category: "Electronics",
    rating: 4.3,
    reviews: 96,
    originalPrice: 2999,
    salePrice: 2499,
    discount: 17,
    stock: 18,
    popularity: 90,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    createdAt: "2026-09-10"
  },

  {
    id: 3,
    name: "Running Shoes",
    description:
      "Lightweight running shoes designed for comfort, support, and everyday workouts.",
    category: "Footwear",
    rating: 4.6,
    reviews: 214,
    originalPrice: 3999,
    salePrice: 2999,
    discount: 25,
    stock: 30,
    popularity: 98,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    createdAt: "2026-09-18"
  },

  {
    id: 4,
    name: "Classic Backpack",
    description:
      "Durable everyday backpack with multiple compartments for college, work, and travel.",
    category: "Accessories",
    rating: 4.2,
    reviews: 87,
    originalPrice: 1999,
    salePrice: 1499,
    discount: 25,
    stock: 12,
    popularity: 82,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    createdAt: "2026-08-28"
  },

  {
    id: 5,
    name: "Sunglasses",
    description:
      "Stylish sunglasses with UV protection and a lightweight frame suitable for everyday use.",
    category: "Accessories",
    rating: 4.1,
    reviews: 65,
    originalPrice: 1299,
    salePrice: 999,
    discount: 23,
    stock: 0,
    popularity: 75,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    createdAt: "2026-08-20"
  },

  {
    id: 6,
    name: "Coffee Maker",
    description:
      "Easy-to-use coffee maker for preparing fresh and delicious coffee at home.",
    category: "Home & Living",
    rating: 4.4,
    reviews: 112,
    originalPrice: 4499,
    salePrice: 3499,
    discount: 22,
    stock: 8,
    popularity: 88,
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500",
    createdAt: "2026-09-05"
  },

  {
    id: 7,
    name: "Men's Casual Shirt",
    description:
      "Comfortable casual shirt made from soft fabric, perfect for everyday wear.",
    category: "Fashion Men",
    rating: 4.2,
    reviews: 74,
    originalPrice: 1799,
    salePrice: 1299,
    discount: 28,
    stock: 20,
    popularity: 80,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
    createdAt: "2026-09-12"
  },

  {
    id: 8,
    name: "Women's Handbag",
    description:
      "Elegant handbag with spacious compartments and a stylish design for everyday use.",
    category: "Fashion Women",
    rating: 4.5,
    reviews: 91,
    originalPrice: 2499,
    salePrice: 1799,
    discount: 28,
    stock: 15,
    popularity: 89,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    createdAt: "2026-09-14"
  },

  {
    id: 9,
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with powerful sound, compact design, and long battery life.",
    category: "Electronics",
    rating: 4.7,
    reviews: 186,
    originalPrice: 2999,
    salePrice: 2199,
    discount: 27,
    stock: 22,
    popularity: 97,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    createdAt: "2026-09-19"
  },

  {
    id: 10,
    name: "LED Table Lamp",
    description:
      "Modern LED table lamp with adjustable brightness, ideal for study and workspaces.",
    category: "Home & Living",
    rating: 4.0,
    reviews: 53,
    originalPrice: 1499,
    salePrice: 999,
    discount: 33,
    stock: 10,
    popularity: 70,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    createdAt: "2026-08-15"
  },

  {
    id: 11,
    name: "Face Moisturizer",
    description:
      "Lightweight daily moisturizer designed to keep skin soft, hydrated, and refreshed.",
    category: "Beauty",
    rating: 4.3,
    reviews: 143,
    originalPrice: 899,
    salePrice: 699,
    discount: 22,
    stock: 35,
    popularity: 86,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500",
    createdAt: "2026-09-08"
  },

  {
    id: 12,
    name: "Sports Sneakers",
    description:
      "Comfortable sports sneakers with flexible soles designed for running and workouts.",
    category: "Footwear",
    rating: 4.4,
    reviews: 119,
    originalPrice: 3499,
    salePrice: 2699,
    discount: 23,
    stock: 16,
    popularity: 91,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    createdAt: "2026-09-16"
  },

  {
    id: 13,
    name: "Smartphone",
    description:
      "Modern smartphone with a high-resolution display, powerful processor, and advanced camera.",
    category: "Electronics",
    rating: 4.6,
    reviews: 325,
    originalPrice: 24999,
    salePrice: 21999,
    discount: 12,
    stock: 14,
    popularity: 100,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    createdAt: "2026-09-20"
  },

  {
    id: 14,
    name: "Travel Wallet",
    description:
      "Compact travel wallet with multiple slots for cards, cash, and travel documents.",
    category: "Accessories",
    rating: 3.9,
    reviews: 42,
    originalPrice: 999,
    salePrice: 749,
    discount: 25,
    stock: 0,
    popularity: 62,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
    createdAt: "2026-07-30"
  },

  {
    id: 15,
    name: "Decorative Plant",
    description:
      "Beautiful decorative indoor plant that adds a fresh and natural look to your home.",
    category: "Home & Living",
    rating: 4.1,
    reviews: 58,
    originalPrice: 1299,
    salePrice: 899,
    discount: 31,
    stock: 11,
    popularity: 73,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
    createdAt: "2026-08-25"
  },

  {
    id: 16,
    name: "Women's Sneakers",
    description:
      "Trendy and comfortable sneakers designed for everyday walking and casual outfits.",
    category: "Footwear",
    rating: 4.5,
    reviews: 102,
    originalPrice: 2999,
    salePrice: 2299,
    discount: 23,
    stock: 19,
    popularity: 87,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    createdAt: "2026-09-17"
  }
]

export default products