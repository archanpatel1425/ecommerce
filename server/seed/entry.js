import productmodel from "../models/productModel.js";

const dummyProducts = [
    {
        name: "Classic Leather Jacket",
        description: "Premium quality leather jacket with a stylish design.",
        price: 199.99,
        image: [`Screenshot 2024-04-11 211851.png`, `Screenshot 2024-04-11 211851.png`],

        category: "Men",
        subcategory: "Jackets",
        sizes: ["S", "M", "L", "XL"],
        bestseller: true,
        date: Date.now(),
    },
    {
        name: "Running Shoes",
        description: "Comfortable and durable running shoes for everyday use.",
        price: 79.99,
        image: [`Screenshot 2024-04-11 211851.png`, `Screenshot 2024-04-11 211851.png`],

        category: "Men",
        subcategory: "Shoes",
        sizes: [7, 8, 9, 10, 11],
        bestseller: false,
        date: Date.now(),
    },
    {
        name: "Smartwatch Pro",
        description: "Feature-packed smartwatch with heart rate monitor and GPS.",
        price: 149.99,
        image: [`Screenshot 2024-04-11 211851.png`, `Screenshot 2024-04-11 211851.png`],

        category: "Men",
        subcategory: "Wearables",
        sizes: [],
        bestseller: true,
        date: Date.now(),
    },
    {
        name: "Gaming Keyboard",
        description: "Mechanical keyboard with RGB lighting and fast response.",
        price: 89.99,
        image: [`Screenshot 2024-04-11 211851.png`, `Screenshot 2024-04-11 211851.png`],
        category: "Men",
        subcategory: "Accessories",
        sizes: [],
        bestseller: false,
        date: Date.now(),
    },
    {
        name: "Wireless Headphones",
        description: "Noise-canceling wireless headphones with superior sound quality.",
        price: 129.99,
        image: [`Screenshot 2024-04-11 211851.png`, `Screenshot 2024-04-11 211851.png`],

        category: "Women",
        subcategory: "Audio",
        sizes: [],
        bestseller: true,
        date: Date.now(),
    },
    {
        name: "Casual Sneakers",
        description: "Lightweight and breathable sneakers for casual wear.",
        price: 59.99,
        image: [`Screenshot 2024-04-11 211851.png`, `Screenshot 2024-04-11 211851.png`],

        category: "Women",
        subcategory: "Shoes",
        sizes: [6, 7, 8, 9, 10, 11],
        bestseller: false,
        date: Date.now(),
    },
    {
        name: "Denim Jeans",
        description: "Slim fit denim jeans with stretch fabric for comfort.",
        price: 49.99,
        image: [`Screenshot 2024-04-11 211851.png`, `Screenshot 2024-04-11 211851.png`],

        category: "Women",
        subcategory: "Pants",
        sizes: ["28", "30", "32", "34", "36"],
        bestseller: true,
        date: Date.now(),
    },
    {
        name: "Digital Camera",
        description: "High-resolution digital camera with 4K recording capability.",
        price: 499.99,
        image: [`Screenshot 2024-04-11 211851.png`, `Screenshot 2024-04-11 211851.png`],

        category: "kids",
        subcategory: "Cameras",
        sizes: [],
        bestseller: false,
        date: Date.now(),
    },
    {
        name: "Winter Gloves",
        description: "Warm and comfortable gloves for cold weather protection.",
        price: 19.99,
        image: [`Screenshot 2024-04-11 211851.png`, `Screenshot 2024-04-11 211851.png`],

        category: "Kids",
        subcategory: "Accessories",
        sizes: ["S", "M", "L"],
        bestseller: false,
        date: Date.now(),
    },
    {
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with deep bass and long battery life.",
        price: 69.99,
        image: [`Screenshot 2024-04-11 211851.png`, `Screenshot 2024-04-11 211851.png`],

        category: "Kids",
        subcategory: "Audio",
        sizes: [],
        bestseller: true,
        date: Date.now(),
    },
];

// Insert into MongoDB
export const insertDummyProducts = async () => {
    try {
        await productmodel.insertMany(dummyProducts);
        console.log("Dummy products inserted successfully!");
    } catch (error) {
        console.error("Error inserting dummy products:", error);
    }
};

