import React from "react";
import "./Portfolio.css";
import Heading from "../Heading/Heading";

import { PortfolioData } from "../../Data/data";
export default function Portfolio() {
  return (
    <>
      <section className="Portfolio" id="portfolio">
        <div className="Portfolio__Container">
          <div className="Portfolio__Head">
            <Heading text="Latest Work" head="Portfolio" />
          </div>
          <div className="Portfolio__Details">
            {PortfolioData.reverse().map((portfolio) => (
              <div
                className="Portfolio__Card"
                index={portfolio.id}
                data-aos="zoom-in-up"
              >
                <a href={portfolio.portfolioLink} target="__blank">
                  <img src={portfolio.image} alt="Personal Portfolio Image" />
                  <p>{portfolio.portfolioDescription}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
