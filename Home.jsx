import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then(res => setProducts(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">LiveShop</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map(p => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  );
}

export default Home;
