import React from "react";
import Logo from "../assets/Logo.jpg";
import "./Headers.css"

export default function Header() {
  return (
    <div className="header">
      <span className="logo">
        <img src={Logo} alt="" />
      </span>
      <nav className="navbar">
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">Resources</a>
      </nav>
      <button className="login">Log in</button>
      <button className="singup">Sing up</button>
    </div>
  );
}
