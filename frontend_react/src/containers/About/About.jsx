import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./About.scss";

const abouts = [
  {
    title: "Software Engineer",
    description:
      "I have developed a toolkit of both front-end and back-end technologies which I am always growing",
    imgURL: images.about01,
  },
  {
    title: "Business Graduate",
    description:
      "My previous experience keeps me focused on driving success beyond just writing great code",
    imgURL: images.about04,
  },
  {
    title: "Determined",
    description:
      "I am always looking to challenge myself in new ways which is one thing I enjoy about software development",
    imgURL: images.about02,
  },
  {
    title: "Leader",
    description:
      "My approach to working in teams is to adapt to the needs of the group whether it be taking a leadership role or finding ways to bring out the best in others",
    imgURL: images.about03,
  },
];

function About() {
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
            <img src={about.imgURL} alt={about.title} className="about__profile-image"/>
            <h2 className="about__profile-header">{about.title}</h2>
            <p className="about__profile-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;
