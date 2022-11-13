import React from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Portfolio from "../../components/Portfolio/Portfolio";
import Quote from "../../components/Quote/Quote";
import Skill from "../../components/Skill/Skill";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Education />
      <Experience />
      <Portfolio />
      <Skill />
      <Quote />
    </>
  );
}
