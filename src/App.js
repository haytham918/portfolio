import "./App.css";
import { useEffect, useState } from "react";
import Header from "./layout_components/Header";
import Home from "./layout_components/Home";
import Experience from "./layout_components/Experience";
import Contact from "./layout_components/Contact";
import Footer from "./layout_components/Footer";
import { ScrollUp } from "./layout_components/ScrollUp";
import { Work } from "./layout_components/Work";

const sectionIds = ["about", "experience", "portfolio", "contact"];

function App() {
  const [activeNav, setActiveNav] = useState("#about");

  const handleNav = (section) => {
    setActiveNav(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "#about";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) {
          return;
        }

        const { top } = section.getBoundingClientRect();

        if (top <= 160) {
          currentSection = `#${id}`;
        }
      });

      setActiveNav((prev) =>
        prev === currentSection ? prev : currentSection
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header activeNav={activeNav} handleNav={handleNav} />

      <main className="main">
        <Home />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
