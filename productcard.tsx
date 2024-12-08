import React from "react";

// Step 1: Define the Props Type
interface ProductCardProps {
  imageSrc: string; // URL or path to the image
  title: string;    // Product title
  price: number;    // Current price
  originalPrice: number; // Original price (struck-through)
}

// Step 2: Use the Props in the Component
const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, price, originalPrice }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-md p-4">
      <img src={imageSrc} alt={title} className="w-32 h-32 object-cover" />
      <h3 className="text-lg font-medium text-gray-800 mt-2">{title}</h3>
      <div className="flex items-center mt-2">
        <span className="text-xl font-semibold text-yellow-500">${price}</span>
        <span className="text-sm text-gray-400 line-through ml-2">${originalPrice}</span>
      </div>
    </div>
  );
};

export default ProductCard;
