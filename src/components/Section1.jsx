import React from "react";
import newB from "../assets/newB.png";
import google from "../assets/google.png";
import Ibm from "../assets/Ibm.png";
import Pentagram from "../assets/Pentagram.png";
import Rga from "../assets/Rga.png";
import facebook from "../assets/facebook.png";
import "./Section1.css";

export default function Section1() {
  return (
    <div className="Section1">
      <span className="text-container">
        <p>Used by creative teams at:</p>
      </span>
      <span className="ImgBrandBox">
        <img src={newB} alt="" />
        <span>
          <img src={google} alt="" />
        </span>
        <span>
          <img src={Ibm} alt="" />
        </span>
        <span>
          <img src={Pentagram} alt="" />
        </span>
        <span>
          <img src={Rga} alt="" />
        </span>
        <img src={facebook} alt="" />
      </span>
    </div>
  );
}
