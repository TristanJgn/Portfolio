import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {Tooltip} from "react-tooltip";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Experience.scss";

function Experience() {
    const [skills, setSkills] = useState([]);
    const [experiences, setExperiences] = useState([]);

    function arraySort(array, key) {
      return array.sort(function (a, b) {
        let firstKey = a[key];
        let secondKey = b[key];
        return firstKey < secondKey ? -1 : firstKey > secondKey ? 1 : 0;
      });
    }

    useEffect(() => {
        const skillsQuery = '*[_type == "skills"]'; // Query all items in the skills schema
        const experiencesQuery = '*[_type == "experiences"]'; // Query all items in the experiences schema

        client.fetch(skillsQuery)
        .then((data) => {
            const sortedData = arraySort(data, "rank");
            setSkills(sortedData);
        });

        client.fetch(experiencesQuery)
        .then((data) => {
            const orderedExperiences = arraySort(data, "order");
            setExperiences(orderedExperiences);
        });
        // eslint-disable-next-line
    }, []);

    return (
      <>
        <h2 className="experience__title">Skills & Experience</h2>
        <div className="experience__container">
          <motion.div className="experience-skill__list">
            {skills?.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="experience-skill__item"
                key={skill.name}
              >
                <div className="experience-skill__item-container">
                  <img
                    src={urlFor(skill.icon)}
                    alt={skill.name}
                    className="experience-skill__icon"
                  />
                </div>
                <p className="experience-skill__name">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="experience__list">
            {experiences?.map((experience) => (
              <motion.div className="experience__item" key={experiences.year}>
                <div className="experience__year-container">
                  <p className="experience__year">{experience.year}</p>
                </div>
                <motion.div className="experience__works-list">
                  {experience.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="experience__works-item"
                        data-tool
                        data-tooltip-id={work.name}
                        key={work.name}
                      >
                        <h4 className="experience__works-name">{work.name}</h4>
                        <p className="experience__works-company">{work.company}</p>
                      </motion.div>
                      <Tooltip
                        id={work.name}
                        className="experience__tooltip"
                        content={work.desc}
                      >
                      </Tooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </>
    );
}

export default AppWrap(Experience, "experience");
