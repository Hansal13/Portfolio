import React from "react";
import Heading from "../Heading/Heading";
import "./Skill.css";
import { AiFillGithub } from "react-icons/ai";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaPython,
  FaBootstrap,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
export default function Skill() {
  return (
    <>
      <section className="Skill" id="skill">
        <div className="Skill__Container">
          <div className="Skill__Head">
            <Heading text="Work" head="Skills" />
          </div>
          <div className="Skill__Content">
            <div className="Skill__Details">
              <ul>
                <li data-aos="zoom-in-up">
                  <FaHtml5 />
                  <p>Html</p>
                </li>
                <li data-aos="zoom-in-up">
                  <FaCss3 />
                  <p>Css</p>
                </li>
                <li data-aos="zoom-in-up">
                  <TbBrandJavascript />
                  <p>Javascript</p>
                </li>
                <li data-aos="zoom-in-up">
                  <FaReact />
                  <p>React</p>
                </li>
                <li data-aos="zoom-in-up">
                  <AiFillGithub />
                  <p>Git</p>
                </li>
                <li data-aos="zoom-in-up">
                  <FaPython />
                  <p>Python</p>
                </li>
                <li data-aos="zoom-in-up">
                  <FaBootstrap />
                  <p>Bootstrap</p>
                </li>
              </ul>
            </div>
            <div className="Skill__Description" data-aos="fade-up">
              <h3 className="Professional">
                <span>Professional</span> Skills
              </h3>
              <ul>
                <li>
                  Able to organize own workflow effectively and priorities
                  tasks.
                </li>
                <li>
                  Learning new technologies and keeping updated with market
                  development.
                </li>
                <li>Manage multiple projects at time.</li>
                <li>Having creativity and imagination.</li>
                <li>Adaptable and able to quickly pick up new technologies.</li>
              </ul>
            </div>
            <div className="Skill__Description" data-aos="fade-up">
              <h3 className="Personal">
                <span>Personal</span> Skills
              </h3>
              <ul>
                <li>
                  Able to organize own workflow effectively and priorities
                  tasks.
                </li>
                <li>
                  Learning new technologies and keeping updated with market
                  development.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
