import React, { useState } from "react";
import "./App.css"; // CSS file import

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Patient",
    message: "",
  });

  const [reply, setReply] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://mini-healthcare-backend-hn8f.onrender.com/api/support", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});


    const data = await response.json();
    setReply(data.autoReply);
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2>Healthcare Support</h2>
        <p>Patient & Volunteer Support Portal</p>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
          </div>

          <select name="role" onChange={handleChange}>
            <option value="Patient">Patient</option>
            <option value="Volunteer">Volunteer</option>
          </select>

          <textarea
            name="message"
            placeholder="Describe your concern"
            onChange={handleChange}
            required
            rows="4"
          />

          <button type="submit">Submit Request</button>
        </form>

        {reply && (
          <div className="reply-box">
            <strong>AI Auto-Response:</strong> {reply}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
