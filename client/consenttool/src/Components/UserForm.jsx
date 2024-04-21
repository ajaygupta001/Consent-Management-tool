// UserForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const registered = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/users", {
        name,
        email,
        phone,
        address,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 h-60 bg-white p-3 bg-primary-subtle">
        <form onSubmit={registered}>
          <h2 className=" d-flex justify-content-center">User Form</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="Enter Your Address"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Register
          </button>
        </form>
        <div className="d-flex ">
          <p>Already have a Account!</p>
          <Link to="/login" className="btn btn-info  ms-5">
            Please Login If Registration Completed!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
