import React from "react";
import "./Footer.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="Footer__Container">
          <div className="Footer__Content">
            <div className="Footer__InnerContent">
              <h6>
                Hansal <span>.</span>
              </h6>
              <p>Front End Developer | ReactJS</p>
            </div>
            <div className="Footer__InnerContent">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#quote">Quote</a>
                </li>
              </ul>
            </div>
            <div className="Footer__InnerContent">
              <form action="mailto:hansalpatel5050@gmail.com" method="post">
                <input
                  type="email"
                  name="abc@email.com"
                  placeholder="yourmail@gmail.com"
                />
                <textarea rows="3" placeholder="Enter Message"></textarea>
                <button type="submit" className="BlackBtn">
                  Contact
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="Footer__SocialMedia">
          <ul>
            <li>
              <a href="http://localhost:3000/">
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href="http://localhost:3000/">
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
