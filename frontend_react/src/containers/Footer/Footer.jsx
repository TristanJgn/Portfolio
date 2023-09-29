import { useState } from "react";
import axios from "axios";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

function Footer() {
    const formSubmissionKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY; // Access key to send form submissions to gmail account
    const [formData, setFormData] = useState({ name: "", email: "", message: ""});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (event) => {
        const {name, value } = event.target;

        setFormData({...formData, [name]: value })
    }

    const handleSubmit = () => {
      setLoading(true);

      axios.post("https://api.web3forms.com/submit", {
      access_key: formSubmissionKey,
      subject: "New message from personal site",
      email: email,
      name: name,
      message: message,
      })
      .then((response) => {
        if (response.status === 200) {
            setLoading(false);
            setIsFormSubmitted(true);
        } else {
            setLoading(true);
            setIsFormSubmitted(false);
        }
      })
      .catch((error) => {
        setLoading(true);
        setIsFormSubmitted(false);
        console.error(error);
      })
    }

    return (
      <>
        <h2 className="experience__title">Contact</h2>
        <div className="footer__cards">
          <a
            href="mailto:tristan.jgn@gmail.com"
            className="footer__text footer__link"
          >
            <div className="footer__card">
              <img src={images.email} alt="email" className="footer__image" />
              <p className="footer__text">tristan.jgn@gmail.com</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/tristanjagan/"
            className="footer__text footer__link"
          >
            <div className="footer__card">
              <img
                src={images.linkedin}
                alt="linkedin"
                className="footer__image"
              />
              <p className="footer__text">LinkedIn</p>
            </div>
          </a>
        </div>

        {!isFormSubmitted ? (
          <form className="footer__form">
            <div className="footer__input-container">
              <input
                className="footer__text footer__input"
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className="footer__input-container">
              <input
                className="footer__text footer__input"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div className="footer__input-container">
              <textarea
                className="footer__text footer__input footer__textarea"
                placeholder="Your Message"
                name="message"
                value={message}
                onChange={handleChangeInput}
              />
            </div>
            <button
              type="button"
              className="footer__text footer__button"
              onClick={handleSubmit}
            >
              {loading ? "Sending" : "Send Message"}
            </button>
          </form>
        ) : (
          <div>
            <h3 className="footer__title">
              Thank you for getting in touch!
            </h3>
          </div>
        )}
      </>
    );
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
);
