import React from "react";
import transition from "../transition";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const welcome = "Welcome.";
  return (
    <div className="w-full h-full bg-slate-950 border-2 border-slate-600 p-10 flex flex-col">
      <Navbar />
      <div className="flex flex-1 justify-center flex-col">
        <h1 className="text-8xl text-how tracking-widest  text-">
          {welcome.split("").map((letter, index) => (
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              key={index}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <p className="md:w-[70%] w-full my-5">
          My name is Ian Dunkerley, I'm a front-end developer based in Torquay,
          Devon, UK. I have developed many types of front-ends from well know DJ
          applications to Ecommerce booking platforms.
        </p>
        <p>
          I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces
          and intuitively implemented UX.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default transition(Home);
