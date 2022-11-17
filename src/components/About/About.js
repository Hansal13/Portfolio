import React from "react";
import "./About.css";
import Heading from "../Heading/Heading";
import Hansal from "../../assets/hansal.jpg";
export default function About() {
  return (
    <>
      <section className="About" id="about">
        <div className="About__Container">
          <div className="About__ContentMain">
            <div className="About__Content" data-aos="zoom-in-up">
              <Heading head="About" text="Who I Am" />
              <p>
                I am a passionate web developer with a year of experience in
                front end development. Strong creative and imagination skills.
                Team player and able to organize workflow effectively. Always
                ready to learn new technologies to improve skills. Interests in
                painting and designing from schooling helps to improve designing
                work.
              </p>
              <a
                href="https://drive.google.com/file/d/18yLTmt4PBhsJn-N7GbqdadOgHgYV6NL4/view?usp=sharing"
                download
                target="_blank"
                className="BlackBtn"
              >
                Download CV
              </a>
            </div>
            <div className="About__Image">
              <img src={Hansal} data-aos="zoom-in" data-aos-duration="400" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
