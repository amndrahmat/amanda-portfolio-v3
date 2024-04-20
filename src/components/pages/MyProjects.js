import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem.js";

export default function MyProjects() {
  return (
    <>
      {/* <h1 className='myprojects' style={{backgroundImage: `url(/images/bgcover3.jpg`}}>My Projects</h1> */}
      <div className="cards" id="cards">
        <h1
          style={{
            fontSize: "50px",
            color: "#fff",
            backgroundColor: "#242424",
            borderRadius: "20px",
            width: "50%",
            margin: "auto",
          }}
        >
          My Projects
        </h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/ORION1.png"
                text="A service platform that provides an Application Programming Interface (API) 
              such as the WhatsApp API with various capabilities to help companies connect with customers.
               The features used are broadcast messages, send messages and many more."
                label="Orion"
                path="https://orion.astra.co.id/"
                textPath="Visit the Website "
              />
              <CardItem
                src="images/belibareng1.png"
                text=" Procurement Platform presented by Astra to facilitate procurement 
              in the Astra Group so that all Astra Group without exception can 
              enjoy competitive prices from existing volume relationships throughout 
              the Astra Group (Meaning BeliBareng)."
                label="Belibareng"
                path="https://belibareng.co.id/"
                textPath="Visit the Website "
              />
              <CardItem
                src="images/seva1.png"
                text="Provides new car financing services supported by financing companies and official dealers from the Astra Group"
                label="Seva"
                path="https://www.seva.id/"
                textPath="Visit the Website "
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
