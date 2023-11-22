import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h2>PerfumePedia</h2>
        <div className="footer-contact">
          <img src="img/github-mark-white.png" alt="github"></img>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} All rights reserved </p>
      </div>
    </footer>
  );
}
