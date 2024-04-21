import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Nominee = () => {
  const [nomineeData, setNomineeData] = useState({
    userId: "",
    name: "",
    contactDetails: "",
    relationship: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNomineeData({ ...nomineeData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:3000/api/nominees",
        nomineeData
      );
      console.log("Nominee added successfully");
      setNomineeData({
        userId: "",
        name: "",
        contactDetails: "",
        relationship: "",
        email: "",
        password: "",
      });
      console.log(result);
      navigate("/consent");
    } catch (error) {
      console.error("Error adding nominee:", error);
      setError("Failed to add nominee. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 h-60 bg-white p-3 bg-primary-subtle">
          <h2>Add Nominee</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="userId" className="form-label">
                User ID
              </label>
              <input
                type="text"
                className="form-control"
                id="userId"
                name="userId"
                value={nomineeData.userId}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={nomineeData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactDetails" className="form-label">
                Contact Details
              </label>
              <input
                type="text"
                className="form-control"
                id="contactDetails"
                name="contactDetails"
                value={nomineeData.contactDetails}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="relationship" className="form-label">
                Relationship
              </label>
              <input
                type="text"
                className="form-control"
                id="relationship"
                name="relationship"
                value={nomineeData.relationship}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={nomineeData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={nomineeData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <div className="d-flex m-2">
            <p className="m-2">ADD Consent</p>
            <Link to="/consent" className="btn btn-info ms-5">
              ADD Consent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nominee;
