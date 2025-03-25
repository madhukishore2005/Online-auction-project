import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer"; 
import Dashboard from "./Components/Dashboard"; 
import Biditem from "./Components/Biditem"; 
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* ✅ Wrap all pages inside Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Signin />} /> {/* ✅ Default page is Signin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/biditem" element={<Biditem />} />
      </Route>
    </Routes>
  </BrowserRouter>
);