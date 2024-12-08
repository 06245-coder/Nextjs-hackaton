import React from "react";

// Step 1: Define the Props Type
interface ShopexOfferProps {
  icon: string;         // URL or path to the icon image
  title: string;        // Title of the offer
  description: string;  // Short description of the offer
}

// Step 2: Use the Props in the Component
const ShopexOffer: React.FC<ShopexOfferProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
      <img src={icon} alt={title} className="w-16 h-16" />
      <h4 className="text-lg font-semibold text-gray-800 mt-2">{title}</h4>
      <p className="text-sm text-gray-600 text-center mt-1">{description}</p>
    </div>
  );
};

export default ShopexOffer;

