import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import "./About.scss";

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]'; // Query all items in the abouts schema

    client.fetch(query)
    .then((data) => setAbouts(data))
  }, [])

  return (
    <>
      <h2 className="about__title">I know that <span className="about__title--highlight">Good Apps</span><br />means <span className="about__title--highlight">Good Business</span></h2>
      <div className="about__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="about__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} className="about__profile-image"/>
            <h2 className="about__profile-header">{about.title}</h2>
            <p className="about__profile-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;
