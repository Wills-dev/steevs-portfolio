import React from "react";
import transition from "../transition";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="w-full h-full bg-slate-800">
      <Navbar />
    </div>
  );
};

export default transition(Home);
