import React from "react";
import Hero from "../assets/Hero.png";
import "./Section.css"

export default function Section () {
  return (
    <div className="Section">
      <span className="contentBox">
        <h2 className ="contentH">Make the Impossible</h2>
        <p className ="lineP">
          Create and edit content like never before.Your next generation
          creative toolkit — powered by machine learning.
        </p>
        <button className="buttonTry">Try Runway for free</button>
      </span>
      <span className="imgBox">
        <img src={Hero} alt="" />
        <button>Sign up</button>
      </span>
     
    </div>
  );
}
