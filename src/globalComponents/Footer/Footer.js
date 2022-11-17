import React from "react";
import "./Footer.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function Footer() {
  return (
    <>
      <footer className="Footer" id="footer">
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
                  <a href="#header">Home</a>
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
            <div className="Footer__InnerContent" id="contact">
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
              <a href="https://www.linkedin.com/in/hansal-patel-00635621b">
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
      </footer>
    </>
  );
}
