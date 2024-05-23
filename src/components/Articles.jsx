import React from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { articles } from "../constants";
import { styles } from "../styles";

const Articles = () => {
  const ArticleCard = ({ index, title, url }) => (
    <div className="xs:w-[200px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-lg py-5 px-3  flex justify-evenly items-center flex-col cursor-pointer hover:bg-blue-950 transition-all"
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-base font-bold text-center"
          >
            {title}
          </a>
        </div>
      </motion.div>
    </div>
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Articles</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, rem. Quas,
        maxime! Voluptates asperiores pariatur accusamus!
      </motion.p>

      <div className=" flex flex-wrap gap-4 mt-20">
        {articles.map((article, index) => (
          <ArticleCard key={index} index={index} {...article} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Articles, "articles");
