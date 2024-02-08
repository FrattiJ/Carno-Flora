import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product'; // Component for displaying product

const Store = () => {
  const [products, setProducts] = useState([]);
  const { storeId } = useParams(); // If storeId is is in the url

  useEffect(() => {
    // Fetch the products from the backend when the component mounts or when storeId changes
    const fetchProducts = async () => {
      try {
        // Replace with actual endpoint
        const response = await fetch(`/api/stores/${storeId}/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [storeId]);

  return (
    <div className="store">
      <h2>Store: {storeId}</h2>
      <div className="products">
        {products.length > 0 ? (
          products.map(product => <Product key={product.id} {...product} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Store;
