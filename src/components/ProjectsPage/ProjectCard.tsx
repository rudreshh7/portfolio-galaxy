import React from "react";
import "./ProjectCard.css"; // You can create a separate CSS file for styling

function ProjectCard() {
  return (
    <div className="card">
      <div className="image">
        <img src="/prettyfolio.png" alt="Image Name" />
      </div>
      <div className="project-details">
        <div className="name">Prettyfolio</div>
        <div className="link">View</div>
      </div>
    </div>
  );
}

export default ProjectCard;
