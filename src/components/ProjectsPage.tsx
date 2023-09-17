import React from "react";
import "./ProjectsPage.css";
import Navbar from "./HomePage/Navbar";
import ProjectContainer from "./ProjectsPage/ProjectContainer";
import Footer from "./HomePage/Footer";

const ProjectsPage = () => {
  return (
    <main className="projects">
      <Navbar />
      <section className="project-header">
        <h1>Projects</h1>
        <p>A list of projects i have worked on or currently working on.</p>
      </section>
      <ProjectContainer />
      <Footer />
    </main>
  );
};

export default ProjectsPage;
