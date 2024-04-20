import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem.js";

export default function MySkills() {
  return (
    <>
      {/* <h1 className="achievement" style={{backgroundImage: `url(/images/bgcover2.jpg`}}>Achievement</h1> */}
      <div className="cards" id="cards">
        <h1 style={{ fontSize: "50px", color: "#242424" }}>Achievement</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/simbelmawa.png"
                text=" Has attended and funded PKM KC BELMAWA with the title “SMASH ENERGY
              (Smart Trash Bin With Solar Energy)” from Kementerian Riset dan
              Teknologi Republik Indonesia."
                label="Program Kreativitas Mahasiswa-KC"
                path="https://simbelmawa.kemdikbud.go.id/"
                textPath="More Information "
              />
              <CardItem
                src="images/proceeding_publication.png"
                text="From Industrial Research Workshop & National Seminar “Perancangan
              Dan Realisasi SMASH ENERGY (Smart Trash Bin With Solar Energy)”"
                label="Publication"
                path="https://jurnal.polban.ac.id/proceeding/article/view/1373"
                textPath="More Information "
              />
              <CardItem
                src="images/toyota_funcode.jpg"
                text="Finalist Hackathon Toyota FunCode (2019) From Toyota Indonesia with
              idea of ​​making a game application."
                label="Hackathon"
                path="https://www.toyota.astra.co.id/corporate-information/news-promo/read/para-juara-toyota-fun-code-2019"
                textPath="More Information "
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
