import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ScrollUp } from "./components/ScrollUp";
import { useState } from "react";
import { Work } from "./components/Work";
import { Blog } from "./components/Blog";
function Duplicate() {
  const [activeNav, setActiveNav] = useState("#about");

  const handleNav = (section) => {
    setActiveNav(section);
  };
  window.addEventListener("scroll", function () {
    const contactSec = document.getElementById("contact");
    if(contactSec)
    {

    const rect = contactSec.getBoundingClientRect();
    const contactY = rect.y;
    const portfolioSec = document.getElementById("portfolio");
    const portfolioRect = portfolioSec.getBoundingClientRect();
    const portfolioY = portfolioRect.y;
    if (contactY <= 50) {
      setActiveNav("#contact");
    } else if (portfolioY <= 50) {
      setActiveNav("#portfolio");
    } else {
      setActiveNav("#about");
    }
  }
  });
  return (
    <>
      <Header activeNav={activeNav} handleNav={handleNav} isHonors={true}/>

      <main className="main">
        <Home />
        <Blog />
        <Work />
        <Contact />
      </main>
      <Footer handleNav={handleNav} />
      <ScrollUp />
    </>
  );
}

export default Duplicate;
