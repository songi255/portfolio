import React, { useState, useEffect } from "react";

import "./ScrollIndicator.scss";

export default function ScrollIndicator() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolled = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollPosition(scrolled);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-container">
      <div
        className="scroll-indicator"
        style={{
          width: `${scrollPosition}%`,
        }}
      ></div>
    </div>
  );
}
