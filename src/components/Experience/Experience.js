import React from "react";
import "./Experience.css";
import Heading from "../Heading/Heading";

export default function Experience() {
  return (
    <section className="Experience" is="experience">
      <div className="Experience__Container">
        <Heading head="Experience" text="Where I Work" />
        <div className="Experience__Content" data-aos="fade-up">
          <h4>TcodexTechnolab</h4>
          <p>Front End Developer</p>
          <p>Rajkot, Gujarat, India</p>
          <p>2022-Present</p>
          <p>
            <strong>Role And Responsibility </strong>
            <br />
            In this company I have served my year of experience in front end
            skill and learn a lot from company.
            <br />
            Where I have taken training and got work after that. In this work my
            role is to create and do small changes on website, changes like
            making site responsive, adding some part of sections etc..
            <br />
            Responsible for implementing visual elements that users see and
            interact with in a web application.
          </p>
        </div>
      </div>
    </section>
  );
}
