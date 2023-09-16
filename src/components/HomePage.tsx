"use client";
import React from "react";
import Navbar from "./HomePage/Navbar";
import HeroSection from "./HomePage/HeroSection";
import Project from "./HomePage/Project";
import Experience from "./HomePage/Experience";
import Contact from "./HomePage/Contact";
import Footer from "./HomePage/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
