// Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products/")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
      <h2 className="text-xl font-semibold mb-2">Product List</h2>
      <div className="space-y-2">
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map(product => (
            <div key={product.id} className="border p-2 rounded shadow">
              <h3 className="font-semibold">{product.name}</h3>
              <p>Id: {product.id}</p>
              <p>Name:{product.name}</p>
              <p>EmailId: {product.emailId}</p>
              <p>Date: {product.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
