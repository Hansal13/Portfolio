import React from "react";
import "./Quote.css";

export default function Quote() {
  return (
    <>
      <section className="Quote" id="quote">
        <div className="Quote__Container">
          <div className="Quote__Content">
            <h2 data-aos="zoom-in-up">quote of the day</h2>
            <p data-aos="fade-up">
              “Success is not final; failure is not fatal: it is the courage to
              continue that counts.”
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
