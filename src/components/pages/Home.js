import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../section/Hero";
import MySkills from "./MySkills";
import MyProjects from "./MyProjects";
import Achievement from "./Achievement";
import Certification from "./Cert-front";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <MyProjects />
      <Achievement />
      <MySkills />
      <Certification />
    </>
  );
}

export default Home;
