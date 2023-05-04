import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

function About() {
  const [abouts, setAbouts] = useState([]);
  function arraySort(array, key) {
    return array.sort(function (a, b) {
    let firstKey = a[key];
    let secondKey = b[key];
    return firstKey < secondKey ? -1 : firstKey > secondKey ? 1 : 0;
    });
  }

  useEffect(() => {
    const query = '*[_type == "abouts"]'; // Query all items in the abouts schema

    client.fetch(query)
    .then((data) => {
        const orderedAbouts = arraySort(data, "order");
        setAbouts(orderedAbouts);
    });
  }, [])

  return (
    <>
      <h2 className="about__title">
        About <span className="about__title--highlight">Me</span>
      </h2>
      <p className="about__paragraph">
        I am a recent accounting & finance graduate turned software engineer.
        During my time at the University of Waterloo, I had great experiences in
        many different roles through my co-op program. However, as I continued
        to develop professionally, I felt there was a piece missing. Challenging
        myself and learning more everyday is what motivates me. Improving my
        skills and knowledge has always been a core driver for my endeavors. I
        knew it was time to pursue my long-standing interest in software
        development.{" "}
      </p>
      <p className="about__paragraph">
        This led me into a full-stack software engineering bootcamp with
        BrainStation. Over a fast-paced collaborative 12-week program, I was
        challenged everyday as there was no end of new concepts being
        introduced. I genuinely enjoyed the late nights and the struggles as
        they led to an incredible amount of professional and personal
        development. Being able to build solutions to problems excites me. I
        cannot wait to continue being a lifelong learner and face new and unique
        challenges every day in this new career path.
      </p>
      <div className="about__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="about__profile-item"
            key={about.title + index}
          >
            <img
              src={urlFor(about.imgUrl)}
              alt={about.title}
              className="about__profile-image"
            />
            <h2 className="about__profile-header">{about.title}</h2>
            <p className="about__profile-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
    MotionWrap(About, "app__about"),
    "about",
    "app__whitebg",
);
