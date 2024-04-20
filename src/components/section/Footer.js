import React from "react";
import "../style/Footer.css";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link
          to='#'
          onClick={(e) => {
              window.location.href = mailto;
              e.preventDefault();
          }}
      >
        <i className="fa fa-envelope" />
          {label}
      </Link>
  );
};

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Me</h2>
            <ButtonMailto label=" amandarht@gmail.com" mailto="amandarht@gmail.com" />
            <Link
              to={{ pathname: "tel:+6287822834418" }}
              target="_blank"
              aria-label="phone"
            >
              {" "}
              <i className="fa fa-phone" /> +62 878-2283-4418
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link
              to={{ pathname: "https://www.instagram.com/amndrahmat/" }}
              target="_blank"
              aria-label="Instagram"
            >
              Instagram
            </Link>
            <Link
              to={{ pathname: "https://github.com/amndrahmat" }}
              target="_blank"
              aria-label="Github"
            >
              Github
            </Link>
            <Link
              to={{ pathname: "https://www.linkedin.com/in/amandarahmath/" }}
              target="_blank"
              aria-label="LinkedIn"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img
                src="images/logo.png"
                alt="logo"
                style={{ width: "140px" }}
              />
            </Link>
          </div>
          <small className="website-rights">
            Copyright ©2024 by Amanda Rahmat Hidayat
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link instagram"
              to={{ pathname: "https://www.instagram.com/amndrahmat/" }}
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link github"
              to={{ pathname: "https://github.com/amndrahmat" }}
              target="_blank"
              aria-label="Github"
            >
              <i className="fab fa-github" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to={{ pathname: "https://www.linkedin.com/in/amandarahmath/" }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
