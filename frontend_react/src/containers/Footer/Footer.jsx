import { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

function Footer() {
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

        // Create object for that matches Sanity schema
        const contact = {
            _type: "contact",
            name: name,
            email: email,
            message: message,
        }

        // Upload data to Sanity
        client.create(contact)
        .then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
        })
    }

    return (
      <>
        <h2 className="experience__title">Contact</h2>
        <div className="footer__cards">
          <div className="footer__card">
            <img src={images.email} alt="email" className="footer__image" />
            <a
              href="mailto:tristan.jgn@gmail.com"
              className="footer__text footer__link"
            >
              tristan.jgn@gmail.com
            </a>
          </div>
          <div className="footer__card footer__card--last">
            <img
              src={images.linkedin}
              alt="linkedin"
              className="footer__image"
            />
            <a
              href="https://www.linkedin.com/in/tristanjagan/"
              className="footer__text footer__link"
            >
              LinkedIn
            </a>
          </div>
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
