import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="">Logo</div>
      <ul className="flex gap-5 items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        ink
      </ul>
    </div>
  );
};

export default Navbar;
