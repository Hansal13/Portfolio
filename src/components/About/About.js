import React from "react";
import "./About.css";
import Heading from "../Heading/Heading";
import Hansal from "../../assets/hansal.jpg";
export default function About() {
  return (
    <>
      <div className="About" id="about">
        <div className="About__Container">
          <div className="About__ContentMain">
            <div className="About__Content">
              <Heading head="About" text="Who I Am" />
              <p>
                I am a passionate web developer with a year of experience in
                front end development. Strong creative and imagination skills.
                Team player and able to organize workflow effectively. Always
                ready to learn new technologies to improve skills. Interests in
                painting and designing from schooling helps to improve designing
                work.
              </p>
              <a href="http://localhost:3000/" className="BlackBtn">
                Download CV
              </a>
            </div>
            <div className="About__Image">
              <img src={Hansal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
