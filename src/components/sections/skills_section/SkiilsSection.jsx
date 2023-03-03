import React, { forwardRef } from "react";

import "../../../resources/css/components/sections/skills_section/SkillsSection.css";
import CardContainer from "./CardContainer.jsx";

const SkillsSection = forwardRef((props, ref) => {
  return (
    <section {...props} id="skills_section" className="section-main" ref={ref}>
      <h1>Skills</h1>
      <h2>Languages</h2>
      <CardContainer category={"language"} />
      <h2>Front</h2>
      <CardContainer category={"front"} />
      <h2>Back</h2>
      <CardContainer category={"back"} />
      <h2>DevOps</h2>
      <CardContainer category={"dev_ops"} />
      <h2>Etc...</h2>
      <CardContainer category={"etc"} />
    </section>
  );
});

export default SkillsSection;
