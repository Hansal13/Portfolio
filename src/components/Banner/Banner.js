import React from "react";
import "./Banner.css";
export default function Banner() {
  return (
    <>
      <div className="Banner">
        <div className="Banner__Container">
          <div className="Banner__Content">
            <h6>Hi! Everyone</h6>
            <h1>Hansal Amrutiya</h1>
            <p>
              I am a Front-end developer based in India who loves to make fun,
              interactive things with code.
            </p>
            <a href="http://localhost:3000/" className="TransparentBtn">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
