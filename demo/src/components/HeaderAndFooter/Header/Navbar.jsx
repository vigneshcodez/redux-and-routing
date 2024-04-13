import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul style={{ display: "flex", gap: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/product">Products</Link>
    </ul>
  );
};

export default Navbar;
