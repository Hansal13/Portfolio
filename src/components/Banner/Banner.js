import React from "react";
import "./Banner.css";
export default function Banner() {
  return (
    <>
      <section className="Banner" id="banner">
        <div className="Banner__Container">
          <div
            className="Banner__Content"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h6>Hi! Everyone</h6>
            <h1 data-aos="fade-right">Hansal Amrutiya</h1>
            <p>
              I am a Front-end developer based in India who loves to make fun,
              interactive things with code.
            </p>
            <a href="#contact" className="TransparentBtn">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
