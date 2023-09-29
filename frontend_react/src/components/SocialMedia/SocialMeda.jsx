import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./SocialMedia.scss";

function SocialMedia() {
  return (
    <div className="social">
      <a
        href="https://www.linkedin.com/in/tristanjagan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social__item">
          <BsLinkedin className="social__icon" />
        </div>
      </a>
      <a
        href="https://github.com/TristanJgn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social__item">
          <BsGithub className="social__icon" />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
