import { motion } from "framer-motion";

import { styles } from "../styles";
import { socialHandles } from "../constants";
import { fadeIn } from "../utils/motion";

const Hero = () => {
  const SocialHandle = ({ index, social }) => (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=""
      key={index}
    >
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
        className="bg-[#bf61ff] rounded-full sm:py-2 sm:px-6 px-3 py-1 flex justify-center items-center group"
      >
        <img
          src={social.icon}
          alt="web-development"
          className="w-6 h-6 object-contain rounded-full group-hover:rotate-[360deg] transition-all duration-700 ease-in-out "
        />
      </a>
    </motion.div>
  );

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 h-full w-full justify-center items-center  max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse gap-5`}
      >
        <div className="mt-20 flex flex-wrap sm:gap-10 gap-4">
          {socialHandles.map((social, index) => (
            <SocialHandle index={index} social={social} />
          ))}
        </div>
        <div className="flex flex-row justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#bf61ff]" />
          <div className="h-1 sm:w-80 w-40 violet-gradient" />
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#bf61ff]">Steevs</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 text-center`}
          >
            A DeVops Engineer , <br className="sm:block hidden" />
            Cloud Engineer and IT Enthusiast
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className="absolute bottom-10  w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
