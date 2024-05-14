import React from "react";
import { socialUrl } from "../constants";

const Footer = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        {socialUrl.map((social, index) => (
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            key={index}
            className="bg-slate-600 rounded-full sm:py-2 sm:px-6 px-3 py-1 flex justify-center items-center group"
          >
            <img
              src={social.icon}
              alt="web-development"
              className="w-6 h-6 object-contain rounded-full group-hover:rotate-[360deg] transition-all duration-700 ease-in-out "
            />
          </a>
        ))}
      </div>
      <p className="text-sm">© 2024 steevs.com</p>
    </div>
  );
};

export default Footer;
