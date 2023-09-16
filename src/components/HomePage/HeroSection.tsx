"use client";
import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-item hero-1">Hello I am Rudresh</div>
      <div className="hero-item hero-2">
        <p>Making Code and pixel dance in harmony</p>
      </div>
      <div className="hero-item hero-3">
        <button className="blogbutton">My Blogs</button>
        <button className="aboutmebutton">About Me</button>
      </div>
      <div className="hero-item hero-3">
        <img src="/images/Arrow_Down_LG.svg" alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
