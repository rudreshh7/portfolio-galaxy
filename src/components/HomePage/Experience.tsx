"use client";
import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience">
      {/* Header */}
      <div className="exp-header">
        <h1>Experience</h1>
        <p>Companies I have worked with & currently working with.</p>
      </div>
      {/* Experience List */}
      <div className="exp-list">
        <div className="exp-1">
          <h4>Founding Software Engineer</h4>
          <p>Speedybrand(YC-W23)</p>
        </div>
        <div className="exp-1">
          <h4>Founding Software Engineer</h4>
          <p>Speedybrand(YC-W23)</p>
        </div>
        <div className="exp-1">
          <h4>Founding Software Engineer</h4>
          <p>Speedybrand(YC-W23)</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
