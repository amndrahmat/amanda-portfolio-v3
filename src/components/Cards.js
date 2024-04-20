import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="cards" id="cards">
      <h1 style={{ fontSize: "50px", color: "#4D3E7D" }}>Who Am I ?</h1>
      <div className="about-all">
        <div className="about-card">
          {" "}
          <h3 className="title-first">Passionate full-stack developer</h3>
          <h4 className="title-second">
            with 3 years of experience building web applications.
          </h4>
          <p className="title-third">
            Success in managing development projects using Scrum, agile, and
            Lean processes. Skilled in conceptualizing, designing, developing,
            and deploying software containing logical and mathematical solutions
            to business problems. Dedicated to driving innovation with the
            ability to follow industry and technological trends, and
            facilitating early adoption of innovations.
          </p>
          <Link
            className="social-icon-link github"
            to={{
              pathname:
                "https://drive.google.com/file/d/1Z9yYIiqAS1QHolerNeIRpEB1yEbX865U/view?usp=sharing",
            }}
            target="_blank"
            aria-label="Github"
          >
            <button className="down-cv">Download CV</button>
          </Link>
        </div>
        <div className="about-card">
          {" "}
          <img
            src="images/amanda.png"
            alt="Profil Amanda"
            className="about-me__img"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
