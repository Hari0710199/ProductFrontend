// Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ emailId: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/product/login", formData);
      setMessage(response.data);
      navigate("/dashboard"); // 🚀 Redirect after login
    } catch (err) {
      setMessage("Login failed: " + err.response.data);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <input
        type="email"
        name="emailId"
        placeholder="Email"
        value={formData.emailId}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 w-full rounded">
        Login
      </button>
      <p className="text-red-600">{message}</p>
    </div>
  );
}

export default Login;
