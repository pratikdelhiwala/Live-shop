import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="border p-2 rounded">
      <img src={product.image || 'https://via.placeholder.com/150'} alt={product.name} className="w-full h-32 object-cover mb-2"/>
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p>₹{product.price}</p>
      <button className="bg-blue-500 text-white px-2 py-1 mt-2 rounded">Buy Now</button>
    </div>
  );
}

export default ProductCard;
