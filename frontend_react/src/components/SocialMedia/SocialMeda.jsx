import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./SocialMedia.scss";

function SocialMedia() {
  return (
    <div className="social">
      <div className="social__item">
        <a
          href="https://www.linkedin.com/in/tristanjagan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="social__icon" />
        </a>
      </div>
      <div className="social__item">
        <a
          href="https://github.com/TristanJgn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="social__icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
