import { useRef, useState } from "react";
import { LocaleContext } from "./contexts/localeContext";

import "./App.scss";

import Navbar from "./components/Navbar";
import AboutSection from "./sections/about_section/AboutSection";
import SkillsSection from "./sections/skills_section/SkiilsSection";
import DetailsSection from "./sections/details_section/DetailsSection";
import ScrollIndicator from "./components/ScrollIndicator";
import ScrollSpyBackground from "./components/ScrollSpyBackground";

function App() {
  const [locale, setLocale] = useState("ko");

  function changeLocale() {
    let target = "default";
    if (locale === "ko") {
      target = "en";
    } else if (locale === "en") {
      target = "ko";
    } else {
      target = "ko";
    }
    setLocale(target);
  }

  const aboutSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const detailsSectionRef = useRef(null);

  const sections = [
    { name: "About", ref: aboutSectionRef },
    { name: "Skiils", ref: skillsSectionRef },
    { name: "Details", ref: detailsSectionRef },
  ];

  return (
    <div className="portfolio-app">
      <LocaleContext.Provider value={locale}>
        <header>
          <Navbar onChangeLocale={changeLocale} />
          <ScrollIndicator />
        </header>
        <main>
          <AboutSection ref={aboutSectionRef} />
          <SkillsSection ref={skillsSectionRef} />
          <DetailsSection ref={detailsSectionRef} />
          <ScrollSpyBackground sections={sections} />
        </main>
      </LocaleContext.Provider>
    </div>
  );
}

export default App;
