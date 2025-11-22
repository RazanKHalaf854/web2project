import React, { useState } from "react";

const ChildForm = ({ onSubmitData }) => {
  const [formData, setFormData] = useState({ name: "", email: "" , Location:""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitData(formData);
    setFormData({ name: "", email: "", Location:"" });
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="your Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder=" your Email"
      />
      <textarea
            rows="2"
            name="Location"
            type="Location"
            placeholder="Your Location..."
            value={formData.Location}
            required onChange={handleChange}
          ></textarea>
      <button type="submit" onClick={handleSubmit}>
        Send 
      </button>
    </form>
  );
};

export default ChildForm;