import React from "react";
import "./Portfolio.css";
import Heading from "../Heading/Heading";
import Bike from "../../assets/HOME.png";
import Cake from "../../assets/Cake.png";
export default function Portfolio() {
  return (
    <>
      <div className="Portfolio" id="portfolio">
        <div className="Portfolio__Container">
          <div className="Portfolio__Head">
            <Heading text="Latest Work" head="Portfolio" />
          </div>
          <div className="Portfolio__Details">
            <div className="Portfolio__Card">
              <a href="https://adobe.ly/3DiGSnY">
                <img src={Bike} alt="" />
                <p>Created Adobe XD design with prototype</p>
              </a>
            </div>
            <div className="Portfolio__Card">
              <a href="/">
                <img src={Cake} alt="" />
                <p>Created Adobe XD design with prototype</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
