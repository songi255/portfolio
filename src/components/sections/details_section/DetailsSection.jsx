import React, { forwardRef, Fragment } from "react";

import { useMessage } from "../../../hooks/useMessage.js";

import "../../../resources/css/components/sections/details_section/DetailsSection.css";
import ProjectCard from "./ProjectCard.jsx";

const DetailsSection = forwardRef((props, ref) => {
  const msg = useMessage();

  const certificates = msg.details_section.certificates.map((cert) => {
    return (
      <li key={cert.name}>
        <h4>{"- " + cert.name}</h4>
        <h5>{cert.publisher}</h5>
      </li>
    );
  });

  const awards = msg.details_section.awards.map((award) => {
    return (
      <li key={award.name}>
        <h4>{"- " + award.name}</h4>
        <h5>{award.publisher}</h5>
      </li>
    );
  });

  const education = msg.details_section.education.map((edu) => {
    return (
      <li key={edu.title}>
        <div className="edu-grid">
          <div className="edu-grid-left">
            <h3>{edu.period}</h3>
          </div>
          <div className="edu-grid-right">
            <h3>{edu.title}</h3>
            <p>{edu.detail}</p>
          </div>
        </div>
      </li>
    );
  });

  const projects = msg.details_section.projects.map((project) => {
    return (
      <Fragment key={project.title}>
        <ProjectCard cardData={project} />
      </Fragment>
    );
  });

  return (
    <section {...props} id="details_section" className="section-main" ref={ref}>
      <h1>Details</h1>
      <span className="main-grid">
        <div className="main-grid-left">
          <div className="certificates">
            <h2>Certificates</h2>
            <ul>{certificates}</ul>
          </div>
          <div className="awards">
            <h2>Awards</h2>
            <ul>{awards}</ul>
          </div>
        </div>
        <div className="main-grid-right">
          <div className="education">
            <h2>Educations</h2>
            <ul>{education}</ul>
          </div>
        </div>
        <div className="projects">
          <h2>Projects</h2>
          <div className="projects-container">{projects}</div>
        </div>
      </span>
    </section>
  );
});

export default DetailsSection;
