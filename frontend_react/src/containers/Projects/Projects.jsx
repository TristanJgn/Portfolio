import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub, AiOutlineVideoCamera } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Projects.scss";

function Projects() {
    const [projects, setProjects] = useState([]);

    function arraySort(array, key) {
        return array.sort(function (a, b) {
        let firstKey = a[key];
        let secondKey = b[key];
        return firstKey < secondKey ? -1 : firstKey > secondKey ? 1 : 0;
        });
    }

    useEffect(() => {
      const query = '*[_type == "projects"]'; // Query all items in the projects schema

      client.fetch(query)
      .then((data) => {
        const orderedProjects = arraySort(data, "order");
        setProjects(orderedProjects);
      });
      // eslint-disable-next-line
    }, []);

    return (
      <>
        <h2 className="projects__title">
          My Personal{" "}
          <span className="projects__title--highlight">Projects</span>
        </h2>
        <motion.div
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="projects__portfolio"
        >
          {projects.map((project, index) => (
            <div className="projects__item" key={index}>
              <div className="projects__image-container">
                <img
                  src={urlFor(project.imgUrl)}
                  alt={project.name}
                  className="projects__image"
                />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="projects__icons-container projects__hover"
                >
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="projects__link"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="projects__icon-container"
                    >
                      <AiFillEye className="projects__icon" />
                    </motion.div>
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="projects__link"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="projects__icon-container"
                    >
                      <AiFillGithub className="projects__icon" />
                    </motion.div>
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="projects__link"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="projects__icon-container"
                    >
                      <AiOutlineVideoCamera className="projects__icon" />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className="projects__content">
                <h4 className="projects__content__title">{project.title}</h4>
                <p className="projects__content__description">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </>
    );
}

export default AppWrap(
  MotionWrap(Projects, "app__projects"),
  "projects",
  "app__whitebg",
);
