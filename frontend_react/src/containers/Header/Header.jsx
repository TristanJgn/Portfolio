import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Header() {
  return (
    <div className="header">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="header__info"
      >
        <div className="header__badge">
          <div className="header__badge-cmp">
            <span className="header__icon">👋</span>
            <div className="header__intro-container">
              <p className="header__intro">Hello, I am</p>
              <p className="header__name">Tristan</p>
            </div>
          </div>
          <div className="header__tag-cmp">
            <p className="header__intro header__intro--tag">Full-Stack</p>
            <p className="header__intro header__intro--tag">
              Software Engineer
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="header__image-container"
      >
        <img
          src={images.profile}
          alt="profile background"
          className="header__image"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="header__circle-overlay"
          src={images.circle}
          alt="profile background circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="header__circles"
      >
        {[images.node, images.react, images.SQL].map((circle, index) => (
          <div className="header__circle-cmp" key={`circle-${index}`}>
            <img src={circle} alt="circle" className="header__circle-image" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, "home");
