import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, icon }) => (
  <Tilt className="w-full xs:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", 0, 0.75)} // Index is not needed here
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionSubText}>Welcome</h2>
        <p className={styles.sectionHeadText}>Highlights.</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      Passionate about architecting user-centric, high-performance web applications, I bring expertise in a diverse set of programming languages, including 🔗 HTML5, 🎨 CSS3, ☕ JavaScript, 💼 TypeScript, 🚀 C#, 🐍 Python, and more. As a recent graduate with a Master's in Computer Science from Stevens Institute of Technology, I merge academic excellence with practical skills, specializing in robust database management, having worked with 🏺 MySQL, 🛢️ SQL Server, 🍃 MongoDB, 📜 Oracle DB, and 🐘 PostgreSQL. Additionally, my experience extends to handling systems such as 📦 NetSuite ERP, 💡 Boomi Integrations, and leveraging cloud platforms like ☁️ Amazon EC2 for hosting.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
