import React, { forwardRef } from "react";
import { useMessage } from "../../hooks/useMessage";

import "./AboutSection.scss";

const AboutSection = forwardRef((props, ref) => {
  const msg = useMessage();

  return (
    <section {...props} id="about_section" className="section-main" ref={ref}>
      <span>
        <div className="text-content">
          <h1>{msg.about_section.greeting}</h1>
          <h2>{msg.about_section.introduce}</h2>
          <p>{msg.about_section.details[0]}</p>
          <p>{msg.about_section.details[1]}</p>
          <p>{msg.about_section.details[2]}</p>
        </div>
        <div className="cube-content">
          <div className="cube-parent">
            <div id="cube1" className="cube"></div>
            <div id="cube2" className="cube"></div>
            <div id="cube3" className="cube"></div>
            <div id="cube4" className="cube"></div>
            <div id="cube5" className="cube"></div>
            <div id="cube6" className="cube"></div>
          </div>
        </div>
      </span>
    </section>
  );
});

export default AboutSection;
