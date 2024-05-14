import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link to="/" className="">
        <img
          src="/src/assets/logo-no-background.svg"
          alt="logo"
          className="w-28"
        />
      </Link>
      <ul className="flex gap-5 items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
