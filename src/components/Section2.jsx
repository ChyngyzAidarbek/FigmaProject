import React from "react";
import RedGirl from "../assets/RedGirl.png";
import "./Section2.css";

export default function Section2() {
  return (
    <div className="Section2">
      <span className="content-container">
        <p>VIDEO TOOLS</p>
        <section className="text-content">
          <h2 className="Green">Introducing Green Screen</h2>
          <p className="text">
            A professional grade tool for cutting objects out of videos with
            just one click. All from inside your browser.
          </p>
          <p className="text">
            Say goodbye to clumsy plug-ins and expensive software suites.
          </p>
          
          <button className="Screen">Try Green Screen</button>
        </section>
        <span className="RedGirl">
            <img src={RedGirl} alt="" />
          </span>

          <span className="bottom">
            <span>The first tool for professional rotoscoping on the web — and also the fastest.</span>
            <span>Forget downloading plugins for decades-old software.</span>
            <span>Export full resolution 4K videos for any project.</span>
            <span>Skip the tutorial and get on with your work. It’s not that complicated.</span>
          </span>
      </span>
    </div>
  );
}
