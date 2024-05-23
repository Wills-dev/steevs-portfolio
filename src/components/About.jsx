import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, name, icon }) => (
  <div className="xs:w-[200px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="p-[1px] rounded-[20px] shadow-card "
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-lg py-5 px-3  flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-10 h-10 object-contain"
        />

        <h3 className="text-white text-base font-bold text-center">{name}</h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eum magni
        omnis qui, quis id esse dolorem saepe deleniti commodi neque sequi odit
        sunt dolore aspernatur nostrum nemo adipisci repellendus? <br /> <br />{" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        perspiciatis rerum at qui illum obcaecati facere eveniet vero, earum ab.
        Error fugit vitae cupiditate ducimus iure, adipisci quod. Et natus
        dolores illum, nemo quos excepturi possimus consectetur quis placeat.
        Ducimus nam minima dicta culpa a nostrum amet fuga officiis
        voluptatibus! <br /> <br /> Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Amet eaque esse id, odit enim distinctio reiciendis
        consequatur earum eos facere repellendus numquam, autem labore! Unde!
      </motion.p>

      <motion.div variants={textVariant()}>
        <div className="mt-20"></div>
        <p className={styles.sectionSubText}>My Stacks</p>
      </motion.div>

      <div className=" flex flex-wrap gap-4">
        {technologies.map((service, index) => (
          <ServiceCard key={service.name} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
