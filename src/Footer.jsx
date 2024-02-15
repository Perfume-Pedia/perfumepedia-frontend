import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-logo">PerfumePedia</p>
        <div className="footer-contact">
          <img src="img/github-mark-white.png" alt="github"></img>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">&copy; {new Date().getFullYear()} All rights reserved </p>
      </div>
    </footer>
  );
}
