import React from "react";
import Menu from "./Menu";
import {
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="main">
        <div className="content">
          <h1>
            Contact <span className="highlight">Me</span>
          </h1>
          <section className="contact-section">
            <div className="contact-left">
              <h2>DON'T BE SHY !</h2>
              <p>
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>

              <div className="contact-info">
                <div className="info-item">
                  <FaMapMarkedAlt className="info-icon" />
                  <div>
                    <span className="info-title">ADDRESS POINT</span>
                    <p>
                      Cool place.
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <span className="info-title">MAIL ME</span>
                    <p>cooldude@mail.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <div>
                    <span className="info-title">CALL ME</span>
                    <p>+911234567890</p>
                  </div>
                </div>
              </div>

              <div className="social-icons">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaDribbble />
                </a>
              </div>
            </div>

            <div className="contact-right">
              <form className="contact-form">
                <div className="row">
                  <input type="text" placeholder="YOUR NAME" />
                  <input type="email" placeholder="YOUR EMAIL" />
                </div>
                <input type="text" placeholder="YOUR SUBJECT" />
                <textarea placeholder="YOUR MESSAGE"></textarea>
                <button className="send-btn">
                  SEND MESSAGE{" "}
                  <span className="icon">
                    <FaPaperPlane />
                  </span>
                </button>
              </form>
            </div>
          </section>
        </div>
        <Menu />
      </div>
    </>
  );
};

export default Contact;
