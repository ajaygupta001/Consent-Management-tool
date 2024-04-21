// UserForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/nominee");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 h-60 bg-white p-3 bg-primary-subtle">
        <form onSubmit={login}>
          <h2 className=" d-flex justify-content-center">Login User</h2>

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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-danger">
            LogIn
          </button>
        </form>
        <div className="d-flex ">
          <p>Already have a Account!</p>

          <Link to="/nominee" className="btn btn-info  ms-5">
            Nominee User Add
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
