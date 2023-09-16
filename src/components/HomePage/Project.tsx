"use client";
import React from "react";
import "./Project.css";
function Project() {
  return (
    <div className="project">
      {/* Project Header */}
      <div className="project-header">
        <h1>Projects</h1>
        <span>some of the notable projects I have worked on.</span>
      </div>
      {/* Project Listing */}
      <div className="project-list">
        <div className="project-1">
          <img src="/images/covercraftr.webp" alt="img" />
          <p className="project-text">
            <h5>Covercrafter</h5>
            <span>Create Cover Letter using Chatgpt</span>
          </p>
        </div>

        {/* Project 2 */}
        <div className="project-1">
          <img src="/images/covercraftr.webp" alt="img" />
          <p className="project-text">
            <h5>Covercrafter</h5>
            <span>Create Cover Letter using Chatgpt</span>
          </p>
        </div>
        {/* Project 3 */}
        <div className="project-1">
          <img src="/images/covercraftr.webp" alt="img" />
          <p className="project-text">
            <h5>Covercrafter</h5>
            <span>Create Cover Letter using Chatgpt</span>
          </p>
        </div>
        {/* Project 4 */}
        <div className="project-1">
          <img src="/images/covercraftr.webp" alt="img" />
          <p className="project-text">
            <h5>Covercrafter</h5>
            <span>Create Cover Letter using Chatgpt</span>
          </p>
        </div>
      </div>
      {/* Project List Closed Props up in future */}
      <div className="morebutton">
        <button>See Other Projects</button>
      </div>
    </div>
  );
}

export default Project;
