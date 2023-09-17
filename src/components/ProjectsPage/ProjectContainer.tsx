import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectContainer.css";

const ProjectContainer = () => {
  return (
    <main className="project-container">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </main>
  );
};

export default ProjectContainer;
