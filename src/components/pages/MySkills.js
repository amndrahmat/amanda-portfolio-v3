import React from "react";
import "../../App.css";
import "../Cards.css";

export default function MySkills() {
  return (
    <>
      {/* <h1 className="myskills" style={{backgroundImage: `url(/images/bgcover1.jpg`}}>My Skills</h1> */}
      <div className="cards" id="cards" style={{ backgroundColor: "#242424" }}>
        <h1 style={{ fontSize: "50px", color: "#fff" }}>My Skills</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items_myskills">
              <img src="images/js.png" className="imgMySkills" alt="js" />
              <img
                src="images/react.png"
                className="imgMySkills"
                alt="Reactjs"
              />
              <img
                src="images/nextjs.png"
                className="imgMySkills"
                alt="Nextjs"
              />
            </ul>
            <ul className="cards__items_myskills">
              <img src="images/sass.png" className="imgMySkills" alt="sass" />
              <img src="images/sql.png" className="imgMySkills" alt="sql" />
              <img src="images/api.png" className="imgMySkills" alt="api" />
            </ul>
            <ul className="cards__items_myskills">
              <img
                src="images/webpack.png"
                className="imgMySkills"
                alt="webpack"
              />
              <img
                src="images/nodejs.png"
                className="imgMySkills"
                alt="Nodejs"
              />
              <img src="images/aws.png" className="imgMySkills" alt="aws" />
              <img
                src="images/docker.png"
                className="imgMySkills"
                alt="docker"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
