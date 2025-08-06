import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    emailId: "",
    password: "",
    date: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Helper: Check if any field is empty
  const isFormValid = () => {
    return Object.values(formData).every((field) => field.trim() !== "");
  };

  const handleRegister = async () => {
    if (!isFormValid()) {
      setMessage("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/products/register", formData);
      setMessage(response.data);
      setIsLoggedIn(true);
      navigate("/dashboard");
    } catch (err) {
      setMessage("Registration failed: " + (err.response?.data || err.message));
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="number"
        name="id"
        placeholder="Id"
        value={formData.id}
        onChange={handleChange}
      />
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="emailId"
        placeholder="Email"
        value={formData.emailId}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
      />
      <button onClick={handleRegister}>Register</button>
      <p>{message}</p>
    </div>
  );
}

export default Register;
