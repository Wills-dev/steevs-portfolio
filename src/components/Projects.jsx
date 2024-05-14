import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Projects = () => {
  return (
    <div className="w-full h-full bg-slate-950 border-2 border-slate-600 p-10 flex flex-col">
      <Navbar />
      <div className="flex flex-1 justify-center flex-col"></div>
      <Footer />
    </div>
  );
};

export default Projects;
