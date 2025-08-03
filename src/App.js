import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  // State for form fields
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/products/')
      .then(res => setProducts(res.data))
      .catch(err => console.error('GET error:', err));
  }, []);

  const handleSubmit = () => {
    const newProduct = {
      id,
      name,
      emailId: email,
      date,
    };

    axios.post('http://localhost:8080/products/add', newProduct)
      .then(res => {
        setResponseMessage('Product added successfully!');
        setProducts([...products, newProduct]);
        setId('');
        setName('');
        setEmail('');
        setDate('');
      })
      .catch(err => {
        console.error('POST error:', err);
        setResponseMessage('Error adding product.');
      });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Product List</h2>
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} style={{ border: '1px solid gray', marginBottom: '1rem', padding: '1rem' }}>
            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Email:</strong> {product.emailId}</p>
            <p><strong>Date:</strong> {product.date}</p>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}

      <h2>Add Product</h2>
      <input
        type="text"
        value={id}
        placeholder="Enter ID"
        onChange={(e) => setId(e.target.value)}
      /><br /><br />
      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      /><br /><br />
      <input
        type="email"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      /><br /><br />
      <button onClick={handleSubmit}>Add Product</button>

      <p>{responseMessage}</p>
    </div>
  );
}

export default App;
