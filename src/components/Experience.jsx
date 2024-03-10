import React from "react";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex-row flex">
        { experiences.map((experience, index) => (
          <div
            key={`experience-${index}`}
            className="horizontal-timeline-element bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 border border-indigo-900 rounded-lg p-4"
            style={{
              flex: "1",
              marginRight: "20px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              className="horizontal-timeline-element-icon"
              style={{ background: experience.iconBg }}
            >
              {/* You can add your icon here */}
              {/* For example: <img src={experience.iconUrl} alt={experience.title} /> */}
            </div>
            <div className="horizontal-timeline-element-content text-white">
              <h3 className="text-2xl font-bold">{experience.title}</h3>
              <p className="text-lg font-semibold">{experience.company_name}</p>
              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-gray-300 text-lg pl-1 tracking-wider text-smaller"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
