import React from "react";
import "./Header.css";
import { useState } from "react";
import Menu from "../../assets/menu.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Header() {
  const [activeClass, setActiveClass] = useState(false);
  const show = () => {
    return setActiveClass(!activeClass);
  };
  return (
    <>
      <header className="App__Header" id="header">
        <div className="Header__Container">
          <div className="Header__Content">
            <a href="http://localhost:3000/">
              Hansal<span>.</span>
            </a>
            <div onClick={show}>
              <img src={Menu} alt="Header Menu" />
            </div>
          </div>
        </div>
        <div
          className={activeClass ? "active Sidebar" : "inactive Sidebar"}
          onClick={show}
        >
          <div className="Header__Links">
            <ul>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
              <li>
                <a href="#skill">skills</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hansal-patel-00635621b"
                  target="__blank"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/Hansal13" target="_blank">
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
