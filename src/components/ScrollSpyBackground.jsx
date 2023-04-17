import React, { useEffect, useState } from "react";

import "./ScrollSpyBackground.scss";

export default function ScrollSpyBackground({ sections }) {
  const [activeSection, setActiveSection] = useState("About");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const targetSection = sections.find(
        ({ ref }) =>
          ref.current.offsetTop <= scrollY + 100 &&
          ref.current.offsetTop + ref.current.offsetHeight > scrollY + 100
      );
      if (targetSection && activeSection !== targetSection.name) {
        setActiveSection(targetSection.name);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [activeSection, sections]);

  return (
    <div className="spy-background">
      <h1 className="floating">{activeSection}</h1>
    </div>
  );
}
