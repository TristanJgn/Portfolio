import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Experience.scss";

function Experience() {
    const [skills, setSkills] = useState([]);
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const skillsQuery = '*[_type == "skills"]'; // Query all items in the skills schema
        const experiencesQuery = '*[_type == "experiences"]'; // Query all items in the experiences schema

        client.fetch(skillsQuery).then((data) => setSkills(data));
        client.fetch(experiencesQuery).then((data) => setExperiences(data));
        // eslint-disable-next-line
    }, []);

    return (
      <>
        <h2 className="experience__title">Skills & Experience</h2>
        <div className="experience-skill__container">
          <motion.div className="experience-skill__list">
            {skills.map((skill) => (
              <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="experience-skill__item"
              key={skill.name}
              >
                <div className="experience-skill__item-container">
                    <img src={urlFor(skill.icon)} alt={skill.name} className="experience-skill__icon" />
                </div>
                <p className="experience-skill__name">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </>
    );
}

export default Experience;
