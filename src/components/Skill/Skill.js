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
      <div className="Skill">
        <div className="Skill__Container">
          <div className="Skill__Head">
            <Heading text="Work" head="Skills" />
          </div>
          <div className="Skill__Content">
            <div className="Skill__Details">
              <ul>
                <li>
                  <FaHtml5 />
                  <p>Html</p>
                </li>
                <li>
                  <FaCss3 />
                  <p>Css</p>
                </li>
                <li>
                  <TbBrandJavascript />
                  <p>Javascript</p>
                </li>
                <li>
                  <FaReact />
                  <p>React</p>
                </li>
                <li>
                  <AiFillGithub />
                  <p>Git</p>
                </li>
                <li>
                  <FaPython />
                  <p>Python</p>
                </li>
                <li>
                  <FaBootstrap />
                  <p>Bootstrap</p>
                </li>
              </ul>
            </div>
            <div className="Skill__Description">
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
            <div className="Skill__Description">
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
      </div>
    </>
  );
}
