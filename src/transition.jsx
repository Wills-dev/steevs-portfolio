import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return () => (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[80%] h-[70vh]">
        <OgComponent />
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </div>
    </div>
  );
};

export default transition;
