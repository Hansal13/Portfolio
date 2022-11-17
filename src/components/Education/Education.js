import React from "react";
import "./Education.css";
import Heading from "../Heading/Heading";
export default function Education() {
  return (
    <>
      <section className="Education" id="education">
        <div className="Education__Container">
          <div className="Education__Head">
            <Heading text="Study" head="Education" />
          </div>
          <div className="Education__Main" data-aos="fade-up">
            <div className="Education__Details">
              <h4>Bachelors In Computer Engineering</h4>
              <p>2018 - 2022</p>
              <p>V.V.P Engineering College</p>
              <p>Rajkot, Gujarat</p>
              <p>
                <strong>CGPA: </strong>8
              </p>
            </div>
            <div className="Education__Details">
              <h4>High School</h4>
              <p>2016 - 2018</p>
              <p>The School Of Science</p>
              <p>Rajkot, Gujarat</p>
              <p>
                <strong>Percentage: </strong> 82%
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
