import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem.js";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";

export default function Certificaton() {
  return (
    <>
      {/* <h1 className="certification" style={{backgroundImage: `url(/images/bgcover4.jpg`}}>Certification</h1> */}
      <div className="cards" id="cards">
        <h1 style={{ fontSize: "50px", color: "#242424" }}>Certification</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/Menjadi Front-End Web Developer Expert.png"
                text="This class is aimed at a Front-End Web Developer who wants to develop a website that is optimal, easy to use, and sophisticated when accessed by all devices, especially smartphones. At the end of the class, students can create front-end web applications that are responsive, have good accessibility, are easy to maintain, are native, can be tested, and have good performance."
                label="Menjadi Front-End Web Developer Expert"
                path="https://dicoding.com/certificates/2VX32NJ53PYQ"
                source="by Dicoding Academy"
                textPath="More Information "
              />
              <CardItem
                src="images/PWA-cert.png"
                text="This class thoroughly discusses the components needed to implement Progressive Web Apps such as App Shell, Service Worker, Web Push, and Web Apps Manifest. Compiled and carried out by Codepolitan as our partner in developing the academy, the material presented is comprehensive and comprehensive."
                label="Membangun Progressive Web Apps"
                path="https://www.dicoding.com/certificates/72ZD284OLZYW"
                source="by Dicoding Academy"
                textPath="More Information "
              />
              <CardItem
                src="images/Architecting on AWS.png"
                text="This class is intended for individuals who want to move to a higher level in cloud computing, such as becoming an AWS Solutions Architect by referring to AWS's international competency standards. By the end of the class, students will be able to build cloud architectures on AWS by applying AWS best practices."
                label="Architecting on AWS (Membangun Arsitektur Cloud di AWS)"
                path="https://dicoding.com/certificates/RVZK4Q0YMPD5"
                source="by Dicoding Academy"
                textPath="More Information "
              />
            </ul>
          </div>
        </div>
        <h1 style={{ fontSize: "30px", color: "#242424" }}>
          <Link to="/certification">
            <button className="button-19">More Certification</button>
          </Link>
        </h1>
      </div>
    </>
  );
}
