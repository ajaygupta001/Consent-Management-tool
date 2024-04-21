import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { Consent } from "./Components/Consent";
import UserForm from "./Components/UserForm";
import Nominee from "./Components/Nominee";
import ConsentForm from "./Components/ConsentForm";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/consent" element={<Consent />} /> */}
        <Route path="/user" element={<UserForm />} />
        <Route path="/nominee" element={<Nominee />} />
        <Route path="/consent" element={<ConsentForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
