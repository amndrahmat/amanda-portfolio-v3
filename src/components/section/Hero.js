import React from "react";
import "../../../src/App.css";
import "../style/Hero.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Amanda Rahmat Hidayat</h1>
      <p>Fullstack Developer</p>
      <div className="hero-btns"></div>
    </div>
  );
}

export default HeroSection;
