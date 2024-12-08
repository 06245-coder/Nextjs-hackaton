import React from 'react';
const NavBar = () => {
    return (
      <div className="flex items-center justify-between w-full px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-900">Hekto</h1>
  
        {/* Navigation Links */}
        <nav className="flex space-x-8 text-gray-800">
          <a href="#" className="text-pink-500 font-medium">
            Home<span className="text-sm ml-1">▼</span>
          </a>
          <a href="#" className="hover:text-pink-500">Pages</a>
          <a href="#" className="hover:text-pink-500">Products</a>
          <a href="#" className="hover:text-pink-500">Blog</a>
          <a href="#" className="hover:text-pink-500">Shop</a>
          <a href="#" className="hover:text-pink-500">Contact</a>
        </nav>
  
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md pl-4 pr-10 py-1 outline-none"
          />
          <button className="absolute right-0 top-0 bottom-0 bg-pink-500 text-white px-4 rounded-md">
          🔍
        </button>
      </div>
    </div>
  );
};

export default NavBar
  