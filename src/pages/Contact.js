import React, { useState } from "react";
import ChildForm from "../Component/ChildForm";
import "../App.css";

const Contact = () => {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>

      <ChildForm onSubmitData={handleFormSubmit} />

      {userData && (
        <div className="result">
          <h3>Data :</h3>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
           <p>
            <strong>Location:</strong> {userData.Location}
          </p>
        </div>
      )}
    </div>
  );
};

export default Contact;