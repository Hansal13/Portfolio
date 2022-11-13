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
      <header className="App__Header">
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
              <li>Portfolio</li>
              <li>Contact</li>
              <li>
                <AiFillLinkedin />
              </li>
              <li>
                <AiFillGithub />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
