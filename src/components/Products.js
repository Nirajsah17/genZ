import React, { useState } from "react";
import NavBar from "./Nav";
import Footer from "./Footer";
import ProductCard from "./ProductCard";

export default function Products() {
  const [products, setProducts] = useState([
    {
      name: "Wireless Headphones",
      description:
        "Noise-cancelling over-ear wireless headphones with 30-hour battery life.",
      amount: 4.5,
      rateType: "stars",
      price: 120.99,
      thumbnail: "https://example.com/images/headphones.jpg",
    },
    {
      name: "Smartphone",
      description:
        "Latest model with 6.7-inch AMOLED display and triple camera setup.",
      amount: 4.7,
      rateType: "stars",
      price: 799.99,
      thumbnail: "https://example.com/images/smartphone.jpg",
    },
    {
      name: "Gaming Laptop",
      description: "High-performance laptop with RTX 3060 GPU and 16GB RAM.",
      amount: 4.6,
      rateType: "stars",
      price: 1499.99,
      thumbnail: "https://example.com/images/laptop.jpg",
    },
    {
      name: "Smartwatch",
      description: "Water-resistant smartwatch with health tracking and GPS.",
      amount: 4.3,
      rateType: "stars",
      price: 199.99,
      thumbnail: "https://example.com/images/smartwatch.jpg",
    },
    {
      name: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and 12-hour battery life.",
      amount: 4.4,
      rateType: "stars",
      price: 89.99,
      thumbnail: "https://example.com/images/speaker.jpg",
    },
    {
      name: "DSLR Camera",
      description:
        "Professional camera with 24.1 MP sensor and 4K video recording.",
      amount: 4.8,
      rateType: "stars",
      price: 999.99,
      thumbnail: "https://example.com/images/camera.jpg",
    },
    {
      name: "Fitness Tracker",
      description:
        "Slim fitness tracker with heart rate monitoring and sleep tracking.",
      amount: 4.2,
      rateType: "stars",
      price: 59.99,
      thumbnail: "https://example.com/images/fitness_tracker.jpg",
    },
    {
      name: "4K LED TV",
      description: "55-inch Ultra HD Smart TV with HDR and built-in apps.",
      amount: 4.7,
      rateType: "stars",
      price: 549.99,
      thumbnail: "https://example.com/images/tv.jpg",
    },
    {
      name: "Coffee Maker",
      description:
        "Automatic coffee maker with customizable brew strength and timer.",
      amount: 4.5,
      rateType: "stars",
      price: 129.99,
      thumbnail: "https://example.com/images/coffee_maker.jpg",
    },
    {
      name: "Air Purifier",
      description: "HEPA air purifier with real-time air quality monitoring.",
      amount: 4.6,
      rateType: "stars",
      price: 149.99,
      thumbnail: "https://example.com/images/air_purifier.jpg",
    },
  ]);

  return (
    
      <div className="flex-grow mt-16 p-4 bg-gray-100 dark:bg-gray-800 overflow-y-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              name={item.name}
              description={item.description}
              price={item.price}
              thumbnail={item.thumbnail}
              rating={item.amount}
              rate={item.amount}
              rateType={item.rateType}
            />
          ))}
        </div>
  );
}
